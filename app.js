const computerChoiceDisplay = document.getElementById("computer-choice")
const usererChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let usererChoice
let computerChoice
let computerResult

possibleChoices.forEach(
    possibleChoice=>possibleChoice.addEventListener("click",(e)=>{
        usererChoice=e.target.id
        usererChoiceDisplay.innerHTML=usererChoice
        generateComputerChoice()
        getResult(computerChoice,usererChoice)
    }))

function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random()*3)+1
    console.log(randomNumber)
    if(randomNumber==1){
        computerChoice="rock"
    }else if(randomNumber==2){
        computerChoice="sissors"
    }else{
        computerChoice="paper"
    }
    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(comp,pla){
    if(comp==pla){
        computerResult="draw"
    }else if( ((comp =="paper")&&(pla =="rock"))||((comp =="rock")&&(pla =="sissors"))||((comp =="sissors")&&(pla =="paper")) ){
        computerResult="you loose"
    }else{
        computerResult="you win"
    }
resultDisplay.innerHTML=computerResult
}