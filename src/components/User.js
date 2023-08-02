import React from 'react'
import SimpleCard from './Card';
import { Typography, makeStyles, Button, Container, Grid, TextField, FormHelperText, MenuItem, Select, InputLabel, FormControl, IconButton, InputAdornment, OutlinedInput, Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function User(props) {

  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    < div style={{overflow:'hidden'}}>
      <Typography variant='h4' align='center'>
        Create Account
      </Typography>


      <Typography variant='h5' style={{ marginLeft: 100 }}>
        Personal Information
      </Typography>
      <Grid container style={{ marginLeft: 100 }}>
        <Grid item xs={5}>
          {/* <Typography variant='h6' >First Name</Typography>
          <input type='text'></input> */}
          <TextField id="standard-basic" label="First Name" />

        </Grid>
        <Grid item xs={5}>
          <TextField id="standard-basic" label="Last Name" />

        </Grid>
      </Grid>
      <br></br>
      <br></br>

      <Typography variant='h5' style={{ marginLeft: 100 }}>
        Email Address
      </Typography>
      <Grid container style={{ marginLeft: 100 }}>
        <Grid item xs={5}>
          <TextField id="standard-basic" label="Email" />
        </Grid>
        <Grid item xs={5}>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Role
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br></br>
      <br></br>


      <Typography variant='h5' style={{ marginLeft: 100 }}>
        Login Information
      </Typography>
      <Grid container style={{ marginLeft: 100 }}>
        <Grid item xs={5}>
          {/* <Typography variant='h6' >First Name</Typography>
          <input type='text'></input> */}
          {/* <TextField id="standard-basic" label="Password" /> */}
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? '🙏' : '👋'}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={5}>
          {/* <TextField id="standard-basic" label="Confrim Password" /> */}
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? '🙏' : '👋'}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
      </Grid>

      <br></br>
      <br></br>
      <Button variant="contained" color="primary" style={{ marginLeft: 100 }}>Register</Button>

      {/* <div>
        <Typography variant='h6' color='secondary' align='center'>
          {props.role}
        </Typography>
      </div>
      <SimpleCard /> */}

    </div>

  )
}
