let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random()*100);

function checkGuess(){
    let guessNumber = parseInt(userInputElement.value);
    if(guessNumber === randomNumber){
        gameResultElement.textContent = `Congratulation! You guessed it Right...!`;
        gameResultElement.style.backgroundColor = "green";
    }
    else if(guessNumber < randomNumber){
        gameResultElement.textContent = `Too Low! Try Again...`;
        gameResultElement.style.backgroundColor = "blue";
    }
    else if(guessNumber > randomNumber){
        gameResultElement.textContent = `Too High! Try Again...`;
        gameResultElement.style.backgroundColor = "blue";
    }else{
        gameResultElement.textContent = `Please Enter a Valid Input...!`;
        gameResultElement.style.backgroundColor = "red";
    }

}