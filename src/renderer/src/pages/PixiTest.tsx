// src/pages/HomePage2.tsx
import React from 'react';
// @ts-ignore
import PixiScreen from '@renderer/components/PixiScreen';
import SideBar from '@renderer/components/SideBar';
import PixiScreenHexTest from '@renderer/components/PixiScreenHexTest';
import Button from '@renderer/components/Button';


export default function PixiTest(): React.JSX.Element {

  return (
    <>
          <SideBar/>
          <PixiScreenHexTest/>
          <Button/>
    </>
  );
}
