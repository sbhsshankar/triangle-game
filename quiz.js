const quizForm = document.querySelector(".quiz-form");
const buttonSubmit = document.querySelector("#button-submit");
const outputQuiz = document.querySelector("#output-quiz");

const correctAnswers = ["90°", "right angled"]

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }

    outputQuiz.innerText = "Your score is " + score;
}

buttonSubmit.addEventListener("click", calculateScore);