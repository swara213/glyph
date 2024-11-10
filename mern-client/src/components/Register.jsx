import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';
import signupimage from "../assets/snoopy2.jpg";

const Register = () => {
    const [message, setMessage] = useState("");
    const {registerUser, signInWithGoogle} = useAuth();
    console.log(registerUser)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    //   register user

      const onSubmit = async(data) => {
        // console.log(data)
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully!")
            navigate("/")
        } catch (error) {
           setMessage("Please provide a valid email and password") 
           console.error(error)
        }
      }

      const handleGoogleSignIn = async() => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!") 
            console.error(error)
        }
      }
//   return (
//     <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
//     <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
//         <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div className='mb-4'>
//                 <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
//                 <input 
//                 {...register("email", { required: true })} 
//                 type="email" name="email" id="email" placeholder='Email Address'
//                 className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
//                 />
//             </div>
//             <div className='mb-4'>
//                 <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
//                 <input 
//                 {...register("password", { required: true })} 
//                 type="password" name="password" id="password" placeholder='Password'
//                 className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
//                 />
//             </div>
//             {
//                 message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
//             }
//             <div>
//                 <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Register</button>
//             </div>
//         </form>
//         <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link></p>

//         {/* google sign in */}
//         <div className='mt-4'>
//             <button 
//             onClick={handleGoogleSignIn}
//             className='w-full flex flex-wrap gap-1 items-center justify-center bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none'>
//             <FaGoogle  className='mr-2'/>
//             Sign in with Google
//             </button>
//         </div>

//         <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
//     </div>
// </div>
//   )
// }


return (
    <div className="min-h-screen bg-[#F3EAD9] flex overflow-hidden">
      <div className="flex h-screen w-full">
        {/* Sign-up Box */}
        <div className="flex-1 flex justify-center items-center py-6">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D6C1A1] to-[#7A674C] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">SIGN UP FORM</h1>
                </div>
                <div className="divide-y divide-gray-200">
                <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                <input 
                {...register("email", { required: true })} 
                type="email" name="email" id="email" placeholder='Email Address'
                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                <input 
                {...register("password", { required: true })} 
                type="password" name="password" id="password" placeholder='Password'
                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                />
            </div>
            {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
            <div>
                <button className='bg-[#B49C7A] text-white rounded-md px-2 py-1'>Register</button>
            </div>
        </form>
            </div>
                    
                <hr />
                <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Please <Link to="/login" className='text-yellow-500 hover:text-blue-700' style={{ fontSize: '20px' }}>Login</Link></p>
                <div className='mt-4'>
            <button 
            onClick={handleGoogleSignIn}
            className='w-full flex flex-wrap gap-1 items-center justify-center bg-[#B49C7A] text-white rounded-md px-2 py-1'>
            <FaGoogle  className='mr-2'/>
            Sign in with Google
            </button>
        </div>

        <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="w-1/2 h-full">
          <img 
            src={signupimage} 
            alt="Sign Up" 
            className="object-cover h-full w-full" 
          />
        </div>
      </div>
    </div>
  );
};





export default Register