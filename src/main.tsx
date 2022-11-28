import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container mt-5 p-5 text-center">
      <App />
    </div>
  </React.StrictMode>
);
