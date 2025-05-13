// src/pages/HexFillTest.tsx
import React from 'react';

//CSS imports
import '../assets/global.css'
import styles from '../components/hexagon.module.css'

// @ts-ignore
import { Link } from 'react-router-dom';
import SideBar from  '../components/SideBar'

// @ts-ignore
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
// @ts-ignore
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
// @ts-ignore
import { Console } from 'console';

function generateHexGrid(width: number, height: number, className: string): React.JSX.Element[] {
  const hexes: React.JSX.Element[] = [];

  for (let r = 0; r < height; r++) {
    const rOffset = Math.floor(r / 2); // offset for flat-topped hexes

    for (let q = -rOffset; q < width - rOffset; q++) {
      const s = -q - r;
      hexes.push(
        <Hexagon
          key={`${q},${r},${s}`}
          q={q}
          r={r}
          s={s}
          className={className}
        />
      );
    }
  }

  return hexes;
}



export default function HexFillTest(): React.JSX.Element {
  return (
    <>
      <TransformWrapper>
        <div style={{ display: 'flex', height: '100vh' }}>
              <SideBar/>
          <div style={{ flex: 1 }}>
            <TransformComponent wrapperStyle={{
              border: '2px solid blue',
              width: '100%', // Full width of the container
              height: '100vh', // Full height of the screen
              minWidth: '100px', // Enforce minimum width if needed
              minHeight: '100px', // Enforce minimum height if needed
              backgroundColor: 'red',
            }}>
            <div>
                <HexGrid
                  width={window.innerWidth}
                  height={window.innerHeight}
                  viewBox="50 -50 700 800" // This defines the coordinate system for the visible area
                >
                <Layout size={{ x: 5, y: 5 }} flat={false} spacing={1} origin={{ x: -50, y: -40 }}>
                  {generateHexGrid(100, 100, styles.whiteBorderHex)}
                </Layout>
              </HexGrid>
            </div>
          </TransformComponent>

       </div>


        </div>


           
      </TransformWrapper>

    </>
  );
}
