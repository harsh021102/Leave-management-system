// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      default: '#f0f2f5', // Soft gray background
      row1: '#eaf4fb',
      row2:'#f1f8ff'
    },
    text: {
      primary: '#212121',
      header: '#0d1b2a'
    },
    success: {
      main: '#2e7d32',
    },
    warning: {
      main: '#ed6c02',
    },
    error: {
      main: '#d32f2f',
    },
    info: {
      main: '#0288d1',
    },
    header:{
        indigoLight: '#bbdefb'
    },
    hover:{
        row:'#d0ebff'
    },
    selected:{
        row:'#ede7f6'
    }
  },
});
export default theme;
