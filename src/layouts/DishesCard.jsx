import React, { useState }  from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "./Button";

const DishesCard = (props) => {
    const [showmodal,setshowModal]=useState(false)
    function myf(){
        alert("Congratulations for choosing us")
      }
   
    const MyModal=()=>{
        return(
                <>
        <div>
            <form>
                <div><h3 className='bg-blue font-bold my-4 '> fill this form to proceed your order further</h3></div>
                <div>
                <input type='text' placeholder=' Firt name' className='border-2 to-black'></input>
                </div>
                <div><input type='text' placeholder='last name' className='border-2 to-black'></input></div>
                
                <div> <input type='text' placeholder='email'  className='border-2 to-black'></input></div>
               
                <div> <input type='text' placeholder='mobile no'  className='border-2 to-black'></input></div>
        
                <div><input type='text' placeholder='house no.'  className='border-2 to-black'></input></div>
                
                <div><input type='text' placeholder='street no.'  className='border-2 to-black'></input></div>
                
                <div><input type='text' placeholder='ordered items.' className='border-2 to-black'></input></div>
                <button onClick={()=>{setshowModal(false);myf()}}className='bg-cyan-700 hover:bg blue-700 text-black font-bold px-4 mx-2 my-4 hover:bg-slate-600 hover:text-white rounded'> Proceed </button>
               
            </form>
        </div>
        
       
            </>
            )
        };
  return (
    <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className=" rounded-xl" src={props.img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
    
        <div className=" flex flex-row justify-center ">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarHalf className=" text-brightColor" />
        </div>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">{props.price}</h3>
          </div>
<div>
          <button onClick={()=>setshowModal(true)}className="  px-6 py-1 mx-16 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">Order Now</button>
          
          {showmodal && <MyModal/>}

        </div>
      </div>
    </div>
  );
};

export default DishesCard;