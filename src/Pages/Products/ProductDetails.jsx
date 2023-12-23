import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "../AuthenticationPage/Login.css"
const ProductDetails = () => {
    const details = useLoaderData()
    const [selectColor,setSelectColor]=useState("")
    const [selectSize,setSelectSize]=useState("")
    const {img,title,variations}= details

    const handleColorChange = (color)=>{
        setSelectColor(color)
    }
    const handleSizeChange = (size)=>{
        setSelectSize(size)
    }
    return (
        <div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 p-5 gap-20 justify-center items-center'>
                <div className='mx-20'>
            <img className=' border-y-4 border-indigo-600 animate-pulse rounded-3xl shadow-2xl p-5' src={img} alt="" />
                </div>
                <div className=''>
                <div className="card w-full bg-base-100 shadow-inner">
  <div className="card-body">
    <h2 className="text-center text-xl md:text-2xl lg:text-5xl font-bold bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800 text-transparent bg-clip-text bg-300% animate-gradient">{title}</h2>
   <div className='flex gap-10'>
   <div>
    <label>Color:</label>
    <select value={selectColor} onChange={(e)=>handleColorChange(e.target.value)}
    className="select select-primary w-full ">
  <option defaultValue>Select Color</option>
  {variations.map(vari=><option>{vari.color}</option>)}
  
  
 
</select>
   </div>
   <div>
    <label>Size:</label>
    <select value={selectSize} onChange={(e)=>handleSizeChange(e.target.value)}
    className="select select-primary w-full ">
  <option defaultValue>Select Size</option>
  {variations.map(vari=><option>{vari.size}</option>)}
  
  
 
</select>
   </div>
   </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
        
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;