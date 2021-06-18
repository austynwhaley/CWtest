import React from 'react';
import "../mainFunctional"
import "./style.css"

const NameBtn = (props) => (
    <button type="button" className="btn btn-primary">{props.name}</button>
);

export default NameBtn;