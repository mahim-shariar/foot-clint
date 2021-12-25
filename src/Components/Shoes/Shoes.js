import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Favorite, Search, ShoppingCart } from '@mui/icons-material';
import useFirebase from '../Hooks/useFirebase';
import './Shoes.css'
import { NavLink } from 'react-router-dom';

const Shoes = (props) => {
    let { user } = useFirebase();
    let { name, price, img,_id } = props.shoe;
    let handleAddToCart = (e) => {
        let productShoe = {
            email: user.email,
            name: name,
            price: price,
            img: img
        }
        fetch('http://localhost:8888/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productShoe)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.preventDefault();
    }
    let handleWishList = (e) => {
        let productShoe = {
            email: user.email,
            name: name,
            price: price,
            img: img
        }
        fetch('http://localhost:8888/wishlist', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productShoe)

        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.preventDefault();
    }


    return (
        <Grid md={6} className='box-shoes' item lg={4} xs={12} >
            <div className='card' >
                <div className='image' >
                    <div className='imgBx' >
                        <img className='rounded-circle' src={img} alt="" />
                    </div>
                    <div className='overlay'>
                        <Button onClick={handleAddToCart} className='cart-style' variant='text' >
                            <ShoppingCart></ShoppingCart>
                        </Button>
                        <Button onClick={handleWishList} className='love-style' variant='text' >
                            <Favorite></Favorite>
                        </Button>
                        <NavLink to={`/products/${_id}`} >
                            <Button variant='text' >
                                <Search></Search>
                            </Button>
                        </NavLink>
                    </div>
                </div>
                <div className='info ' >
                    <Typography className='title' variant='h6' component='h6'>
                        {name}
                    </Typography>
                    <div className='subInfo' >
                        <div className='price' >
                            Price : {price}
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default Shoes;