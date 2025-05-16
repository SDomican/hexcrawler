// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AwesomePage from './pages/AwesomePage'
import HexTest from './pages/HexTest'
import HomePage2 from './pages/HomePage2'
import HexFillTest from './pages/HexFillTest';
import PixiTest from './pages/PixiTest';

export default function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/awesome" element={<AwesomePage />} />
      <Route path="/hextest" element={<HexTest />} />
      <Route path="/homepage2" element={<HomePage2 />} />
      <Route path="/hexfilltest" element={<HexFillTest />} />
      <Route path="/pixitest" element={<PixiTest />} />
    </Routes>
  );
}