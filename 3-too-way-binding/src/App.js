import './App.css';
import { useState } from 'react';

const gifts = [
  'CPU i9',
  "RAM 32 GB",
  "RGB Keyboard"
]

const courses = [
  {
    id:1,
    name:"HTMl, CSS"
  },
  {
    id:2,
    name:"Javascript"
  },
  {
    id:3,
    name:"React JS"
  },
]

function App() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index])
  } 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(2);
  const [selectCheckbox, setSelectCheckbox] = useState([]);


  const handleSubmit = () => {
    console.log({
      name, email, course,selectCheckbox
    })
  }

  const handleCheckbox = (id) => {
    setSelectCheckbox(prev => {
      const isChecked = selectCheckbox.includes(id);
      if(isChecked) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  
   
   
  }
  console.log(selectCheckbox)
  return (
    <div className="App">
      <div>
        <h1>{gift|| 'Chua co phan thuong'}</h1>
        <button onClick={randomGift}>Lay Thuong</button>
      </div>
      <hr/>
      <div>
        <h1>Two way binding</h1>

        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <hr/>
        {courses.map(x => (
          <div key={x.id}>
            <label>{x.name}</label>
            <input type='radio' onChange={e => setCourse(x.id)} checked={course === x.id} />
          </div>
        ))}
        <hr/>
          {courses.map(x => (
          <div key={x.id}>
            <label>{x.name}</label>
            <input type='checkbox' onChange={() => handleCheckbox(x.id)} checked={selectCheckbox.includes(x.id)} />
          </div>
        ))}


        <button onClick={handleSubmit}> Register</button>
      </div>
    
    </div>
  );
}

export default App;
