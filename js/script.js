const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const music = document.getElementById('marioMusic');
const gameOverMusic = document.getElementById('gameOverMusic');
const scoreElement = document.getElementById('score');

let score = 0;
let gameRunning = true;


const playMusic = () => {
    music.loop = true;
    music.play();
}


const jump = () => {
    if (gameRunning) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}


const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        gameOverMusic.play();
        music.pause();

    }

    if (gameRunning) {
        score += 1; 
        scoreElement.textContent = `Score: ${score}`; 
    }

}, 100);


document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
document.addEventListener('keydown', playMusic);  
        