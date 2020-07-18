var quizContainer = document.getElementById("codequiz");
var welcomeTag = document.getElementById("welcome");
var questionId = document.getElementById("question");
var answer1Id = document.getElementById("ans1");
var answer2Id = document.getElementById("ans2");
var answer3Id = document.getElementById("ans3");
var answer4Id = document.getElementById("ans4");
var timeElement= document.querySelector(".time");
var initials = document.getElementById("userInitials");
var startBtn = document.getElementById("starter"); 
var scoreFinal = document.getElementById("scoreFinal");
var resultsBtn = document.getElementById("results");
var points = 0;
var answerIds = [ "answer1Id", "answer2Id", "answer3Id", "answer4Id"]
var answerOptions = ["ans1", "ans2", "ans3", "ans4"]

// for (var k = 0; k<answerIds.length; k++){}
    // answerIds[k].textContent=quizQuestions[7].answers[k];

//timer function - run once the quiz begins, clears info and displays submit button when times out
var countDown = 10;

startBtn.addEventListener("click",startQuiz);

function setTime() { 
    var timerInterval = setInterval (function(){ 
        countDown--; 
        timeElement.textContent = countDown + " seconds remaining in quiz";
        // for (var l = 0; l<answerIds.length; l++){
        // answerOptions[l].style.display = "block";}
        // console.log (answerIds[l]);
        answer1Id.style.display = "block";
        answer2Id.style.display = "block";
        answer3Id.style.display = "block";
        answer4Id.style.display = "block";
        
        if(countDown <= 0) {
            clearInterval(timerInterval);
            resultsBtn.style.display="block";
            submitBtn.style.display = "block";
            quizContainer.style.display= "none";
            timeElement.style.display = "none";
            startBtn.style.display = "none";
            

        }
    }, 1000); 


}

