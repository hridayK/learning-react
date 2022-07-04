import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function Tasks(props){
  return (<h3>{props.element}</h3>);
}

function App(props) {

  let [input, setInput] = useState("");
  let [list, setList] = useState([""]);

  function addElement(){
    setInput(input = document.getElementById('tasks-input').value);
    if(input!=""){
      setList(list => [...list, input]);
    }
    console.log(list);
  }



  return (
    <div className="App">
      <h1>Todo List:</h1>
        <input type="text"  id="tasks-input" />
        <br />
        <input type="button" value="add" onClick={addElement} />
        <br />
        {list.map((list) => <Tasks element={list}/>)}
    </div>
  );
}

export default App;
