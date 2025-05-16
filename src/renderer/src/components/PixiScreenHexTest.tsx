import React, { useRef, useEffect } from 'react';
import { Application, Graphics } from 'pixi.js';
import { defineHex, Grid, rectangle, Hex } from 'honeycomb-grid'

export default function PixiScreenHexTest(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);  

  const Hex = defineHex({ dimensions: 30, origin: 'topLeft' })
  const grid = new Grid(Hex, rectangle({ width: 10, height: 10 }))

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent double displaying of Pixijs in development (StrictMode)
    if (containerRef.current.querySelector("canvas")) {
      console.warn("Pixi already initialized, skipping.");
      return;
    }

    const app = new Application();
    const graphics = new Graphics();

    grid.forEach((hex) => renderHex(graphics, hex));

    async function setup() {
      initializedRef.current = await initiateApp(app, containerRef);
      if (initializedRef.current) {
        app.stage.addChild(graphics);
      }
    }
    
    setup();

    return () => {
      // Only destroy if init completed
      if (initializedRef.current) {
        app.destroy(true, { children: true, texture: true });
      }
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        style={{ width: '90%', height: '100%', position: 'relative', border: '2px solid red' }}
      />
    </>
  );
}

function initiateApp(
  app: Application,
  containerRef: React.RefObject<HTMLDivElement | null>
): Promise<boolean> {
  if (!containerRef || !containerRef.current) {
    console.error('containerRef is null');
    return Promise.resolve(false);
  }

  return app
    .init({
      background: '#ffffff',
      resizeTo: containerRef.current,
    })
    .then(() => {
      containerRef.current!.appendChild(app.view);
      return true;
    })
    .catch((err) => {
      console.error('Pixi failed to init:', err);
      return false;
    });
}

function renderHex(graphics: Graphics, hex: Hex) {
  graphics
    .lineStyle(1, 0x999999)   // stroke color and thickness
    .beginFill(0xffffff)      // fill color
    .drawPolygon(hex.corners)
    .endFill();
}
