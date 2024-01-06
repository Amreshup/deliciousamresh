import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">DeliciousAmresh</h1>
          <p className=" text-sm">
           Our every plate of serving is an emotions.We care about your time and money. Your time is most precious for us.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Our other outlets</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Mumbai
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Delhi
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Banglore
            </a>
            
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Our Dishes
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://www.email.com/panitamresh05@gmail/"
            >
             email 
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +91 7081235395
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://www.instagram.com/_amreshupadhyay">
            
            Instagram
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://www.linkedin.com/amreshupadhyay">
            
            Linkedin
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor">Amresh Indian</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;