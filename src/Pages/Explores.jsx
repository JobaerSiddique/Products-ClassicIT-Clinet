import React, { useContext } from 'react';
import UseProducts from '../Hooks/UseProducts';
import ProductCard from './Products/ProductCard';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const Explores = () => {
    const [products] = UseProducts()
    const{users}=useContext(AuthContext)
    console.log("explore",products);
    if(!users){
        return <Navigate to="/login"></Navigate>
    }
    
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