# E2E-MISSION-IMPOSSIBLE
An End to End project that's include arduino missions and trivia game. 
To choose an answer I set 4 laser sensor, and when the user shoot to his answer, with a laser gun, the HTML button will click it self.
For every 2 correct answers the user will have a number between 1 to 99, that will use him to win and end the game.
For every 3 correct anwers the user will send to an Arduino challenge. The Challenges are:
1. The Accurcy Challenge - The user try to take a metal loop through wire,from the start point to the end point, without touching the wire.
2. The Memory Challenge - At first, a random sequence of LEDs is generate. At first the arduino will show the first LED, and when the user will press the button with the same color of the LED, the next LED at the sequence will appear. Just like the old game 'Simon Says'.
3. The Speed On Challenge - The user needs to press as fast as he can on the current button that it's LED is turned ON.

All the strikes and the points if the arduino chllenges will appear on the mission screen.

After each challenge the user will get a random password to use in a key-pad. when the password is correct a RFID card will turn to him from the card machine I built. the user need to take out the card and touch with it the RFID (card reader). When he do that he will release the popup from the screen and he can return to the questions.

When the user reach to the 10th correct answer he will need to inswert all the numbers that given to him every 2 questions. the user will do that with a potentiometer and move to the next input with a button next to it. If the user insert all the numbers correctly he will finish the game and see the winners page. 
  
