// src/pages/PixiTest.tsx
import React from 'react';
// @ts-ignore
import PixiScreen from '@renderer/components/PixiScreen';
import SideBar from '@renderer/components/SideBar';
import PixiScreenHexTest from '@renderer/components/PixiScreenHexTest';
// @ts-ignore
import Button from '@renderer/components/Button';
// @ts-ignore
import gearIcon from '../assets/Images/gear-hammer.svg';

import ButtonContainer from '@renderer/components/ButtonContainer';

export default function PixiTest(): React.JSX.Element {

  return (
    <>
      <div id="PixiTest" style={{ width: '100%', height:'100%', border: '4px solid purple',  display: 'flex' }}>
          <SideBar/>
          <PixiScreenHexTest/>
          {/* <Button iconSrc={gearIcon}/> */}
          <ButtonContainer/>
      </div>
    </>
  );
}
