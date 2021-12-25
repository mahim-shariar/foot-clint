import { Grid, Typography,Container } from '@mui/material';
import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <Container sx={{marginTop:8}} >
            <Grid container spacing={1} >
                <Grid className='product-collection' item xs={12} md={6} lg={4} >
                    <img src="https://template.hasthemes.com/shome/shome/assets/img/shop/collection/1.webp" alt="" />
                    <div className='details' >
                        <Typography className='text-light' variant='h4' component='div'>
                            Latest Shoes
                        </Typography>
                        <Typography className='text-light' variant='h5' component='h5' >
                            From $90.00
                        </Typography>
                    </div>
                </Grid>
                <Grid item className='product-collection' xs={12} md={6} lg={4} >
                    <img src="https://i.ibb.co/vDGc6Qc/c6a3a9953adfd1ceb9e0482ff3a556e3-370x400.jpg" alt="" />
                    <div className='details' >
                        <Typography className='text-light' variant='h4' component='div'>
                            Sports Shoes
                        </Typography>
                        <Typography className='text-light' variant='h5' component='h5' >
                            From $95.00
                        </Typography>
                    </div>
                </Grid>
                <Grid item className='product-collection' xs={12} md={6} lg={4} >
                    <img src="https://template.hasthemes.com/shome/shome/assets/img/shop/collection/3.webp" alt="" />
                    <div className='details'>
                        <Typography className='text-light' variant='h4' component='div'>
                            Stylist Shoes
                        </Typography>
                        <Typography className='text-light' variant='h5' component='h5' >
                            From $82.00
                        </Typography>
                    </div>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Product;
