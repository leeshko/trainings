'use client'
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import ColoredBlocks from './components/coloredBlocks/ColoredBlocks';
import DataTable from './components/dataTable/DataTable';


export default function Home() {


  return (
    <>
      <Header />
      <ColoredBlocks />
      <DataTable />
    </>
  );
}


