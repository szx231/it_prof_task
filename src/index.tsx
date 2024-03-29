/// <reference types="react-scripts" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { HomePage } from './pages/HomePage';

const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
