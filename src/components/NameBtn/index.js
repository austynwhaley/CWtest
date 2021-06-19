import React from 'react';
import "../mainFunctional"
import "./style.css"


const NameBtn = (props) => (
    <button type="button" className="name btn btn-primary btn-sm">{props.name}</button>
);

export default NameBtn;