var quizContainer =document.getElementById("codequiz")
// let resultsContainer =document.getElementById("#results")
var submitButton =document.getElementById("#submit");
var timeElement= document.querySelector(".time");

quizContainer.textContent="Welcome to Your Code Quiz, where you must answer as many questions as you can in 60 seconds, wrong answers will deduct time."
;
document.body.appendChild(quizContainer)

var nextBtn = document.createElement("button");
nextBtn.innerHTML = "Next"
document.body.appendChild(nextBtn);

// function buildQuiz(){}

// function showResults(){}

var countDown = 6;

function setTime() {
    let timerInterval = setInterval (function(){
        countDown--;
        timeElement.textContent = countDown + " seconds remaining in quiz";
        if (countDown === 0) {
            clearInterval(timerInterval);

        }
    }, 1000);

}
setTime();


function showQuizInstructions(){

}
// this submit botton on click, will show results
submitButton.addEventListener("click", showResults);
// we want the instructions page to be run immediately on page open
showQuizInstructions()

let quizQuestions = [
    {
        question: "In the following array [zebra, horse, giraffe, donkey], what is the tallest creature and what index is it?",
    answers: {
        a: "giraffe, 2",
        b: "giraffe, 3",
        c: "horse, 2",
        d: "horse, 3"
    },
    correctAnswer: "a"
    },
    {
        question:"Where is the proper placement of a script tag?",
        answers:{
            a: "top after head tag",
            b: "inline, whenever you need it",
            c: "bottom after closing body tag",
            d: "bottom before closing body tag"
        },
        correctAnswer: "d"
    },
    {
     question: "What does CDN stand for?",
     answers: {
         a: "Content Data Net",
         b:"Complex Data Network",
         c:"Content Delivery Network",
         d:"Complex Delivery Net"
     },
     correctAnswer: "c"   
    },
    {
        question: "What is the most correct syntax for a local CSS tag in the same folder as your html file?",
        answers: {
            a: "<a href './style.css' abs= 'stylesheet' ",
            b: "<style> './style.css' abs= 'stylesheet' ",
            c: "<link> href='./style.css' rel='stylesheet' ",
            d: "<link href='./style.css' rel='stylesheet' "
        },
        correctAnswer: "d"
    },
    {
        question: "What is the airspeed velocity of an unladen swallow? ",
        answers:{
            a:"I don't know that",
            b:"What do you mean, an African or European swallow?",
            c:"In order to maintain airspeed velocity, a swallow must beat its wings 35 times every second",
            d:"Are you suggesting coconuts migrate?"
        },
        correctAnswer: "b"
    },
    {
        question: "What does DOM stand for?",
        answers: {
            a:"Desktop Object Model",
            b:"Disease Objection Model",
            c:"Don't Omit Me",
            d:"Document Object Model"
        },
        correctAnswer:"d"
    },
    {
        question: "What is the correct order of margin,padding,border?",
        answers: {
            a: "image,padding,border,margin",
            b: "image,padding,margin,border",
            c: "image,margin,padding,border",
            d: "image,margin,border,padding"
        },
        correctAnswer:"a"
    },
    {
        question: "What is the correct function to create a folder in terminal?",
        answers: {
            a: "touch",
            b: "folder",
            c: "mkdlr",
            d: "mkdir"

        },
        correctAnswer: "c"
    },
    {
        question: "What is the rank of specificity, greatest to least?",
        answers: {
            a: "id,element tag,class",
            b: "class,id,element tag",
            c: "element tag,class,id",
            d: "id,class, element tag"
        },
        correctAnswer: "d"

    },
    {
        question: "What is the best way to write code? ",
        answers: {
            a: "wavy, well notated, descriptive labeling",
            b: "straight as a board, well notated, descriptive labeling",
            c: "as long as it works",
            d: "just as long as you can read it, that's the best"
        },
        correctAnswer: "a"
    }

];
function buildMyQuiz (){
    // variable to store html output
    let output = [];
    // for each question
   let answersPicked = rightAnswers + wrongAnswers 


        }
    )
}

