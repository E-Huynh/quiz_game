//Selectors
var answers = document.getElementById("answers");
var question = document.getElementById("question");
var timer = document.getElementById("timeLeft");
var HSname = document.getElementById("highscoreName");
var HSscore = document.getElementById("highscoreValue");


//quiz questions
var questions = [
    {
        title: "What is the extension for Javascript files?",
        choices: [".js", ".html", ".css", ".txt"],
        answer: ".js"
    },
    {
        title: "In CSS, which would give the largest font-size?",
        choices: ["0.5em", "2.0em", "1.5em", "1.0em"],
        answer: "2.0em"
    },
    {
        title: "Which of the follow is NOT a loop in Javascript?",
        choices: ["While", "For", "For/In", "Fruit"],
        answer: "Fruit"
    },
    {
        title: "Booleans values are true or false.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        title: "Which of the follow is NOT an attribute in the CSS Box Model?",
        choices: ["Height", "Padding", "Border", "Spacing"],
        answer: "Spacing"
    },
];

//Timer settings
var timeRemaining = 180;
var quizTimer;
var highscoreList = localStorage.getItem("highscores") || "[]";
var storedscores = JSON.parse(highscoreList);
var highestScore = 0;

function decrementTime(){
    if (timeRemaining > 0){
        timeRemaining--;
        timer.innerText = timeRemaining;
    }
}

//Quiz functionality
var questionCount = 0;
//consider a selector in the eventlistener for button to get right of bug!!!!
answers.addEventListener("click", function(element){
    //Conditionals
    // Checks to make sure a button was clicked and not the parent
    if (element.target.className !== "button") {
        return;
    }
    if (element.target.innerHTML === "Start"){
        question.innerText = questions[questionCount].title
        quizTimer = setInterval(decrementTime, 1000);
    }
    else if (element.target.innerHTML === "Submit"){
        //CALCULATE AND STORE TIME REMAINING
        var inputName = document.getElementsByClassName("input")[0].value;
        highscoreList = localStorage.getItem("highscores") || "[]";
        storedscores = JSON.parse(highscoreList);
        storedscores.push(
            {
            Name: inputName,
            Score: timeRemaining,
            });
        localStorage.setItem("highscores", JSON.stringify(storedscores));

        question.innerText = "Scores List"
        for (var i = 0; i < highscoreList.length; i++){
            var list = document.createElement("p");
            list.innerText = `${storedscores[i].Name}: ${storedscores[i].Score}`;
            question.append(list);
        }
        return;
    }
    else if (questionCount === (questions.length -1) && element.target.innerHTML === questions[questionCount].answer){
        clearInterval(quizTimer);
        question.innerHTML = "You've answered all questions correctly. Enter your name to track your score. <br>";
        for (var i = 0; i < 4; i++){
            var button = document.querySelector(".button");
            button.remove();
        }
        var highscoreLabel = document.createElement("label");
        var highscoreInput = document.createElement("input");
        highscoreInput.classList = "input";
        highscoreLabel.innerText = "Name: ";
        button.classList = "button";
        button.innerHTML = "Submit";
        question.append(highscoreLabel);
        question.append(highscoreInput);
        answers.append(button);
        return;
    }
    else if (element.target.innerHTML === questions[questionCount].answer){
        questionCount++;
        question.innerText = questions[questionCount].title
    }
    else {
        if (timeRemaining > 5){
            timeRemaining -= 5;
        }
        else{
            timeRemaining = 0;
            timer.innerText = timeRemaining;
        }
        element.target.classList.add("wrong");
        return;
    }
    //Reset and generate buttons
    answers.textContent = "";
    for (var i = 0; i < questions[questionCount].choices.length; i++){
        var button = document.createElement("button");
        button.classList = "button";
        button.innerHTML = questions[questionCount].choices[i];
        answers.append(button);
    }
})

//Displays HS stored
for (var i = 0; i<storedscores.length; i++){
    if (storedscores[i].Score >= highestScore){
        highestScore = storedscores[i].Score;
        highestScoreName = storedscores[i].Name;
    }
}
HSname.innerText = highestScoreName;
HSscore.innerText = highestScore;