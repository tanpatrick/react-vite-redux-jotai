import { atom, useAtom } from 'jotai';
import { CounterCard } from '../components/CounterCard';

type CounterAtomProps = {
  [key: string]: number;
};

export const counterAtom = atom<CounterAtomProps>({
  A: 0,
  B: 0,
});

export const JotaiCounterCard = ({ name }: { name: string }) => {
  const [counters, set] = useAtom(counterAtom);
  return (
    <CounterCard
      name={name}
      onDecrease={() => {
        const current = counters[name];
        set({ ...counters, [name]: current - 1 });
      }}
      onIncrease={() => {
        const current = counters[name];
        set({ ...counters, [name]: current + 1 });
      }}
      counter={counters[name]}
    />
  );
};
