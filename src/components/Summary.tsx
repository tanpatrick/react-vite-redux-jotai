import { Card } from './Card';
import { ValueDisplay } from './ValueDisplay';

type Summary = {
  name: string;
  value: number;
};

export const Summary = (props: { summaries: Summary[] }) => {
  return (
    <div className="my-3">
      <Card title="Summary" titleSize="h3">
        <div className="p-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                {props.summaries.map((summary) => (
                  <th key={summary.name} className="h3">
                    <strong>{summary.name}</strong>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {props.summaries.length === 0 ? (
                  <td>No counter(s) available...</td>
                ) : (
                  props.summaries.map((summary) => (
                    <td key={summary.name}>
                      <ValueDisplay value={summary.value} />
                    </td>
                  ))
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
