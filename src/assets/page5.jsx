import React from 'react';
import github from './github-142-svgrepo-com 1.svg'
import gmail from './gmail-svgrepo-com (1) 1.svg'

export default function Page5(){
    return (
        <div className='bg-[#1E1E1E] pb-[30px]'>
            <p className='text-white ubuntu-bold text-[32px] text-center pt-[50px]'>Contact</p>
            <div className='flex flex-col md:flex-row justify-center items-center my-[41px]'>
                <a href='https://github.com/Pangkeek' className='flex justify-center items-center w-[223px] h-[67px] bg-[#181818] border-l-4 border-[#f90004]'>
                    <img src={github} className='mr-[16px]'/>
                    <p className='text-white ubuntu-bold text-[18px] md:text-[24px]'>Pangkeek</p>
                </a>
                <a className='flex justify-center items-center w-[330px] md:w-[445px] h-[67px] bg-[#181818] md:ml-[40px] border-l-4 border-[#f90004] mt-[20px] md:mt-[0px]'>
                    <img src={gmail} className='mr-[16px]'/>
                    <p className='text-white ubuntu-bold text-[18px] md:text-[24px]'>supawatkhaithong@gmail.com</p>
                </a>
            </div>
            <p className='text-white ubuntu-bold text-[24px] text-center mb-[20px] mt-[80px]'>I glad we talk :D</p>
            <div className='flex justify-center'>
                <div className='w-[938px] h-[2px] bg-[#f90004]'></div>
            </div>
        </div>
    )
}