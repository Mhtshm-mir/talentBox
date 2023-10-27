import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { authentication } from "./authSlice";
import {useNavigate} from "react-router-dom"
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { googleLogin } from "./authSlice";
import { jwtDecode } from "jwt-decode";
function Signin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const isLoggedin = useSelector((state)=>state.authentication.isLoggedin)
const jwt = useSelector((state)=>state.authentication.token)
const errorMsg = useSelector((state)=>state.authentication.message)
const name =  useSelector((state)=>state.authentication.name)

  const [signInDetails,setSignInDetails] = useState({
    name:"",
    email:"",
    password:""
});



const handleChange=(e)=>{
    let {name,value} = e.target
  
    setSignInDetails({
        ...signInDetails,[name]:value
    })
}
const handleSubmit=(e)=>{
  e.preventDefault()
 dispatch(authentication(signInDetails))
 
 }
  
 useEffect(() => {
  if (isLoggedin) {
    sessionStorage.setItem("token", jwt);
    sessionStorage.setItem("name", name);

    navigate("/courses");
  }
}, [isLoggedin, navigate]);

  return (
    <form className=" bg-white max-w-[350px] flex flex-col items-center  shadow-xl border-[1px]   mt-[60px] m-auto">
      <div className="bg-gray-800 text-white p-3 w-[100%] ">
      <h1 className="text-2xl text-center ">Sign In</h1>

      </div>  
      <section className="mt-6">
        <label htmlFor="text" className=" text-lg  ">Name</label>
        <input type="text" id="text" className="block w-full p-2 border border-black" name="name" onChange={handleChange} />
      </section>

      <section>
        <label htmlFor="email" className="text-lg">Email</label>
        <input type="email" id="email"  className="block w-full p-2 border border-black" name="email" onChange={handleChange}  />
        <p className="text-lg text-red-600 ">{errorMsg}</p>
      </section>
      <section>
        <label htmlFor="password" className="text-lg">Password</label>
        <input type="password" id="password" className="block w-full p-2 border border-black" name="password" onChange={handleChange} />
      </section>
      <section className="mt-6 w-[100%]">
      <section onClick={handleSubmit} className="bg-white  shadow-3xl border-[2px]    hover:bg-gray-300 mt-4 text-center h-10 flex justify-center align-center">
        <button  className="  text-xl text-black {
          
        }]  p-[12px] font-normal text-xs font-semibold font-mono   hover:text-black text-center h-[100%]">Signin</button>
      </section>
      <section className="flex justify-center" >
        
        <GoogleOAuthProvider  clientId="566485793596-lgbkpea2jdiktsc31s6485kalsgk7f3h.apps.googleusercontent.com">
                <GoogleLogin 
                width={346}
                
                size="large"
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              sessionStorage.setItem("token",credentialResponse.credential)
              sessionStorage.setItem("name",decoded.name)
                dispatch(googleLogin({token:credentialResponse.credential,name:decoded.name}))

            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
        </section>
    

      </section>
    
    </form>
  );
}


export default Signin;
