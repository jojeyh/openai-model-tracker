import { useEffect, useState } from "react";
import { Table } from "./components/Table";

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
    var jobs = jobsResponse['data'];
    return jobs;
  }

  async function getModels() {
    var response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': 'Bearer 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',
      }
    });
    var modelsResponse = await response.json();
    var models = modelsResponse['data'];
    return models.reverse();
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
