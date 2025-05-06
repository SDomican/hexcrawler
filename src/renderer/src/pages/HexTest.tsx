import React from 'react';
// @ts-ignore
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import { Link } from 'react-router-dom';
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

export default function HexTest(): React.JSX.Element {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {/* @ts-ignore: Ignoring unused rest destructuring */}
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <Controls />
          <TransformComponent>
            <div className="awesome-page">
              <h1>HexTest</h1>
              <p>
                <Link to="/">← Back to Home</Link>
              </p>
              <HexGrid>
                <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                  <Hexagon q={0} r={0} s={0} />
                </Layout>
              </HexGrid>
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}
