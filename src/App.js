import './App.css';
import './index.js';
import { Route, Routes, NavLink } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import { CssBaseline, useTheme } from '@material-ui/core';
import Home from './components/Home';
import { purple } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import useTheme from '@material-ui/core/styles';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Login';


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: purple[500],
      light: "#ff4081",
      main: purple[500],
      dark: "#c51162",
      contrastText: "#fff"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
  typography: {
    fontFamily: 'Fira Sans',
    fontSize: 15,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      color: "#ff4081 !important",
    },

  },
});

function App() {

  // const theme=useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />

      <CssBaseline />

      <div >
        <div style={
          {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: 'linear-gradient(120deg,pink,rgb(193, 132, 250),pink)',
            height: 70,
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.15)',
          }
        }>

          <NavLink to='/' style={{ fontSize: '1.2rem', textDecoration: 'none' }}>HOME 🏠</NavLink><br />
          <NavLink to='/welcome' style={{ fontSize: '1.3rem', textDecoration: 'none' }} > WELCOME 👋</NavLink><br />
          <NavLink to='/register' style={{ fontSize: '1.3rem', textDecoration: 'none' }}> Register </NavLink>
        </div>

        <Routes path='/'>
          <Route index element={<Home />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;
