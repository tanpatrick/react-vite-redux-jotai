import { Button, ButtonGroup } from './Button';
import { Card } from './Card';
import { ValueDisplay } from './ValueDisplay';

type CounterCardProps = {
  name: string;
  onDecrease: () => void;
  onIncrease: () => void;
  onUndo?: () => void;
  counter: number;
};

export const CounterCard = ({ name, counter, onIncrease, onDecrease, onUndo }: CounterCardProps) => {
  return (
    <Card title={`Counter ${name}`} titleSize="h5">
      <ValueDisplay value={counter || 0} />
      <ButtonGroup>
        <Button label="+" onClick={onIncrease} />
        <Button label="-" onClick={onDecrease} />
        {onUndo && <Button label="Undo" onClick={onUndo} />}
      </ButtonGroup>
    </Card>
  );
};
