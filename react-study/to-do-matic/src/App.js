import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function Tittle(props) {
  const [value, handleValue] = useState("");
  const [list, setList] = useState([]);
  

  const addItem = () => {
    setList((list) => [...list, { name: value }]);//Them du lieu vao mang
    console.log(list);
    handleValue("");
  };

  const deleteItem =()=>{
    
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TodoMatic</h1>
      <h2>What needs to be done</h2>
      <div>
        <input
          type={props.type}
          value={value}
          onChange={(e) => {
            handleValue(e.target.value);
          }}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <button>Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
      <h1>3 tasks remain</h1>
      {list.map((item, index) => {
        return <ToDo key={index} name={item.name} />;
      })}
    </div>
  );
}
function App() {
  return <Tittle type="input" />;
}
function ToDo(props) {
  return (
    <div>
      <input type={"checkbox"}></input>
      <label>{props.name}</label>
      <div>
        <button style={{ marginRight: "20px" } }>Edit {props.name}</button>
        <button>Delete {props.name}</button>
      </div>
    </div>
  );
}

export default App;
