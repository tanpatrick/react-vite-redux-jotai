import React from 'react';
import { useBgColorGenerator } from '../hooks';

export const Button = (props: { label: string; onClick: () => void }) => {
  const color = useBgColorGenerator();
  return (
    <button type="button" className={`btn btn-${color} btn-lg`} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export const ButtonGroup = (props: any) => {
  return (
    <div className="p-3 mb-2 border-top">
      {React.Children.toArray(props.children).map((child, index) => (
        <div key={index} className="d-inline m-1">
          {child}
        </div>
      ))}
    </div>
  );
};
