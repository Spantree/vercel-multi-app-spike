import React from 'react';

import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is the subapp.</p>
        <div
          style={{ border: '1px solid cyan', padding: '1rem', fontSize: '12px', minWidth: '200px' }}
        >
          <pre> GIT SHA: {process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA} </pre>
          <pre>GIT AUTHOR: {process.env.REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
