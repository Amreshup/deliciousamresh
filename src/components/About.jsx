import React from "react";
import snacks from "../assets/img/snacks.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={snacks} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
         We are serving since 1990. We hold top rank among all top Restaurant in India.We not only serve food but care about taste and pocket . We have a number of top dishes here which can make you come many times here again and again.
        </p>
        <p>
          We have family sitting with kids playing area. we do not want to get you bother while you are having taste of your life . We provide a top discount to our regular customers.We are planning to open outlets at some good p
        </p>
      </div>
    </div>
  );
};

export default About;