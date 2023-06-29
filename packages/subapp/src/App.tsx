import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/sub.png'} />
        <p style={{ color: '#eee' }}>This is the subapp.</p>
        <div
          style={{ border: '1px solid cyan', padding: '1rem', fontSize: '12px', minWidth: '200px' }}
        >
          <pre> GIT SHA: {process.env.REACT_APP_VERCEL_GIT_COMMIT_SHA} </pre>
          <pre>GIT AUTHOR: {process.env.REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN}</pre>
        </div>
        <p style={{ fontSize: '10px' }}>
          <a
            style={{
              color: '#fff',
              textDecoration: 'none',
            }}
            href="https://www.freepik.com/free-vector/hand-drawn-retro-submarine_2783036.htm#query=submarine%20line%20art&position=0&from_view=search&track=ais"
          >
            Image by rawpixel.com
          </a>{' '}
          on Freepik
        </p>
      </header>
    </div>
  );
}

export default App;
