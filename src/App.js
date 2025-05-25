import React from 'react';
import Dashboard from './screens/Dashboard';
import './styles/App.css'
import { Box, Typography } from '@mui/material';
import TopHeader from './components/TopHeader';
import LeftNav from './components/LeftNav';
function App() {
  return (
    <Box className="main-container">
      <TopHeader/>
      <Box className="content-container">
        <LeftNav />
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
