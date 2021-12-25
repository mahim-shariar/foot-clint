import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Shoeses.css'
import Shoes from '../../Shoes/Shoes';

const Shoeses = () => {
    let [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8888/products?size=6`)
            .then(res => res.json())
            .then(data => {
                setShoes(data);
            })
    }, [])
    return (
        <Container sx={{ marginY: 10 }} >
            <Grid container spacing={1} >
                <Typography className='mx-auto' variant='h2' component='h2' >
                    Featured Items
                </Typography>
                <p className='mx-auto' style={{ fontWeight: 600 }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro, pariatur quo dolorem itaque praesentium.</p>
                {
                    shoes.map(shoe => <Shoes shoe={shoe} key={shoe._id} ></Shoes> )
                }
            </Grid>
        </Container>
    );
};

export default Shoeses;