// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AwesomePage from './pages/AwesomePage'
import HexTest from './pages/HexTest'



export default function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/awesome" element={<AwesomePage />} />
      <Route path="/hextest" element={<HexTest />} />
    </Routes>
  );
}