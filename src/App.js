import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Welcome from './components/Welcome';
import User from './components/User';
import { Button } from '@material-ui/core';
import { createTheme ,ThemeProvider } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      // main: purple[500],
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    typography: {
      h1: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
        color:"#ff4081 !important"
      }
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div>
        <div style={
          {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: 'linear-gradient(120deg,pink,blueviolet)',
            height: 70
          }
        }>

          <Button variant="outlined" color="primary">
            <NavLink to='/'> HOME </NavLink><br />
          </Button>
          <Button variant="outlined" color="primary">
            <NavLink to='/welcome'> WELCOME </NavLink><br />
          </Button>
          <Button variant="outlined" color="primary">
            <NavLink to='/user'> USER </NavLink>
          </Button>
        </div>

        <Routes path='/'>
          <Route index element={<h1>this is HOME PAGE</h1>} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/user' element={<User name="darshan" role="student" />} />
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;
