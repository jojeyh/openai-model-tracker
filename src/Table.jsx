export const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(job => (
            <tr key={job.id}>
              {Object.entries(job).map(([key, value]) => (
                <td key={key}>
                  {JSON.stringify(key === 'created_at' || key === 'finished_at' || key === 'created'
                    ? new Date(value * 1000).toLocaleString()
                    : value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };