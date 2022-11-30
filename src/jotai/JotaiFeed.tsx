import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Feed } from '../components/Feed';
import { counterAtom } from './JotaiCounterCard';

export const JotaiFeed = () => {
  const [counters, _] = useAtom(counterAtom);
  const [feeds, setFeeds] = useState<Feed[]>([]);

  const counterA = counters['A'];
  const counterB = counters['B'];

  const [counterTracker, setCounterTracker] = useState({ A: 0, B: 0 });

  useEffect(() => {
    setFeeds([
      {
        actionType: counterTracker.A < counterA ? 'increase' : 'decrease',
        name: 'A',
        timestamp: new Date().toISOString(),
      },
      ...feeds,
    ]);
    setCounterTracker({ ...counterTracker, A: counterA });
  }, [counterA]);

  useEffect(() => {
    counterB &&
      setFeeds([
        {
          actionType: counterTracker.B < counterB ? 'increase' : 'decrease',
          name: 'B',
          timestamp: new Date().toISOString(),
        },
        ...feeds,
      ]);
    setCounterTracker({ ...counterTracker, B: counterB });
  }, [counterB]);

  return <Feed feeds={feeds} />;
};
