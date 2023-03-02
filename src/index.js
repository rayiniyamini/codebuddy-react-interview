import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import worker from './mocks/browser';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <h1>Modified file</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
