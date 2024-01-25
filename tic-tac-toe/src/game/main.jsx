import React,{useState} from "react";
import Navbar from "./UI/navbar";
import "./main.css";
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons'
import Playbox from "./UI/boxes/playbox";


export default function Main() {
  const darkBodyColor = "#0e1233";
  const lightBodyColor = "white";
  const darkItemColor = "#1c2a6b";
  const lightItemColor = "#212529";
  const darkTextColor = "#ffffff";
  const lightTextColor = "#212529";

  const [mode,setMode] = useState('light');
  const [innerBoxStyle,setinnerBoxStyle] = useState({backgroundColor:darkItemColor,color:darkTextColor});
  const [bodyStyle,setbodyStyle] = useState({backgroundColor:darkBodyColor});
  const [modeStyle,setmodeStyle] = useState({border:'1px solid '+darkItemColor,color:darkTextColor});
  const [modeIcon,setmodeIcon] = useState(faSun);
  const [PlayBox,setPlayBox] = useState({backgroundColor:darkBodyColor,color:darkTextColor});
  const [PlayBox2,setPlayBox2] = useState({backgroundColor:darkTextColor});


  const styleToggle = (e) => {
      if (mode === 'light') {
        setinnerBoxStyle({backgroundColor:lightItemColor,color:"white"});
        setbodyStyle({backgroundColor:lightBodyColor});
        setmodeStyle({border:'1px solid '+lightItemColor,color:lightTextColor});
        setPlayBox({backgroundColor:lightBodyColor,color:lightTextColor})
        setPlayBox2({backgroundColor:lightTextColor})
        setmodeIcon(faMoon);
        setMode('dark');
      }
      else{
        setinnerBoxStyle({backgroundColor:'#1c2a6b',color:'white'});
        setbodyStyle({backgroundColor:'#0e1233'});
        setmodeStyle({border:'1px solid #1c2a6b',color:'white'});
        setPlayBox({backgroundColor:darkBodyColor,color:darkTextColor})
        setPlayBox2({backgroundColor:darkTextColor})
        setmodeIcon(faSun);
        setMode('light');
      }
  }
  return (
    <div className="body" style={bodyStyle}>
      <div className="main-Navbar" style={bodyStyle}>
        <Navbar style1={innerBoxStyle} style2={bodyStyle} style3={modeStyle} toggle={styleToggle} modeIcon={modeIcon} />
      </div>
      <div className="main-Container">
        {/* <div className="main-Container-s" style={bodyStyle}><div className="box" style={innerBoxStyle} style1={innerBoxStyle} style2={bodyStyle} style3={modeStyle}></div></div> */}
        {/* <div className="line" style={bodyStyle}><div className="inner-line" style={innerBoxStyle}></div></div> */}
        <div className="main-Container-s" style={bodyStyle} ><div className="box" style={innerBoxStyle} style1={innerBoxStyle} style2={bodyStyle} style3={modeStyle} ><Playbox playBoxStyle={PlayBox} cross={PlayBox2} /></div></div>
      </div>
    </div>
  );
}
