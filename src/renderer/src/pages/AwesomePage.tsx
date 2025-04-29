// src/pages/AwesomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AwesomePage(): React.JSX.Element {
  return (
    <div className="awesome-page">
      <h1>This page is truly awesome! ROCKET 🚀</h1>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}
