import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostContextProvider } from './context/postContext';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>
);
