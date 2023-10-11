
import './App.css';
import {useEffect} from 'react';
import CreateWidget from './Components/CreateWidget/CreateWidget';
import WidgetList from './Components/WidgetList/WidgetList';
import EditWidget from './Components/EditWidget/EditWidget';
import { useState } from 'react';

function App() {

const [widgets, setWidgets] = useState([]);
const [selectedWidget, setSelectedWidget] = useState(null);

  // const basicFetch = async () => {
  //   const result = await fetch("http://localhost:4000/", {
  //     method: "GET"
  //   });
  //   const myObj = await result.json()
  //   console.log('async await', myObj);
  // };
  
const getWidgets = async () => {
  const result = await fetch("http://localhost:4000/widgets", {
    method: "GET"  //this is the client asking the server for something.
  });

  const widgetsResult = await result.json() //this creates an object out of the result of widgets (?)
  console.log('button', widgetsResult); //prints results
  setWidgets(widgetsResult); //setWidgets invokes widgetResult - changes an empty array into a list of widgets. every connection is matched to something else - make sure you see where the connections are.
};

const postWidget = async (widget) => {
  console.log('postWidget', widget)
  const result = await fetch("http://localhost:4000/widgets", {
    method: "POST", 
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(widget)
  });
getWidgets();
};

const putWidget = async (widget) => {
  console.log('putWidget', widget)
  const result = await fetch(`http://localhost:4000/widgets/${widget._id}`, {
  method: "PUT",
  headers: {
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(widget)
});
getWidgets();
};
 


useEffect(() => {
  getWidgets();       //this is fire and forget and is fired on mount. It will only change if something is added or changed to the function, or if the    variables change in the array. If the empty array is in there it will run every single time it rerenders, making the useEffect worthless. 
}, [])

  return (
    <div>
      {/* <button onClick= {getWidgets}>Get Widgets</button> */}
        <CreateWidget postWidget={postWidget} />
        <WidgetList widgets={widgets} selectWidget={setSelectedWidget} />
        <EditWidget selectedWidget={selectedWidget} setSelectedWidget={setSelectedWidget} putWidget={putWidget} />
  
    </div>
  );
}

export default App;
