import {useRef} from "react";
import {useStore, actions} from "./store";

import './App.css';

function App() {
  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;
  const inputRef = useRef();
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodo(''));
    inputRef.current.focus();
  }

  console.log(state);
  return (
    <div className="App">
      <h1>Todo Test</h1>
      <input type="text"
      ref = {inputRef}
        value={todoInput}
        onChange={(e) => {
          dispatch(actions.setTodo(e.target.value))
        }}
      />

      <button onClick={handleAdd}>Add Todo</button>

      {
        todos.map((todo, index) => {
          return (
            <li key={index}>{todo} <span onClick={() => dispatch(actions.deleteTodo(index))}>X</span></li>
          )
        })
      }
    </div>
  );
}

export default App;
