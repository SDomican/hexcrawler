// src/pages/PixiTest.tsx
import React, { useState } from 'react';
// @ts-ignore
import PixiScreen from '@renderer/components/PixiScreen';
import SideBar from '@renderer/components/SideBar';
import PixiScreenHexTest from '@renderer/components/PixiScreenHexTest';
import HexRightBar from '@renderer/components/HexRightBar/HexRightBar';


import ButtonContainer from '@renderer/components/ButtonContainer';

export default function PixiTest(): React.JSX.Element {
  const [showHexRightBar, setShowHexRightBar] = useState(true);
  const toggleHexRightBar = () => {setShowHexRightBar((prev) => !prev);};

  console.log("PixiTest showHexRightBar: " + showHexRightBar);
  return (
    <>
      <div id="PixiTest" style={{ width: '100%', height:'100%', border: '4px solid purple',  display: 'flex' }}>
          <SideBar/>
          <PixiScreenHexTest showHexRightBar={showHexRightBar}/>
          <ButtonContainer onToggleHexRightBar={toggleHexRightBar} />
          {showHexRightBar && <HexRightBar />}
      </div>
    </>
  );
}