let quizQuestions = [ 
    {
        question: "In the following array [zebra, horse, giraffe, donkey], what is the tallest creature?",
        answers: [
             "giraffe",  
             "donkey", 
             "zebra",
             "horse"
    ],
        correctAnswer: "giraffe"
    
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
function addPoints() { 
    points++;  
    }


function handleClick(){
   nextQuestion();
   rightAnswer();
}

function startQuiz(){ 
    startBtn.style.display ="none";
    welcomeTag.style.display= "none";
    questionId.textContent = quizQuestions[0].question;

    for (let i =0; i<4; i++){
        answerId[i].textContent = quizQuestions[0].answers[i]
    }
    answer1Id.textContent = quizQuestions[0].answers[0];
    answer2Id.textContent = quizQuestions[0].answers[1];
    answer3Id.textContent = quizQuestions[0].answers[2];
    answer4Id.textContent = quizQuestions[0].answers[3];
    
    answer1Id.addEventListener("onclick", rightAnswer());
    setTime();
   
}

function nextQuestion() { 
  
   questionId.textContent = quizQuestions[1].question;

//    for (var b =0; b<answerIds.length; b++){
//     answerIds[b].textContent = quizQuestions[1].answers[b];
// }
    answer1Id.textContent = quizQuestions[1].answers[0];
    answer2Id.textContent = quizQuestions[1].answers[1];
    answer3Id.textContent = quizQuestions[1].answers[2];
    answer4Id.textContent = quizQuestions[1].answers[3];
    
    
    answer4Id.addEventListener("click",rightAnswer());

    document.querySelector('#ans2').setAttribute( "onclick", "question2()" );
    document.querySelector('#ans3').setAttribute( "onclick", "question2()" );
    document.querySelector('#ans4').setAttribute( "onclick", "question2()" );
    document.querySelector('#ans1').setAttribute( "onclick", "question2()" );
}
function question2(){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[2].question;

    // for (var c =0; c<answerIds.length; c++){
    //     answerIds[c].textContent = quizQuestions[2].answers[c];
    //     {
    answer1Id.textContent = quizQuestions[2].answers[0];
    answer2Id.textContent = quizQuestions[2].answers[1];
    answer3Id.textContent = quizQuestions[2].answers[2];
    answer4Id.textContent = quizQuestions[2].answers[3]; 
    
    answer3Id.addEventListener("onclick",rightAnswer());

    // for (var i =0 ; i<answerOptions.length; i++){
    //     document.getElementById(answerOptions[i]).setAttribute("onclick","question3()");
    // }
    
    document.querySelector('#ans2').setAttribute( "onclick", "question3()" );
    document.querySelector('#ans3').setAttribute( "onclick", "question3()" );
    document.querySelector('#ans4').setAttribute( "onclick", "question3()" );
    document.querySelector('#ans1').setAttribute( "onclick", "question3()" );
}
function question3(){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[3].question;
    answer1Id.textContent = quizQuestions[3].answers[0];
    answer2Id.textContent = quizQuestions[3].answers[1];
    answer3Id.textContent = quizQuestions[3].answers[2];
    answer4Id.textContent = quizQuestions[3].answers[3]; 
    
    answer4Id.addEventListener("onclick",rightAnswer());

     // for (var i =0 ; i<answerOptions.length; i++){
    //     document.getElementById(answerOptions[i]).setAttribute("onclick","question4()");
    // }
      
            document.querySelector('#ans2').setAttribute( "onclick", "question4()" );
            document.querySelector('#ans3').setAttribute( "onclick", "question4()" );
            document.querySelector('#ans4').setAttribute( "onclick", "question4()" );
            document.querySelector('#ans1').setAttribute( "onclick", "question4()" );
}
function question4(){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[4].question;
    answer1Id.textContent = quizQuestions[4].answers[0];
    answer2Id.textContent = quizQuestions[4].answers[1];
    answer3Id.textContent = quizQuestions[4].answers[2];
    answer4Id.textContent = quizQuestions[4].answers[3]; 
    answer2Id.addEventListener("onclick",rightAnswer());

      // for (var i =0 ; i<answerOptions.length; i++){
    //     document.getElementById(answerOptions[i]).setAttribute("onclick","question5()");
    // }
   
            document.querySelector('#ans2').setAttribute( "onclick", "question5()" );
            document.querySelector('#ans3').setAttribute( "onclick", "question5()" );
            document.querySelector('#ans4').setAttribute( "onclick", "question5()" );
            document.querySelector('#ans1').setAttribute( "onclick", "question5()" );
}

function question5(){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[5].question;
    answer1Id.textContent = quizQuestions[5].answers[0];
    answer2Id.textContent = quizQuestions[5].answers[1];
    answer3Id.textContent = quizQuestions[5].answers[2];
    answer4Id.textContent = quizQuestions[5].answers[3]; 
    answer4Id.addEventListener("onclick",rightAnswer())

      // for (var i =0 ; i<answerOptions.length; i++){
    //     document.getElementById(answerOptions[i]).setAttribute("onclick","question6()");
    // }
   
    document.querySelector('#ans2').setAttribute( "onclick", "question6()" );
    document.querySelector('#ans3').setAttribute( "onclick", "question6()" );
    document.querySelector('#ans4').setAttribute( "onclick", "question6()" );
    document.querySelector('#ans1').setAttribute( "onclick", "question6()" );
   
}
function question6(){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[6].question;
    answer1Id.textContent = quizQuestions[6].answers[0];
    answer2Id.textContent = quizQuestions[6].answers[1];
    answer3Id.textContent = quizQuestions[6].answers[2];
    answer4Id.textContent = quizQuestions[6].answers[3]; 
    answer1Id.addEventListener("onclick",rightAnswer());
 
    document.querySelector('#ans2').setAttribute( "onclick", "question7()" );
    document.querySelector('#ans3').setAttribute( "onclick", "question7()" );
    document.querySelector('#ans4').setAttribute( "onclick", "question7()" );
    document.querySelector('#ans1').setAttribute( "onclick", "question7()" );
}
function question7(){
    //whenever a button change the attributes of the button onclick
    // var answerIds = [ "answer1Id", "answer2Id", "answer3Id", "answer4Id"]
    // for (var k = 0; k<answerIds.length; k++){
    //     answerIds[k].textContent=quizQuestions[7].answers[k];
        console.log (answerIds[k].textContent=quizQuestions[7].answers[k])
        // console.log (answer1Id.textContent = quizQuestions[7].answers[0])
        // console.log(answer4Id.textContent = quizQuestions[7].answers[3])
    }
    questionId.textContent = quizQuestions[7].question;
    // answer1Id.textContent = quizQuestions[7].answers[0];
    // answer2Id.textContent = quizQuestions[7].answers[1];
    // answer3Id.textContent = quizQuestions[7].answers[2];
    // answer4Id.textContent = quizQuestions[7].answers[3]; 
    answer4Id.addEventListener("onclick",rightAnswer());

    // for (var i =0 ; i<answerOptions.length; i++){
    //     document.getElementById(answerOptions[i]).setAttribute("onclick","question8()");
    // }

    document.querySelector('#ans2').setAttribute( "onclick", "question8()" );
    document.querySelector('#ans3').setAttribute( "onclick", "question8()" );
    document.querySelector('#ans4').setAttribute( "onclick", "question8()" );
    document.querySelector('#ans1').setAttribute( "onclick", "question8()" );
// }
function question8(){
    //whenever a button change the attributes of the button onclick
    questionId.textContent = quizQuestions[8].question;
    answer1Id.textContent = quizQuestions[8].answers[0];
    answer2Id.textContent = quizQuestions[8].answers[1];
    answer3Id.textContent = quizQuestions[8].answers[2];
    answer4Id.textContent = quizQuestions[8].answers[3]; 
    answer4Id.addEventListener("onclick",rightAnswer());

    // for (var i =0 ; i<answerOptions.length; i++){
    //     document.getElementById(answerOptions[i]).setAttribute("onclick","question8()");
    // }
 
    document.querySelector('#ans2').setAttribute( "onclick", "question9()" );
    document.querySelector('#ans3').setAttribute( "onclick", "question9()" );
    document.querySelector('#ans4').setAttribute( "onclick", "question9()" );
    document.querySelector('#ans1').setAttribute( "onclick", "question9()" );
    
}

function question9(){
    //whenever a button is clicked change the attributes of the button onclick
    questionId.textContent = quizQuestions[9].question;
    answer1Id.textContent = quizQuestions[9].answers[0];
    answer2Id.textContent = quizQuestions[9].answers[1];
    answer3Id.textContent = quizQuestions[9].answers[2];
    answer4Id.textContent = quizQuestions[9].answers[3];

    answer1Id.addEventListener("onclick",rightAnswer());


}
//if right answer is picked, add points, else reduce time 
function rightAnswer(){ 
    var j=0  ;
    if (quizQuestions[j].correctAnswer===quizQuestions[j].answers[j]){
            addPoints();
            j++;
} else {
         countDown--;
        j++;
}
}
// function saveUserData(){
    
//     localStorage.setItem("points", JSON.stringify(points));
//    var userPoints = JSON.parse(localStorage.getItem("points"));
//     var userInitials = document.getElementById("userInitials").value;
//     localStorage.setItem("intials", userInitials);
//     var finalUserInitials = localStorage.getItem("initials");

// }
    
var submitBtn =document.getElementById("submitButton");

// submitBtn.addEventListener("click",saveUserData());
// submitBtn.addEventListener("keydown", saveUserData());

// function preventSubmit (submitBtn){

//     submitBtn.preventDefault;
// }


// function quizResults(event) {
//     if (event.key === "Enter"){
//     console.log( "im clicked")
// }
// userInitials.onkeyup = saveUserData;

// }    

