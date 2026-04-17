import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CentralContext, CentralContextProvider } from './context/centralContext';
// import reportWebVitals from './reportWebVitals';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <CentralContextProvider>  
          <App />
        </CentralContextProvider>  

      </React.StrictMode>
    );

    // optional: start web vitals
    // reportWebVitals();
  } else {
    console.error('Root element not found!');
  }
});
