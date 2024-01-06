import React,{useState} from "react";

const Button = () => {


    const [showmodalll,setshowModalll]=useState(false)
    function myf(){
        alert("you are logged in!")
      }
    const MyModalll=()=>{
        return(
                <>
       
            <form>
                
                <div>
                <input type='text' placeholder='email' className='border-2 to-black my-4' ></input>
                </div>
                <div><input type='text' placeholder='password' className='border-2 to-black'></input></div>
                <button onClick={()=>{setshowModalll(false);myf()}} className='bg-cyan-700 hover:bg blue-700 text-black font-bold px-4 mx-2 my-4 hover:bg-slate-600 hover:text-white rounded'>click </button>
                
                
            </form>
        
        
            </>
            )
        };
    
    
    
    
  return (
    <div>
     <button onClick={()=>setshowModalll(true)} className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">login</button>
          {showmodalll && <MyModalll/>}

    
    </div>
  );
};

export default Button;