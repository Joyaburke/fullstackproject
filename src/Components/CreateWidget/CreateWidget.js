import React from "react";
import './CreateWidget.css';
import { useState } from "react";



const CreateWidget = ({postWidget}) => {

const [widget, setWidget] = useState({
    name: '',
    material: ''
});

const changeHandler = (e) => {
    const key = e.target.id;
    setWidget({...widget, [key]: e.target.value}) //this can operate with one key, and a thousand keys! :)
    console.log(e.target.id);
};

//if not set to state, it can't change. setting to setWidget, overrides the current state.



    return(
        <div className="create-widget-container" >
            <h3>Create a New Widget!</h3>

            <div className="create-widget-item">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={widget.name} onChange={changeHandler} />
            </div>

            <div className="create-widget-item">
                <label htmlFor="material">Material</label>
                <input id="material" type="text" value={widget.material} onChange={changeHandler} />
            </div>
            <button className="create-widget-item" onClick={() => postWidget(widget)}>Create Widget</button>
        </div>
    )
};



export default CreateWidget;