// src/pages/PixiScreen.tsx
import React, { useRef, useEffect } from 'react';
import { Application, Assets, Sprite } from 'pixi.js';

import bunnyUrl from '../assets/Images/bunny.png'


export default function PixiScreen(): React.JSX.Element {

  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (!containerRef.current) return;

      // Prevent double displaying of Pixijs in development (StrictMode)
      if (containerRef.current.querySelector("canvas")) {
        console.warn("Pixi already initialized, skipping.");
        return;
      }

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

        
    (async () => {
      try {
      console.log('Loading image from:', bunnyUrl);
      const texture = await Assets.load(bunnyUrl);

        const bunny = new Sprite(texture);
        bunny.anchor.set(0.5);
        bunny.x = app.screen.width / 2;
        bunny.y = app.screen.height / 2;
        app.stage.addChild(bunny);

        // Add an animation loop callback to the application's ticker.
        app.ticker.add((time) =>
        {
            /**
             * Just for fun, let's rotate mr rabbit a little.
             * Time is a Ticker object which holds time related data.
             * Here we use deltaTime, which is the time elapsed between the frame callbacks
             * to create frame-independent transformation. Keeping the speed consistent.
             */
            bunny.rotation += 0.01 * time.deltaTime;
        });
      } catch (err) {
        console.error('Failed to load bunny texture:', err);
      }
    })();

    return () => {
      // Only destroy if init() completed
      if (initialized) {
        app.destroy(true, { children: true, texture: true });
      }
    };
  }, []);


  return(
  <>
     <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      />
  </>
  );
}
  