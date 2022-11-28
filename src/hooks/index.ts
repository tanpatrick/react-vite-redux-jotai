export const useBgColorGenerator = () => {
  const colors = [
    'danger',
    'dark',
    'danger',
    'green',
    'info',
    'orange',
    'pink',
    'primary',
    'purple',
    'secondary',
    'success',
    'teal',
    'warning',
    'yellow',
  ];

  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
