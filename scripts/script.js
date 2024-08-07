"use strict";
const inputForm = document.querySelector(".input-form");
const infoAboutFindOrNot = document.querySelector(".info-about-find-or-not");
const timesTried = document.querySelector(".times-tried");
const tryNumbers = document.querySelector(".try-numbers");
const newGameBtn = document.querySelector(".new-game-btn");
const guessNumberInput = document.querySelector(".guess-number-input");
const randomNumber = document.querySelector(".random-number");
const nightModeIcon = document.querySelector(".night-mode");
const dayModeIcon = document.querySelector(".day-mode")
const nameGame = document.querySelector(".name-game")

let randomNumbeByComputer = Math.floor(Math.random()*100) + 1

inputForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const randomNumbeByUser = Number(e.target.user_guessed_number.value);
    console.log(randomNumbeByComputer,randomNumbeByUser);
    if(randomNumbeByComputer == randomNumbeByUser){
        infoAboutFindOrNot.textContent = "Congratulations! You find number"
        timesTried.style.display = "none"
        tryNumbers.style.display = "none"
        inputForm.style.display = "none"
    }
    else if(randomNumbeByComputer > randomNumbeByUser){
        infoAboutFindOrNot.textContent = "My number is greater!"
    }
    else if(randomNumbeByComputer < randomNumbeByUser){
        infoAboutFindOrNot.textContent = "My number is smaller!"
    }
    if (tryNumbers.textContent == 1) {
        infoAboutFindOrNot.textContent = "Sorry, you can't find number"
        timesTried.style.display = "none"
        tryNumbers.style.display = "none"
        inputForm.style.display = "none"
        randomNumber.textContent = `My number is ${randomNumbeByComputer}` 
        randomNumber.style.display = "block" 

    }
    tryNumbers.textContent = Number(tryNumbers.textContent) - 1
    guessNumberInput.value = ''
})

newGameBtn.addEventListener("click", ()=>{
    infoAboutFindOrNot.textContent = "Try to find indefinite number between 1 and 100"
    timesTried.style.display = "block"
    tryNumbers.style.display = "block"
    inputForm.style.display = "flex"
    guessNumberInput.value = ''
    tryNumbers.textContent = 5 
    randomNumbeByComputer = Math.floor(Math.random()*100)
    randomNumber.style.display = "none" 
})

nightModeIcon.addEventListener("click", ()=>{
    infoAboutFindOrNot.style.color = '#DC5F00'
    nightModeIcon.style.display = "none"
    dayModeIcon.style.display = "block"
    nameGame.style.color = 'white'
    nightModeIcon.style.color = 'white'
    nightModeIcon.style.border = '2px solid white'
    timesTried.style.color = '#FFDB00'
    tryNumbers.style.color = 'white'
    document.documentElement.style.setProperty('--background', '#180161');
    document.documentElement.style.setProperty('--hero_inner_background', '#4F1787');
})

dayModeIcon.addEventListener("click",(e)=>{
    nightModeIcon.style.display = "block"
    nightModeIcon.style.color = "black"
    nightModeIcon.style.border = "2px solid black"
    dayModeIcon.style.display = "none"
    tryNumbers.style.color = 'black'
    timesTried.style.color = 'black'
    nameGame.style.color = 'green'
    document.documentElement.style.setProperty('--background', 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 86%)');
    document.documentElement.style.setProperty('--hero_inner_background', 'rgb(212, 215, 215)');
})

