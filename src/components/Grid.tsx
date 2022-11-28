export const Col = (props: { children: React.ReactNode; size?: number }) => (
  <div className={`col-${props.size || 12}`}>{props.children}</div>
);

export const Row = (props: any) => {
  return <div className="row justify-content-center">{props.children}</div>;
};
