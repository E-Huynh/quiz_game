# Coding Quiz Game
## Project Description

The purpose of the project was to build a quiz game that asks a series of coding related questions. The game would display a question and populate buttons for possible answers. Upon selecting the correct answer, the questions and answers would cycle to the next question until all questions were answered. The game also utilizes a timer and the ability to input and store multiple highscores. The timer is reduced and the user is given visual indication if a incorect answer is selected.

## Technologies Utilized
* Flexbox
* CSS
* Javascript
* DOM manipulation
## Instructions
The landing page of the quiz displays the current stored highscore, a timer, a brief insructions, and a start button. When clicking start, the timer will start to decrease and the first set of questions and answers will be displayed. Choose an answer by clicking on it. If the correct answer was selected, the questions and answers will cycle. If a wrong answer was selected, the answer will turn red and 5 seconds will be substracted from the timer. After the quiz has been completed, the user can input their name into the highscores list along with the time remaining. A higher score is better. After submitting a score, the scores list will populated with previous scores for comparison. To replay, refresh the page, notice that the highscore now displays the highest score currently being stored.
## Functionality
* The text "No highscore" is displayed if the game has not had any score submitted
  * This will change to display the highest score currently saved after at least 1 score is submitted
* Upon clicking start, the timer starts to decrease and the first question and answers are displayed
  * Buttons will turn red if the incorrect answer is selected
  * Additionally, the timer will decrease by 5 
* Once the quiz is completed, the a name input and submit button will be displayed for the user to enter their name
  * Upon clicking submit, the name and remaining timer will be stored and displayed in the highscore list
  * Refreshing the page will now show the highest score stored in the Highscore display
* No limit to the number of score that can be saved
* The page is responsive, but was built for the IphoneX resolution
# Current Bugs/Improvements
* Clicking on the margin around a button acts as clicking the button. This can lead to misclick events.
* Replace the submit button with a "replay" button so the user doesn't have to refresh.

## Images
Start screen

![Start screen](https://github.com/E-Huynh/quiz_game/blob/master/assets/start_screen.png?raw=true)

Question and Answers

![Question and Answers](https://github.com/E-Huynh/quiz_game/blob/master/assets/questions.png?raw=true)

Quiz End Page and Highscore Input

![Quiz End Page and Highscore Input](https://github.com/E-Huynh/quiz_game/blob/master/assets/highscore-input.png?raw=true)

Highscore List

![Highscore List](https://github.com/E-Huynh/quiz_game/blob/master/assets/list.png?raw=true)

Highest Score Displayed

![Highest Score Displayed](https://github.com/E-Huynh/quiz_game/blob/master/assets/hsdisplay.png?raw=true)
