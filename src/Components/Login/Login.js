import { Alert, CircularProgress, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Paper, Typography,Box } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import { GitHub, Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.css'
import { Container } from 'react-bootstrap';
import useFirebase from '../Hooks/useFirebase';
import { NavLink } from 'react-router-dom';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';

const Login = () => {
    let { handleGooglelogin, signInWithGitHub, signInWithFacebook, error, SignInWithEmail,isloading } = useFirebase();
    const passRef = useRef();
    const emailRef = useRef();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleLoginSubmit = (e) => {
        const pass = passRef.current.value;
        const email = emailRef.current.value;
        SignInWithEmail(email,pass)
        e.preventDefault();
    }

    return (
        <Container>
            {isloading ? <CircularProgress /> : <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ padding: 2 }} >
                    <Paper elevation={8} >
                        <Box sx={{ padding: 3, paddingTop: 6 }} >
                            <Typography variant='h4' component="h4">
                                Login
                            </Typography>
                            <TextField
                                id="standard-helperText"
                                label="Email"
                                type='email'
                                inputRef={emailRef}
                                variant="standard"
                                sx={{ width: "80%", margin: "8px" }}
                            />
                            <FormControl sx={{ m: 1, width: '80%' }} variant="standard" component="div">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    inputRef={passRef}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            { error ? <Alert severity="error"> {error} </Alert>: <div></div> }
                            <NavLink to='/SignUp' style={{ textDecoration: 'none' }} >
                                <Button variant='text' sx={{fontWeight:600}} > New user ? please Registar </Button>
                            </NavLink>
                            <br />
                            <Button variant='contained' sx={{ margin: 2 }} onClick={handleLoginSubmit} > LogIn </Button>
                        </Box>
                        <Box sx={{ padding: 2, paddingBottom: 6 }} >
                            <Typography variant='p' component="p">
                                SignIn with :
                            </Typography>
                            <Button className='rounded-circle' onClick={handleGooglelogin}>
                                <img src="https://i.ibb.co/dcjpkN3/pngaaa-com-25555-50x50.png" className='rounded-circle img-fluid' alt="google login" />
                            </Button>
                            <Button className='rounded-circle' onClick={signInWithFacebook} >
                                <FacebookOutlined></FacebookOutlined>
                            </Button>
                            <Button className='rounded-circle text-dark ' onClick={signInWithGitHub} >
                                <GitHub></GitHub>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className='img-fluid' src="https://i.ibb.co/SKBsGcf/messi-png-29465.png" alt="" />
                </Grid>
            </Grid>}
        </Container>
    );
};

export default Login;