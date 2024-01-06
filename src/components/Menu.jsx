import React from "react";
import DishesCard from "../layouts/DishesCard";
import corn from "../assets/img/corn.jpg";
import paneer from "../assets/img/paneer.jpg";
import biryani from "../assets/img/biryani.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={corn} title="African Corn" price="$16.99" />
        <DishesCard img={paneer} title="Indian Paneer" price="$18.99" />
        <DishesCard img={biryani} title="Chicken Biryani" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;