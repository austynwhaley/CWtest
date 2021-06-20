import React, { useState } from 'react';
import "../mainFunctional"
import "./style.css"


function NameBtn(props) {


    return <button type="button" onClick = {props.onClick} className="name btn btn-dark btn-sm">{props.name}</button>
};

export default NameBtn;