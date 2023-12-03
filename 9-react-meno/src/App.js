import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Content from "./Content"
function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Content count={count}/>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
