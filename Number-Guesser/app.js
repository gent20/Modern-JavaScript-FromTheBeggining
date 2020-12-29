//game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector(".#guess-btn"),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;


 // Listen for guess
 guessBtn.addEventListener('click',function(){
     let guess = parseInt(guessInput.value);

     //validate
     if(isNaN() || guess < min || guess > max){
         setMessage(`Please Enter A Number between ${min} and ${max}`, red);
     }

     //check if won
     if(guess === winningNum){
         guessInput.disabled = true;

         //change border color
        guessInput.style.borderColor = 'green';

        setMessage(`${winningNum} is correct, YOU WIN! `, 'green');

     } else {

     }


 });

 function setMessage(msg,color){
     message.style.color = color;
    message.textContent = msg;
 }