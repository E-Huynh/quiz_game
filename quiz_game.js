//Selectors
var answers = document.getElementById("answers");

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
        answer: "2"
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
var a = 0;
answers.addEventListener("click", function(banana){
    if (banana.target.innerHTML === questions[a].answer){
        a++;
    }
    answers.textContent = "";
    
    for (var i = 0; i < questions[a].choices.length; i++){
        var button = document.createElement("button");
        button.classList = "button";
        button.innerHTML = questions[a].choices[i];
        answers.append(button);
    }
    console.log(banana.target.value);
})