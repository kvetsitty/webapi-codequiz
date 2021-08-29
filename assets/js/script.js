var startBtn = document.getElementById('startQuiz');
var submitButton = document.getElementById('submit');

document.getElementById("startBtn").addEventListener("click", startQuiz);

function startQuiz() {
    startTimer();

};

function endResults() {

}

//start timer for quiz
function startTimer() {
    remainingTime = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(remainingTime);
        };
        timeDisplay.textContent = "Time Left: " + timeLeft;
    }, 1000);
};

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