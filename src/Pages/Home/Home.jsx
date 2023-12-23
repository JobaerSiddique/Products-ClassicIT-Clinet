import React from 'react';
import User from '../../Hooks/User';
import UseProducts from '../../Hooks/UseProducts';
import ProductCard from '../Products/ProductCard';

const Home = () => {
   const [user]=User()
   const [products]= UseProducts()
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  sha '>
            {
                products.slice(0,4).map(product=><ProductCard
               key={product._id}
               product={product}
               >

                </ProductCard>)
            }
        </div>
    );
};

export default Home;