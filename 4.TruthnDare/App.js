// App.js
import React, { useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TextInput,
  Animated,
  Easing,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,                // <-- for light status bar icons
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

/** Replace with your full 500 TRUTH and DARE arrays */
    export const TRUTH_BANK = [
  "What’s a habit you’re trying to break?",
  "When did you last cry and why?",
  "What’s your most irrational fear?",
  "What’s a white lie you tell often?",
  "Who was your first crush?",
  "What’s the funniest family memory you have?",
  "Have you ever cheated on a test?",
  "What’s the weirdest food you’ve ever tried?",
  "Have you ever been caught daydreaming in class?",
  "What’s the most embarrassing thing that happened at school?",
  "What’s the worst gift you’ve ever received?",
  "Who in this group do you trust the most?",
  "What’s your dream travel destination?",
  "Have you ever broken a promise?",
  "What’s your guilty pleasure snack?",
  "What’s the most childish thing you still do?",
  "Have you ever stolen food?",
  "What’s the silliest reason you fought with a friend?",
  "Who here do you secretly admire?",
  "What’s your go-to excuse when you’re late?",
  "Have you ever pretended to be sick to skip school?",
  "What’s your biggest turn-on?",
  "What’s your biggest turn-off?",
  "What’s the strangest dream you’ve had?",
  "Who here would you kiss right now if you had to?",
  "Have you ever had a crush on a teacher?",
  "Have you ever lied to your parents about where you were going?",
  "What’s your weirdest hobby?",
  "Have you ever sent a text you regretted instantly?",
  "What’s your most used emoji?",
  "What’s a secret talent you have?",
  "Have you ever been stood up on a date?",
  "What’s the naughtiest thing you’ve done in school?",
  "Who in this group do you think has the best smile?",
  "Have you ever been jealous of a friend?",
  "What’s your favorite childhood memory?",
  "What’s a lie you told your best friend?",
  "Have you ever kissed more than one person in a day?",
  "What’s the most daring outfit you’ve worn?",
  "What’s the most romantic thing you’ve done?",
  "Have you ever danced alone in your room like crazy?",
  "Have you ever been caught singing in the shower?",
  "What’s the strangest thing you’re afraid of?",
  "Who was your first celebrity crush?",
  "What’s your worst first date story?",
  "Have you ever lied in a job interview?",
  "What’s your most embarrassing nickname?",
  "Have you ever forgotten someone’s name immediately after meeting?",
  "What’s your favorite guilty pleasure movie?",
  "What’s your biggest regret?",
  "Have you ever sent a flirty text to the wrong person?",
  "What’s your idea of a perfect kiss?",
  "Who here do you think is secretly a flirt?",
  "Have you ever been caught checking someone out?",
  "What’s your worst purchase ever?",
  "What’s your favorite midnight snack?",
  "Have you ever been heartbroken?",
  "What’s the most awkward hug story you have?",
  "What’s the craziest rumor you’ve heard about yourself?",
  "Who here do you think would be the best kisser?",
  "Have you ever lied to impress someone you liked?",
  "What’s the funniest autocorrect fail you’ve had?",
  "What’s your weirdest talent?",
  "Have you ever said 'I love you' and not meant it?",
  "Have you ever spied on someone?",
  "What’s the most embarrassing text you’ve sent?",
  "Have you ever been caught sneaking out?",
  "What’s your most embarrassing love confession?",
  "What’s your go-to flirting move?",
  "Have you ever been rejected badly?",
  "What’s your dream date night?",
  "Have you ever kissed someone of the same sex?",
  "What’s your longest crush?",
  "What’s your shortest crush?",
  "Have you ever practiced kissing on your hand?",
  "What’s the weirdest compliment you’ve ever received?",
  "Have you ever ghosted someone?",
  "What’s the most romantic song that reminds you of someone?",
  "What’s the boldest thing you’ve done for love?",
  "Have you ever admired someone from afar?",
  "What’s the sweetest nickname you’ve had?",
  "Have you ever been serenaded?",
  "Have you ever serenaded someone?",
  "What’s your guilty pleasure song?",
  "What’s your favorite body part on the opposite sex?",
  "What’s your dream honeymoon spot?",
  "What’s the most daring compliment you’ve given?",
  "What’s your weirdest food combo?",
  "Have you ever embarrassed yourself in front of a crush?",
  "What’s the funniest thing you’ve done to impress someone?",
  "Who here do you think is the most romantic?",
  "What’s the most embarrassing time you tripped in public?",
  "What’s the weirdest superstition you believe?",
  "Have you ever told a secret you promised not to?",
  "What’s your favorite type of hug?",
  "What’s your most unforgettable kiss?",
  "What’s the most awkward silence you’ve been in?",
  "Who in this group do you think has the best laugh?",
  "What’s your biggest insecurity?",
  "What’s your weirdest dream about someone you know?",
  "What’s the most daring DM you’ve sent?",
  "What’s your favorite romantic movie scene?",
      "Have you ever had a crush on a friend’s boyfriend or girlfriend?",
  "What’s the most romantic thing you’ve done for someone?",
  "Have you ever kissed someone you shouldn’t have?",
  "What’s your wildest dream about someone in this room?",
  "Who here do you secretly find attractive?",
  "Have you ever lied to get someone’s attention?",
  "What’s your most awkward date story?",
  "What’s the most daring outfit you’ve worn?",
  "Have you ever been caught checking someone out?",
  "What’s your biggest turn-on in a person?",
  "What’s your biggest turn-off in a person?",
  "Have you ever flirted with a stranger?",
  "Have you ever sent a flirty text to the wrong person?",
  "What’s the naughtiest thing you’ve ever done at school or work?",
  "Have you ever snuck out to see someone?",
  "Who was your best kiss?",
  "Have you ever had a secret romance?",
  "What’s your guilty pleasure when it comes to attraction?",
  "Who would you date in this group if you had to choose?",
  "Have you ever gone skinny dipping?",
  "Have you ever been caught making out?",
  "Have you ever been on a blind date?",
  "Have you ever kissed more than one person in a day?",
  "What’s the wildest place you’ve kissed someone?",
  "Do you enjoy PDA (public displays of affection)?",
  "What’s the craziest dream you’ve had about someone you like?",
  "Have you ever used cheesy pick-up lines?",
  "Have you ever gotten jealous seeing your crush with someone else?",
  "Have you ever sent someone a flirty selfie?",
  "What’s the longest you’ve gone without showering before a date?",
  "Have you ever been rejected?",
  "Have you ever faked liking someone’s gift?",
  "What’s your most embarrassing romantic fail?",
  "Have you ever stalked someone’s social media crush-style?",
  "What’s your favorite feature on someone you like?",
  "Have you ever said 'I love you' and not meant it?",
  "Who here would you trust with your deepest secret?",
  "What’s your worst first date experience?",
  "What’s your biggest secret crush?",
  "Have you ever lied about being single?",
  "Have you ever been stood up on a date?",
  "What’s the most daring thing you’ve done with someone you like?",
  "What’s the best compliment you’ve received about your looks?",
  "Have you ever danced with someone and felt sparks?",
  "What’s the strangest thing that turns you on?",
  "Have you ever kissed someone as a dare?",
  "Who in this group would you kiss right now if you had to?",
  "What’s the most romantic text you’ve ever sent?",
  "What’s the most romantic text you’ve ever received?",
  "Have you ever been caught sneaking a kiss?",
  "Have you ever crushed on a teacher or boss?",
  "What’s the longest you’ve kept a crush secret?",
  "What’s the most embarrassing thing you’ve done in front of a crush?",
  "Have you ever kissed someone younger than you?",
  "Have you ever kissed someone older than you?",
  "What’s your most unforgettable kiss?",
  "What’s your favorite kind of hug?",
  "Have you ever fallen in love at first sight?",
  "What’s the most daring DM you’ve sent?",
  "Have you ever sent a kiss emoji to the wrong person?",
  "Have you ever had a dream about someone here?",
  "What’s the most romantic song that reminds you of someone?",
  "What’s the shortest crush you’ve ever had?",
  "What’s the longest crush you’ve ever had?",
  "Have you ever kissed someone of the same sex?",
  "Who here do you think has the best smile?",
  "Who here do you think gives the best hugs?",
  "What’s your idea of a perfect kiss?",
  "What’s your most embarrassing love confession?",
  "Have you ever written someone a love letter?",
  "Have you ever practiced kissing on your hand?",
  "What’s the silliest thing you’ve done to impress a crush?",
  "Have you ever stolen a glance at someone changing?",
  "What’s your dream date night?",
  "Who here would you go on a romantic vacation with?",
  "What’s the most daring outfit you’d wear on a date?",
  "What’s your go-to flirting move?",
  "Have you ever had a crush on a friend’s sibling?",
  "Have you ever lied to your parents about who you were seeing?",
  "What’s your most awkward hug story?",
  "Have you ever pretended to like someone just to be polite?",
  "What’s the most romantic movie scene you wish would happen to you?",
  "Who here do you think is the best kisser?",
  "What’s the most daring compliment you’ve given?",
  "Have you ever had a secret admirer?",
  "Have you ever admired someone from afar?",
  "What’s your go-to excuse when you want to leave a boring date?",
  "Have you ever crushed on two people at once?",
  "What’s the weirdest compliment you’ve received?",
  "What’s the sweetest nickname you’ve had?",
  "Have you ever been serenaded?",
  "Have you ever serenaded someone?",
  "What’s your dream honeymoon spot?",
  "What’s your favorite type of kiss?",
  "Have you ever faked confidence to impress someone?",
  "Have you ever winked at a stranger?",
  "Have you ever had a crush on someone much older than you?",
  "Have you ever had a crush on someone much younger than you?",
  "What’s your cheesiest crush story?",
  "Have you ever written your crush’s name everywhere?",
  "What’s the boldest thing you’ve done for love?",
  "Who here do you think is secretly a flirt?",
    "What’s your guilty pleasure song?",
  "Which movie made you cry the hardest?",
  "Have you ever binge-watched an entire season in one night?",
  "Do you sing in the shower?",
  "What’s your weirdest hidden talent?",
  "Which video game have you played the most?",
  "What’s your favorite book?",
  "Have you ever pretended to like a song just to fit in?",
  "Which movie have you watched more than 5 times?",
  "Do you dance when no one is watching?",
  "What’s the strangest food combo you’ve tried and liked?",
  "Have you ever eaten food off the floor?",
  "What’s the most you’ve eaten in one sitting?",
  "Do you like pineapple on pizza?",
  "Have you ever lied about liking a dish?",
  "What food can you not live without?",
  "What’s your favorite midnight snack?",
  "Have you ever stolen someone else’s food?",
  "What’s the strangest thing you’ve ever tasted?",
  "Do you secretly eat fast food when you said you wouldn’t?",
  "What’s the most embarrassing outfit you’ve ever worn?",
  "Have you ever worn pajamas to school or work?",
  "What’s your biggest fashion fail?",
  "What’s your weirdest shopping habit?",
  "Do you ever talk to yourself in the mirror?",
  "Have you ever accidentally worn mismatched socks or shoes?",
  "What’s the most embarrassing hairstyle you’ve had?",
  "Have you ever tried a ridiculous trend just because others did?",
  "What’s your weirdest morning routine habit?",
  "Have you ever gone out without brushing your teeth?",
  "What’s your longest streak without showering?",
  "Have you ever forgotten deodorant on a hot day?",
  "What’s the weirdest thing you’ve ever collected?",
  "Have you ever pretended to know a song you didn’t?",
  "Have you ever fallen asleep while talking to someone?",
  "What’s the longest you’ve gone without sleep?",
  "Have you ever snored so loud you woke yourself?",
  "What’s the weirdest dream you remember?",
  "Have you ever walked or talked in your sleep?",
  "What’s the funniest nightmare you’ve had?",
  "What’s the weirdest app on your phone?",
  "What’s your screen time per day?",
  "Have you ever checked your ex’s profile secretly?",
  "Have you ever deleted a post because it had no likes?",
  "What’s the cringiest photo you’ve ever posted?",
  "Have you ever faked being offline to avoid someone?",
  "Have you ever blocked someone out of jealousy?",
  "Who’s the last person you stalked on social media?",
  "What’s the longest streak you’ve had on Snapchat?",
  "Have you ever posted something just to make someone jealous?",
  "What’s your most embarrassing TikTok or reel?",
  "What’s the last lie you told on social media?",
  "Have you ever lied about your age online?",
  "What’s the weirdest DM you’ve ever received?",
  "Have you ever flirted in comments?",
  "What’s the most embarrassing username you’ve had?",
  "Have you ever been left on read?",
  "What’s your most embarrassing autocorrect mistake?",
  "Have you ever accidentally liked an old post while stalking?",
  "What’s your most used emoji?",
  "Have you ever lied in a game of Truth or Dare?",
  "Have you ever chickened out of a dare?",
  "What’s the silliest lie you’ve ever told?",
  "Have you ever stolen something small?",
  "What’s the worst lie you’ve told a teacher?",
  "Have you ever faked a signature?",
  "What’s the funniest prank you’ve pulled?",
  "Have you ever broken something and blamed someone else?",
  "Have you ever gotten away with something you should have been punished for?",
  "What’s your most embarrassing classroom moment?",
  "Have you ever been caught cheating in school?",
  "What’s your funniest excuse for not doing homework?",
  "What’s the weirdest excuse you’ve used to get out of trouble?",
  "Have you ever gotten detention?",
  "What’s your funniest moment on a school trip?",
  "What’s the longest time you’ve gone without doing homework?",
  "What’s the naughtiest thing you did at school?",
  "What’s your most embarrassing nickname?",
  "What’s the silliest childhood fear you had?",
  "Have you ever believed in Santa for too long?",
  "What’s your funniest birthday memory?",
  "What’s the weirdest childhood game you played?",
  "Have you ever eaten glue or paper as a kid?",
  "What’s the funniest thing you believed as a child?",
  "What’s the weirdest toy you owned?",
  "Have you ever cried over a cartoon?",
  "What’s your most embarrassing school photo?",
  "What’s your silliest playground memory?",
  "What’s the weirdest thing you’ve done on a dare?",
  "Have you ever kissed someone just because of peer pressure?",
  "What’s the funniest crush story you have?",
  "Have you ever had a crush on a cartoon character?",
  "What’s your cheesiest crush moment?",
  "Have you ever had a crush on a sibling’s friend?",
  "Have you ever doodled your crush’s name everywhere?",
  "What’s the most awkward way someone found out you liked them?",
  "What’s the most romantic thing someone has done for you?",
  "What’s the boldest romantic move you’ve made?",
  "What’s your weirdest turn-on?",
  "What’s your weirdest turn-off?",
  "What’s the funniest pet name you’ve used?",
  "Have you ever written poetry for a crush?",
  "Have you ever sent a love letter?",
  "What’s the most awkward message you’ve ever sent?",
  "What’s the most embarrassing text you’ve ever sent?",
  "Have you ever walked into the wrong bathroom?",
  "What’s your most awkward date story?",
  "Have you ever tripped in public?",
  "What’s your funniest autocorrect fail?",
  "Did you ever wear mismatched shoes outside?",
  "Have you ever laughed at the wrong moment?",
  "Did you ever fart loudly in class?",
  "What’s your most embarrassing nickname?",
  "Have you ever been caught talking to yourself?",
  "What’s your most embarrassing fashion choice?",
  "Have you ever had food stuck in your teeth during a date?",
  "Have you ever forgotten someone’s birthday?",
  "What’s the most embarrassing lie you’ve told?",
  "Have you ever pretended to know someone you didn’t?",
  "Have you ever called a teacher 'mom' or 'dad'?",
  "Have you ever spilled a drink on yourself in public?",
  "What’s your most awkward handshake or hug moment?",
  "Have you ever accidentally hit 'reply all'?",
  "What’s the weirdest dream you’ve had about a friend?",
  "Have you ever laughed so hard you peed?",
  "What’s the silliest thing you’ve ever cried over?",
  "Have you ever had a crush on a cartoon character?",
  "Have you ever walked into a glass door?",
  "What’s the weirdest thing you’ve eaten on a dare?",
  "Have you ever had toilet paper stuck to your shoe?",
  "What’s your most embarrassing singing moment?",
  "Have you ever been caught dancing alone?",
  "What’s your most embarrassing phone call?",
  "Have you ever sent a message to the wrong person?",
  "Have you ever been caught napping in class?",
  "What’s your funniest sneeze story?",
  "Have you ever screamed at a bug?",
  "What’s the weirdest noise you can make?",
  "Have you ever mistaken a stranger for someone you know?",
  "What’s the funniest thing you’ve said in your sleep?",
  "Have you ever snorted while laughing?",
  "What’s the weirdest thing you’ve done in front of a mirror?",
  "Have you ever spilled food on someone else?",
  "What’s the silliest dare you’ve ever accepted?",
  "Have you ever eaten something past the expiration date?",
  "What’s the most embarrassing selfie you’ve taken?",
  "Have you ever made a weird face in a serious situation?",
  "What’s your most embarrassing pet story?",
  "Have you ever screamed during a scary movie?",
  "What’s the worst thing you’ve ever cooked?",
  "Have you ever been caught picking your nose?",
  "What’s the most embarrassing thing in your search history?",
  "What’s your strangest superstition?",
  "Have you ever forgotten your lines in a play or presentation?",
  "What’s the weirdest thing you’ve worn to bed?",
  "Have you ever fallen asleep in public?",
  "What’s the clumsiest thing you’ve done?",
  "Have you ever fallen up the stairs?",
  "What’s the weirdest dream you’ve had about someone in this group?",
  "Have you ever walked around with something stuck to your clothes?",
  "What’s the weirdest nickname you’ve been given?",
  "Have you ever had spinach stuck in your teeth all day?",
  "What’s your most embarrassing sports moment?",
  "Have you ever forgotten someone’s name right after asking?",
  "What’s your most embarrassing childhood memory?",
  "What’s your weirdest bathroom story?",
  "Have you ever fallen asleep while eating?",
  "What’s the weirdest smell you like?",
  "Have you ever talked to your pet like a person?",
  "What’s the weirdest noise your body has made?",
  "Have you ever gotten gum stuck in your hair?",
  "What’s the funniest prank someone has played on you?",
  "Have you ever walked with toilet paper stuck to you?",
  "What’s your weirdest fear?",
  "Have you ever mistaken salt for sugar?",
  "What’s the most embarrassing ringtone you’ve had?",
  "Have you ever had food spilled all over you?",
  "What’s your silliest bathroom accident?",
  "Have you ever said 'you too' at the wrong time?",
  "What’s your weirdest laugh?",
  "Have you ever waved back at someone who wasn’t waving at you?",
  "What’s your funniest social media fail?",
  "Have you ever worn clothes inside out all day?",
  "What’s your weirdest teacher memory?",
  "Have you ever gotten locked out of your house?",
  "What’s the strangest rumor you’ve heard about yourself?",
  "Have you ever walked into something while texting?",
  "What’s your funniest excuse for being late?",
  "Have you ever fallen asleep on the bus and missed your stop?",
  "What’s your weirdest crush?",
  "Have you ever crushed on a friend’s sibling?",
  "What’s your most embarrassing family story?",
  "Have you ever mistaken shampoo for conditioner?",
  "What’s your funniest cooking disaster?",
  "Have you ever slipped on a banana peel?",
  "What’s the weirdest thing you’ve ever Googled?",
  "Have you ever believed in a silly myth?",
  "What’s your funniest school story?",
  "Have you ever tripped while running in public?",
  "What’s your weirdest dream ever?",
  "Have you ever said the wrong word in class?",
  "What’s your funniest bus or train story?",
  "Have you ever worn two different shoes by accident?",
  "What’s your weirdest experience at a store?",
  "What country do you want to visit most?",
  "Have you ever been on a plane?",
  "Do you get scared during turbulence?",
  "What’s your dream vacation?",
  "Have you ever gotten lost on a trip?",
  "Do you prefer mountains or beaches?",
  "What’s the longest trip you’ve taken?",
  "Have you ever missed a flight or train?",
  "What’s your favorite city?",
  "Have you ever camped overnight outdoors?",
  "What’s your funniest travel story?",
  "Have you ever packed something really silly?",
  "What’s the strangest food you’ve tried while traveling?",
  "Have you ever gotten sunburned badly?",
  "What’s the worst hotel you’ve stayed in?",
  "Have you ever lost your luggage?",
  "What’s your dream honeymoon destination?",
  "Have you ever been seasick?",
  "What’s your favorite memory from a trip?",
  "Have you ever met someone famous while traveling?",
  "What’s the hardest decision you’ve ever made?",
  "What do you think people misunderstand about you?",
  "What’s a secret goal you’re working on?",
  "Do you believe in fate?",
  "What’s your proudest moment so far?",
  "What’s the meanest thing you’ve done?",
  "What’s your biggest insecurity?",
  "Have you ever lied to protect someone?",
  "Do you think money can buy happiness?",
  "What’s your idea of true love?",
  "What’s a mistake you’ve learned the most from?",
  "Have you ever been betrayed by a friend?",
  "What’s your darkest fear?",
  "What’s something you’ve never told anyone?",
  "What’s your happiest memory?",
  "Have you ever kept a big secret from your family?",
  "What’s your most awkward crush?",
  "What’s a habit you wish you could quit?",
  "What’s your biggest regret in love?",
  "What’s your dream job?",
  "Have you ever lied on your resume?",
  "What’s the most money you’ve wasted?",
  "What’s your weirdest dream for the future?",
  "What motivates you the most?",
  "Have you ever been scared of failing?",
  "What’s your most embarrassing work story?",
  "What’s the bravest thing you’ve done?",
  "What’s the hardest truth you’ve faced?",
  "What’s your wildest dream?",
  "What’s something you’re most grateful for?",
  "What’s your biggest fear about the future?",
  "What’s a secret talent you’re hiding?",
  "What’s a question you hate being asked?",
  "What’s your most embarrassing social media post?",
  "Have you ever lied about your relationship status?",
  "What’s your funniest childhood misunderstanding?",
  "What’s the worst date you’ve ever had?",
  "What’s the strangest thing in your room?",
  "What’s your most awkward classroom story?",
  "What’s a silly thing you believed as a kid?",
  "What’s the weirdest superstition you follow?",
  "What’s your funniest sleepover story?",
  "What’s a food you can’t resist?",
  "What’s your most embarrassing singing story?",
  "What’s your most awkward sports moment?",
  "What’s your funniest prank gone wrong?",
  "What’s your strangest morning routine habit?",
  "What’s the silliest fight you’ve had with a friend?",
  "What’s your weirdest fear?",
  "What’s the most awkward silence you’ve experienced?",
  "What’s your most awkward text conversation?",
  "What’s your most embarrassing pet story?",
  "What’s your weirdest bathroom story?",
  "What’s the silliest rumor you’ve believed?",
  "What’s your most embarrassing nickname?",
  "What’s your weirdest childhood game?",
  "What’s the strangest thing you’ve done for attention?",
  "What’s the most awkward compliment you’ve received?",
  "What’s your most embarrassing shopping trip?",
  "What’s the weirdest lie you’ve told?",
  "What’s the silliest dare you’ve ever completed?",
  "What’s your strangest memory with a teacher?",
  "What’s your most awkward bus or train story?",
  "What’s your funniest mistake in public?",
  "What’s the weirdest noise you’ve made in class?",
  "What’s the silliest dream you’ve had?",
  "What’s your most embarrassing sleep story?",
  "What’s the strangest thing you’ve googled?",
  "What’s your most awkward hug story?",
  "What’s the weirdest rumor you’ve heard about yourself?",
  "What’s your most embarrassing exam story?",
  "What’s your funniest mistake while cooking?",
  "What’s the weirdest thing in your bag right now?",
  "What’s your funniest fall or slip story?",
  "What’s your most embarrassing story about school?",
  "What’s the strangest food you secretly like?",
  "What’s your weirdest thought during class?",
  "What’s your most embarrassing holiday memory?",
  "What’s your funniest moment in a game?",
  "What’s your most awkward laugh?",
  "What’s the weirdest excuse you’ve used?",
  "What’s the silliest secret you’ve kept?",
  "What’s your funniest moment in a mall?",
  "What’s your most embarrassing sports fail?",
  "What’s the weirdest compliment you’ve ever given?",
  "What’s the most awkward family photo story?",
  "What’s your weirdest online shopping fail?",
  "What’s your most awkward Zoom or video call moment?",
  "What’s your strangest fear as a kid?",
  "What’s the weirdest thing you’ve done when alone?",
  "What’s the funniest lie you’ve told a sibling?",
  "What’s your most embarrassing crush confession?",
];

export const DARE_BANK = [
  "Do 10 push-ups right now.",
  "Speak in a movie trailer voice for the next minute.",
  "Balance a book on your head for 30 seconds.",
  "Do your best celebrity impression.",
  "Do a dramatic slow-motion walk across the room.",
  "Sing everything you say for the next 2 minutes.",
  "Talk in an accent until your next turn.",
  "Do your best chicken dance.",
  "Pretend you are a waiter and take snack orders from everyone.",
  "Do 20 squats.",
  "Imitate your favorite teacher for 1 minute.",
  "Spin around 5 times and try to walk straight.",
  "Talk without moving your lips for 2 minutes.",
  "Pretend to be a cat until your next turn.",
  "Do a silly face until someone laughs.",
  "Say the alphabet backwards as fast as you can.",
  "Walk like a runway model across the room.",
  "Do 10 jumping jacks in slow motion.",
  "Make a funny TikTok dance (without recording).",
  "Act like a robot for 1 minute.",
  "Do a plank for 30 seconds.",
  "Sing a lullaby dramatically.",
  "Act like your mom/dad for 2 minutes.",
  "Speak in rhymes for the next 3 turns.",
  "Pretend to take a really important phone call.",
  "Do your best evil laugh — 3 times.",
  "Pretend to be invisible for 1 minute.",
  "Draw a mustache on your face with a marker.",
  "Talk in whispers until your next turn.",
  "Make 3 different animal sounds.",
  "Act like you just won the lottery.",
  "Pretend to cry like a baby.",
  "Say 5 tongue twisters correctly.",
  "Wear your shirt backwards until your next turn.",
  "Crawl across the floor like a baby.",
  "Do your best moonwalk dance.",
  "Spin in circles while singing.",
  "Act like a superhero with a silly power.",
  "Say 3 cheesy pickup lines.",
  "Pretend you’re an airplane for 1 minute.",
  "Speak only in questions until your next turn.",
  "Eat a spoonful of ketchup or sauce.",
  "Hold a funny pose for 30 seconds.",
  "Act like you’re on a cooking show for 1 minute.",
  "Laugh like a villain for 20 seconds.",
  "Do a belly dance move.",
  "Pretend to be a waiter/waitress for another player.",
  "Dance without music for 30 seconds.",
  "Make up a rap about the person to your left.",
  "Try to lick your elbow.",
  "Say 3 true compliments about everyone in the room.",
  "Act like a monkey until your next turn.",
  "Pretend you’re surfing on a chair.",
  "Do your best impression of a teacher or boss.",
  "Speak like a news anchor for 1 minute.",
  "Put socks on your hands until your next turn.",
  "Act like a pirate.",
  "Pretend you’re riding a horse.",
  "Make up a funny story using 3 random words.",
  "Do 10 squats while singing.",
  "Act like you’re swimming underwater.",
  "Try to juggle 3 objects.",
  "Hop on one foot for 20 seconds.",
  "Do your best opera singing.",
  "Speak with your tongue sticking out.",
  "Pretend you’re an alien visiting Earth.",
  "Talk like a cowboy until your next turn.",
  "Do your best karate moves.",
  "Pretend you’re on a cooking show using invisible food.",
  "Act like your favorite cartoon character.",
  "Sing a pop song in opera style.",
  "Pretend you’re walking on the moon.",
  "Act like you’re frozen in place for 30 seconds.",
  "Pretend you’re a DJ and mix imaginary music.",
  "Imitate someone else in the room until they guess who.",
  "Do 15 sit-ups.",
  "Say a silly joke with a straight face.",
  "Pretend you’re famous and give a thank you speech.",
  "Sing a song chosen by the group.",
  "Act like you’re in slow motion.",
  "Try to whistle (even if you can’t).",
  "Speak in a baby voice until your next turn.",
  "Act like you’re in a horror movie.",
  "Pretend to play an instrument for 1 minute.",
  "Say something with your mouth full of water.",
  "Act like you’re underwater.",
  "Do a silly runway walk.",
  "Pretend to be a YouTuber vlogging your day.",
  "Do 5 push-ups with claps if you can.",
  "Dance like nobody is watching (but everyone is).",
  "Pretend you’re a waiter at a fancy restaurant.",
  "Try to make everyone laugh in 30 seconds.",
  "Act like a robot running out of battery.",
  "Imitate your favorite animal.",
  "Do your best villain monologue.",
  "Pretend you’re being interviewed on TV.",
  "Sing the chorus of your favorite song loudly.",
  "Do your best slow-motion karate fight.",
  "Pretend you’re a fashion model showing off clothes.",
  "Make the sound of 3 different instruments.",
  "Pretend to be a fortune teller.",
  "Do your best Shakespeare acting.",
  "Pretend you’re a rock star at a concert.",
  "Pretend to do makeup on someone without tools.",
  "Speak like an old person until your next turn.",
  "Pretend you’re riding a rollercoaster.",
  "Dance like a ballerina for 20 seconds.",
  "Pretend you’re calling your crush.",
  "Make up a silly commercial for a random object.",
  "Pretend you’re walking in heavy wind.",
  "Pretend to sneeze 5 times in a row.",
  "Pretend you’re teaching a class.",
  "Do your best dance move.",
  "Pretend you’re a superhero and name your power.",
  "Make the sound of a car horn.",
  "Pretend to be a dog begging for food.",
  "Pretend you’re a waiter dropping plates.",
  "Do a crab walk across the room.",
  "Pretend you’re taking a selfie in a dramatic way.",
  "Pretend you’re a zombie for 30 seconds.",
  "Do a silly laugh until others laugh.",
  "Let the group redo your hairstyle.",
  "Pretend you’re a waiter and take everyone’s fake order.",
  "Wear socks on your hands for the next round.",
  "Pretend to be a robot making coffee.",
  "Say the next 3 things you say in a singing voice.",
  "Do a funny dance until someone laughs.",
  "Talk with your tongue out for 1 minute.",
  "Do your best impression of a baby learning to walk.",
  "Pretend to be a teacher giving homework.",
  "Speak in only animal sounds for 30 seconds.",
  "Do your best runway model strut.",
  "Pretend you’re taking a shower for 20 seconds.",
  "Act like a zombie chasing someone.",
  "Pretend to be a magician showing a trick.",
  "Pretend you’re swimming freestyle.",
  "Try to juggle 2 objects like a pro.",
  "Pretend to be an angry cat.",
  "Act like you’re a boss firing someone.",
  "Pretend to cry like a toddler.",
  "Act like a reporter covering breaking news.",
  "Pretend to drive an imaginary car.",
  "Dance like you’re at a wedding party.",
  "Pretend to be a stand-up comedian telling a bad joke.",
  "Act like you’re stuck in slow motion.",
  "Pretend to be a famous singer giving an interview.",
  "Pretend to be a cooking show chef making a cake.",
  "Speak like a pirate for the next turn.",
  "Do your best horse gallop across the room.",
  "Pretend you’re a DJ hyping up a crowd.",
  "Do 15 jumping jacks.",
  "Pretend you’re a ninja sneaking around.",
  "Try to balance on one foot for 30 seconds.",
  "Do your best imitation of your favorite actor.",
  "Pretend you’re drinking tea at a royal party.",
  "Act like you’re walking through mud.",
  "Pretend to be a waiter spilling drinks.",
  "Make the sound of a police siren.",
  "Act like you’re playing tennis.",
  "Pretend you’re a superhero saving the day.",
  "Act like you’re stuck in quicksand.",
  "Pretend you’re a dog chasing your tail.",
  "Do your best dance move with no music.",
  "Pretend to be someone in the room for 1 minute.",
  "Do your best slow-motion cartwheel (fake it!).",
  "Pretend to be a waiter at a fast-food place.",
  "Do 10 sit-ups dramatically.",
  "Pretend to be an actor in a soap opera.",
  "Do your best scary ghost impression.",
  "Pretend you’re a chicken crossing the road.",
  "Dance like you’re in a TikTok video.",
  "Pretend to sneeze 10 times in a row.",
  "Act like you’re calling your crush on the phone.",
  "Pretend you’re fishing and caught a big fish.",
  "Make a speech like a president.",
  "Act like you’re selling a weird product on TV.",
  "Do 10 frog jumps.",
  "Pretend you’re in a karate movie fight scene.",
  "Do a silly walk across the room.",
  "Pretend you’re taking a dramatic selfie.",
  "Pretend you’re a cat stuck in a box.",
  "Act like you’re scared of a mouse.",
  "Do your best air guitar performance.",
  "Pretend you’re a waiter carrying too many plates.",
  "Pretend to be an alien learning human things.",
  "Do 5 push-ups while making sound effects.",
  "Pretend you’re a rapper freestyling.",
  "Make up a new dance move and show it.",
  "Pretend to be a fashion designer explaining clothes.",
  "Do a runway walk like a supermodel.",
  "Pretend you’re an animal at the zoo.",
  "Act like you’re on a rollercoaster ride.",
  "Pretend you’re brushing your teeth with no toothbrush.",
  "Do your best cheerleader impression.",
  "Pretend to be a villain from a cartoon.",
  "Make the sound of a car starting.",
  "Pretend to be a waiter at a 5-star restaurant.",
  "Dance like you’re celebrating a goal.",
  "Act like you’re walking on hot sand.",
  "Pretend you’re carrying a heavy load.",
  "Pretend to do yoga for 30 seconds.",
  "Act like you’re riding a horse race.",
  "Do a silly dance with your eyes closed.",
  "Pretend you’re on a cooking competition show.",
  "Pretend you’re playing basketball.",
  "Do your best impression of a news anchor.",
  "Act like you’re swimming with sharks.",
  "Pretend to be a teacher angry at students.",
  "Do your best zombie walk.",
  "Act like you’re walking through rain.",
  "Pretend you’re calling for pizza delivery.",
  "Do 10 squats while singing a song.",
  "Pretend you’re reading the news dramatically.",
  "Pretend you’re an animal running from danger.",
  "Do your best football celebration dance.",
  "Pretend you’re a waiter forgetting an order.",
  "Pretend you’re stuck in glue.",
  "Do 5 star jumps.",
  "Pretend you’re an actor in a sad movie.",
  "Pretend to be a scientist explaining something silly.",
  "Do a funny face for 15 seconds.",
  "Pretend you’re carrying an invisible baby.",
  "Do your best Santa Claus impression.",
  "Pretend you’re a sports commentator.",
  "Pretend to be scared of your own shadow.",
  "Pretend you’re shopping in a supermarket.",
  "Do a silly spin dance.",
  "Pretend you’re a waiter delivering food wrong.",
  "Act like you’re lost in the desert.",
  "Do your best monster roar.",
  "Pretend you’re teaching dance class.",
  "Pretend to be a dog barking at strangers.",
  "Do 10 push-ups dramatically.",
  "Pretend to be a waiter asking for tips.",
  "Act like you’re climbing a mountain.",
  "Pretend you’re a baby crying for milk.",
  "Do your best superhero landing pose.",
  "Pretend you’re riding a bicycle uphill.",
  "Pretend you’re drinking a hot drink too fast.",
  "Act like you’re in a fashion commercial.",
  "Pretend you’re a parrot repeating words.",
  "Do a silly chicken dance.",
  "Pretend you’re a waiter breaking plates.",
  "Act like you’re in a horror movie chase.",
  "Pretend you’re brushing a giant’s teeth.",
  "Do your best surfer impression.",
  "Pretend you’re an alien landing on Earth.",
  "Act like you’re holding a giant balloon.",
  "Pretend to be a waiter singing orders.",
  "Do 20-second plank while smiling.",
  "Pretend you’re scared of a tiny spider.",
  "Pretend you are a waiter and take everyone’s order in a fancy accent.",
  "Act like a baby until your next turn.",
  "Dance like a ballerina for 20 seconds.",
  "Pretend you’re on a cooking show making spaghetti.",
  "Do 20 jumping jacks while singing a song.",
  "Pretend you’re an old man/woman walking with a cane.",
  "Make the sound of three different animals.",
  "Pretend you’re swimming in slow motion.",
  "Act like a superhero flying through the sky.",
  "Pretend you’re stuck in a tiny box.",
  "Imitate your favorite celebrity for 30 seconds.",
  "Pretend to sneeze 7 times in a row.",
  "Walk like a crab across the room.",
  "Pretend to take selfies in different poses.",
  "Act like you’re giving a weather forecast.",
  "Pretend you’re a robot whose battery is dying.",
  "Do your best silly laugh until someone else laughs.",
  "Pretend to brush your teeth with an invisible brush.",
  "Talk like a pirate until your next turn.",
  "Pretend you’re giving a TED Talk about bananas.",
  "Do 10 frog jumps.",
  "Pretend to be a cat cleaning itself.",
  "Act like you’re climbing a tall ladder.",
  "Pretend you’re eating the spiciest chili.",
  "Do 5 push-ups in slow motion.",
  "Pretend you’re riding a roller coaster.",
  "Act like you’re in a shampoo commercial.",
  "Pretend to be a waiter dropping plates.",
  "Pretend you’re a rockstar singing to fans.",
  "Walk like a robot across the room.",
  "Pretend you’re in a fashion show runway.",
  "Do a cartwheel in slow motion (pretend).",
  "Act like you’re scared of a monster.",
  "Pretend you’re surfing on an invisible board.",
  "Speak in whispers for the next 2 turns.",
  "Pretend to be a lion roaring.",
  "Pretend to be a waiter spilling drinks.",
  "Act like you’re walking on ice.",
  "Do your best alien impression.",
  "Pretend you’re stuck in quicksand.",
  "Act like you’re on the phone with your crush.",
  "Do a silly walk until your next turn.",
  "Pretend you’re an astronaut in zero gravity.",
  "Act like a dog chasing its tail.",
  "Pretend to juggle invisible balls.",
  "Do your best opera singing.",
  "Pretend you’re a ninja sneaking around.",
  "Act like you’re brushing a horse.",
  "Pretend you’re a famous athlete celebrating.",
  "Do a 10-second dramatic bow.",
  "Pretend you’re teaching kids the alphabet.",
  "Pretend you’re scared of your own reflection.",
  "Do 15 squats.",
  "Pretend you’re a waiter in a busy café.",
  "Act like you’re running from a bear.",
  "Pretend to be a frog hopping around.",
  "Pretend to cook and taste invisible food.",
  "Do 10 sit-ups while making funny noises.",
  "Pretend you’re being interviewed on TV.",
  "Act like you’re playing basketball.",
  "Pretend you’re opening a present and be dramatic.",
  "Do a silly chicken dance.",
  "Pretend you’re an alien meeting humans.",
  "Act like you’re on a roller coaster ride.",
  "Pretend to be a waiter singing orders.",
  "Do your best superhero landing pose.",
  "Pretend to be a baby crying for milk.",
  "Act like you’re carrying something really heavy.",
  "Pretend you’re lost in the desert.",
  "Pretend you’re walking in heavy wind.",
  "Act like you’re in a scary movie.",
  "Pretend to drink a very hot drink.",
  "Do 5 star jumps in slow motion.",
  "Pretend to be a cat stuck in a tree.",
  "Act like you’re a fashion designer.",
  "Pretend you’re scared of a mouse.",
  "Pretend to take a dramatic selfie.",
  "Act like you’re surfing on a big wave.",
  "Pretend to sneeze and then laugh.",
  "Do your best Santa Claus laugh.",
  "Pretend to be a dog begging for food.",
  "Act like you’re lost in a shopping mall.",
  "Pretend you’re brushing giant teeth.",
  "Do 5 push-ups clapping your hands.",
  "Pretend you’re eating invisible spaghetti.",
  "Act like you’re in a sad movie scene.",
  "Pretend you’re calling your best friend.",
  "Do your best impression of a teacher.",
  "Pretend to be a waiter forgetting orders.",
  "Act like you’re carrying a baby.",
  "Pretend you’re a villain giving a speech.",
  "Do your best football goal celebration.",
  "Pretend to be a monster under the bed.",
  "Act like you’re in an action movie chase.",
  "Pretend you’re dancing in the rain.",
  "Do 5 frog jumps dramatically.",
  "Pretend to be a waiter cleaning tables.",
  "Act like you’re scared of a spider.",
  "Pretend to sing opera loudly.",
  "Pretend you’re an athlete running a race.",
  "Act like you’re a cat meowing for food.",
  "Pretend to give a cooking class.",
  "Act like you’re frozen in place for 20s.",
  "Pretend you’re making a YouTube vlog.",
  "Act like you’re brushing your hair in a mirror.",
  "Pretend to be a superhero calling their team.",
  "Do your best ballet spin.",
  "Pretend you’re on a first date.",
  "Act like you’re scared of thunder.",
  "Pretend to sing in a music competition.",
  "Act like you’re serving food at a party.",
  "Pretend to sneeze and drop something.",
  "Do your best monster roar.",
  "Pretend to be a waiter asking for tips.",
  "Act like you’re on stage giving a speech.",
  "Pretend you’re eating an ice-cream cone.",
  "Do your best impression of a crying baby.",
  "Pretend to be a cat playing with yarn.",
  "Act like you’re running late for school.",
  "Pretend you’re playing guitar on stage.",
  "Act like you’re scared of a cockroach.",
  "Pretend to be a famous actor in a movie.",
  "Act like you’re giving someone directions.",
  "Pretend to be a waiter dropping trays.",
  "Do 10 push-ups quickly.",
  "Pretend to be a monkey climbing a tree.",
  "Act like you’re scared of the dark.",
  "Pretend you are a dog barking at strangers.",
  "Act like a waiter taking wrong orders.",
  "Pretend you’re a cat chasing a laser pointer.",
  "Act like you’re walking on hot coals.",
  "Pretend you’re swimming away from a shark.",
  "Act like a monkey eating a banana.",
  "Pretend you’re holding a giant balloon.",
  "Act like you’re carrying invisible groceries.",
  "Pretend you’re sneezing loudly 5 times.",
  "Do 10 star jumps dramatically.",
  "Pretend to be a news anchor with silly news.",
  "Act like you’re a DJ at a concert.",
  "Pretend you’re opening a surprise gift.",
  "Act like you’re scared of your shoes.",
  "Pretend you’re a waiter spilling soup.",
  "Do your best victory dance.",
  "Pretend you’re in a fashion show.",
  "Act like you’re surfing huge waves.",
  "Pretend you’re brushing your pet dog.",
  "Act like you’re scared of a balloon popping.",
  "Pretend you’re walking through sticky mud.",
  "Do your best slow-motion run.",
  "Pretend to be a waiter cleaning up a mess.",
  "Act like you’re a superhero flying.",
  "Pretend you’re a chef cooking pizza.",
  "Act like you’re a frog jumping around.",
  "Pretend you’re being chased by bees.",
  "Act like you’re an old person with back pain.",
  "Pretend you’re in a horror movie.",
  "Act like you’re sneaking past a guard.",
  "Pretend to sneeze and fall down.",
  "Act like you’re calling your crush nervously.",
  "Pretend you’re teaching math badly.",
  "Act like you’re eating the biggest burger.",
  "Pretend to juggle 3 invisible balls.",
  "Act like you’re lost in a forest.",
  "Pretend you’re a waiter singing orders.",
  "Act like you’re a baby crawling.",
  "Pretend you’re making silly TikTok dances.",
  "Act like you’re on a roller coaster drop.",
  "Pretend you’re giving a speech at a wedding.",
  "Act like you’re a superhero landing pose.",
  "Pretend you’re taking a group selfie.",
  "Act like you’re brushing your teeth angrily.",
  "Pretend you’re in a cooking competition.",
  "Act like you’re a dog wagging your tail.",
  "Pretend you’re in a karaoke contest.",
  "Act like you’re surfing on a skateboard.",
  "Pretend you’re acting in a sad drama.",
  "Act like you’re walking in heavy rain.",
  "Pretend to be a waiter spilling drinks.",
  "Act like you’re riding a bike uphill.",
  "Pretend you’re a monster growling.",
  "Act like you’re eating spicy noodles.",
  "Pretend to be a DJ scratching music.",
  "Act like you’re doing yoga badly.",
  "Pretend you’re a cat purring.",
  "Act like you’re falling asleep standing.",
  "Pretend you’re scared of your reflection.",
  "Act like you’re cooking invisible pasta.",
  "Pretend to be a waiter tripping.",
  "Act like you’re brushing a horse.",
  "Pretend you’re walking on ice carefully.",
  "Act like you’re scared of thunder.",
  "Pretend you’re calling for help.",
  "Act like you’re giving a silly lecture.",
  "Pretend you’re in a dance battle.",
  "Act like you’re a robot dancing.",
  "Pretend you’re eating popcorn at a movie.",
  "Act like you’re playing the drums.",
  "Pretend you’re singing opera.",
  "Act like you’re lost in a mall.",
  "Pretend you’re a waiter at McDonalds.",
  "Act like you’re in slow motion fight.",
  "Pretend you’re a superhero talking to fans.",
  "Act like you’re running from a tiger.",
  "Pretend to be a waiter forgetting menus.",
  "Act like you’re eating invisible cake.",
  "Pretend you’re a cat climbing a tree.",
  "Act like you’re crying dramatically.",
  "Pretend you’re shopping for clothes.",
  "Act like you’re drinking soda loudly.",
  "Pretend to be a waiter sweeping floor.",
  "Act like you’re doing push-ups badly.",
  "Pretend you’re an alien speaking gibberish.",
  "Act like you’re in a talent show.",
  "Pretend you’re a waiter balancing plates.",
  "Act like you’re teaching English badly.",
  "Pretend to sneeze dramatically.",
  "Act like you’re a monkey scratching.",
  "Pretend you’re in a scary haunted house.",
  "Act like you’re holding a heavy box.",
  "Pretend to be a waiter asking for tips.",
  "Act like you’re riding a horse slowly.",
  "Pretend you’re scared of a bug.",
  "Act like you’re brushing your hair happily.",
  "Pretend to be a waiter dropping food.",
  "Act like you’re singing in a shower.",
  "Pretend to be a superhero with silly powers.",
  "Act like you’re calling your mom.",
  "Pretend you’re scared of a tiny spider.",
  "Act like you’re in a soap opera.",
  "Pretend you’re a waiter mixing drinks.",
  "Act like you’re cooking breakfast.",
  "Pretend you’re scared of the dark.",
  "Act like you’re running in slow motion.",
  "Pretend to be a waiter carrying cake.",
  "Act like you’re a cat licking paws.",
  "Pretend you’re brushing invisible teeth.",
  "Act like you’re jumping on a trampoline.",
  "Pretend you’re eating a giant hotdog.",
  "Act like you’re laughing like a villain.",
  "Pretend to be a waiter at a wedding.",
  "Act like you’re scared of balloons.",
  "Pretend you’re taking silly selfies.",
  "Act like you’re scared of a mouse.",
  "Pretend to sneeze loudly.",
  "Act like you’re surfing giant waves.",
  "Pretend to be a waiter dancing.",
  "Act like you’re walking on lava.",
  "Pretend you’re a cat playing with yarn.",
  "Act like you’re in a scary movie chase.",
  "Pretend you’re giving a lecture on pizza.",
  "Act like you’re brushing giant teeth.",
  "Pretend you’re calling your crush shyly.",
  "Act like you’re swimming with dolphins.",
  "Pretend you’re a waiter singing happy birthday.",
  "Act like you’re scared of your shadow.",
  "Pretend you’re running in place.",
  "Act like you’re eating invisible soup.",
  "Pretend to sneeze and laugh.",
  "Act like you’re an angry chef.",
  "Pretend to be a waiter clapping hands.",
  "Act like you’re surfing on land.",
  "Pretend you’re scared of bees.",
  "Act like you’re juggling invisible apples.",
  "Pretend you’re making a pizza.",
  "Act like you’re a baby laughing.",
  "Pretend you’re an old person walking slowly.",
  "Act like you’re drinking hot coffee.",
  "Pretend you’re singing like a rockstar.",
  "Act like you’re scared of a ghost.",
  "Pretend to sneeze and shout.",
  "Act like you’re eating invisible ice cream.",
  "Pretend you’re dancing like crazy.",
  "Act like you’re brushing your hair angrily.",
  "Pretend you’re cooking soup.",
  "Act like you’re a waiter carrying water.",
  "Pretend to sneeze and sit down.",
  "Act like you’re walking in the wind.",
  "Pretend you’re holding a big balloon.",
  "Act like you’re scared of thunder.",
  "Pretend you’re swimming slowly.",
  "Act like you’re brushing your dog.",
  "Pretend you’re an actor crying.",
  "Act like you’re carrying heavy books.",
  "Pretend you’re scared of rain.",
  "Act like you’re in a scary forest.",
  "Pretend you’re walking with long legs.",
];


function pickNoRepeat(bank, used) {
  if (used.size >= bank.length) used.clear();
  for (let tries = 0; tries < 20; tries++) {
    const idx = Math.floor(Math.random() * bank.length);
    if (!used.has(idx)) {
      used.add(idx);
      return bank[idx];
    }
  }
  return bank[0];
}

export default function App() {
  /** Players & setup */
  const [players, setPlayers] = useState([]);
  const [setupVisible, setSetupVisible] = useState(true);
  const [numPlayers, setNumPlayers] = useState("");
  const [nameInputs, setNameInputs] = useState(["", ""]);
  const [current, setCurrent] = useState(0);

  /** Game flow */
  const [phase, setPhase] = useState("idle"); // idle | spinning | not_selected | selected_choose | prompt
  const [spinLabel, setSpinLabel] = useState("Get Ready...");
  const [mode, setMode] = useState(null); // "truth" | "dare"
  const [promptText, setPromptText] = useState("");

  /** No-repeat trackers */
  const usedTruth = useRef(new Set());
  const usedDare = useRef(new Set());

  /** Animations */
  const spinAnim = useRef(new Animated.Value(0)).current;
  const popupScale = useRef(new Animated.Value(0.9)).current;
  const popupOpacity = useRef(new Animated.Value(0)).current;

  const currentName = players[current]?.name ?? "Player";

  /** Setup handlers */
  function handleNumPlayersChange(v) {
    const n = Math.max(1, Math.min(12, parseInt(v || "0", 10) || 0));
    setNumPlayers(String(n));
    setNameInputs([...Array(n)].map((_, i) => nameInputs[i] ?? ""));
  }
  function handleNameChange(i, v) {
    const next = [...nameInputs];
    next[i] = v;
    setNameInputs(next);
  }
  function submitSetup() {
    const n = parseInt(numPlayers, 10);
    const list = [...Array(n)].map((_, i) => ({
      name: nameInputs[i]?.trim() || `Player ${i + 1}`,
    }));
    setPlayers(list);
    setCurrent(0);
    setSetupVisible(false);
    setPhase("idle");
  }

  /** Helpers */
  function openPopup() {
    popupScale.setValue(0.9);
    popupOpacity.setValue(0);
    Animated.parallel([
      Animated.timing(popupScale, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(popupOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }
  function closePopup(cb) {
    Animated.parallel([
      Animated.timing(popupScale, {
        toValue: 0.95,
        duration: 160,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(popupOpacity, {
        toValue: 0,
        duration: 160,
        useNativeDriver: true,
      }),
    ]).start(() => cb?.());
  }
  function advanceToNextPlayer() {
    setCurrent((i) => (players.length ? (i + 1) % players.length : 0));
  }

  /** Spin (reduced time: ~1–3s) */
  function startDraw() {
    if (phase === "spinning") return;
    setPhase("spinning");
    setSpinLabel("Spinning...");

    spinAnim.setValue(0);
    const flicker = Animated.loop(
      Animated.sequence([
        Animated.timing(spinAnim, { toValue: 1, duration: 140, useNativeDriver: true }),
        Animated.timing(spinAnim, { toValue: 0, duration: 140, useNativeDriver: true }),
      ])
    );
    flicker.start();

    const tick = setInterval(() => {
      setSpinLabel((s) => (s === "Selected" ? "Not Selected" : "Selected"));
    }, 100);

    const duration = 1000 + Math.random() * 2000; // 1–3s
    setTimeout(() => {
      clearInterval(tick);
      flicker.stop();
      const chosen = Math.random() < 0.5;
      if (chosen) {
        setPhase("selected_choose");
        openPopup();
      } else {
        setPhase("not_selected");
        setSpinLabel("Not Selected");
        openPopup();
      }
    }, duration);
  }

  /** Selected -> choose */
  function chooseTruth() {
    setMode("truth");
    setPromptText(pickNoRepeat(TRUTH_BANK, usedTruth.current));
    setPhase("prompt");
  }
  function chooseDare() {
    setMode("dare");
    setPromptText(pickNoRepeat(DARE_BANK, usedDare.current));
    setPhase("prompt");
  }

  /** Prompt actions */
  function nextPrompt() {
    const bank = mode === "truth" ? TRUTH_BANK : DARE_BANK;
    const used = mode === "truth" ? usedTruth.current : usedDare.current;
    setPromptText(pickNoRepeat(bank, used));
  }
  function doneRound() {
    closePopup(() => {
      setPhase("idle");
      setMode(null);
      setPromptText("");
      advanceToNextPlayer();
    });
  }
  function cancelAndNext() {
    closePopup(() => {
      setPhase("idle");
      setMode(null);
      setPromptText("");
      advanceToNextPlayer();
    });
  }

  /** Not selected -> Draw for next */
  function drawForNextFromPopup() {
    closePopup(() => {
      advanceToNextPlayer();
      startDraw();
    });
  }

  /** UI derived */
  const statusLine = useMemo(() => {
    if (phase === "spinning") return `${currentName} – ${spinLabel}`;
    return `${currentName} – Press Draw to see if you're selected`;
  }, [phase, spinLabel, currentName]);

  const spinOpacity = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.35, 1],
  });

  /** Switch handler (Truth <-> Dare) used in prompt popup */
  function switchMode() {
    if (mode === "truth") {
      setMode("dare");
      setPromptText(pickNoRepeat(DARE_BANK, usedDare.current));
    } else {
      setMode("truth");
      setPromptText(pickNoRepeat(TRUTH_BANK, usedTruth.current));
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      {/* Light-colored status bar icons */}
      <StatusBar barStyle="light-content" backgroundColor="#0e0f13" translucent={false} />

      {/* Home */}
      <View style={styles.container}>
        <View style={styles.centerBlock}>
          <Text style={styles.title}>Truth and Dare</Text>
          <Animated.Text style={[styles.subtitle, phase === "spinning" && { opacity: spinOpacity }]}>
            {statusLine}
          </Animated.Text>

          <Pressable onPress={startDraw} style={({ pressed }) => [styles.drawBtn, pressed && { opacity: 0.85 }]}>
            <View style={styles.btnRow}>
              <Ionicons name="shuffle" size={18} color="#fff" style={styles.icon} />
              <Text style={styles.drawBtnText}>Draw</Text>
            </View>
          </Pressable>
        </View>
        <Text style={styles.credit}>Designed and Developed By MSA Rahat</Text>
      </View>

      {/* Setup */}
      <Modal transparent visible={setupVisible} animationType="fade" onShow={openPopup}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: "padding", android: undefined })}
          style={styles.modalWrap}
        >
          <Animated.View style={[styles.setupCard, { transform: [{ scale: popupScale }], opacity: popupOpacity }]}>
            <Text style={styles.popupTitle}>Players Setup</Text>
            <Text style={styles.label}>Number of players (1–12)</Text>
            <TextInput
              value={numPlayers}
              onChangeText={handleNumPlayersChange}
              keyboardType="number-pad"
              style={styles.input}
              placeholder="1-12"
              placeholderTextColor="#8891a9"
            />
            <ScrollView style={{ maxHeight: 260 }} contentContainerStyle={{ paddingBottom: 8 }}>
              {nameInputs.map((val, i) => (
                <View key={i} style={{ marginTop: 10 }}>
                  <Text style={styles.label}>Player {i + 1} name</Text>
                  <TextInput
                    value={val}
                    onChangeText={(v) => handleNameChange(i, v)}
                    style={styles.input}
                    placeholder={`Player ${i + 1}`}
                    placeholderTextColor="#8891a9"
                  />
                </View>
              ))}
            </ScrollView>
            <Pressable onPress={submitSetup} style={({ pressed }) => [styles.primaryBtn, pressed && styles.btnPressed]}>
              <Text style={styles.primaryBtnText}>Start</Text>
            </Pressable>
          </Animated.View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Not selected */}
      <Modal transparent visible={phase === "not_selected"} animationType="fade" onShow={openPopup}>
        <View style={styles.modalWrap}>
          <Animated.View style={[styles.popupCard, { transform: [{ scale: popupScale }], opacity: popupOpacity }]}>
            <Text style={styles.popupTitle}>You’re not selected</Text>
            <Text style={styles.popupSub}>Let’s pass the turn to the next player.</Text>
            <Pressable
              onPress={drawForNextFromPopup}
              style={({ pressed }) => [styles.primaryBtnFull, pressed && styles.btnPressed]}
            >
              <View style={styles.btnRowCenter}>
                <Ionicons name="arrow-forward-circle" size={18} color="#fff" style={styles.icon} />
                <Text style={styles.primaryBtnText}>Draw for Next Player</Text>
              </View>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      {/* Selected -> choose truth/dare */}
      <Modal transparent visible={phase === "selected_choose"} animationType="fade" onShow={openPopup}>
        <View style={styles.modalWrap}>
          <Animated.View style={[styles.popupCard, { transform: [{ scale: popupScale }], opacity: popupOpacity }]}>
            <Text style={styles.popupTitle}>You’re selected!</Text>
            <Text style={styles.popupSub}>Choose your challenge, {currentName}.</Text>

            <View style={[styles.row, { marginTop: 12 }]}>
              <Pressable onPress={chooseTruth} style={({ pressed }) => [styles.truthBtn, pressed && styles.btnPressed]}>
                <View style={styles.btnRow}>
                  <Ionicons name="help-circle" size={18} color="#fff" style={styles.icon} />
                  <Text style={styles.modeText}>Truth</Text>
                </View>
              </Pressable>
              <Pressable onPress={chooseDare} style={({ pressed }) => [styles.dareBtn, pressed && styles.btnPressed]}>
                <View style={styles.btnRow}>
                  <Ionicons name="flash" size={18} color="#fff" style={styles.icon} />
                  <Text style={styles.modeText}>Dare</Text>
                </View>
              </Pressable>
            </View>

            <Pressable
              onPress={cancelAndNext}
              style={({ pressed }) => [styles.cancelFull, pressed && styles.btnPressed]}
            >
              <View style={styles.btnRowCenter}>
                <Ionicons name="close-circle" size={18} color="#c7d6ff" style={styles.icon} />
                <Text style={styles.cancelText}>Cancel (Next Player)</Text>
              </View>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      {/* Prompt popup */}
      <Modal transparent visible={phase === "prompt"} animationType="fade" onShow={openPopup}>
        <View style={styles.modalWrap}>
          <Animated.View style={[styles.popupCard, { transform: [{ scale: popupScale }], opacity: popupOpacity }]}>

            {/* Header row with icon + label (aligned) */}
            <View style={styles.promptHeaderRow}>
              <Ionicons
                name={mode === "truth" ? "help-circle" : "flash"}
                size={20}
                color={mode === "truth" ? "#9fb7ff" : "#ff9fb7"}
                style={{ marginRight: 8 }}
              />
              <Text
                style={[
                  styles.promptHeader,
                  { color: mode === "truth" ? "#9fb7ff" : "#ff9fb7" },
                ]}
              >
                {mode === "truth" ? "TRUTH" : "DARE"}
              </Text>
            </View>

            {/* Switch Truth <-> Dare */}
            <Pressable
              onPress={switchMode}
              style={({ pressed }) => [styles.switchChip, pressed && { opacity: 0.85 }]}
            >
              <Ionicons name="swap-horizontal" size={16} color="#cfe0ff" style={{ marginRight: 6 }} />
              <Text style={styles.switchChipText}>
                Switch to {mode === "truth" ? "Dare" : "Truth"}
              </Text>
            </Pressable>

            {/* Question area */}
            <ScrollView
              style={{ maxHeight: 260, alignSelf: "stretch" }}
              contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 8 }}  // extra top padding
            >
              <Text style={styles.promptBody}>{promptText}</Text>
            </ScrollView>

            {/* Row 1: Done + Skip */}
            <View style={[styles.row, { marginTop: 12 }]}>
              <Pressable onPress={doneRound} style={({ pressed }) => [styles.successBtn, styles.btnFlex, pressed && styles.btnPressed]}>
                <View style={styles.btnRowCenter}>
                  <Ionicons name="checkmark-circle" size={18} color="#d6ffef" style={styles.icon} />
                  <Text style={styles.successText}>Done</Text>
                </View>
              </Pressable>

              <Pressable onPress={nextPrompt} style={({ pressed }) => [styles.primaryBtn, styles.btnFlex, pressed && styles.btnPressed]}>
                <View style={styles.btnRowCenter}>
                  <Ionicons name="play-skip-forward" size={18} color="#fff" style={styles.icon} />
                  <Text style={styles.primaryBtnText}>Skip</Text>
                </View>
              </Pressable>
            </View>

            {/* Row 2: Cancel (Next Player) */}
            <Pressable
              onPress={cancelAndNext}
              style={({ pressed }) => [styles.cancelFull, pressed && styles.btnPressed]}
            >
              <View style={styles.btnRowCenter}>
                <Ionicons name="close-circle" size={18} color="#c7d6ff" style={styles.icon} />
                <Text style={styles.cancelText}>Cancel (Next Player)</Text>
              </View>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

/* =================== STYLES =================== */
const styles = StyleSheet.create({
  /* App shell */
  safe: { flex: 1, backgroundColor: "#0e0f13" },
  container: { flex: 1, paddingHorizontal: 20, paddingBottom: 12 },
  centerBlock: { flex: 1, alignItems: "center", justifyContent: "center", gap: 14 },

  /* Header */
  title: { color: "#ffffff", fontSize: 28, fontWeight: "900", letterSpacing: 0.5, textAlign: "center" },
  subtitle: { color: "#d7def4", fontSize: 15, textAlign: "center" },

  /* Draw CTA */
  drawBtn: {
    backgroundColor: "#3d5cff",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
    alignItems: "center",
    minWidth: 180,
    elevation: 2,
  },
  drawBtnText: { color: "#fff", fontSize: 18, fontWeight: "900" },

  /* Footer credit */
  credit: { textAlign: "center", color: "#8a92ad", marginBottom: 6 },

  /* Modal scaffolding */
  modalWrap: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 22 },

  /* Cards */
  setupCard: { width: "100%", maxWidth: 520, backgroundColor: "#121a30", borderRadius: 18, padding: 18 },
  popupCard: { width: "100%", maxWidth: 560, backgroundColor: "#162036", borderRadius: 18, padding: 18, alignItems: "center" },

  /* Form */
  label: { color: "#c3cbe6", fontSize: 12, marginTop: 6 },
  input: { backgroundColor: "#17213a", color: "#ffffff", paddingHorizontal: 12, paddingVertical: 10, borderRadius: 12, marginTop: 6 },

  /* Popup headings */
  popupTitle: { color: "#ffffff", fontSize: 20, fontWeight: "900" },
  popupSub: { color: "#c7d1ef", marginTop: 6, textAlign: "center" },

  /* Prompt header + body */
  promptHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 6,
  },
  promptHeader: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  promptBody: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 8,     // extra top spacing for the question text
    marginBottom: 12,
  },

  /* Switch chip */
  switchChip: {
    alignSelf: "center",
    marginTop: 6,
    marginBottom: 4,
    backgroundColor: "#1b2540",
    borderWidth: 1,
    borderColor: "#32416a",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
  },
  switchChipText: { color: "#cfe0ff", fontWeight: "800" },

  /* Row helpers */
  row: { flexDirection: "row", gap: 10 },
  rowWrap: { flexDirection: "row", flexWrap: "wrap", gap: 10, justifyContent: "center" },

  /* Buttons */
  btnRow: { flexDirection: "row", alignItems: "center" },
  btnRowCenter: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  icon: { marginRight: 6 },

  primaryBtn: { backgroundColor: "#3d5cff", paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, alignItems: "center" },
  primaryBtnFull: { backgroundColor: "#3d5cff", paddingVertical: 12, borderRadius: 12, alignItems: "center", marginTop: 14, alignSelf: "stretch" },
  primaryBtnText: { color: "#fff", fontWeight: "900" },

  secondaryBtn: { backgroundColor: "#2a3352", paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, alignItems: "center" },
  secondaryBtnText: { color: "#e3e8ff", fontWeight: "800" },

  ghostBtn: { borderWidth: 1, borderColor: "#3a4871", paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, alignItems: "center" },
  ghostText: { color: "#a9bbff", fontWeight: "800" },

  truthBtn: { backgroundColor: "#2f8a58", paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, minWidth: 120, alignItems: "center" },
  dareBtn: { backgroundColor: "#a03a5c", paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, minWidth: 120, alignItems: "center" },
  modeText: { color: "#fff", fontWeight: "900" },

  successBtn: { backgroundColor: "#1f7a56", paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, alignItems: "center" },
  successText: { color: "#d6ffef", fontWeight: "900" },

  cancelFull: { marginTop: 12, alignSelf: "stretch", backgroundColor: "#1b2236", paddingVertical: 12, borderRadius: 12, alignItems: "center", borderWidth: 1, borderColor: "#2e3b5f" },
  cancelText: { color: "#c7d6ff", fontWeight: "800" },

  btnFlex: { flex: 1, minWidth: 120, alignItems: "center" },
  btnPressed: { opacity: 0.85 },
});
