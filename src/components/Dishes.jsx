import React from "react";
import biryani from "../assets/img/biryani.jpg";
import maggi from "../assets/img/maggi.jpg";
import daalchawal from "../assets/img/daalchawal.jpg";
import Chicken from "../assets/img/Chicken.jpg";
import curry from "../assets/img/curry.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Indian Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={biryani} title="Biryani" price="$10.99" />
        <DishesCard img={maggi} title="Noodeles" price="$12.99" />
        <DishesCard img={maggi} title="Maggi" price="$10.99" />
        <DishesCard img={daalchawal} title="Daal Chawal" price="$11.99" />
        <DishesCard img={Chicken} title="Chicken" price="$10.99" />
        <DishesCard img={curry} title="Curry" price="$12.99" />
      </div>
    </div>
  );
};

export default Dishes;