// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Versions from './components/Versions';
import electronLogo from './assets/electron.svg';

function HomePage(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Welcome to Stephen's{' '}
        <span className="react">super mega</span>{' '}
        {/* turn “awesome” into a router Link */}
        <Link to="/awesome" className="link">awesome</Link>{' '}
        <span className="ts">App</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a
            href="https://electron-vite.org/"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions />
    </>
  );
}

function AwesomePage(): React.JSX.Element {
  return (
    <div className="awesome-page">
      <h1>This page is truly awesome! 🚀</h1>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

export default function App(): React.JSX.Element {
  return (
    // these Routes assume you’ve wrapped <App/> in a HashRouter (or BrowserRouter)
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/awesome" element={<AwesomePage />} />
    </Routes>
  );
}
