import './App.css';
import { useRef, useEffect } from 'react';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(60);
    const timeId = useRef();
    const h1Ref = useRef();

    useEffect(() => {
      console.log(h1Ref.current);
    //   getBoundingClientRect để lấy kích thước và vị trí của một phần tử.
      console.log(h1Ref.current.getBoundingClientRect());

    })
    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);
        console.log('Start -> ', timeId.current);
    };

    const handleStop = () => {
        clearInterval(timeId.current);
        console.log('Stop -> ', timeId.current);
    };
    return (
        <div className="App">
            <h1 ref={h1Ref}>{count}</h1>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default App;
