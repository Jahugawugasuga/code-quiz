var quizContainer = document.getElementById("codequiz"); //use to display/hide quiz questions
var welcomeTag = document.getElementById("welcome"); // use to display/hide welcome to quiz message
var questionId = document.getElementById("question"); // use to dispaly/hide quiz questions
var answer = document.querySelector(".answer"); // use to display/hide answers
var timeElement = document.querySelector(".time"); // use to display or hide timer
var initials = document.getElementById("userInitials") // use to display or hide userInitials
var finalInitials = document.getElementById("finalInitials"); // use to display or hide finalInitials
var startBtn = document.getElementById("starter"); // use to display or hide Start Button
var scoreFinal = document.getElementById("scoreFinal"); // use to display or hide user score
var test = document.getElementById("scores"); // use to display or hide high scores 
var resultsDiv = document.getElementById("results"); // use to display or high scores container
var points = 0; // user points
var submitBtn = document.getElementById("submitButton"); // use to display or hide submit button
var counter = 0 // used to cycle through questions 0-9
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var clearScores = document.getElementById("clearScores");
var highScores = document.getElementById("highScores");
var newGame = document.getElementById("restart");

ans1.addEventListener("click", function () {
    rightAnswer(ans1);
    nextQuestion();
});
ans2.addEventListener("click", function () {
    rightAnswer(ans2);
    nextQuestion();
});
ans3.addEventListener("click", function () {
    rightAnswer(ans3);
    nextQuestion();
});
ans4.addEventListener("click", function () {
    rightAnswer(ans4);
    nextQuestion();
});

//timer function - run once the quiz begins, clears info and displays submit button when times out
var countDown = 30;

function beginTimer() {

    var timerInterval = setInterval(function () {
        countDown--; //variable holding time element decreases 1 second at a time
        timeElement.textContent = countDown + " seconds remaining in quiz"; //displays time left in quiz 


        if (countDown <= 0) {
            clearInterval(timerInterval);
            submitBtn.style.display = "inline-block"; //submit button will display
            quizContainer.style.display = "none"; //no more quiz questions
            timeElement.style.display = "none"; //no more timer
            startBtn.style.display = "none"; //you cant see the start button

            resultsDiv.style.display = "block";
            initials.style.display = "block";

        }
    }, 1000);

}

startBtn.addEventListener("click", renderQuestion1);

let quizQuestions = [
    {
        question: "In the following array [zebra, horse, giraffe, donkey], what is the tallest creature?",
        answers: [
            "giraffe",
            "donkey",
            "zebra",
            "horse",
        ],
        correctAnswer: "giraffe"

    },
    {
        question: "Where is the proper placement of a script tag?",
        answers: [
            "top after head tag",
            "inline, whenever you need it",
            "bottom after closing body tag",
            "bottom before closing body tag"
        ],
        correctAnswer: "bottom before closing body tag"

    },
    {
        question: "What does CDN stand for?",
        answers: [
            "Content Data Net",
            "Complex Data Network",
            "Content Delivery Network",
            "Complex Delivery Net"
        ],
        correctAnswer: "Content Delivery Network"

    },
    {
        question: "What is the most correct syntax for a local CSS tag in the same folder as your html file?",
        answers: [
            "<a href './style.css' abs= 'stylesheet' ",
            "<style> './style.css' abs= 'stylesheet' ",
            "<link> href='./style.css' rel='stylesheet' ",
            "<link href='./style.css' rel='stylesheet' "
        ],
        correctAnswer: "<link href='./style.css' rel='stylesheet' "
    },
    {
        question: "What is the airspeed velocity of an unladen swallow? ",
        answers: [
            "I don't know that",
            "What do you mean, an African or European swallow?",
            "In order to maintain airspeed velocity, a swallow must beat its wings 35 times every second",
            "Are you suggesting coconuts migrate?"
        ],
        correctAnswer: "What do you mean, an African or European swallow?"
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Desktop Object Model",
            "Disease Objection Model",
            "Don't Omit Me",
            "Document Object Model"
        ],
        correctAnswer: "Document Object Model"
    },
    {
        question: "What is the correct order of margin,padding,border?",
        answers: [
            "image,padding,border,margin",
            "image,padding,margin,border",
            "image,margin,padding,border",
            "image,margin,border,padding"
        ],
        correctAnswer: "image,padding,border,margin"
    },
    {
        question: "What is the correct function to create a folder in terminal?",
        answers: [
            "touch",
            "folder",
            "mkdlr",
            "mkdir"

        ],
        correctAnswer: "mkdir"
    },
    {
        question: "What is the rank of specificity, greatest to least?",
        answers: [
            "id,element tag,class",
            "class,id,element tag",
            "element tag,class,id",
            "id,class, element tag"
        ],
        correctAnswer: "id,class, element tag"

    },
    {
        question: "What is the best way to write code? ",
        answers: [
            "wavy, well notated, descriptive labeling",
            "straight as a board, well notated, descriptive labeling",
            "as long as it works",
            "just as long as you can read it, that's the best"
        ],
        correctAnswer: "wavy, well notated, descriptive labeling"
    }

];
function addPoints() { //this adds points on right answers picked
    points++;
}

