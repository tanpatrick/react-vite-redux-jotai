import { useAtom } from 'jotai';
import { Summary } from '../components/Summary';
import { counterAtom } from './JotaiCounterCard';

export const JotaiSummary = () => {
  const [counters, _] = useAtom(counterAtom);

  return (
    <Summary
      summaries={[
        { name: 'A', value: counters['A'] },
        { name: 'B', value: counters['B'] },
      ]}
    />
  );
};
