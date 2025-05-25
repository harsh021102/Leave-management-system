import React from 'react';
import Dashboard from './screens/Dashboard';
import './styles/App.css'
import { Box, Typography } from '@mui/material';
import TopHeader from './components/TopHeader';
import LeftNav from './components/LeftNav';
import { useState } from 'react';
import { MainProvider } from './context/MainContext';

function App() {
  return (
    <MainProvider>
    <Box className="main-container">
      <TopHeader />
      <Box className="content-container">
        <LeftNav />
        <Dashboard />
      </Box>
    </Box>
    </MainProvider>
  );
}

export default App;
