import React, { useRef, useEffect } from 'react';
import { Application, Graphics } from 'pixi.js';
import { defineHex, Grid, rectangle, Hex } from 'honeycomb-grid';

export default function PixiScreenHexTest(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const Hex = defineHex({ dimensions: 50, origin: 'topLeft' });
  const grid = new Grid(Hex, rectangle({ width: 10, height: 10 }));
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (initializedRef.current) {
      console.warn("Pixi already initialized, skipping.");
      return;
    }

    const app = new Application();
    appRef.current = app;

    app.init({
      background: '#ffffff',
      resizeTo: containerRef.current,
    })
    .then(() => {
      if (!containerRef.current) return;
        if (!containerRef.current.querySelector('canvas')) {
          containerRef.current.appendChild(app.canvas);
        }

      const graphics = new Graphics();
      grid.forEach(hex => renderHex(graphics, hex));
      app.stage.addChild(graphics);

      app.stage.scale.set(1);

      initializedRef.current = true;
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

  return (
    <div
      ref={containerRef}
      style={{ height: '100%', position: 'relative', border: '2px solid red', flexGrow: 0, flexShrink: 0, flexBasis: '95%', }}
    />
  );
}

function renderHex(graphics: Graphics, hex: Hex) {
  graphics
    .setStrokeStyle({ width: 1, color: 0x999999 })
    .beginFill(0xffffff)
    .drawPolygon(hex.corners)
    .endFill();
}
