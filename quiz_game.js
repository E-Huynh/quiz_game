//Selectors
var answers = document.getElementById("answers");
var question = document.getElementById("question");
var timer = document.getElementById("timeLeft");


//quiz questions
var questions = [
    {
        title: "The answer is A:",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "The answer is 1:",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        title: "The answer is I:",
        choices: ["I", "II", "III", "IV"],
        answer: "I"
    },
];

//Timer settings
var timeRemaining = 30;
var quizTimer;

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
    if (element.target.innerHTML === "Start"){
        question.innerText = questions[questionCount].title
        //START TIMER
        quizTimer = setInterval(decrementTime, 1000);
    }
    else if (element.target.innerHTML === "Submit"){
        //CALCULATE AND STORE TIME REMAINING
        var inputName = document.getElementsByClassName("input")[0].value;
        localStorage.setItem("Name", inputName);
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
        //SUBTRACT TIME FROM TIMER
        timeRemaining -= 15;
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