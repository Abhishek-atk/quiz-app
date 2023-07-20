const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector(".buttons .quit");
const continueBtn = document.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");


startBtn.addEventListener("click", () => {
    infoBox.classList.add("activeInfo");
})

exitBtn.addEventListener("click", () => {
    infoBox.classList.remove("activeInfo");
})

continueBtn.addEventListener("click", () => {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestion(0);
})


let que_count = 0;
let que_numb = 1;

const nextBtn = quizBox.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestion(que_count);
        queCounter(que_numb);
    } else {
        console.log("Question Completed");
    }
})

function showQuestion(index) {
    const question = document.querySelector(".question");
    const options_list = document.querySelector(".option-list");
    let que_tag = `<span>${questions[index].id}. ${questions[index].question}</span>`;
    let option_tag = `<div class="option"><span>${questions[index].options[0]}</span></div>`
        + `<div class="option"><span>${questions[index].options[1]}</span></div>`
        + `<div class="option"><span>${questions[index].options[2]}</span></div>`
        + `<div class="option"><span>${questions[index].options[3]}</span></div>`
    question.innerHTML = que_tag;
    options_list.innerHTML = option_tag;
    queCounter(1)

    const option = options_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    if (userAnswer == correctAnswer) {
        answer.classList.add("correct");
        console.log("Correct Answer");
    } else {
        answer.classList.add("incorrect");
        console.log("Wrong Answer");
    }

}


function queCounter(index) {
    const bottomQueCount = document.querySelector(".total-que");
    let queCount_tag = `<span> <p>${index}</p> of <p>${questions.length}</p> Questions</p></span>`
    bottomQueCount.innerHTML = queCount_tag;
}
