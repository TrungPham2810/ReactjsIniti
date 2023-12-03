import {useReducer, useRef } from 'react';
import {setJob,addJob,deleteJob} from "./actions";
import reducerTodo ,{initTodo} from "./reducer";

//useState
//1. Init state : 0
//2. action: Up or Down

//useReducer
//1. Init state : 0
//2. action: Up or Down
//3. Reducer
//4. Dispatch

const initState = 0;
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const reducer = (state, action) => {
    console.log('reducer running...');
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action');
    }
};


function App() {
    const [count, dispatchCount] = useReducer(reducer, initState);
    const [state, dispatchTodo] = useReducer(reducerTodo, initTodo);
    const inputRef = useRef();
    console.log(state);
    const { job, jobs } = state;
    const handleSubmit = () => {
        dispatchTodo(addJob(job));
        dispatchTodo(setJob(''));
        inputRef.current.focus();
    };
    return (
        <div className="App">
            <h1>Example 1: Count</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatchCount(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatchCount(UP_ACTION)}>Up</button>

            <hr></hr>
            <div>
                <input
                    ref={inputRef}
                    onChange={(e) => {
                        dispatchTodo(setJob(e.target.value));
                    }}
                    value={job}
                    placeholder="Enter Todo"
                />

                <button onClick={handleSubmit}>Add</button>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            {job}{' '}
                            <span
                                onClick={() => {
                                    dispatchTodo(deleteJob(index));
                                }}
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default App;
