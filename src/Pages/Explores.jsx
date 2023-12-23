import React from 'react';
import UseProducts from '../Hooks/UseProducts';
import ProductCard from './Products/ProductCard';

const Explores = () => {
    const [products] = UseProducts()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-center'>
            {
                products.map(product=><ProductCard
                key={product._id}
                product={product}
                >

                </ProductCard>)
            }
        </div>
    );
};

export default Explores;