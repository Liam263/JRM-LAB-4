import './App.css';
import { useState } from 'react';

function App() {
  const [job, setJob]= useState('')
  const [jobs, setJobs] = useState([])

  const handleAdd = () => {
    setJobs((prev) => [...prev, job])
    setJob('')
  }

  const handleRemove = (index) => {
    setJobs((prev) => {
      const updatedJob = [...prev]; 
      updatedJob.splice(index, 1);

      return updatedJob;
    })
  }
  return (
    <div style={{padding: 30}} className="todoList">
      <input type='text' value={job} onChange={(e) => setJob(e.target.value)} placeholder='Enter job'></input>
      <button onClick={handleAdd}>Add Job</button>

      <ul >
        {console.log(jobs)}
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={()=>handleRemove(index)}>Remove</button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
