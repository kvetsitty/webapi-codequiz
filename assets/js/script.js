var startBtn = document.getElementById('startQuiz');
var submitButton = document.getElementById('submit');

document.getElementById("startBtn").addEventListener("click", startQuiz);

function startQuiz() {

}

function endResults() {

}

//submit for results
submitButton.addEventListener('click', showResults);

//quiz questions
var testQuestions = [
    {
        question: "Question 1",
        answers: {
            a: "answer 1",
            b: "answer 2",
            c: "answer 3",
        },
        correctAnswer: "a"
    }
];