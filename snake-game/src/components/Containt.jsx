import React, { useState } from 'react'
import './containt.css';
import Gamearea from './Gamearea';

export default function Containt() {
    let [currentScore,setcurrentScore] = useState(0);
    let [highestScore,sethighestScore] = useState(0);
    
    const updateScore = () => {
        if(currentScore > highestScore) {
            sethighestScore(currentScore);
            highestScore = currentScore;
        }
        setcurrentScore(0);
        currentScore = 0;

    }
    const updatecurrentScore = () => {
        setcurrentScore(++currentScore);
    }
    return (
        <>
            <div className="containt-box">
                <div className="header">
                    <div className="current-score">Score:{currentScore}</div>
                    <div className="highest-score">High Score:{highestScore}</div>
                </div>
                <div className="play-area">
                    <Gamearea score={updatecurrentScore} update={updateScore} score1={currentScore}/>
                </div>
            </div> 
        </>
    )
}
