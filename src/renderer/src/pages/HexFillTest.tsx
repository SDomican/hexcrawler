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
      {/* <TransformWrapper>
          <TransformComponent>
            <div className={styles.borderedBox}>
              <HexGrid width={window.innerWidth} height={window.innerHeight} viewBox="-50 -50 100 100">
                <Layout size={{ x: 15, y: 15 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                  {generateHexGrid(2, 2, styles.whiteBorderHex)}
                </Layout>
              </HexGrid>
            </div>
          </TransformComponent>
      </TransformWrapper> */}

      <HexGrid width={window.innerWidth} height={window.innerHeight} viewBox="-50 -50 100 100">
                <Layout size={{ x: 5, y: 5 }} flat={false} spacing={1} origin={{ x: -50, y: -40 }}>
                  {generateHexGrid(100, 100, styles.whiteBorderHex)}
                </Layout>
              </HexGrid>
      <SideBar/>
    </>
  );
}
