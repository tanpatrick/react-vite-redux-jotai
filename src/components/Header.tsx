import { useBgColorGenerator } from '../hooks';

export const Header = ({
  size = 'h1',
  value: name,
}: {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  value: string;
}) => {
  const color = useBgColorGenerator();
  return <p className={`p-3 bg-${color} text-light ${size}`}>{name}</p>;
};
