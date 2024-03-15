
const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

let countdownInterval;


        function startGame() {
            const userNumber = parseInt(userInput.value);
            result.innerText = 'Cuenta atrás iniciada...';

            let seconds = 5;
            countdownInterval = setInterval(function() {
                countdown.innerHTML = `<div class="red">Cuenta atrás ${seconds} segundos.</div>`;
                if (seconds === 0) {
                    
                    rulesPlay(userNumber);
                }
                seconds--;
            }, 1000);
        }

        function rulesPlay(userNumber) {
        
            const randomNumber = Math.floor(Math.random() * 3) + 1;

            if (userNumber === randomNumber) {
                result.innerHTML = `<div class="green">¡Enhorabuena, has salvado el mundo!</div> <div class="resultado">Tu numero ${userNumber} es igual que el número correcto ${randomNumber}.</div>`;
            } else {
                result.innerHTML= `<div class="red">¡Lo siento! La bomba ha estallado.</div> <div class="resultado"> Tu numero ${userNumber} es diferente al número correcto ${randomNumber}.</div>`;
            }
        }

        restartButton.addEventListener('click', function() {
            userInput.value = '';
            countdown.innerText = '';
            result.innerText = '';
        
        });

        userInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                startGame();
            }
        });

