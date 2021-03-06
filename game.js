const scorePlayer1 = document.querySelector('.ply1');
const scorePlayer2 = document.querySelector('.ply2');
const btnPlayer1 = document.querySelector('#btn1');
const btnPlayer2 = document.querySelector('#btn2');
const reset = document.querySelector('.reset');

let targetvalue = 50;
let currScorePlayer1 = 1;
let currScorePlayer2 = 1;
let flag = 1;

reset.addEventListener('click',function(){
    currScorePlayer1 = 0;
    currScorePlayer2 = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    flag = 1;
});

btnPlayer1.addEventListener('click',function(){
    if(!flag){
        alert('Wrong player');
        return;
    }
    flag = 0;
    currScorePlayer1 += Math.trunc(Math.random()*10)+1;
    scorePlayer1.textContent = currScorePlayer1;
    if(currScorePlayer1>=targetvalue){
        alert(`player 1 won with current score of $(currScorePlyer1)`);
    }
});

btnPlayer2.addEventListener('click',function(){
    if(flag){
        alert('Wrong player');
        return;
    }
    flag = 1;
    currScorePlayer2 += Math.trunc(Math.random()*10)+1;
    scorePlayer2.textContent = currScorePlayer2;
    if(currScorePlayer2>=targetvalue){
        alert(`player 2 won with current score of $(currScorePlyer2)`);
    }
});
