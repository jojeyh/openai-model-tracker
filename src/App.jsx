import { useEffect, useState } from "react";
import { Table } from "./Table";

const OPENAI_URL = 'https://api.openai.com/v1/'

function App() {
  const [jobs, setJobs] = useState(null);
  const [models, setModels] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const jobs = await getFineTuningJobs();
      setJobs(jobs);
      const models = await getModels();
      setModels(models);
    }
    fetchData();
  }, [])

  async function getFineTuningJobs() {
    var response = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
      headers: {
        'Authorization': 'Bearer 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',
      }
    });
    var jobsResponse = await response.json();
    return jobsResponse['data'];
  }

  async function getModels() {
    var response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': 'Bearer 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',
      }
    });
    var jsonResponse = await response.json();
    return jsonResponse['data'];
  }

  return (
    <>
      <div>Model-Tracker</div>
      <h1>Fine Tuning Jobs</h1>
      {jobs != null ? <Table data={jobs} /> : <div>Fine tune jobs are loading...</div>}
      <h1>Models</h1>
      {models != null ? <Table data={models} /> : <div>Models are loading...</div>}
    </>
  )
}

export default App
