import { atom, useAtomValue, useSetAtom } from 'jotai';
import { CounterCard } from '../components/CounterCard';
import { Feed } from '../components/Feed';

type CounterAtomProps = {
  [key: string]: number;
};

export const counterAtom = atom<Partial<CounterAtomProps>>({});
export const feedAtom = atom<Feed[]>([]);

export const JotaiCounterCard = ({ name }: { name: string }) => {
  const counter = useAtomValue(counterAtom)[name];

  const setCounter = useSetAtom(counterAtom);
  const setFeeds = useSetAtom(feedAtom);

  const feeds = useAtomValue(feedAtom);

  return (
    <CounterCard
      name={name}
      onUndo={() => {
        if (feeds.length) {
          const actionType = feeds[0].actionType;

          setCounter((prev) => {
            const current = prev[name] || 0;
            let undoValue = current;

            if (actionType === 'increase') {
              undoValue -= 1;
            } else if (actionType === 'decrease') {
              undoValue += 1;
            }

            return { ...prev, [name]: undoValue - 1 };
          });

          setFeeds((feeds) => feeds.splice(1, feeds.length));
        }
      }}
      onDecrease={() => {
        setCounter((prev) => {
          const current = prev[name] || 0;
          return { ...prev, [name]: current - 1 };
        });

        setFeeds((prev) => [
          {
            name: name,
            actionType: 'decrease',
            timestamp: new Date().toISOString(),
          },
          ...prev,
        ]);
      }}
      onIncrease={() => {
        setCounter((prev) => {
          const current = prev[name] || 0;
          return { ...prev, [name]: current + 1 };
        });

        setFeeds((prev) => [
          {
            name: name,
            actionType: 'increase',
            timestamp: new Date().toISOString(),
          },
          ...prev,
        ]);
      }}
      counter={counter || 0}
    />
  );
};
