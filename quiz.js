//get the points working
//submit form to show
//when click submit after initials - send points and initials to local storage, also retrieve
//make a key value pair for initials and score


// var userInitials = document.getElementById ("username");
var quizContainer = document.getElementById("codequiz");
var welcomeTag = document.getElementById("welcome");
var questionId = document.getElementById("question");
var answer1Id = document.getElementById("ans1");
var answer2Id = document.getElementById("ans2");
var answer3Id = document.getElementById("ans3");
var answer4Id = document.getElementById("ans4");
// let resultsContainer =document.getElementById("results")
var submitButton =document.getElementById("submit");
var timeElement= document.querySelector(".time");
var mostRecentScore = localStorage.getItem("mostRecentScore")
var points = 0;
var resultsBtn = document.getElementById("results");
resultsBtn.style.display="none";
var i = 0;
var finalPoints = ""

//start button functionality - used to start the quiz on click this works
var startBtn = document.createElement("button");
startBtn.innerHTML = "Start"
document.body.appendChild(startBtn);
startBtn.addEventListener("click",startQuiz); //first parameter is event, then second is function


//timer function - run once the quiz begins, clears info and displays submit button when times out
var countDown = 3;

function setTime() { //this works
    let timerInterval = setInterval (function(){ //why does function work and not a named function? 
        countDown--; //timer decrements by 1 
        timeElement.textContent = countDown + " seconds remaining in quiz";
        answer1Id.style.display = "block";
        answer2Id.style.display = "block";
        answer3Id.style.display = "block";
        answer4Id.style.display = "block";
        
        if (countDown <= 0) {
            clearInterval(timerInterval);
            submitButton.setAttribute(onclick, finalPageDisplay);
            resultsBtn.style.display="block";
            submitButton.style.display = "block";
            quizContainer.style.display= "none";
            timeElement.style.display = "none";
            finalPageDisplay();
            

            return 


        }
    }, 1000); // 1 second delay after button is pushed


}

//if user selects button with correct answer, needs to store that data, compare with 

