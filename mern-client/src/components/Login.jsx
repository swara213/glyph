import React, { useContext, useState } from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import signUpImage from "../assets/snoopy2.jpg"; // Make sure to import your image
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google_logo.jpeg" ; 


const Login = () => {
    const {login , loginwithGoogle} = useContext(AuthContext) ; 
  const [error , setError] = useState("error") ; 

  const location = useLocation() ; 
  const navigate = useNavigate() ; 

  const from = location.state?.from?.pathname || "/"
  const handleLogin = (event) => {
    event.preventDefault() ; 
    const form = event.target ; 
    const email = form.email.value ; 
    const password = form.password.value ; 

    login(email,password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("LOGIN SUCCESSFULL!") ; 
        navigate(from , {replace:true})
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    

   
  }

  //sign up w google 
  const handleRegister = () => {
    loginwithGoogle().then((result) => {
      const user=result.user ; 
      alert("SIGNUP SUCCESSFULL!") ; 
      navigate(from , {replace:true})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage) ; 
    });
  }
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
                  <h1 className="text-2xl font-semibold">LOGIN FORM</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <form onSubmit={handleLogin}  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="Password"
                      />
                    </div>
                    <p>
                      If you don't have an account. Please{" "}
                      <Link to="/sign-up" className="text-yellow-500 underline">
                        SIGN UP
                      </Link>{" "}
                      HERE
                    </p>
                    <div className="relative">
                      <button className="bg-[#B49C7A] text-white rounded-md px-2 py-1">
                        Login
                      </button>
                    </div>
                  </form>
                </div>

                <hr />
                <div className="flex w-full items-centre flex-col mt-5 gap-3">
                  <button onClick={handleRegister} className="block"><img src={googleLogo} alt="" className="w-12 h-12 inline-block" />Login with Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="w-1/2 h-full">
          <img 
            src={signUpImage} 
            alt="Sign Up" 
            className="object-cover h-full w-full" 
          />
        </div>
      </div>
    </div>
  );

  
}

export default Login
