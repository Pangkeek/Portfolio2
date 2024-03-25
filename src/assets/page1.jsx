import React from "react";
import Pangki from './Pangkim61.svg'

export default function Page1() {
  function scrollcontact(){
    window.scrollTo({
      top: 10000,
      behavior: "smooth",
    });
  }
  return (
    <div className="h-[853px] pt-[75px]">
      <div className="flex flex-col md:flex-row container mx-auto">
        
      <img className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-[1]' src={Pangki}/>

        <div className="w-full md:w-1/2 h-[778px] bg-[#151515]">
          <div className="ml-[35px] md:ml-[0px]">
            <h1 className=" text-[#f90004] ubuntu-medium text-[24px] mt-[151px]">hello there</h1>
            <p className="text-white ubuntu-regular text-[24px] mb-[-20px]">Im&nbsp;&nbsp;&nbsp;<span className="ubuntu-bold text-[64px]">Jeep<span className="text-[#f90004]">.</span></span></p>
            <p className="text-white ubuntu-bold text-[54px] md:text-[64px]">Supawat</p>
            <div className="flex felx-row mt-[30px]">
              <div className="w-[2px] h-[53px] bg-[#f90004]"></div>
              <div className="ml-[10px]">
              <p className="text-white ubuntu-medium text-[16px]">I am a student at Khon Kean University.</p>
              <p className="text-[#f90004] ubuntu-bold text-[20px] ml-[15px]">Computer Science major</p>
              </div>
            </div>
            <button className="ubuntu-bold text-[20px] text-[#151515] bg-[#f90004] py-[11px] px-[23px] mt-[84px]" onClick={scrollcontact} >Contact me</button>
            <div className="absolute bg-[#151515] h-[807px] w-1/2 top-[75px] left-0 z-[-1] hidden md:block"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[778px] bg-[#f90004]">
          <div className="flex ml-[10px] md:ml-[85px]">
            <div>
            <h1 className=" text-white text-right z-[2] ubuntu-medium text-[24px] mt-[151px]">I am a</h1>
            <p className="text-right text-white ubuntu-bold text-[64px] mr-[29px]">Font-end</p>
            <p className="text-right text-white ubuntu-regular text-[20px] mt-[-16px]">developer</p>
            <p className="text-right text-white ubuntu-bold text-[64px] mr-[29px] mt-[-15px]">Game</p>
            <p className="text-right text-white ubuntu-regular text-[20px] mt-[-16px]">developer</p>
            <p className="text-right text-white ubuntu-bold text-[64px] mr-[29px] mt-[-15px]">Python <span className="text-[14px]">(data)</span></p>
            <p className="text-right text-white ubuntu-regular text-[20px] mt-[-16px]">developer</p>
            <p className="w-[90px] text-right text-[#151515] ubuntu-bold text-[16px] mt-[55px] ml-[130px] md:ml-[360px] border-b-[3px] border-[#151515]">Junoir level</p>
            <div className="absolute bg-[#f90004] h-[807px] w-3/4 top-[75px] z-[-1] hidden md:block"></div>
            </div>
            <div className="h-[230px] w-[5px] bg-[#151515] mt-[230px] ml-[30px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
