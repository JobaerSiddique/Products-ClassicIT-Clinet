import React, { useContext, useEffect, useState } from 'react';
import login from "../../../login.json"
import Lottie from 'lottie-react';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import "./Login.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Login = () => {
const [disable,setDisable] = useState(true)
const navigate = useNavigate()
const{LoginUser}= useContext(AuthContext)
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const {register,formState: { errors },handleSubmit,reset} = useForm()
    const onSubmit = (data) => {
     
        const email = data.email;
        const password= data.password

        axios.post('http://localhost:5000/login',{email,password})
        .then(response =>{
          console.log(response.data.existUser);
          const result =response.data.existUser
          LoginUser(result)
          if(response.data.message === 'Login Successfully'){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "User Login Successfully",
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
          navigate('/login')
          reset()
        })
       
    }
    const handleRecaptach = (e)=>{
        const User_captach = e.target.value
        if (validateCaptcha(User_captach)==true) {
          
           setDisable(false)
        }
   
        else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Captcha Not Maching Please Try Again",
           
          });
           setDisable(true)
        }
    }
    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-28 p-5'>
          <div>
            <Lottie className='w-[80%] lg:w-[90%]' animationData={login} loop={true} />
            </div>
            <div>
                
            <div className="card w-[65%]  shadow-2xl border-y-4 border-cyan-500 rounded-3xl">
  <div className="card-body ">
    <h2 className="text-center font-bold uppercase text-xl md:text-3xl  lg:text-4xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text bg-300% animate-gradient">Login</h2>
    <div className='mt-10'>
    <form onSubmit={handleSubmit(onSubmit)} >
    <label className="form-control w-full">
  <div className="label">
    <span className="label-text font-bold">Email <span className='text-red-600'>*</span></span>
  </div>
  <input 
  type="email" 
  placeholder="Enter Your Email" 
  {...register("email", { required: true })}
  className="input input-bordered input-info w-full" />
  {errors.email?.type === "required" && (
        <p className='text-red-600 mt-3 ml-2 font-semibold'>Email Must be Required</p>
      )}
 
</label>
    <label className="form-control w-full my-5">
  <div className="label">
    <span className="label-text font-bold">Password <span className='text-red-600'>*</span></span>
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
    <label className="form-control w-full my-5">
  <div className="label">
  <LoadCanvasTemplate/>
  </div>
  <input 
  type="text" 
  placeholder="Enter Here Same Captcha"
  onBlur={handleRecaptach} 
  className="input input-bordered input-info w-full" />
 
</label>

<p>Are You New Here? <Link className='text-orange-500 font-semibold' to="/signup">Please Register</Link></p>
<input disabled={disable} type="submit" value="LOGIN" className='btn btn-outline btn-warning w-full my-6 ' />
    </form>
    </div>
  </div>
</div>
            </div>
            
          </div>
        </div>
    );
};

export default Login;