import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const MyCart = () => {
    const [showCart,setShowCart]=useState([])
    const {users}=useContext(AuthContext)
    useEffect(()=>{
        axios.get(`https://products-classic-it-servers.vercel.app/addcart?email=${users?.email}`)
        .then(response=>{
            console.log(response.data);
            setShowCart(response.data)
        })
    },[users?.email])
    if(!users){
        return <Navigate to="/login"></Navigate>
    }

    const total = showCart.reduce((sum,item)=>item.price + sum,0)
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                <h1 className='text-xl lg:text-3xl my-8 text-indigo-900 font-bold'>Welcome to {users.name}</h1>
                </div>
                <div>
                    <h1 className='text-xl lg:text-3xl my-8 text-indigo-900 font-bold'>TotalPrice : <span className='text-amber-500'>${total}</span></h1>
                </div>
            </div>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl shadow-2xl">
  <table className="table text-center">
    {/* head */}
    <thead>
      <tr className='text-xl font-semibold text-black'>
        <th></th>
        <th>Title</th>
        <th>Color</th>
        <th>Size</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        showCart.map((cart,i)=><tr key={cart._id}>
            <th>{i+1}</th>
            <td>{cart.title}</td>
            <td>{cart.color}</td>
            <td>{cart.size}</td>
            <td className='text-amber-500 font-semibold'>$ {cart.price}</td>
          </tr>)
      }
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;