import React, { useState } from "react";
import kelly from './kelly.svg'
import port1 from './Port1.svg'
import todo from './todo.svg'
import graph from './graph.svg'
import qr from './qr.svg'
import yt from './youload.svg'
import pw from './pw.svg'

export default function Page4() {
  const [isSelect1, setSelect1] = useState(true);
  const [isSelect2, setSelect2] = useState(false);
  const [isSelect3, setSelect3] = useState(false);

  const handleClick1 = () => {
    setSelect1(true);
    setSelect2(false);
    setSelect3(false);
  };

  const handleClick2 = () => {
    setSelect1(false);
    setSelect2(true);
    setSelect3(false);
  };

  const handleClick3 = () => {
    setSelect1(false);
    setSelect2(false);
    setSelect3(true);
  };

  return (
    <div className="bg-[#181818] h-auto pb-[70px]">
      <div className="container mx-auto">
        <div className="">
          <p className="text-[32px] text-white ubuntu-bold text-center pt-[50px]">
            Project
          </p>
          <div className="flex flex-row justify-center items-center my-[50px]">
            <div
              onClick={handleClick1}
              className={
                isSelect1
                  ? "flex w-[181px] h-[61px] justify-center items-center bg-[#181818] border-b-2 border-[#f90004]"
                  : "flex w-[181px] h-[61px] justify-center items-center bg-[#1E1E1E]"
              }
            >
              <p className="text-[20px] text-white ubuntu-bold text-center">
                Font-end
              </p>
            </div>
            <div
              onClick={handleClick2}
              className={
                isSelect2
                  ? "flex w-[181px] h-[61px] justify-center items-center bg-[#181818] border-b-2 border-[#f90004]"
                  : "flex w-[181px] h-[61px] justify-center items-center bg-[#1E1E1E]"
              }
            >
              <p className="text-[20px] text-white ubuntu-bold text-center">
                Python
              </p>
            </div>
            <div
              onClick={handleClick3}
              className={
                isSelect3
                  ? "flex w-[181px] h-[61px] justify-center items-center bg-[#181818] border-b-2 border-[#f90004]"
                  : "flex w-[181px] h-[61px] justify-center items-center bg-[#1E1E1E]"
              }
            >
              <p className="text-[20px] text-white ubuntu-bold text-center">
                Game
              </p>
            </div>
          </div>
        </div>

        <div>
          {isSelect1 && (
            <div className="flex justify-between items-center flex-col md:flex-row">
              <a href='https://pangkeek.github.io/Kelly_Tarlton.github.io/' className="w-[361px] h-[311px] flex flex-col">
                <img className="w-full h-[214px] bg-[#1E1E1E]" src={kelly}/>
                <div className="w-full h-[97px] bg-[#151515] flex flex-col justify-center">
                    <p className="text-white ubuntu-bold text-[27px] pl-[18px]">Kelly Tarlton's</p>
                    <p className="text-white ubuntu-medium pl-[18px]">website about AR application.</p>
                </div>
              </a>
              <a href='https://pangkeek.github.io/Pangki.github.io/' className="w-[361px] h-[311px] flex flex-col">
                <img className="w-full h-[214px] bg-[#1E1E1E]" src={port1}/>
                <div className="w-full h-[97px] bg-[#151515] flex flex-col justify-center">
                    <p className="text-white ubuntu-bold text-[27px] pl-[18px]">Portfolio1</p>
                    <p className="text-white ubuntu-medium pl-[18px]">My first version of my Portfolio.</p>
                </div>
              </a>
              <a className="w-[361px] h-[311px] flex flex-col">
                <img className="w-full h-[214px] bg-[#1E1E1E]" src={todo}/>
                <div className="w-full h-[97px] bg-[#151515] flex flex-col justify-center">
                    <p className="text-white ubuntu-bold text-[27px] pl-[18px]">Todo list</p>
                    <p className="text-white ubuntu-medium pl-[18px]">My little React Project for practic.</p>
                </div>
              </a>
            </div>
          )}
          {isSelect2 && (
            <div className="flex justify-between items-center flex-col md:flex-row">
              <a href='https://github.com/Pangkeek/Dataanalysis/blob/main/main.ipynb' lassName="w-[361px] h-[311px] flex flex-col">
                <img className="w-full h-[214px] bg-[#1E1E1E]" src={graph}/>
                <div className="w-full h-[97px] bg-[#151515] flex flex-col justify-center">
                    <p className="text-white ubuntu-bold text-[27px] pl-[18px]">Covid Data analytics</p>
                    <p className="text-white ubuntu-medium pl-[18px]">Analyze covid-19 dataset using pandas.</p>
                </div>
              </a>
              <a href='https://github.com/Pangkeek/qrcode-genereter/blob/main/qr.py' lassName="w-[361px] h-[311px] flex flex-col">
                <img className="w-full h-[214px] bg-[#1E1E1E]" src={qr}/>
                <div className="w-full h-[97px] bg-[#151515] flex flex-col justify-center">
                    <p className="text-white ubuntu-bold text-[27px] pl-[18px]">Qr maker</p>
                    <p className="text-white ubuntu-medium pl-[18px]">I make my own qrmaker.</p>
                </div>
              </a>
              <a href='https://github.com/Pangkeek/YouLoad/blob/main/youload.py' className="w-[361px] h-[311px] flex flex-col">
                <img className="w-full h-[214px] bg-[#1E1E1E]" src={yt}/>
                <div className="w-full h-[97px] bg-[#151515] flex flex-col justify-center">
                    <p className="text-white ubuntu-bold text-[27px] pl-[18px]">Youtube dowloader</p>
                    <p className="text-white ubuntu-medium pl-[18px]">For dowload Youtube video mp4.</p>
                </div>
              </a>
            </div>
          )}
          {isSelect3 && (
            <div className="flex justify-between items-center flex-col md:flex-row">
              <a href='https://www.youtube.com/watch?v=j-i6lpkntW4' lassName="w-[361px] h-[311px] flex flex-col">
                <img className="w-full h-[214px] bg-[#1E1E1E] " src={pw}/>
                <div className="w-full h-[97px] bg-[#151515] flex flex-col justify-center">
                    <p className="text-white ubuntu-bold text-[27px] pl-[18px]">Palewood carnival</p>
                    <p className="text-white ubuntu-medium pl-[18px]">Me and my friend Horror game.</p>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
