import React from "react";
import Button from "../layouts/Button";

const Home = () => {
 
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/table.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" font-semibold text-6xl">
          Welcome to our food court.Your hunger! Our Responsibility
        </h1>
        <p className="">
         This zone is only for foody lover , we care your pocket with hunger.Good foods are the way to be healthy and fit. Our foods are well tested and maintained by experince chefs. Our chef are well experinced in thier respective field.We have a number of especialist chef from all over the world. Our African and Indian dishes holds rank 1 in our area 
        </p>
        <div className=" lg:pl-44">
        </div>
      </div>
      
    </div>
   
  );
};

export default Home;