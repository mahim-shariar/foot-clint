import React from 'react';
import NavSection from '../NavSection/NavSection';
import Shoeses from '../ProductShoes/Shoeses';
import Product from '../Prooduct/Product';

const Home = () => {
    return (
        <div>
            <NavSection></NavSection>
            <Product></Product>
            <Shoeses></Shoeses>
        </div>
    );
};

export default Home;