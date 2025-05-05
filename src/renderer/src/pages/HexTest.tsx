import React from 'react';
import { Link } from 'react-router-dom';

export default function HexTest(): React.JSX.Element {
  return (
    <div className="awesome-page">
      <h1>HexTest</h1>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}
