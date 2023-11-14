import './App.css';
import { useState } from 'react';

const orders = [100,200,300];
function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((x, cur) => x + cur);
    console.log(total)
    return total;
  });

  const [info, setInfo] = useState({
    name:"Mark",
    age:28,
    address:"Ha Noi"
  })

  const handleIncrease = () => {
    // setCounter(counter + 1);
   
    setCounter(xx => xx+ 1);
    setCounter(prevState => prevState+ 1);
    setCounter(prevState => prevState+ 1);

  }
  const handleDecrease = () => {
    const counterNew = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(counterNew);
  }

  const handleUpdateInfo = () => {
    setInfo({
      ...info,
      name:'Trung',
      age:30
    })
  }
  return (
    <div className="App">
      <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      </div>
    <hr/>


      <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdateInfo}>Update</button>

      </div>


  
    </div>
  );
}

export default App;
