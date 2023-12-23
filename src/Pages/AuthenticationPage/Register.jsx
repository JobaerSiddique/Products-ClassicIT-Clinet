import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import registers from "../../../register.json"
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import ImageConfig from "../../ImageHosting/Imageconfig"
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
const Register = () => {
    const {register,formState: { errors },handleSubmit,reset} = useForm()
    const navigate= useNavigate()
    const{LoginUser}=useContext(AuthContext)
    const onSubmit = (data) => {
        
     const file= data.file[0]
            const name = data.name
            const email = data.email;
            const password= data.password

            if(file){
                const formData = new FormData()
                formData.append('file',file)
                formData.append('upload_preset','jobaer_up')
                fetch(`https://api.cloudinary.com/v1_1/${ImageConfig.cloudName}/image/upload`,{
        method:"POST",
        
        body:formData
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result);
        const image= result.secure_url
        axios.post('http://localhost:5000/register',{name,email,password,image})
            .then(response =>{
              console.log(response.data.UserCreated);
              LoginUser(response.data.UserCreated)
              if(response.data.message === 'Register Successfully'){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "User Create Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
                reset()
              }
              
            })
            .catch(err=>{
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "Oops",
                text: `${err.response.data.message}`,
               
              });
              navigate('/signup')
              reset()
            })
      })
            }
    
            
           
        

        
       
       
    }
    return (
        <div className='bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl shadow-2xl my-10 p-8  '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-28 p-5'>
          
            <div>
                
            <div className="card glass lg:w-[65%]  shadow-2xl border-y-4 border-orange-500 rounded-3xl">
  <div className="card-body ">
    <h2 className="text-center font-bold uppercase text-xl md:text-3xl  lg:text-4xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text bg-300% animate-gradient">SignUp</h2>
    <div className='mt-10'>
    <form onSubmit={handleSubmit(onSubmit)} >
    <label className="form-control w-full mb-3">
  <div className="label">
    <span className="label-text font-bold text-white">Name <span className='text-red-600'>*</span></span>
  </div>
  <input 
  type="text" 
  placeholder="Enter Your Email" 
  {...register("name", { required: true })}
  className="input input-bordered input-info w-full" />
  {errors.name?.type === "required" && (
        <p className='text-red-600 mt-3 ml-2 font-semibold'>Name Must be Required</p>
      )}
 
</label>
    <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-bold text-white">Email <span className='text-red-600'>*</span></span>
  </div>
  <input 
  type="email" 
  placeholder="Enter Your Email" 
  {...register("email", { required: true })}
  className="input input-bordered input-info w-full" />
  {errors.email?.type === "required" && (
        <p className='text-red-600 mt-3 ml-2 font-semibold '>Email Must be Required</p>
      )}
 
</label>
    <label className="form-control w-full my-5">
  <div className="label">
    <span className="label-text font-bold text-white">Password <span className='text-red-600'>*</span></span>
  </div>
  <input 
  type="password" 
  placeholder="Enter Your Password" 
  {...register("password", { required:{
    value:true,
    message:"Password Must be Required"
  }, 
  pattern:{
    value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message:"Eight Character at Least one Letter & One number"
  }
})}
  className="input input-bordered input-info w-full" />
 {errors.password?.type === "required" && (
        <p className='text-red-600 mt-3 ml-2 font-semibold'>{errors.password?.message}</p>
      )}
 {errors.password?.type === "pattern" && (
        <p className='text-red-600 mt-3 ml-2 font-semibold'>{errors.password?.message}</p>
      )}
</label>
<label className="form-control w-full mb-3">
  <div className="label">
    <span className="label-text font-bold text-white">Photo <span className='text-red-600'>*</span></span>
  </div>
  <input 
  type="file" 
  {...register("file", { required: true })}
  className="file-input file-input-bordered file-input-info w-full " />
  {errors.file?.type === "required" && (
        <p className='text-red-600 mt-3 ml-2 font-semibold'>Photo Must be Required</p>
      )}
 
</label>
   

<p className='text-white'>Already Have An Account ?<Link className='text-orange-500 font-semibold ml-2' to="/login">Please Login</Link></p>
<input  type="submit" value="SIGNUP" className='btn btn-outline btn-info w-full my-6 ' />
    </form>
    </div>
  </div>
</div>
            </div>
            <div>
            <Lottie className='w-[80%] lg:w-[90%]' animationData={registers} loop={true} />
            </div>
            
          </div>
        </div>
    );
};

export default Register;