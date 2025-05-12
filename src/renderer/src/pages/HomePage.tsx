// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Versions from '../components/Versions';
import electronLogo from '../assets/electron.svg';

export default function HomePage(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Welcome to Stephen's UPDATED{' '}
        <span className="react">super mega</span>{' '}
        <Link to="/awesome" className="link">awesome</Link>{' '}
        <span className="ts">App</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <p><Link to="/hextest" className="link">HexTest</Link></p>
      <p><Link to="/homepage2" className="link">HomePage2</Link></p>
      <p><Link to="/hexfilltest" className="link">HexFillTest</Link></p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
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
