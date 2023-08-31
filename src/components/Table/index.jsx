import './Table.css';

const models_to_ignore = ['openai', 'openai-dev', 'openai-internal', 'system'];
const keys_to_ignore = ['result_files', 'permission'];

export const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).filter(key => keys_to_ignore.indexOf(key) === -1).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.filter(item => models_to_ignore.indexOf(item['owned_by']) === -1).map(item => (
            <tr key={item.id}>
              {Object.entries(item).filter(([key, value]) => keys_to_ignore.indexOf(key) === -1).map(([key, value]) => (
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