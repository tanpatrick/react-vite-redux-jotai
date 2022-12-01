import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Feed } from '../components/Feed';
import { counterAtom, feedAtom } from './JotaiCounterCard';

export const JotaiFeed = () => {
  const [feeds, _] = useAtom(feedAtom);

  const [counterTracker, setCounterTracker] = useState<{ [key: string]: number }>({});

  // useEffect(() => {
  //   const keys = Object.keys(counters);

  //   const temp = keys.reduce((output, key) => {
  //     return { ...output, [key]: counters[key] };
  //   }, {});

  //   const arr = keys
  //     .filter((key) => counterTracker[key] !== (counters[key] || 0))
  //     .map((key) => {
  //       if (counterTracker[key] > (counters[key] || 0)) {
  //         return { name: key, actionType: 'decrease', timestamp: new Date().toISOString() };
  //       } else if (counterTracker[key] < (counters[key] || 0)) {
  //         return { name: key, actionType: 'increase', timestamp: new Date().toISOString() };
  //       }
  //     });

  //   setFeeds([...feeds].concat(arr));

  //   setCounterTracker(temp);
  // }, [counters]);

  return <Feed feeds={feeds} />;
};
