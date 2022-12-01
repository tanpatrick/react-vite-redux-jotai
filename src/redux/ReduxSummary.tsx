import { Summary } from '../components/Summary';
import { useAppSelector } from './store';

export const ReduxSummary = () => {
  const a = useAppSelector((state) => state.counterReducer['A']);
  const b = useAppSelector((state) => state.counterReducer['B']);

  return (
    <Summary
      summaries={[
        { name: 'A', value: a },
        { name: 'B', value: b },
      ]}
    />
  );
};
