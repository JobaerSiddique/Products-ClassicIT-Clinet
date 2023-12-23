import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseProducts = () => {
   const [products,setProducts]=useState([])
   useEffect(()=>{
    axios.get('http://localhost:5000/products')
    .then(data=>{
        setProducts(data.data)
        console.log(data.data)
    })
   },[])
    
    return [products]
};

export default UseProducts;