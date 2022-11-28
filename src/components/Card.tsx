import React from 'react';
import { Header } from './Header';

export const Card = (props: {
  children: React.ReactNode;
  title?: string;
  titleSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h4';
}) => (
  <div className="border">
    {props.title && <Header value={props.title} size={props.titleSize || 'h1'} />}
    <div className="p-1">{props.children}</div>
  </div>
);
