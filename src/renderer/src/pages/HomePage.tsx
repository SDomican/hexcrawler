// src/pages/HomePage.tsx
import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Versions from '../components/Versions';
// import electronLogo from '../assets/electron.svg';

import { Application } from 'pixi.js';


export default function HomePage(): React.JSX.Element {

  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (!containerRef.current) return;

    const app = new Application();
    let initialized = false;

    app
      .init({
        background: '#1099bb',
        resizeTo: containerRef.current,
      })
      .then(() => {
        initialized = true;
        containerRef.current!.appendChild(app.canvas);
      })
      .catch((err) => {
        console.error('Pixi failed to init:', err);
      });

    return () => {
      // Only destroy if init() completed
      if (initialized) {
        app.destroy(true, { children: true, texture: true });
      }
    };
  }, []);


  return(
  <>
  <p>Hi 2</p>
     <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      />
  </>
  );


  // return (
  //   <>
  //     <img alt="logo" className="logo" src={electronLogo} />
  //     <div className="creator">Powered by electron-vite</div>
  //     <div className="text">
  //       Welcome to Stephen's UPDATED{' '}
  //       <span className="react">super mega</span>{' '}
  //       <Link to="/awesome" className="link">awesome</Link>{' '}
  //       <span className="ts">App</span>
  //     </div>
  //     <p className="tip">
  //       Please try pressing <code>F12</code> to open the devTool
  //     </p>
  //     <p><Link to="/hextest" className="link">HexTest</Link></p>
  //     <p><Link to="/homepage2" className="link">HomePage2</Link></p>
  //     <p><Link to="/hexfilltest" className="link">HexFillTest</Link></p>
  //     <p><Link to="/pixitest" className="link">PixiTest</Link></p>
  //     <div className="actions">
  //       <div className="action">
  //         <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
  //           Documentation
  //         </a>
  //       </div>
  //       <div className="action">
  //         <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
  //           Send IPC
  //         </a>
  //       </div>
  //     </div>
  //     <Versions />
  //   </>
  // );
}
