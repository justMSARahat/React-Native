// App.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Animated,
  Easing,
  Dimensions,
} from "react-native";

const CHOICES = [
  { key: "rock", label: "Rock", emoji: "✊" },
  { key: "paper", label: "Paper", emoji: "✋" },
  { key: "scissors", label: "Scissors", emoji: "✌️" },
];

// returns "win" | "lose" | "draw"
function decideResult(player, cpu) {
  if (player === cpu) return "draw";
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "paper" && cpu === "rock") ||
    (player === "scissors" && cpu === "paper")
  ) {
    return "win";
  }
  return "lose";
}

export default function App() {
  const [playerPick, setPlayerPick] = useState(null);
  const [cpuPick, setCpuPick] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, cpu: 0 });
  const [rounds, setRounds] = useState([]);

  // --- Result pop-up bar controls ---
  const [showBar, setShowBar] = useState(false);
  const slideY = useRef(new Animated.Value(200)).current; // off-screen
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current; // 0..1 loop

  const roundMessage = useMemo(() => {
    if (!result) return "Make your move!";
    if (result === "draw") return "It's a draw 🤝";
    if (result === "win") return "You win 🎉";
    return "You lose 😵";
  }, [result]);

  function play(choiceKey) {
    const cpu = CHOICES[Math.floor(Math.random() * CHOICES.length)].key;
    const outcome = decideResult(choiceKey, cpu);

    setPlayerPick(choiceKey);
    setCpuPick(cpu);
    setResult(outcome);

    setScore((s) => ({
      player: s.player + (outcome === "win" ? 1 : 0),
      cpu: s.cpu + (outcome === "lose" ? 1 : 0),
    }));

    setRounds((r) => [
      { id: String(Date.now()), player: choiceKey, cpu, outcome },
      ...r.slice(0, 9),
    ]);

    // Trigger result bar
    setShowBar(true);
  }

  function resetAll() {
    setPlayerPick(null);
    setCpuPick(null);
    setResult(null);
    setScore({ player: 0, cpu: 0 });
    setRounds([]);
    setShowBar(false);
  }

  function tryAgain() {
    // Close bar & clear only current picks/result, keep score/history
    hideBar(() => {
      setPlayerPick(null);
      setCpuPick(null);
      setResult(null);
    });
  }

  // --- Animations ---
  useEffect(() => {
    if (showBar) {
      Animated.parallel([
        Animated.timing(slideY, {
          toValue: 0,
          duration: 320,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start();

      // Emoji pulse loop (1s total)
      pulse.setValue(0);
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1,
            duration: 500,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 0,
            duration: 500,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
        ]),
        { iterations: 2 }
      ).start();
    }
  }, [showBar]);

  function hideBar(onEnd) {
    Animated.parallel([
      Animated.timing(slideY, {
        toValue: 200,
        duration: 260,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowBar(false);
      onEnd?.();
    });
  }

  const ChoiceButton = ({ item }) => (
    <Pressable
      onPress={() => play(item.key)}
      style={({ pressed }) => [
        styles.choiceBtn,
        pressed && styles.choiceBtnPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Choose ${item.label}`}
    >
      <Text style={styles.choiceEmoji}>{item.emoji}</Text>
      <Text style={styles.choiceLabel}>{item.label}</Text>
    </Pressable>
  );

  const RoundRow = ({ item }) => (
    <View style={styles.roundRow}>
      <Text style={styles.roundText}>
        You: {icon(item.player)}  vs  CPU: {icon(item.cpu)}
      </Text>
      <Text
        style={[
          styles.tag,
          item.outcome === "win"
            ? styles.tagWin
            : item.outcome === "lose"
            ? styles.tagLose
            : styles.tagDraw,
        ]}
      >
        {item.outcome.toUpperCase()}
      </Text>
    </View>
  );

  function icon(key) {
    return CHOICES.find((c) => c.key === key)?.emoji ?? "❓";
  }

  // Emoji + result styling inside bar
  const emojiByResult = result === "win" ? "🎉" : result === "lose" ? "💀" : "🤝";
  const pulseScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.15],
  });
  const pulseRotate = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "8deg"],
  });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Rock · Paper · Scissors</Text>

        {/* Scoreboard */}
        <View style={styles.scoreboard}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>You</Text>
            <Text style={styles.scoreValue}>{score.player}</Text>
          </View>
          <View style={styles.scoreDivider} />
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>CPU</Text>
            <Text style={styles.scoreValue}>{score.cpu}</Text>
          </View>
        </View>

        {/* Current round status */}
        <Text style={styles.status}>{roundMessage}</Text>

        {/* Picks */}
        <View style={styles.picksRow}>
          <View style={styles.pickCard}>
            <Text style={styles.pickTitle}>You</Text>
            <Text style={styles.pickEmoji}>
              {playerPick ? icon(playerPick) : "🫵"}
            </Text>
            <Text style={styles.pickSub}>
              {playerPick ? playerPick : "—"}
            </Text>
          </View>
          <View style={styles.pickCard}>
            <Text style={styles.pickTitle}>CPU</Text>
            <Text style={styles.pickEmoji}>
              {cpuPick ? icon(cpuPick) : "🤖"}
            </Text>
            <Text style={styles.pickSub}>{cpuPick ? cpuPick : "—"}</Text>
          </View>
        </View>

        {/* Controls */}
        <View style={styles.choicesRow}>
          {CHOICES.map((c) => (
            <ChoiceButton key={c.key} item={c} />
          ))}
        </View>

        <Pressable
          onPress={resetAll}
          style={({ pressed }) => [
            styles.resetBtn,
            pressed && styles.resetBtnPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Reset game"
        >
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>

        {/* History */}
        <Text style={styles.historyTitle}>Last 10 Rounds</Text>
        <FlatList
          data={rounds}
          keyExtractor={(item) => item.id}
          renderItem={RoundRow}
          style={styles.historyList}
          ListEmptyComponent={
            <Text style={styles.historyEmpty}>No rounds yet.</Text>
          }
        />
      </View>

      {/* --- Result Pop-up Bar (Bottom Sheet style) --- */}
      {showBar && (
        <>
          {/* Backdrop */}
          <Animated.View
            style={[
              styles.backdrop,
              { opacity: backdropOpacity },
            ]}
          >
            <Pressable style={{ flex: 1 }} onPress={() => hideBar()} />
          </Animated.View>

          {/* Sheet */}
          <Animated.View
            style={[
              styles.sheet,
              { transform: [{ translateY: slideY }] },
            ]}
          >
            <View style={styles.sheetHandle} />
            <View style={styles.sheetRow}>
              <Animated.Text
                style={[
                  styles.sheetEmoji,
                  { transform: [{ scale: pulseScale }, { rotate: pulseRotate }] },
                ]}
              >
                {emojiByResult}
              </Animated.Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.sheetTitle}>
                  {result === "win"
                    ? "You win!"
                    : result === "lose"
                    ? "You lose!"
                    : "It’s a draw!"}
                </Text>
                <Text style={styles.sheetSub}>
                  Wanna try again?
                </Text>
              </View>
            </View>

            <View style={styles.sheetActions}>
              <Pressable
                onPress={tryAgain}
                style={({ pressed }) => [
                  styles.primaryBtn,
                  pressed && styles.btnPressed,
                ]}
              >
                <Text style={styles.primaryBtnText}>Try again</Text>
              </Pressable>

              <Pressable
                onPress={() => hideBar()}
                style={({ pressed }) => [
                  styles.secondaryBtn,
                  pressed && styles.btnPressed,
                ]}
              >
                <Text style={styles.secondaryBtnText}>Close</Text>
              </Pressable>
            </View>
          </Animated.View>
        </>
      )}
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0e0f13" },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  scoreboard: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#181a21",
    padding: 14,
    borderRadius: 16,
    gap: 14,
  },
  scoreBox: { alignItems: "center", width: 90 },
  scoreLabel: { color: "#c9cbd6", fontSize: 12, marginBottom: 4 },
  scoreValue: { color: "#ffffff", fontSize: 28, fontWeight: "800" },
  scoreDivider: { width: 1, height: 40, backgroundColor: "#2a2d36" },

  status: {
    textAlign: "center",
    color: "#e5e7ef",
    fontSize: 16,
    marginTop: 2,
  },

  picksRow: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  pickCard: {
    backgroundColor: "#151821",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 16,
    alignItems: "center",
    width: 150,
  },
  pickTitle: { color: "#9aa0b4", fontSize: 12 },
  pickEmoji: { fontSize: 42, marginVertical: 8 },
  pickSub: { color: "#c7cce0", fontSize: 12 },

  choicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 4,
  },
  choiceBtn: {
    flex: 1,
    backgroundColor: "#1b1f2a",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  choiceBtnPressed: { opacity: 0.7 },
  choiceEmoji: { fontSize: 28 },
  choiceLabel: { color: "#dfe3f2", marginTop: 6, fontWeight: "600" },

  resetBtn: {
    backgroundColor: "#2b3350",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 6,
  },
  resetBtnPressed: { opacity: 0.8 },
  resetText: { color: "#e8ecff", fontWeight: "700" },

  historyTitle: {
    color: "#c9cbd6",
    marginTop: 6,
    marginBottom: 2,
    fontSize: 14,
    fontWeight: "700",
  },
  historyList: { flexGrow: 0, maxHeight: 260 },
  historyEmpty: { color: "#7d8296", textAlign: "center", marginTop: 10 },

  roundRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#121520",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: "center",
  },
  roundText: { color: "#e1e6ff" },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    overflow: "hidden",
    fontWeight: "800",
  },
  tagWin: { backgroundColor: "#143d20", color: "#9af6c1" },
  tagLose: { backgroundColor: "#3d1414", color: "#ffb3b3" },
  tagDraw: { backgroundColor: "#2b2f3d", color: "#d1d7ff" },

  // --- Result bar styles ---
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 18,
    backgroundColor: "#111521",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -2 },
    elevation: 16,
  },
  sheetHandle: {
    alignSelf: "center",
    width: Math.min(width * 0.2, 60),
    height: 4,
    borderRadius: 999,
    backgroundColor: "#2a3041",
    marginBottom: 12,
  },
  sheetRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  sheetEmoji: { fontSize: 34 },
  sheetTitle: {
    color: "#e9edff",
    fontSize: 18,
    fontWeight: "800",
  },
  sheetSub: {
    color: "#b8c0df",
    marginTop: 2,
  },
  sheetActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#3d5cff",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryBtnText: { color: "#ffffff", fontWeight: "800" },
  secondaryBtn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: "#262c41",
    alignItems: "center",
  },
  secondaryBtnText: { color: "#d6dbf5", fontWeight: "700" },
  btnPressed: { opacity: 0.85 },
});
