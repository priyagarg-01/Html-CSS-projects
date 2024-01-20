const wordDisplay=document.querySelector(".letter-box");
const hangmanImg=document.querySelector(".image-box img");
const guessesText=document.querySelector(".incorrect-guesses b");
const keyboardDiv=document.querySelector(".keyboard");
const gameModel=document.querySelector(".game-model");
const playAgain=document.querySelector(".play-again");
let currentWord ,correctLetters, wrongGuessCount=0;
let maxGuess=6;

const resetGame=() =>{
    correctLetters=[];
    wrongGuessCount=0;
    hangmanImg.src=`/hangman-game-images/images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount}/${maxGuess}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled=false);
    wordDisplay.innerHTML=currentWord.split("").map(() => ` <li class="letter"></li>`).join("");
    gameModel.classList.remove("show");
}


const getRandomWord=() =>{
    const {word, hint}=wordList[Math.floor(Math.random()*wordList.length)];
    console.log(word , hint);
    currentWord=word;
    document.querySelector(".hint b").innerText=hint;
    resetGame();
    wordDisplay.innerHTML=word.split("").map(() => ` <li class="letter"></li>`).join("");
}
const gameOver=(isVictory) =>{
    setTimeout(() =>{
        const modelText= isVictory ? `you found the word:` : `The correct word was`;
        gameModel.querySelector("img").src=`hangman-game-images/images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModel.querySelector("h4").innerText=`${isVictory ? 'Congrats!' : 'Game Over!'}`;
        gameModel.querySelector("p").innerHTML=`${modelText} <b>${currentWord}</b>`;
        gameModel.classList.add("show");
    },300);
}

const initGame=(button, clickedLetter)=>{
    console.log(button,clickedLetter);
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letter, index) =>{
            if(letter===clickedLetter){
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText=letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else{
        wrongGuessCount++;  
        hangmanImg.src=`/hangman-game-images/images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled=true;
    guessesText.innerText = `${wrongGuessCount}/${maxGuess}`;

    // calling gameOver function if these conditions match
    if(wrongGuessCount === maxGuess) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// Creating a keyboard and event listeners
for(let i=97 ; i<=122; i++){
    const button=document.createElement("button");
    button.innerText=String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}


getRandomWord();
playAgain.addEventListener("click", getRandomWord);