const question = document.getElementById('question');
//"Array.from()” separates the values written into it. everything he has reserved
const choices = Array.from(document.getElementsByClassName('choice-text'));

const progressText = document.getElementById('progressText'); //score table
const timeText = document.getElementById('timeText'); //table
const timeBarFull = document.getElementById('timeBarFull');
let timeCounter = 0; //
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQueston = {}; //current questıon
let acceptingAnswers = false; //answer
let score = 0;
let questionCounter = 0; // number of questıon
let availableQuesions = [];

setInterval(() => createQuestion, 1)

createQuestion = () => {
    const sayi1 = Math.round(Math.random() * 9)
    const sayi2 = Math.round(Math.random() * 9)
    const sayitoplam = sayi1 * sayi2
    var sayilar = [];
    sayilar[0] = sayitoplam

    do {
        sayilar[1] = Math.round(Math.random() * 99)
        sayilar[2] = Math.round(Math.random() * 99)
        sayilar[3] = Math.round(Math.random() * 99)
    } while ((sayilar[0] == sayilar[1]) || (sayilar[0] == sayilar[2]) || (sayilar[0] == sayilar[3]) ||
        (sayilar[1] == sayilar[2]) || (sayilar[1] == sayilar[3]) || (sayilar[2] == sayilar[3]));

    //mix the array
    var choice = [];

    do {
        choice[0] = sayilar[Math.floor(Math.random() * sayilar.length)]
        choice[1] = sayilar[Math.floor(Math.random() * sayilar.length)]
        choice[2] = sayilar[Math.floor(Math.random() * sayilar.length)]
        choice[3] = sayilar[Math.floor(Math.random() * sayilar.length)]
    } while ((choice[0] == choice[1]) || (choice[0] == choice[2]) || (choice[0] == choice[3]) ||
        (choice[1] == choice[2]) || (choice[1] == choice[3]) || (choice[2] == choice[3]));

    for (i = 0; i < 4; i++) {
        if (choice[i] == sayitoplam)
            answerIndex = i + 1;
    }
    let k = new Object;
    k = {
        question: sayi1 + " " + "x" + " " + sayi2 + "   " + "işleminin sonucu kaçtır?",
        choice1: choice[0],
        choice2: choice[1],
        choice3: choice[2],
        choice4: choice[3],
        answer: answerIndex
    }
    return k;
}
let questions = [];
for (let k = 0; k < 10; k++) {
    questions.push(createQuestion())
}

let switchA = 0; //music
document.querySelector("#startstop").addEventListener("click", () => {

        if (switchA == 1) {
            document.querySelector("#muzik").pause();
        } else {
            document.querySelector("#muzik").play();
        }
        switchA = !switchA;
    })
    //end music



timerPrint = () => {
    setInterval(() => {
        timeCounter++;
        timeText.innerText = `Time ${timeCounter}/${maxtime}`;
        timeBarFull.style.width = `${(timeCounter / maxtime) * 100}%`;
        if (timeCounter == 10) {
            getNewQuestion()
            timeCounter = 0
        }
    }, 1000)

}
timerPrint();

//contants
const correct_paun = 10; //poınt per questıon
const maxQuestions = 10; // number of questıon
const maxtime = 10;
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};
getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter > maxQuestions) {

        localStorage.setItem("mostRecentScore", score); //score value
        return window.location.assign('./end.html');
    }
    //questıon counter
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;

    // update the progress bar
    console.log;
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    const questionindex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionindex];
    question.innerText = currentQuestion.question; // 

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuesions.splice(questionindex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        timeCounter = 0;
        acceptingAnswers = false;
        const selectedChoise = e.target;
        const selectedAnswer = selectedChoise.dataset['number'];
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        if (classToApply === 'correct') {
            incrementScore(correct_paun);
        }
        selectedChoise.parentElement.classList.add(classToApply);
        selectedChoise.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
});
incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    }
    //clıck button
var tamEkranButon = document.getElementById("Fullscreen-button");

function Fullscreen() {
    // full screen
    var tamEkranDiv = document.getElementById("container2");

    var tamEkranFonk = tamEkranDiv.requestFullscreen ||
        tamEkranDiv.mozRequestFullScreen ||
        tamEkranDiv.msRequestFullscreen ||
        tamEkranDiv.webkitRequestFullScreen;
    tamEkranFonk.call(tamEkranDiv);
}

tamEkranButon.addEventListener('click', Fullscreen);
startGame();
