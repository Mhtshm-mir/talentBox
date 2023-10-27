import React from "react";
import { BsSpotify,BsApple,BsMicrosoft } from "react-icons/bs";
import { AiFillAmazonSquare
} from "react-icons/ai";

function Dashboard() {
  return (
    <div  className="min-h-screen bg-gray-100 flex justify-center items-start  ">
      <div className="mt-20   max-w-[690px] flex flex-col items-center  ">
        <div className="space-y-6 ">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold p-4">Learn to code - for free.</h1>
            <h1 className="text-4xl font-bold p-4">Build Projects.</h1>
            <h1 className="text-4xl font-bold p-4">Earn certification.</h1>
          </div>
          <div className="space-y-4 p-4">
            <p className="text-xl font-medium text-gray-700">
              Since 2014, more than 40,000 freeCodecamp.org graduates have gotten jobs at tech companies including:
            </p>
            <div className="hidden md:flex space-x-4 items-center">
             <BsApple/> <span className="text-2xl font-medium text-gray-700">Google</span>
             <BsMicrosoft/>  <span className="text-2xl font-medium text-gray-700">Microsoft</span>
             <BsSpotify/> <span className="text-2xl font-medium text-gray-700">Spotify</span>
           <AiFillAmazonSquare/>  <span className="text-2xl font-medium text-gray-700">amazon.com</span>
            </div>
          </div>
          
        </div>
        <div className="p-4">
            <button className="max-w-[400px] bg-yellow-500 p-4 text-2xl hover:bg-yellow-300">
              Get Started (it's free)
            </button>
          </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
