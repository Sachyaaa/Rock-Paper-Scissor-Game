choices = ['paper', 'rock', 'scissor'];

const btns = document.querySelectorAll(".sign");
const scoreNum = document.getElementById("score-num");
const main = document.getElementById("signs");
const step2 = document.getElementById("step2");
const userPicked = document.getElementById("userSelection");
const userPickedImg = document.querySelector("#userSelection img");
const compPicked = document.getElementById("compSelection");
const compPickedImg = document.querySelector("#compSelection img");
const resultTxt = document.getElementById("result-txt");
const result = document.getElementById("result");
const playAgain = document.getElementById("play-again");
const rules = document.querySelector(".rules");
const rulesPopup = document.getElementById("rules-popup");
const close = document.getElementById("close");


let score = 0;
let winner = undefined;
let computerChoice ;


rules.addEventListener('click',()=>{
    rulesPopup.style.display = "block";
})
close.addEventListener('click',()=>{
    rulesPopup.style.display = "none";
})

playAgain.addEventListener('click', () =>{
    main.style.display = "flex";
    step2.style.display = "none"; 
    compPicked.classList.remove("paper");
    compPicked.classList.remove("rock");
    compPicked.classList.remove("scissor");
    compPicked.classList.remove("sign");
    result.style.display = 'none';
    compPickedImg.src = " ";
})

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        userChoice = btn.getAttribute('alt');
        computerChoice = pickRandom();
        main.style.display = "none";
        step2.style.display = "flex";

        userSelection();
        
        setTimeout(compSelection,2000);
      
        
        
        console.log("user choice", userChoice);
        console.log("Computer choice", computerChoice);
        console.log(winner);


    })
})


function pickRandom() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function userSelection(){
    if(userChoice === "paper"){
        userPickedImg.src = "./images/icon-paper.svg";
        userPicked.classList.add("paper");
        userPicked.classList.remove("rock");
        userPicked.classList.remove("scissor");
    }else if(userChoice === "rock"){
        userPickedImg.src = "./images/icon-rock.svg";
        userPicked.classList.add("rock");
        userPicked.classList.remove("paper");
        userPicked.classList.remove("scissor");
    }else{
        userPickedImg.src = "./images/icon-scissors.svg";
        userPicked.classList.add("scissor");
        userPicked.classList.remove("rock");
        userPicked.classList.remove("paper");
    }
}

function compSelection(){
    if(computerChoice === "paper"){
        compPickedImg.src = "./images/icon-paper.svg";
        compPicked.classList.add("sign");
        compPicked.classList.add("paper");
        compPicked.classList.remove("rock");
        compPicked.classList.remove("scissor");
    }else if(computerChoice === "rock"){
        compPickedImg.src = "./images/icon-rock.svg";
        compPicked.classList.add("sign");
        compPicked.classList.add("rock");
        compPicked.classList.remove("paper");
        compPicked.classList.remove("scissor");
    }else{
        compPickedImg.src = "./images/icon-scissors.svg";
        compPicked.classList.add("sign");
        compPicked.classList.add("scissor");
        compPicked.classList.remove("rock");
        compPicked.classList.remove("paper");
    }

    setTimeout(checkWinner,500);
}

function updateScore(value) {
    score += value;
    scoreNum.innerText = score;
}

function checkWinner() {
   
    result.style.display = 'flex';

    if (computerChoice === userChoice) {
        resultTxt.innerText = 'draw'
    } else if ((userChoice === "paper" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper")) {
        updateScore(-1);
        resultTxt.innerText = 'you lose'
    } else {
        updateScore(1)
        resultTxt.innerText = 'you win'
    }
}