let quizQuestions = [ // questions and answers to be shown to user stored as an array this works
    {
        question: "In the following array [zebra, horse, giraffe, donkey], what is the tallest creature?",
        answers: [
             "giraffe",  //needs to be a button with event listener, runs point function
             "donkey", // answer.value of answers 
             "zebra",
             "horse"
        ],
        correctAnswer: "giraffe"
     //put the same value of the answer was, use triple equals operator
},
{
    question:"Where is the proper placement of a script tag?",
    answers:[
         "top after head tag",
         "inline, whenever you need it",
         "bottom after closing body tag",
         "bottom before closing body tag"
    ],
    correctAnswer:"bottom before closing body tag"
   
},

{
    question: "What does CDN stand for?",
    answers: [
         "Content Data Net",
        "Complex Data Network",
        "Content Delivery Network",
        "Complex Delivery Net"
    ],
    correctAnswer:"Content Delivery Network"
      
    },
    {
        question: "What is the most correct syntax for a local CSS tag in the same folder as your html file?",
        answers: [
             "<a href './style.css' abs= 'stylesheet' ",
             "<style> './style.css' abs= 'stylesheet' ",
             "<link> href='./style.css' rel='stylesheet' ",
             "<link href='./style.css' rel='stylesheet' "
        ],
        correctAnswer:"<link href='./style.css' rel='stylesheet' "
    },
    {
        question: "What is the airspeed velocity of an unladen swallow? ",
        answers:[
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
        correctAnswer:"Document Object Model"
    },
    {
        question: "What is the correct order of margin,padding,border?",
        answers: [
             "image,padding,border,margin",
             "image,padding,margin,border",
             "image,margin,padding,border",
             "image,margin,border,padding"
        ],
        correctAnswer:"image,padding,border,margin"
    },
    {
        question: "What is the correct function to create a folder in terminal?",
        answers: [
             "touch",
             "folder",
             "mkdlr",
             "mkdir"
            
        ],
        correctAnswer:"mkdir"
    },
    {
        question: "What is the rank of specificity, greatest to least?",
        answers: [
            "id,element tag,class",
            "class,id,element tag",
            "element tag,class,id",
            "id,class, element tag"
        ],
        correctAnswer:"id,class, element tag"
        
    },
    {
        question: "What is the best way to write code? ",
        answers: [
            "wavy, well notated, descriptive labeling",
            "straight as a board, well notated, descriptive labeling",
            "as long as it works",
            "just as long as you can read it, that's the best"
        ],
        correctAnswer:"wavy, well notated, descriptive labeling"
    }
    
];

//when the quiz begins, welcome to quiz phrase and start button are hidden, 
//question 1 and answers displayed
//then timer begins

function addPoints() { //this works
    return ++points; //++ before varialbe will increment and then return
    }


function handleClick(){
   nextQuestion();
   rightAnswer();
}

function startQuiz (){ // this works
    startBtn.style.display ="none";
    welcomeTag.style.display= "none";
    questionId.textContent = quizQuestions[0].question;
    answer1Id.textContent = quizQuestions[0].answers[0];//right answer
    answer2Id.textContent = quizQuestions[0].answers[1];
    answer3Id.textContent = quizQuestions[0].answers[2];
    answer4Id.textContent = quizQuestions[0].answers[3];
    
    answer1Id.addEventListener("click", rightAnswer())
    setTime();
   
}



function nextQuestion() { 
    //if correct answer is selected, add 1 point 
    // if wrong answer is selected, subtract 1 seconds 
    //this displays the question and answers - this works 
   questionId.textContent = quizQuestions[1].question;
    answer1Id.textContent = quizQuestions[1].answers[0];
    answer2Id.textContent = quizQuestions[1].answers[1];
    answer3Id.textContent = quizQuestions[1].answers[2];
    answer4Id.textContent = quizQuestions[1].answers[3];
    
    
    answer4Id.addEventListener("click",rightAnswer())
 

    //try querySelectorAll - select ids, separated by commas. cant get it to work

    document.querySelector('#ans2').setAttribute( "onClick", "question2()" );
    document.querySelector('#ans3').setAttribute( "onClick", "question2()" );
    document.querySelector('#ans4').setAttribute( "onClick", "question2()" );
    document.querySelector('#ans1').setAttribute( "onClick", "question2()" );
}
function question2 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[2].question;
    answer1Id.textContent = quizQuestions[2].answers[0];
    answer2Id.textContent = quizQuestions[2].answers[1];
    answer3Id.textContent = quizQuestions[2].answers[2];
    answer4Id.textContent = quizQuestions[2].answers[3]; 
    
    answer3Id.addEventListener("click",rightAnswer())
    
    document.querySelector('#ans2').setAttribute( "onClick", "question3()" );
    document.querySelector('#ans3').setAttribute( "onClick", "question3()" );
    document.querySelector('#ans4').setAttribute( "onClick", "question3()" );
    document.querySelector('#ans1').setAttribute( "onClick", "question3()" );
}
function question3 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[3].question;
    answer1Id.textContent = quizQuestions[3].answers[0];
    answer2Id.textContent = quizQuestions[3].answers[1];
    answer3Id.textContent = quizQuestions[3].answers[2];
    answer4Id.textContent = quizQuestions[3].answers[3]; 
    
    answer4Id.addEventListener("click",rightAnswer())
      
            document.querySelector('#ans2').setAttribute( "onClick", "question4()" );
            document.querySelector('#ans3').setAttribute( "onClick", "question4()" );
            document.querySelector('#ans4').setAttribute( "onClick", "question4()" );
            document.querySelector('#ans1').setAttribute( "onClick", "question4()" );
}
function question4 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[4].question;
    answer1Id.textContent = quizQuestions[4].answers[0];
    answer2Id.textContent = quizQuestions[4].answers[1];
    answer3Id.textContent = quizQuestions[4].answers[2];
    answer4Id.textContent = quizQuestions[4].answers[3]; 
    answer2Id.addEventListener("click",rightAnswer())
   
            document.querySelector('#ans2').setAttribute( "onClick", "question5()" );
            document.querySelector('#ans3').setAttribute( "onClick", "question5()" );
            document.querySelector('#ans4').setAttribute( "onClick", "question5()" );
            document.querySelector('#ans1').setAttribute( "onClick", "question5()" );
}

