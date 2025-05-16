import React, { useRef, useEffect } from 'react';
import { Application, Graphics } from 'pixi.js';

export default function PixiScreenHexTest(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent double displaying of Pixijs in development (StrictMode)
    if (containerRef.current.querySelector("canvas")) {
      console.warn("Pixi already initialized, skipping.");
      return;
    }

    const app = new Application();
    const graphics = new Graphics();

    // Setup graphics (fix: use correct graphics calls)
    graphics.rect(50, 50, 100, 100);
    graphics.fill(0xde3249);

    let initialized = false;

    async function setup() {
      initialized = await initiateApp(app, containerRef);
      if (initialized) {
        app.stage.addChild(graphics);
      }
    }
    
    setup();

    return () => {
      // Only destroy if init completed
      if (initialized) {
        app.destroy(true, { children: true, texture: true });
      }
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', position: 'relative' }}
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
      background: '#1099bb',
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
