import { useAtom } from 'jotai';
import { Summary } from '../components/Summary';
import { counterAtom } from './JotaiCounterCard';

export const JotaiSummary = () => {
  const [counters, _] = useAtom(counterAtom);
  return <Summary summaries={Object.keys(counters).map((key) => ({ name: key, value: counters[key] || 0 }))} />;
};
