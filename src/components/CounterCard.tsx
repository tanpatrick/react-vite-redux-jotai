import { useState } from 'react';
import { Button, ButtonGroup } from './Button';
import { Card } from './Card';
import { ValueDisplay } from './ValueDisplay';

export const CounterCard = ({ counter }: { counter: string }) => {
  const [score, setScore] = useState(0);
  return (
    <Card title={`Counter ${counter}`}>
      <ValueDisplay value={score} />
      <ButtonGroup>
        <Button
          label="+"
          onClick={() => {
            if (score < 20) {
              setScore(score + 1);
            } else {
              alert('MAX!');
            }
          }}
        />
        <Button
          label="-"
          onClick={() => {
            if (score > 1) {
              setScore(score - 1);
            } else {
              alert('MIN!');
            }
          }}
        />
      </ButtonGroup>
    </Card>
  );
};
