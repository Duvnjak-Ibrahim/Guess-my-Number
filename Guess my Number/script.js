'use strict'

let numberGuessed = document.querySelector('.number')
let message = document.querySelector('.message')
let score = document.querySelector('.score')
document.querySelector('.highscore')
let guess = document.querySelector('.guess').value
let checkBtn = document.querySelector(".check")
let againBtn = document.querySelector(".again")
let scoreNumber = 20
let HighscoreNumber=0
let number = Math.floor(Math.random()*20)+1
againBtn.style.display = "none"


checkBtn.addEventListener('click', function () {
    if(document.querySelector('.guess').value < 21 && document.querySelector('.guess').value > 0){
    if(document.querySelector('.guess').value == number){
        message.textContent="congrats🏆🏆,You guessed right"
        score.textContent ="00"
        checkBtn.style.display = "none"
        againBtn.style.display = "block"
        numberGuessed.textContent = number
        document.querySelector("body").style.backgroundColor ="#60b347"
        if (HighscoreNumber === 0){
            HighscoreNumber = scoreNumber
            document.querySelector('.highscore').textContent = HighscoreNumber
        }
        if(scoreNumber > HighscoreNumber){
            HighscoreNumber = scoreNumber
            document.querySelector('.highscore').textContent = HighscoreNumber
        }
            
       
        // if i guessed RIGHT
    }else{
        if(!(document.querySelector('.guess').value)){
            message.textContent="If you dont type,we don't know ...(*￣０￣)ノ"
        }
        if(document.querySelector('.guess').value > number ){
            scoreNumber --       
            score.textContent = scoreNumber
            message.textContent="too High 📈"
            // if score is HIGH
        }
        else if(document.querySelector('.guess').value < number){
            scoreNumber --
            score.textContent = scoreNumber
            message.textContent="too Low 📉"
            // if score is LOW
        }
        // if i didnt FALSE
    }
    
    if(scoreNumber === 0){
        message.textContent="You Lost ಥ_ಥ"
        againBtn.style.display = "block"
        checkBtn.style.display = "none"
    }
} else{
    message.textContent = `only  1-20 numbers`
}
    
    // document.querySelector('.guess').value = ""
})



againBtn.addEventListener("click",function(){
    numberGuessed.textContent = "?"
    number =  Math.floor(Math.random()*5)+1
    message.textContent ="Start Guessin..."
    scoreNumber = 20
    score.textContent = scoreNumber
    document.querySelector("body").style.backgroundColor ="#222"
    checkBtn.style.display = "block"
    againBtn.style.display = "none"

   
})