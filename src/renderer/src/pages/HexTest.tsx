import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import { Link } from 'react-router-dom';

export default function HexTest(): React.JSX.Element {
  return (
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
  );
}
