import { Summary } from '../components/Summary';
import { useAppSelector } from './store';

export const ReduxSummary = () => {
  const counters = useAppSelector((state) => state.counterReducer.counters);
  return <Summary summaries={Object.keys(counters).map((key) => ({ name: key, value: counters[key] || 0 }))} />;
};
