// import React, { useContext, useState } from "react";
// import { Link, replace, useLocation, useNavigate } from "react-router-dom";
// import signUpImage from "../assets/snoopy2.jpg"; // Make sure to import your image
// // import { AuthContext } from "../context/AuthProvider";
// import googleLogo from "../assets/google_logo.jpeg" ; 


// const SignUp = () => {
//   const {createUser , loginwithGoogle} = useContext(AuthContext) ; 
//   const [error , setError] = useState("error") ; 

//   const location = useLocation() ; 
//   const navigate = useNavigate() ; 

//   const from = location.state?.from?.pathname || "/"
//   const handleSignUp = (event) => {
//     event.preventDefault() ; 
//     const form = event.target ; 
//     const email = form.email.value ; 
//     const password = form.password.value ; 

//    createUser(email,password).then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert("SIGNUP SUCCESSFULL!") ; 
//     navigate(from , {replace : true})
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setError(errorMessage) ; 
//     // ..
//   });
//   }

//   //sign up w google 
//   const handleRegister = () => {
//     loginwithGoogle().then((result) => {
//       const user=result.user ; 
//       alert("SIGNUP SUCCESSFULL!") ; 
//       navigate(from , {replace:true})
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       setError(errorMessage) ; 
//     });
//   }
  


//   return (
//     <div className="min-h-screen bg-[#F3EAD9] flex overflow-hidden">
//       <div className="flex h-screen w-full">
//         {/* Sign-up Box */}
//         <div className="flex-1 flex justify-center items-center py-6">
//           <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//             <div className="absolute inset-0 bg-gradient-to-r from-[#D6C1A1] to-[#7A674C] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//             <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//               <div className="max-w-md mx-auto">
//                 <div>
//                   <h1 className="text-2xl font-semibold">SIGN UP FORM</h1>
//                 </div>
//                 <div className="divide-y divide-gray-200">
//                   <form onSubmit={handleSignUp}  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                     <div className="relative">
//                       <input
//                         id="email"
//                         name="email"
//                         type="text"
//                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                         placeholder="Email address"
//                       />
//                     </div>
//                     <div className="relative">
//                       <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                         placeholder="Password"
//                       />
//                     </div>
//                     <p>
//                       If you have an account. Please{" "}
//                       <Link to="/login" className="text-yellow-500 underline">
//                         LOGIN
//                       </Link>{" "}
//                       HERE
//                     </p>
//                     <div className="relative">
//                       <button className="bg-[#B49C7A] text-white rounded-md px-2 py-1">
//                         Sign up
//                       </button>
//                     </div>
//                   </form>
//                 </div>

//                 <hr />
//                 <div className="flex w-full items-centre flex-col mt-5 gap-3">
//                   <button onClick={handleRegister} className="block"><img src={googleLogo} alt="" className="w-12 h-12 inline-block" />Login with Google</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image on the Right */}
//         <div className="w-1/2 h-full">
//           <img 
//             src={signUpImage} 
//             alt="Sign Up" 
//             className="object-cover h-full w-full" 
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';


const Register = () => {
    const [message, setMessage] = useState("");
    

const { registerUser, signInWithGoogle } = useAuth();
if (!registerUser) {
    console.error("Auth context is undefined in Register component");
    return <div>Error: Auth context not found!</div>;
}

    console.log(registerUser)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    //   register user

      const onSubmit = async(data) => {
        console.log(data)
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully!")
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
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

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
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Register</button>
            </div>
        </form>
        <p className='align-baseline font-medium mt-4 text-sm'>Have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link></p>

        {/* google sign in */}
        <div className='mt-4'>
            <button 
            onClick={handleGoogleSignIn}
            className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
            <FaGoogle  className='mr-2'/>
            Sign in with Google
            </button>
        </div>

        <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
    </div>
</div>
  )
}

export default Register