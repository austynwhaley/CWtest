import React from "react";
import './index.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <button style={{borderRadius: "15px", width: "175px", marginLeft: "190px"}} onClick={() => window.location.reload() }>New Cat</button>
                <button className="close-btn" style={{marginLeft: "30px"}} onClick={() => props.setTrigger(false)}>close</button>
            </div>
            
        </div>
    ) : "";
}

export default Popup;