// src/pages/HomePage2.tsx
import React from 'react';
import './homepage.module.css';
// @ts-ignore
import { Link } from 'react-router-dom';
import SideBar from  '../components/SideBar'
import MainMenu from '@renderer/components/MainMenu';

export default function HomePage2(): React.JSX.Element {

  return (
    <>
          <MainMenu/>
          <SideBar/>
    </>
  );
}