function question5 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[5].question;
    answer1Id.textContent = quizQuestions[5].answers[0];
    answer2Id.textContent = quizQuestions[5].answers[1];
    answer3Id.textContent = quizQuestions[5].answers[2];
    answer4Id.textContent = quizQuestions[5].answers[3]; 
    answer4Id.addEventListener("click",rightAnswer())
   
    document.querySelector('#ans2').setAttribute( "onClick", "question6()" );
    document.querySelector('#ans3').setAttribute( "onClick", "question6()" );
    document.querySelector('#ans4').setAttribute( "onClick", "question6()" );
    document.querySelector('#ans1').setAttribute( "onClick", "question6()" );
   
}
function question6 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[6].question;
    answer1Id.textContent = quizQuestions[6].answers[0];
    answer2Id.textContent = quizQuestions[6].answers[1];
    answer3Id.textContent = quizQuestions[6].answers[2];
    answer4Id.textContent = quizQuestions[6].answers[3]; 
    answer1Id.addEventListener("click",rightAnswer())
 
    document.querySelector('#ans2').setAttribute( "onClick", "question7()" );
    document.querySelector('#ans3').setAttribute( "onClick", "question7()" );
    document.querySelector('#ans4').setAttribute( "onClick", "question7()" );
    document.querySelector('#ans1').setAttribute( "onClick", "question7()" );
}
function question7 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[7].question;
    answer1Id.textContent = quizQuestions[7].answers[0];
    answer2Id.textContent = quizQuestions[7].answers[1];
    answer3Id.textContent = quizQuestions[7].answers[2];
    answer4Id.textContent = quizQuestions[7].answers[3]; 
    answer4Id.addEventListener("click",rightAnswer())

    document.querySelector('#ans2').setAttribute( "onClick", "question8()" );
    document.querySelector('#ans3').setAttribute( "onClick", "question8()" );
    document.querySelector('#ans4').setAttribute( "onClick", "question8()" );
    document.querySelector('#ans1').setAttribute( "onClick", "question8()" );
}
function question8 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[8].question;
    answer1Id.textContent = quizQuestions[8].answers[0];
    answer2Id.textContent = quizQuestions[8].answers[1];
    answer3Id.textContent = quizQuestions[8].answers[2];
    answer4Id.textContent = quizQuestions[8].answers[3]; 
    answer4Id.addEventListener("click",rightAnswer())
 
    document.querySelector('#ans2').setAttribute( "onClick", "question9()" );
    document.querySelector('#ans3').setAttribute( "onClick", "question9()" );
    document.querySelector('#ans4').setAttribute( "onClick", "question9()" );
    document.querySelector('#ans1').setAttribute( "onClick", "question9()" );
    
}

function question9 (){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[9].question;
    answer1Id.textContent = quizQuestions[9].answers[0];
    answer2Id.textContent = quizQuestions[9].answers[1];
    answer3Id.textContent = quizQuestions[9].answers[2];
    answer4Id.textContent = quizQuestions[9].answers[3];

    answer1Id.addEventListener("click",rightAnswer())

}

var index =0
//if right answer is picked, add points, else reduce time 
function rightAnswer(){

    
if (quizQuestions[index].correctAnswer===quizQuestions[index].answers[index]){
    addPoints();
    index++;
console.log(points)

} else {
    countDown--;
    index++;
}
}

//we need to set attribute of multiple elements HW assignment 

// questions are being displayed, need to add points to it
//correct answer object back into quiz questions array 
//working with objects in quizQuestion array
//compare text value of button clicked to value of correct answer
//if its true then add ++
//if its false then lose time --





// this submit botton on click, will show results
// submitButton.addEventListener("click", showResults);

// function showResults(){}

function finalPageDisplay () { //when this is displayed, then these elements will appear
   resultsBtn.innerText = "HighScores";

}
    
    

//some form, input, where user puts in initials var userInitials = getelementbyId("input").value

//localStorage.setItem(key,value ) storing objects vs strings 
/*need a nextQuestionFunction - needs to clear current question and answers, 
bring up next question and answers
target innerText
how to start the game target codequiz div and wrap around the button 

need a for loop to go through questions and answers 
nextQuestionFunction will be called when any answer is selected
quiz will end when no time is remaining
endQuiz text - thanks for playing enter initials - enter point amount in local storage 
put points in localstorage - those points must be in an object form - strings only 
*/
