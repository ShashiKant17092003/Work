import React, { useState} from 'react'
import './gamearea.css';

export default function Gamearea(props) {
    let inputDir = {x: 0, y:0};
    let [popStyle,setpopStyle] = useState('visible');
    let [gameAreaStyle,setgameAreaStyle] = useState('stop');
    let [snakeArray,setsnakeArray] = useState([
        {x:13,y:13}
    ]); 
    function foodUpdate(){
        let a = 0;
        let b = 30;
        food.x = Math.round(a+(b-a)*Math.random());
        food.y = Math.round(a+(b-a)*Math.random());
    }

    function isCollide(elemet){
        if(snakeArray[0].x < 0 || snakeArray[0].y < 0) return true;
        else if(snakeArray[0].x > 30 || snakeArray[0].y > 30) return true;
        return false;
    }

    const food = { x: 6, y: 7 };
    let lastPaintTime = 0;
    let speed = 4;
    
    function main(ctime){
        window.requestAnimationFrame(main);
        if((ctime-lastPaintTime)/1000<1/speed) return;
        lastPaintTime = ctime;
        snakeArray[0].x += inputDir.x;
        snakeArray[0].y += inputDir.y;
        if(props.score1%5===0 && props.score1!==0){
            speed++;
        }
        gameEngine();
    }

    function gameEngine(){

        if(isCollide(snakeArray)){
            alert("Collision detected Game over!");
            inputDir.x = 0;
            inputDir.y = 0;
            snakeArray= [{x:13,y:13}];
            props.update();
            foodUpdate();
        }

        if(snakeArray[0].y===food.y && snakeArray[0].x === food.x){
            snakeArray.unshift({x:snakeArray[0].x + inputDir.x,y:snakeArray[0].y+inputDir.y});
            props.score();
            foodUpdate();
        }
        for(let i= snakeArray.length-2; i>=0;i--){
            setsnakeArray({x:snakeArray[i+1] = {...snakeArray[i]}});
        }
        setsnakeArray({
                x: (snakeArray[0].x + inputDir.x),
                y: (snakeArray[0].y + inputDir.y)
            });
        let board = document.querySelector(".game-box-play");
        board.innerHTML = "";
        snakeArray.forEach((e,idx) => {
            const snakeElement = document.createElement("div");
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
            if(idx===0){
                snakeElement.classList.add('snake-head');
            }
            else{
                snakeElement.classList.add('snake-body');
            }
            board.appendChild(snakeElement);
        })
        const foodElement = document.createElement("div");
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    }
    const start = () => {
        setpopStyle('hidden');
        setgameAreaStyle('play')
        
        window.requestAnimationFrame(main);
        window.addEventListener('keydown', e =>{
            if(e.key === 'ArrowUp'){
                inputDir.x = 0;
                inputDir.y = -1;
            }
            else if(e.key === 'ArrowDown'){
                inputDir.x = 0;
                inputDir.y = 1;
            }
            else if(e.key === 'ArrowLeft'){
                inputDir.y = 0;
                inputDir.x = -1;
            }
            else if(e.key === 'ArrowRight'){
                inputDir.x = 1;
                inputDir.y = 0;
            }
        })
    }
    return (
        <>
            <div className={`${popStyle} pop`}>
                <button className='btn' onClick={start}>Start</button>
            </div>
            <div className={`game-box-${gameAreaStyle}`} ></div>
        </>
    )
}