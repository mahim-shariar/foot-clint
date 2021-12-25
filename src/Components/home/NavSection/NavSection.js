import { Carousel } from 'react-bootstrap';
import React from 'react';
import { Typography } from '@mui/material';
import './NavSection.css'
import { Fade } from 'react-reveal';

const NavSection = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0417/7710/3008/files/slideshow-2_1cdbfd27-ae25-4a38-9d4f-a913a692bea7_1920x850.jpg?v=1594204930"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Fade right >
                        <Typography className='text-start' variant='h2' component='p' >
                            THE <span className='text-color' > SHOES </span> THAT APAD IS TO YOU
                        </Typography>
                    </Fade>
                    <Fade left >
                        <Typography className='text text-end ' variant='h1' component='h1'>
                            STYLE SHOES
                        </Typography>
                    </Fade>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0417/7710/3008/files/slideshow-1_8f45ff48-8631-4b20-826e-5f477c1502bd_1920x850.jpg?v=1594204907"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Fade left >
                        <Typography className='text-end' variant='h2' component='p' >
                            THE <span className='text-color1' > SHOES </span>  THAT APAD IS TO YOU
                        </Typography>
                    </Fade>
                    <Fade right >
                        <Typography className='text text-start ' variant='h1' component='h1'>
                            TENNIS SHOES
                        </Typography>
                    </Fade>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0417/7710/3008/files/slideshow-3_4c7a7862-bfd8-4c8c-a7ac-37b5a7e7f191_1920x850.jpg?v=1594204944"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Fade right >
                        <Typography className='text-start' variant='h2' component='p' >
                            THE <span className='text-color2' > SHOES </span>  THAT APAD IS TO YOU
                        </Typography>
                    </Fade>
                    <Fade left >
                        <Typography className='text text-end ' variant='h1' component='h1'>
                            SOCCER SHOES
                        </Typography>
                    </Fade>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default NavSection;