import { Alert, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Paper, Typography,Box } from '@mui/material';
import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import { GitHub, FacebookOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import './SignUp.css'
import { Container } from 'react-bootstrap';
import useFirebase from '../Hooks/useFirebase';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    let { handleGooglelogin, signInWithGitHub, signInWithFacebook, SignUpWithEmail, setError, error } = useFirebase();
    const passRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();
    const ConPassRef = useRef();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleLoginSubmit = (e) => {
        let name = nameRef.current.value;
        let pass = passRef.current.value;
        let ConPass = ConPassRef.current.value;
        let email = emailRef.current.value;
        if (pass === ConPass) {
            SignUpWithEmail(email, pass, name)
        }
        else {
            setError('Password did not match')
        }
        e.preventDefault();
    }

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
        console.log(values);
    };
    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ padding: 2 }} >
                    <Paper elevation={8} >
                        <Box sx={{ padding: 3, paddingTop: 6 }} >
                            <Typography variant='h4' component="h4">
                                SIGN UP
                            </Typography>
                            <TextField
                                id="standard-helperText"
                                label="Name"
                                inputRef={nameRef}
                                type='text'
                                variant="standard"
                                sx={{ width: "80%", margin: "8px" }}
                            />
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
                            <TextField
                                id="standard-helperText"
                                label="Confirm Password"
                                type='password'
                                inputRef={ConPassRef}
                                variant="standard"
                                sx={{ width: "80%", margin: "8px" }}
                            />
                            { error ? <Alert severity="error"> {error} </Alert>: <div></div> }
                            <NavLink to='/login' style={{ textDecoration: 'none' }} >
                                <Button variant='text' sx={{ fontWeight: 600 }} >
                                    OLD USER ? PLEASE LOGIN
                                </Button>
                            </NavLink>
                            <br />
                            <Button variant='contained' sx={{ margin: 2 }} onClick={handleLoginSubmit} > SGIN UP </Button>
                        </Box>
                        <Box sx={{ padding: 2, paddingBottom: 6 }} >
                            <Typography variant='p' component="p">
                                SignUp with :
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
                    <img className='img-fluid' src="https://i.ibb.co/tJrKYj3/cristiano-ronaldo-png-17942.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignUp;