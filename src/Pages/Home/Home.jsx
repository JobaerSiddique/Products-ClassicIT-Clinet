import React from 'react';

import UseProducts from '../../Hooks/UseProducts';
import ProductCard from '../Products/ProductCard';
import BannerCarousel from './BannerCarousel';
import AboutUs from './AboutUs';

const Home = () => {
  
   const [products]= UseProducts()
  
    return (
        <>
        <div className="my-8">
        <BannerCarousel ></BannerCarousel>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center items-center bg-slate-100 shadow-2xl rounded-3xl '>
            {
                products.slice(0,4).map(product=><ProductCard
               key={product._id}
               product={product}
               >

                </ProductCard>)
            }
        </div>
           <div className='my-8 bg-gray-100 shadow-2xl p-5 rounded-3xl'>
           <AboutUs></AboutUs>
            </div> 
        
        </>
    );
};

export default Home;