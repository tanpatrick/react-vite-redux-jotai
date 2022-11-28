import { useBgColorGenerator } from '../hooks';

export const ValueDisplay = ({ value }: { value: number }) => {
  const color = useBgColorGenerator();
  return (
    <h2>
      <span className={`badge rounded-pill text-bg-${color} my-3`}>{value}</span>
    </h2>
  );
};
