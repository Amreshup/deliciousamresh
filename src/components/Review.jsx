import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import womann from "../assets/img/womann.jpg";
import woman from "../assets/img/woman.jpg";
import kid from "../assets/img/kid.jpg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={womann} name="Anna" />
        <ReviewCard img={woman} name="Thachama Saardsen" />
        <ReviewCard img={kid} name="Amresh" />
      </div>
    </div>
  );
};

export default Review;