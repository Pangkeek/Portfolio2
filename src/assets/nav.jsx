import React, { useState, useRef } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function myFunction(event) {
    setIsOpen(!isOpen);
    event.currentTarget.classList.toggle("change");
  }

  function scrollcontact(){
    window.scrollTo({
      top: 10000,
      behavior: "smooth",
    });
  }

  function scrollhome(){
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }

  function scrollabout(){
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }

  function scrollskill(){
    window.scrollTo({
      top: 1400,
      behavior: "smooth",
    });
  }

  function scrollproject(){
    window.scrollTo({
      top: 2400,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-[#151515] fixed w-full h-[75px]">
      <div className="container mx-auto flex justify-between items-center h-[75px]">
        <a className="z-20" onClick={scrollhome}>
          <h1 className="text-white text-3xl ml-6 md:ml-0 inline ubuntu-bold">jEEP</h1><h1 className='text-[#f90004] text-3xl font-bold inline'>.</h1>
        </a>

        <div className="md:hidden mr-6 z-10" onClick={myFunction}>
          <div className="bar1 rounded-md"></div>
          <div className="bar2 rounded-md"></div>
          <div className="bar3 rounded-md"></div>
        </div>

        <div className="hidden md:flex">
          <button><p className="text-white font-medium ml-4 md:ml-12 hover:text-[#f90004] hover:scale-110 transition-all ubuntu-medium" onClick={scrollhome}>home</p></button>
          <button><p className="text-white font-medium ml-4 md:ml-12 hover:text-[#f90004] hover:scale-110 transition-all ubuntu-medium" onClick={scrollabout}>about</p></button>
          <button><p className="text-white font-medium ml-4 md:ml-12 hover:text-[#f90004] hover:scale-110 transition-all ubuntu-medium" onClick={scrollskill}>skill</p></button>
          <button><p className="text-white font-medium ml-4 md:ml-12 hover:text-[#f90004] hover:scale-110 transition-all ubuntu-medium" onClick={scrollproject}>project</p></button>
          <button><p className="text-white font-medium mr-4 md:ml-12 hover:text-[#f90004] hover:scale-110 transition-all ubuntu-medium" onClick={scrollcontact}>contact</p></button>
        </div>
      </div>

      <div className={`flex flex-col md:hidden menu pb-10 bg-[#151515] w-full z-0 ${isOpen ? 'show':null}`}>
        <button><p className="text-white font-medium text-center mt-4 hover:text-[#f90004] hover:scale-110 transition-all" onClick={scrollhome}>home</p></button>
        <button><p className="text-white font-medium text-center mt-4 hover:text-[#f90004] hover:scale-110 transition-all" onClick={scrollabout}>about</p></button>
        <button><p className="text-white font-medium text-center mt-4 hover:text-[#f90004] hover:scale-110 transition-all" onClick={scrollskill}>skill</p></button>
        <button><p className="text-white font-medium text-center mt-4 hover:text-[#f90004] hover:scale-110 transition-all" onClick={scrollproject}>project</p></button>
        <button><p className="text-white font-medium text-center mt-4 hover:text-[#f90004] hover:scale-110 transition-all" onClick={scrollcontact}>contact</p></button>
      </div>
    </div>
  );
}
