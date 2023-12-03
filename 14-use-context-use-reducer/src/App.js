import './App.css';
import {useRef} from 'react';
import {useStore, actions} from "./store"


function App() {

  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;
  const inputRef = useRef();
  const handleAdd = () => {
    console.log("handleAdd")
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodo(''));
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>Hello Mark</h1>

        <input type="text" 
        ref={inputRef}
        value={todoInput}
        onChange={(e) => {
          dispatch(actions.setTodo(e.target.value))
        }}
        />

        <button onClick={handleAdd}>Add</button>

        {todos.map((todo, index) => (
          <li key={index}>{todo} <span onClick={() => dispatch(actions.deleteTodo(index))}>x</span></li>
        ))}
    </div>
  );
}

export default App;
