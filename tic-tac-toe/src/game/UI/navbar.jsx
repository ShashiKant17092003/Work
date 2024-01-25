import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar(props) {
  return (
    <>
      <div className="navbarContainer">
        <div className="blankBox"></div>
        <div className="blankBox navbar-title" style={props.style1}>
          <div className="name" style={props.style1}>Tic Tac Toe</div>
        </div>
        <div className="blankBox">
          <div className="modeChanger" onClick={props.toggle} style={props.style3}><FontAwesomeIcon icon={props.modeIcon} /></div>
        </div>
      </div>
    </>
  );
}
