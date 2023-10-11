import React from "react";
import './EditWidget.css';
// import { useState } from "react";

const EditWidget = ({ putWidget, selectedWidget, setSelectedWidget}) => {

    console.log("initial widget state", selectedWidget)


const changeHandler = (e) => {
    const key = e.target.id;
    setSelectedWidget({...selectedWidget, [key]: e.target.value}) //this can operate with one key, and a thousand keys! :)
    console.log(e.target.id);
};

//if not set to state, it can't change. setting to setWidget, overrides the current state.



    return(
        <div className="edit-widget-container" >
            <h3>Edit a Widget!</h3>

            <div className="edit-widget-item">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={selectedWidget?.name || ''} onChange={changeHandler} />
            </div>

            <div className="edit-widget-item">
                <label htmlFor="material">Material</label>
                <input id="material" type="text" value={selectedWidget?.material || ''} onChange={changeHandler} />
            </div>
            <button className="edit-widget-item" onClick={() => {
                putWidget(selectedWidget)
            }}>
                Save Widget</button>
        </div>
    )
};

                // postWidget(widget)
                //todo: putWidget should be called here with selectedWidget.


export default EditWidget;