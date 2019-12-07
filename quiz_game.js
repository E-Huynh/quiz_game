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
var a = 0;
answers.addEventListener("click", function(element){
    if (element.target.innerHTML === "Start"){
        question.innerText = questions[a].title
    }
    //if a = length of questions objecct > return
    else if (a === (questions.length -1)){
        debugger;
        return alert(`you're done!!!`)
    }
    else if (element.target.innerHTML === questions[a].answer){
        a++;
        question.innerText = questions[a].title
    }
    else {
        alert("wrong");
    }
    answers.textContent = "";
    
    for (var i = 0; i < questions[a].choices.length; i++){
        var button = document.createElement("button");
        button.classList = "button";
        button.innerHTML = questions[a].choices[i];
        answers.append(button);
    }
    console.log(element.target.value);
})