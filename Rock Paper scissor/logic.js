function refresh(){
    location.reload();
}

function draw(){
    document.getElementById('status').innerHTML = '<p class="draw result">It\s a Draw</p>';
}

function win(){
    var scoreElement = document.getElementById('your-score');
    var score = parseInt(scoreElement.innerHTML, 10);
    score = score + 1;
    scoreElement.innerHTML = score; 
    document.getElementById('status').innerHTML = '<p class="win result">You Win</p>';
}

function lose() {
    var scoreElement = document.getElementById('computer-score');
    var score = parseInt(scoreElement.innerHTML, 10);
    score = score + 1;
    scoreElement.innerHTML = score; 
    document.getElementById('status').innerHTML = '<p class="lose result">You lose</p>';
}

function RPS(num){
    var randomNum = (Math.floor(Math.random()*3))+1;
    if(randomNum == num){
        draw();
    }
    else if((randomNum == 1 && num == 2)||(randomNum == 2 && num == 3) || (randomNum==3 && num==1)){
        //You Wins
        win();
    }
    else{
        //You lose
        lose();
    }
}

function Rock(){
    RPS(1);
}
function Paper(){
    RPS(2);
}
function Scissor(){
    RPS(3);
}


