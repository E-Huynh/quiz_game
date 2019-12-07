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
        answer: "1"
    },
];

answers.addEventListener("click", function(){
    answers.textContent = "";
    for (var i = 0; i < questions[0].choices.length; i++){
        var button = document.createElement("button");
        button.classList = "button";
        button.innerHTML = questions[0].choices[i];
        answers.append(button);
    }
})