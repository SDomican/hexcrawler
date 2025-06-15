import React, { useRef, useEffect, useState } from 'react';
import { Application, Graphics } from 'pixi.js';
import { defineHex, Grid, rectangle, Hex } from 'honeycomb-grid';
import { Viewport } from "pixi-viewport";

interface PixiScreenHexTestProps {
  showHexRightBar: boolean;
}

export default function PixiScreenHexTest({ showHexRightBar }: PixiScreenHexTestProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<Viewport | null>(null);
  const initializedRef = useRef(false);

  const Hex = defineHex({ dimensions: 50, origin: 'topLeft' });
  const grid = new Grid(Hex, rectangle({ width: 100, height: 100 }));
  const appRef = useRef<Application | null>(null);
  const [isReady, setIsReady] = useState(false);

useEffect(() => {
  if (!containerRef.current) return;

  if (initializedRef.current) {
    console.warn("Pixi already initialized, skipping.");
    return;
  }

  const app = new Application();
  appRef.current = app;

  app
    .init({      
      background: '#ffffff',
      resizeTo: containerRef.current,
    })
    .then(() => {
      if (!containerRef.current)
        return;
      
      if (!containerRef.current.querySelector('canvas')) {
        containerRef.current.appendChild(app.canvas);
        app.canvas.style.width = '100%';
        app.canvas.style.height = '100%';
        app.canvas.style.display = 'block';
      }

      const viewport = new Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: 1000,
        worldHeight: 1000,
        events: app.renderer.events, 
      });

      // add the viewport to the stage
      app.stage.addChild(viewport);

      viewportRef.current = viewport;

      // Render hexes inside the viewport
      const graphics = new Graphics();
      grid.forEach(hex => renderHex(graphics, hex));
      viewport.addChild(graphics); 

      // activate plugins
      viewport.drag().pinch().wheel().decelerate();

      initializedRef.current = true;
      setIsReady(true); 
    })
    .catch((err) => {
      console.error('Pixi failed to init:', err);
    });

  return () => {
    if (initializedRef.current && appRef.current) {
      appRef.current.destroy(true, { children: true, texture: true });
      appRef.current = null;
      initializedRef.current = false;
    }
  };
}, []);

useEffect(() => {
  if (!isReady || !containerRef.current || !appRef.current || !viewportRef.current) return;

  const app = appRef.current;
  const container = containerRef.current;

  let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

  const observer = new ResizeObserver(() => {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    
    resizeTimeout = setTimeout(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (width > 0 && height > 0 && viewportRef.current) {
        app.renderer.resize(width, height);
        viewportRef.current.resize(width, height, viewportRef.current.worldWidth, viewportRef.current.worldHeight);
      }
    }, 100); // wait 100ms after last resize event
  });

  observer.observe(container);

  return () => {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    observer.disconnect();
  };
}, [isReady]);


  return (
      <div id='PixiCanvasDiv'ref={containerRef} style={{ width: showHexRightBar ? '67%' : '95%', position: 'relative', border: '2px solid red',  transition: 'width 0.1s ease-in-out',}}
    />
  );
}

function renderHex(graphics: Graphics, hex: Hex) {
  graphics
    .setStrokeStyle({ width: 10, color: 0x999999 })
    .beginFill(0xffffff)
    .drawPolygon(hex.corners)
    .endFill();
}


