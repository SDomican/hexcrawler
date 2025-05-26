// src/pages/PixiTest.tsx
import React from 'react';
// @ts-ignore
import PixiScreen from '@renderer/components/PixiScreen';
import SideBar from '@renderer/components/SideBar';
import PixiScreenHexTest from '@renderer/components/PixiScreenHexTest';
import HexRightBar from '@renderer/components/HexRightBar/HexRightBar';


import ButtonContainer from '@renderer/components/ButtonContainer';

export default function PixiTest(): React.JSX.Element {

  return (
    <>
      <div id="PixiTest" style={{ width: '100%', height:'100%', border: '4px solid purple',  display: 'flex' }}>
          <SideBar/>
          <PixiScreenHexTest/>
          <ButtonContainer/>
          <HexRightBar />
      </div>
    </>
  );
}
