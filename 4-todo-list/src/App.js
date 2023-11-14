import './App.css';
import { useState } from 'react';
import Content from "./Content"


function App() {

  const [job, setJob] = useState('');
  const [jobs,setJobs] = useState(() => {
    const storedValue = localStorage.getItem('jobs');
    return  JSON.parse(storedValue) ?? [];
  });
  const handleSubmit = () => {
    setJobs(prev => {

      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
    setJob('')
  }

  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <input value={job} onChange={(e) => setJob(e.target.value)}/>

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job,index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>

<hr/>


      <button onClick={() => setShow(!show)}>Toggle</button>
          {show && <Content/>}

    </div>
  );
}




export default App;