function renderQuestion1() {
    beginTimer();

    startBtn.style.display = "none"; //dont see the start button
    welcomeTag.style.display = "none"; //welcome tag is gone
    questionId.textContent = quizQuestions[0].question; //first question is rendered
    quizContainer.style.display = "block";

    for (var i = 0; i < 4; i++) {
        var buttonEl = document.getElementById("ans" + (i + 1)); //creates 4 button elements for button id ans1, ans2, ans3, ans4
        buttonEl.textContent = quizQuestions[0].answers[i]; //displays text content of answers on buttons
        buttonEl.style.display = "block"; //displays buttons in block style to user
    }

}

function nextQuestion() {
    counterFunc();
    questionId.textContent = quizQuestions[(counter)].question; //displays the question
    for (var i = 0; i < 4; i++) {
        if (counter <= 10) { //this will display the rest of the questions
            var buttonEl = document.getElementById("ans" + (i + 1)); //  
            buttonEl.textContent = quizQuestions[(counter)].answers[i]; //displays the text of button to be four choices
            buttonEl.style.display = "block";

        }
    }
    if (counter < 9) {
        welcomeTag.textContent = points + " Point(s) / " + counter + " Total Points Attempted";
        welcomeTag.style.display = "block";
        console.log("iran")
    } else if (counter = 9) {
        welcomeTag.textContent = points + " Point(s) / " + 10 + " Total Points Attempted";
        welcomeTag.style.display = "block";
        console.log("else ran")
    } else {
        countDown = 0;
    }

}
function rightAnswer(answer) {
    if (answer.getAttribute("id") === "ans1" && answer.innerHTML === quizQuestions[(counter)].correctAnswer) {
        addPoints();

    } else if (answer.getAttribute("id") === "ans2" && answer.innerHTML === quizQuestions[(counter)].correctAnswer) {
        addPoints();

    } else if (answer.getAttribute("id") === "ans3" && answer.innerHTML === quizQuestions[(counter)].correctAnswer) { //this works 
        addPoints();
    } else if (answer.getAttribute("id") === "ans4" && answer.innerHTML === quizQuestions[(counter)].correctAnswer) {
        addPoints();
    } else {
        wrongAnswer();
    }

}
// if right answer is picked, add points, else reduce time 
function wrongAnswer() { //this works
    countDown -= 3;
}

function counterFunc() { //this is working
    if (quizQuestions[(counter)] === quizQuestions[(9)]) { //this works perfectly
        countDown = 0;
    } else {
        counter++;
    }
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault;
    displayInitials();
    scoreBoard(saveUserData());

})

function saveUserData() {

    var scores = JSON.parse(localStorage.getItem("highscores")) || [];
    var userPoints = points; //capture user points
    var userInitials = document.getElementById("userInitials").value; //capture user input
    var userScores = {
        initials: userInitials,
        score: userPoints
    }
    scores.push(userScores);
    localStorage.setItem("highscores", JSON.stringify(scores));
    scoreFinal.textContent = userPoints //this display current user score
    finalInitials.textContent = userInitials //this displays current user initials 
    return scores
}

function displayInitials() {
    userInitials.style.display = "inline-block";
}

function scoreBoard(scores) {
    scores.sort((function (a, b) {
        return b.score - a.score;
    }));
    scores.forEach(function (user) {
        var pTag = document.createElement("p");
        pTag.textContent = `${user.initials} || ${user.score}`;
        highScores.appendChild(pTag);
    });

};

clearScores.addEventListener("click", clearHighScores);

function clearHighScores() {
    while (scores.length > 0) { 
        scores = [];
        
    }
    localStorage.removeItem("highscores");
    finalInitials.textContent = "";
    scoreFinal.textContent = "";
    highScores.textContent = "";

}

newGame.addEventListener("click", function () {
    counter = 0; 
    points = 0; 
    countDown = 30;
    welcomeTag.style.display = "inline-block";
    welcomeTag.innerText = "Welcome to Your Coding Quiz, Points are given for correct answers, time is removed for wrong answers."; 
    resultsDiv.style.display = "none"; 
    startBtn.style.display = "block"; 
    

});
