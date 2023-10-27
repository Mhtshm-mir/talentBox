import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { useSelector ,useDispatch} from "react-redux";
import { logout } from "../features/Auth/authSlice";
function Navbar() {
  const navigate = useNavigate();
  const isLoggedin = useSelector((state)=>state.authentication.isLoggedin)
const dispatch= useDispatch()
  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleSignOut = () => { 
    sessionStorage.removeItem("token");
    dispatch(logout())
    navigate("/")
  };


  return (
    <div className="flex flex-col bg-gray-900 text-white md:flex-row items-center justify-between p-2">
      <div className="hidden md:flex flex-grow   max-w-2xl relative ml-2">
      <button className="absolute bg-gray-800 border-none  w-10 h-full flex items-center justify-center text-gray-500">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="Search 9,000+ tutorials"
          className="w-[70%] bg-gray-800 border-none outline-none text-white text-lg  pl-10 focus:outline-blue-500"
        />
      </div>
      <div className="font-mono">
        <Link to={"/"} className="text-white text-2xl">
        freeCodeCamp 
        <FaFreeCodeCamp className="inline w-10"/>
        </Link>
      </div>
      <div className="flex mr-2 gap-2 flex-grow max-w-2xl justify-end items-center">
        <button className="p-1 hover:bg-gray-300 hover:text-black border w-20 border-white text-lg  bg-transparent" >
          Menu
        </button>
        {
  isLoggedin ? (
  <>
    <button className="p-1 w-24 hover:bg-gray-300 text-white hover:text-black  text-black text-lg bg-red-500  bg-transparent" onClick={handleSignOut}>
    Sign out 
  </button>
  </>
  ) : (
    <button className="p-1 w-24 hover:bg-gray-300 hover:text-black  text-black text-lg bg-yellow-500  bg-transparent" onClick={handleSignInClick}>
    Sign in
  </button>
  )
}
        
          
      </div>
    </div>
  );
}

export default Navbar;
