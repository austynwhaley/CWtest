import React from 'react';
import "./index.css"

function Jumbotron(props) {
  return(
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <img className="mx-auto d-block img-fluid" src={props.src}  style={{opacity: "0.9"}} alt="jumbotron H1"/>
    {props.children}
  </div>
</div>
  );
}

export default Jumbotron;