// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Adjust the import path based on your file structure

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
