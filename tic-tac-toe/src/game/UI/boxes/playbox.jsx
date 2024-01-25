import React, { useRef, useState } from 'react'
import './Playbox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faO } from '@fortawesome/free-solid-svg-icons'

let data = ["","","","","","","","",""]

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export default function Playbox(props) {

  let [count,setcount] = useState(0);
  let [lock,setlock] = useState(false);
  let [crossStyle,setcrossStyle] = useState("lock");
  let [header,setheader] = useState("Let's Play Game")
  
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  // const randomNumber = () => {
  //   return Math.floor(Math.random() * 8);
  // }

  // const logics = (e) => {
  //   if(count === 1){
  //     let x = randomNumber();
  //     while(x === e){
  //       x = randomNumber();
  //     }
  //     toggle("click", x);
  //   }
  //   else{
  //     //single h1
  //     if(data[0] === faO && data[1] === data[2]=== ""){
  //       toggle("click", 1);
  //     }
  //     else if(data[1] === faO && data[0] === data[2]=== ""){
  //       toggle("click",0);
  //     }
  //     else if(data[2] === faO && data[1] === data[0]=== ""){
  //       toggle("click", 0);
  //     }
  //     //single h2
  //     else if(data[3] === faO && data[4] === data[5]=== ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === faO && data[3] === data[5]=== ""){
  //       toggle("click",3);
  //     }
  //     else if(data[5] === faO && data[4] === data[3]=== ""){
  //       toggle("click", 4);
  //     }
  //     //h3
  //     else if(data[6] === faO && data[7] === data[8]=== ""){
  //       toggle("click", 7);
  //     }
  //     else if(data[7] === faO && data[6] === data[8]=== ""){
  //       toggle("click",6);
  //     }
  //     else if(data[8] === faO && data[6] === data[7]=== ""){
  //       toggle("click", 6);
  //     }
  //     //single v1
  //     else if(data[0] === faO && data[3] === data[6]=== ""){
  //       toggle("click", 3);
  //     }
  //     else if(data[3] === faO && data[0] === data[6]=== ""){
  //       toggle("click",0);
  //     }
  //     else if(data[6] === faO && data[0] === data[3]=== ""){
  //       toggle("click", 0);
  //     }
  //     //single v2
  //     else if(data[1] === faO && data[4] === data[7]=== ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === faO && data[1] === data[7]=== ""){
  //       toggle("click",1);
  //     }
  //     else if(data[7] === faO && data[4] === data[1]=== ""){
  //       toggle("click", 4);
  //     }
  //     //v3
  //     else if(data[2] === faO && data[5] === data[8]=== ""){
  //       toggle("click", 5);
  //     }
  //     else if(data[5] === faO && data[2] === data[8]=== ""){
  //       toggle("click",2);
  //     }
  //     else if(data[8] === faO && data[2] === data[5]=== ""){
  //       toggle("click", 2);
  //     }
  //     //d1
  //     else if(data[2] === faO && data[4] === data[6]=== ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === faO && data[2] === data[6]=== ""){
  //       toggle("click",2);
  //     }
  //     else if(data[6] === faO && data[2] === data[4]=== ""){
  //       toggle("click", 2);
  //     }
  //     //d2
  //     else if(data[0] === faO && data[4] === data[8]=== ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === faO && data[0] === data[8]=== ""){
  //       toggle("click",0);
  //     }
  //     else if(data[8] === faO && data[0] === data[4]=== ""){
  //       toggle("click", 0);
  //     }
  //     //h1
  //     else if(data[0] === data[1] === faO && data[2] === ""){
  //       toggle("click", 2);
  //     }
  //     else if(data[0] === data[2]===faO && data[1] === ""){
  //       toggle("click", 1);
  //     }
  //     else if(data[1] === data[2]===faO && data[0] === ""){
  //       toggle("click", 0);
  //     }
  //     //h2
  //     else if(data[3] === data[4]===faO && data[5] === ""){
  //       toggle("click", 5);
  //     }
  //     else if(data[3] === data[5]===faO && data[4] === ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === data[5]===faO && data[3] === ""){
  //       toggle("click", 3);
  //     }
  //     //h3
  //     else if(data[6] === data[7]===faO && data[8] === ""){
  //       toggle("click", 8);
  //     }
  //     else if(data[3] === data[8]===faO && data[7] === ""){
  //       toggle("click", 7);
  //     }
  //     else if(data[7] === data[8]===faO && data[6] === ""){
  //       toggle("click", 6);
  //     }

  //     //v1
  //     else if(data[0] === data[3]===faO && data[6] === ""){
  //       toggle("click", 6);
  //     }
  //     else if(data[0] === data[6]===faO && data[3] === ""){
  //       toggle("click", 3);
  //     }
  //     else if(data[6] === data[3]===faO && data[0] === ""){
  //       toggle("click", 3);
  //     }
  //     //v2
  //     else if(data[1] === data[4]===faO && data[7] === ""){
  //       toggle("click", 7);
  //     }
  //     else if(data[1] === data[7]===faO && data[4] === ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === data[7]===faO && data[1] === ""){
  //       toggle("click", 1);
  //     }
  //     //v3
  //     else if(data[2] === data[5]=== faO && data[8] === ""){
  //       toggle("click", 8);
  //     }
  //     else if(data[2] === data[8]===faO && data[5] === ""){
  //       toggle("click", 5);
  //     }
  //     else if(data[5] === data[8]===faO && data[2] === ""){
  //       toggle("click", 2);
  //     }
  //     //d1
  //     else if(data[0] === data[4]===faO && data[8] === ""){
  //       toggle("click", 8);
  //     }
  //     else if(data[0] === data[8]===faO && data[4] === ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === data[8]===faO && data[0] === ""){
  //       toggle("click", 0);
  //     }
  //     //d2
  //     else if(data[2] === data[4]===faO && data[6] === ""){
  //       toggle("click", 6);
  //     }
  //     else if(data[2] === data[6]===faO && data[4] === ""){
  //       toggle("click", 4);
  //     }
  //     else if(data[4] === data[6]===faO && data[2] === ""){
  //       toggle("click", 2);
  //     }

      
  //     else{
  //       let x = randomNumber();
  //       while(x === e){
  //         x = randomNumber();
  //       }
  //       toggle("click", x);
  //     }
  //   }
  // }


  const isDraw = () => {
    if(data[0]!=="" && data[1]!=="" && data[2]!=="" && data[3]!=="" && data[4]!=="" && data[5]!=="" && data[6]!=="" && data[7]!=="" && data[8]!==""){
      setheader("Its a draw");
    }
  }
  const checkwin = () => {
    
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== "")
    {
        won(data[0]);
        setcrossStyle("v1");
      }
      else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
        won(data[3]);
        setcrossStyle("v2");
      }
      else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
        won(data[6]);
        setcrossStyle("v3");
      }
      else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
        won(data[0]);
        setcrossStyle("h1");
      }
      else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
        won(data[1]);
        setcrossStyle("h2");
      }
      else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
        won(data[2]);
        setcrossStyle("h3");
      }
      else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
        won(data[0]);
        setcrossStyle("d1");
      }
      else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
        won(data[2]);
        setcrossStyle("d2");
      }
      isDraw();
  }

  const resetData = () => {
    setcount(0);
    setlock(false);
    setcrossStyle("lock");
    setheader("Let's Play Game");
    data = ["","","","","","","","",""];
    box_array.map((e) => {
      return 0;
    })
  }

  const won = (winner) => {
    setheader(<span>Congratulations <FontAwesomeIcon icon={winner} /> won </span>);
    setlock(true);
  }

  async function toggle (e,idx){
    if(lock || data[idx] !== ""){
      return 0;
    }
    if(count%2===0){
      data[idx] = faX;
      setcount(++count);
      checkwin();
      // if(!lock){
      //   setlock(true);
      //   await sleep(500);
      //   setlock(false);
      //   logics(idx);
      // }

    }
    else{
      data[idx] = faO;
      setcount(++count);
      checkwin();
    }
    
  }



  return (
    <div className='Playbox-container'>
        <div className="Play-header">
          <span className='player-header'>{header}</span>
        </div>
        
        <div className="Play-area">
          <div className={`cut ${crossStyle}`} style={props.cross} ></div>
          <div className="Box" ref={box1} style={props.playBoxStyle} onClick={(e)=>{toggle(e,0)}}><FontAwesomeIcon icon={data[0]} /></div>
          <div className="Box" ref={box2} style={props.playBoxStyle} onClick={(e)=>{toggle(e,1)}}><FontAwesomeIcon icon={data[1]} /></div>
          <div className="Box" ref={box3} style={props.playBoxStyle} onClick={(e)=>{toggle(e,2)}}><FontAwesomeIcon icon={data[2]} /></div>
          <div className="Box" ref={box4} style={props.playBoxStyle} onClick={(e)=>{toggle(e,3)}}><FontAwesomeIcon icon={data[3]} /></div>
          <div className="Box" ref={box5} style={props.playBoxStyle} onClick={(e)=>{toggle(e,4)}}><FontAwesomeIcon icon={data[4]} /></div>
          <div className="Box" ref={box6} style={props.playBoxStyle} onClick={(e)=>{toggle(e,5)}}><FontAwesomeIcon icon={data[5]} /></div>
          <div className="Box" ref={box7} style={props.playBoxStyle} onClick={(e)=>{toggle(e,6)}}><FontAwesomeIcon icon={data[6]} /></div>
          <div className="Box" ref={box8} style={props.playBoxStyle} onClick={(e)=>{toggle(e,7)}}><FontAwesomeIcon icon={data[7]} /></div>
          <div className="Box" ref={box9} style={props.playBoxStyle} onClick={(e)=>{toggle(e,8)}}><FontAwesomeIcon icon={data[8]} /></div>
        </div>
        <div className="Play-reset">
          <button type="reset" style={props.playBoxStyle} onClick={resetData}>Reset</button>
        </div>
    </div>
  )
}
