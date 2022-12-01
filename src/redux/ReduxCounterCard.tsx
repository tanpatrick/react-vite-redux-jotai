import { CounterCard } from '../components/CounterCard';
import { useAppDispatch, useAppSelector } from './store';
import { counterActions } from './reducers/counterReducer';

export const ReduxCounterCard = ({ name }: { name: string }) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counterReducer.counters[name]);

  return (
    <CounterCard
      name={name}
      onUndo={() => {
        dispatch(counterActions.undo(name));
      }}
      onDecrease={() => {
        dispatch(counterActions.decrease(name));
      }}
      onIncrease={() => {
        dispatch(counterActions.increase(name));
      }}
      counter={counter}
    />
  );
};
