import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseProducts = () => {
   const [products,setProducts]=useState([])
   useEffect(()=>{
    axios.get('https://products-classic-it-servers.vercel.app/products')
    .then(data=>{
        setProducts(data.data)
        console.log(data.data)
    })
   },[])
    
    return [products]
};

export default UseProducts;