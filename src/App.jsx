import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  async function getFineTuningJobs() {
    var response = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
      headers: {
        'Authorization': 'Bearer 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',
      }
    });
    var jobs = await response.json();
    console.log(jobs);
  }

  return (
    <>
      <div>Model-Tracker</div>
      <button onClick={getFineTuningJobs}>Get Fine Tuning Jobs</button>
    </>
  )
}

export default App
