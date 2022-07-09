import React from 'react';
import { createRoot } from 'react-dom/client';
import DataProvider from './context/DataContext';
import App from './App';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <App />
  </DataProvider>
);