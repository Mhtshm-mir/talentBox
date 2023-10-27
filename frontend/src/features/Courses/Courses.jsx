import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { courses } from "./courseSlice";
import {GrDatabase} from "react-icons/gr"
import { FaReact ,FaDyalog,FaJsSquare,FaClipboardList } from "react-icons/fa";
import { PiDesktopTowerDuotone
} from "react-icons/pi";
const iconArr = [
  "PiDesktopTowerDuotone",
 "PiDesktopTowerDuotone",
 "FaJsSquare",
 "FaReact",
 "FaDyalog",
 "GrDatabase",
  "FaClipboardList"]

function Course() {
  
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const coursesArr = useSelector((state=>state.course.courses))
  const error = useSelector((state=>state.course.error))
  const errorMsg = useSelector((state=>state.course.errorMsg))
  const name= useSelector((state)=>state.authentication.name)


  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    dispatch(courses())

    
  }, []);
  return (
    <div>
      {
        error && (
          <div>
          {errorMsg}
          </div>
        )
      }
      {
        coursesArr.length>0 &&(
          <div className="flex  flex-col place-items-center bg-gray-100">
          <div className=" text-center mt-10 mb-16 text-4xl font-mono font-sans">
            <h2 className="font-serif font-bold">Welcome to freeCodeCamp.org 
            
            <h1 className="text-blue-900 font-serif">{name}</h1></h2>
          </div>
          <div className=" text-center text-2xl mb-10">
            "I have not failed, I"ve just found 10,000 ways that won't work" <br />- Thomas A. Edison
          </div>
         
          <div className="flex w-[90vw] md:w-[800px] flex-col  items-center gap-2 mb-20">
            {coursesArr.map((el, i) => (
              <div key={el._id} className=" w-[95%]  min-h-[70px] border-black border-[3px]  flex items-center gap-4 p-4 bg-[#D0D0D5] hover:bg-gray-900 hover:cursor-pointer hover:text-white text-xl">
                
              {renderIcon(iconArr[i])}
                  <p >
                  {el.title} {el.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
        )
      }
    </div>
  );
}

function renderIcon(iconName) {
  switch (iconName) {
    case "FaReact":
      return <FaReact />;
    case "PiDesktopTowerDuotone":
      return <PiDesktopTowerDuotone />;
    case "FaJsSquare":
      return <FaJsSquare />;
    case "FaDyalog":
      return <FaDyalog />;
    case "GrDatabase":
      return <GrDatabase />;
    case "FaClipboardList":
      return <FaClipboardList />;
    default:
      return null; 
  }
}
export default Course;



