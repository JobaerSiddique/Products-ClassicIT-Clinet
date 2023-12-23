import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "../AuthenticationPage/Login.css"
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
const ProductDetails = () => {
    const details = useLoaderData()
    const [selectColor,setSelectColor]=useState("")
    const [selectSize,setSelectSize]=useState("")
    const [selectImg,setSelecImg]=useState('')
    const {_id,img,title,variations,des,price}= details
    const {users}= useContext(AuthContext)
  console.log(details);
    const handleColorChange = (color)=>{
        setSelectColor(color)
        setSelectSize(variations.find(v=>v.color === color).size)
        setSelecImg(variations.find(v=>v.color === color).img)
    }
    

    const handleAddtoCart =(details)=>{
      const cartItem ={
        title:title,
       
        color:selectColor,
        size:selectSize,
        price:price,
        userEmail:users?.email
      }
     
      if(!users  ){
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Your Are Not Login. Please Login",
         
        });
      }
      else{
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-info"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "Are you Add This Products?",
          html: `${title} <br>
             <p> Price : ${price} </p>
          `,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post('https://products-classic-it-servers.vercel.app/addcart',cartItem)
            .then(res=>{
              if(res.data.message === "Add to Cart Successfully"){
                swalWithBootstrapButtons.fire({
                  title: "Successfully Add to Card",
                  text: "Thanks for Order ",
                  icon: "success"
                });
              }
            })
            
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Sorry You Cancel IT",
              icon: "error"
            });
          }
        });
      }
    }
    return (
        <div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 p-5 gap-20 justify-center items-center'>
                <div className='mx-20'>
            <img className=' border-y-4 border-indigo-600  rounded-3xl shadow-2xl p-5' src={!selectImg? img : selectImg } alt="" />
                </div>
                <div className=''>
                <div className="card w-full bg-base-100 shadow-2xl rounded-3xl">
  <div className="card-body">
    <h2 className="text-center text-xl md:text-2xl lg:text-5xl font-bold bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800 text-transparent bg-clip-text bg-300% animate-gradient">{title}</h2>
    <div className='my-8'>
      <p className='text-justify font-semibold'>{des}</p>
      <p className='font-bold mt-10 text-center lg:text-xl'>Price : <span className='text-amber-600'>${price}</span></p>

    </div>
   <div className='flex gap-10 justify-center items-center '>
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
  <option>{selectSize}</option>
  
  
 
</select>
   </div>
   </div>
    <div className="card-actions justify-center mt-10">
      <button onClick={()=>handleAddtoCart()} className="btn btn-outline btn-success ">Add To Cart</button>
    </div>
  </div>
</div>
        
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;