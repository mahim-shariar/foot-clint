import { TextField, Typography,Button } from '@mui/material';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { ArrowForwardIosOutlined, Instagram, Twitter } from '@mui/icons-material';

const Footers = () => {
    return (
        <footer className="page-footer font-small blue pt-4 footer-color ">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Foot Store</h5>
                        <div>
                            <Form className="d-flex  p-3 ">
                                <TextField
                                    id="outlined-helperText"
                                    label="Email"
                                    type='email'
                                    sx={{width:'100%',color:'white'}}
                                />
                                <Button> <ArrowForwardIosOutlined></ArrowForwardIosOutlined> </Button>
                            </Form>
                            <Typography className='text-color-p' variant='p' component="span" >
                                SUBSCRIBE :
                            </Typography>
                            <span className='text-color-p'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, neque! </span>
                            <div>
                                <img className='img-width' src="https://i.ibb.co/BTnCDdr/klipartz-com.png" alt="paymant methode" />
                            </div>
                        </div>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <div>
                        <FacebookOutlinedIcon sx={{ fontSize: "28px" }} className='mx-2' ></FacebookOutlinedIcon>
                        <Instagram sx={{ fontSize: "28px" }} className='mx-2' ></Instagram>
                        <Twitter sx={{ fontSize: "28px" }} className='mx-2' ></Twitter>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3" style={{ textDecoration: 'none' }} >© 2020 Copyright:
                <a href="#"> MAHIM SHARIAR </a>
            </div>

        </footer>
    );
};

export default Footers;