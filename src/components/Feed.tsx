import { Card } from './Card';

import { formatDistanceToNow, parseISO } from 'date-fns';

export type Feed = {
  actionType: 'decrease' | 'increase';
  name: string;
  timestamp: string;
};

export const Feed = ({ feeds }: { feeds: Feed[] }) => {
  return (
    <Card title="Feed">
      <ul className="list-group text-left">
        {feeds.map((feed, index) => {
          return (
            <li className={`list-group-item ${index === 0 ? 'active' : ''}`} key={index}>
              <h3>{feed.name}</h3>
              <code> {feed.actionType} </code>
              <br />
              <small>
                {formatDistanceToNow(parseISO(feed.timestamp), {
                  includeSeconds: true,
                })}
              </small>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
