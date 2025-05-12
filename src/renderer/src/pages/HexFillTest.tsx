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

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

// const Controls = () => {
//   const { zoomIn, zoomOut, resetTransform } = useControls();
  

// return (
//   <div className="tools">
//     <button onClick={() => zoomIn()}>+</button>
//     <button onClick={() => zoomOut()}>-</button>
//     <button onClick={() => resetTransform()}>x</button>
//   </div>
// );

// }; 

export default function HexFillTest(): React.JSX.Element {

  function generateHexGrid(width: number, height: number, className: string): React.JSX.Element[] {
    const hexes: React.JSX.Element[] = [];
    for (let r = 0; r < height; r++) {
      const r_offset = Math.floor(r / 2); // offset for even-q or odd-q layout
      for (let q = -r_offset; q < width - r_offset; q++) {
        hexes.push(
          <Hexagon key={`${q},${r}`} q={q} r={r} s={-q - r} className={className} />
        );
      }
    }
    return hexes;
  }

  return (
    <>
      <TransformWrapper>
          <TransformComponent>
            <div className={styles.borderedBox}>
              {/* <HexGrid>
                <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                  {generateHexGrid(20, 20, styles.whiteBorderHex)}
                </Layout>
              </HexGrid> */}
            </div>
          </TransformComponent>
      </TransformWrapper>
      <SideBar/>
    </>
  );
}
