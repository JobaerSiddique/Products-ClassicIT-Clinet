import React from 'react';
import "../AuthenticationPage/Login.css"
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const {_id,title,img,variations}= product
    return (
        <div className='my-8 m-5'>
            <div className="card  w-96  shadow-xl mx-auto p-4  ">
  <figure><img className='rounded-3xl' src={img} alt="T-shrit" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold lg:text-2xl bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text animate-gradient my-5">
      {title}
    </h2>
   
    <div className="card-actions justify-end">
      {
        variations.map(vars=>
           <>
            <p className='bg-indigo-600 text-center rounded-3xl p-1 text-white '>Color: {vars.color}</p>
            <p className='bg-red-600 text-center rounded-3xl p-1 text-white animate-pulse'>Size: {vars.size}</p>
           </>
        )
      }
    </div>
    <Link to={`productdetails/${_id}`} className='btn btn-outline btn-secondary my-4 hover:scale-95'>{title} Details</Link>
  </div>
</div>
        </div>
    );
};

export default ProductCard;