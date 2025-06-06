import React, { useRef, useEffect, useState } from 'react';
import { Application, Graphics } from 'pixi.js';
import { defineHex, Grid, rectangle, Hex } from 'honeycomb-grid';
import { Viewport } from "pixi-viewport";

interface PixiScreenHexTestProps {
  showHexRightBar: boolean;
}

export default function PixiScreenHexTest({ showHexRightBar }: PixiScreenHexTestProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
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
      if (!containerRef.current) return;
      if (!containerRef.current.querySelector('canvas')) {
        containerRef.current.appendChild(app.canvas);
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

//Resizes PixiJS canvas when button to show/hide right-hand menu bar is clicked.
useEffect(() => {
  const container = containerRef.current;
  const app = appRef.current;

  if (!isReady || !container || !app) return;

  const handleResize = () => {
    if(containerRef.current){
      const width = showHexRightBar ? Math.floor(document.body.clientWidth * 0.75) : containerRef.current.clientWidth;
      const height = container.clientHeight;
      app.renderer.resize(width, height);
    }
  };

    // Attach the event listener for when the flex-basis transition completes
    container.addEventListener('transitionend', handleResize);

    // Resize immediately in case no transition occurs
    handleResize();

    return () => {
      container.removeEventListener('transitionend', handleResize);
    };
  }, [showHexRightBar, isReady]);

  return (
    <div id='PixiCanvasDiv'
      ref={containerRef}
      style={{ height: '100%', position: 'relative', border: '2px solid red', flexGrow: 0, flexShrink: 0, flexBasis: showHexRightBar ? '75%' : '95%', transition: 'flex-basis 0.2s ease-in-out' }}
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


