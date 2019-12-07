//Selectors
var answers = document.getElementById("answers");
var question = document.getElementById("question");

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

//chooses a random questions
function randomQ(){
    var random = Math.floor(Math.random() * questions.length + 1);
    return random;
}
var questionCount = 0;
answers.addEventListener("click", function(element){
    if (element.target.innerHTML === "Start"){
        question.innerText = questions[questionCount].title
    }
    else if (questionCount === (questions.length -1)){
        return alert(`you're done!!!`)
    }
    else if (element.target.innerHTML === questions[questionCount].answer){
        questionCount++;
        question.innerText = questions[questionCount].title
    }
    else {
        alert("wrong");
    }
    answers.textContent = "";
    for (var i = 0; i < questions[questionCount].choices.length; i++){
        var button = document.createElement("button");
        button.classList = "button";
        button.innerHTML = questions[questionCount].choices[i];
        answers.append(button);
    }
})