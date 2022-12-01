import { atom, useAtomValue, useSetAtom } from 'jotai';
import { CounterCard } from '../components/CounterCard';

type CounterAtomProps = {
  [key: string]: number;
};

export const counterAtom = atom<Partial<CounterAtomProps>>({});

export const JotaiCounterCard = ({ name }: { name: string }) => {
  const counter = useAtomValue(counterAtom)[name];
  const setCounter = useSetAtom(counterAtom);

  return (
    <CounterCard
      name={name}
      onDecrease={() => {
        setCounter((prev) => {
          const current = prev[name] || 0;
          return { ...prev, [name]: current - 1 };
        });
      }}
      onIncrease={() => {
        setCounter((prev) => {
          const current = prev[name];
          return { ...prev, [name]: current || 0 + 1 };
        });
      }}
      counter={counter || 0}
    />
  );
};
