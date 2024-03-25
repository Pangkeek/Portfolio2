import React from 'react';
import Mobile from './developer_mode_FILL0_wght400_GRAD0_opsz24 1.svg'
import Pc from './developer_mode_tv_FILL0_wght400_GRAD0_opsz24 1.svg'
import react from './react-svgrepo-com 1.svg'
import tailwind from './tailwind-svgrepo-com 1.svg'
import js from './js01-svgrepo-com 1.svg'
import html from './html-124-svgrepo-com 1.svg'
import css from './css3-02-svgrepo-com 1.svg'
import vs from './vscode-16-svgrepo-com 1.svg'
import graph from './monitoring_FILL0_wght400_GRAD0_opsz24 1.svg'
import data from './analytics_FILL0_wght400_GRAD0_opsz24 1.svg'
import python from './python-127-svgrepo-com 1.svg'
import pandas from './pandas-svgrepo-com 1.svg'
import matplotlib from './matplotlib.svg'
import game from './sports_esports_FILL0_wght400_GRAD0_opsz24 1.svg'
import godot from './godot-engine-svgrepo-com 1.svg'

export default function Page3(){
    return (
        <div className='bg-[#1E1E1E] h-auto pb-[20px] md:pb-[50px]'>
            <div className='container mx-auto'>
                <p className='text-[32px] text-center text-white ubuntu-bold py-[63px]'>What i can do?</p>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between bg-[#1E1E1E]'>

                    <div className='h-[860px] w-[361px] bg-[#181818] border-t-2 border-[#f90004] flex flex-col justify-center items-center'>
                        <div className='flex'><img src={Pc}/><img src={Mobile}/></div>
                        <p className='text-[36px] ubuntu-bold text-white mt-[30px]'>Font-end</p>
                        <p className='text-[24px] ubuntu-bold text-white mb-[30px]'>developer</p>
                        <p className='text-[16px] ubuntu-bold text-center text-white mb-[100px]'>This is my most confident skill of all<br/>just give me your design<br/>I can bring your idea to life in browser .</p>
                        <p className='text-[16px] ubuntu-bold text-[#f90004] mb-[30px]'>Language / Framework / Libraly</p>
                        <div className='flex mb-[25px]'><img src={react}/><img src={tailwind} className='mx-[20px]'/><img src={js}/></div>
                        <div className='flex mb-[40px]'><img src={html} className='mr-[10px]'/><img src={css} className='ml-[10px]'/></div>
                        <p className='text-[16px] ubuntu-bold text-[#f90004] mb-[30px]'>Tool</p>
                        <div className=''><img src={vs}/></div>
                    </div>

                    <div className='h-[860px] w-[361px] bg-[#181818] border-t-2 border-[#f90004] flex flex-col justify-center items-center'>
                    <div className='flex'><img src={graph}/><img src={data}/></div>
                        <p className='text-[36px] ubuntu-bold text-white mt-[30px]'>Data</p>
                        <p className='text-[24px] ubuntu-bold text-white mb-[30px]'>developer</p>
                        <p className='text-[16px] ubuntu-bold text-center text-white mb-[49px]'>This is the first path i go when i start<br/>my programming journey and i realize<br/>how powerful Python is<br/>in term of Data sci, so i keep<br/>eploring this path .</p>
                        <p className='text-[16px] ubuntu-bold text-[#f90004] mb-[30px]'>Language  / Libraly</p>
                        <div className='flex mb-[30px]'><img src={python} className='mr-[20px]'/><img src={pandas} className='ml-[10px]'/></div>
                        <div className='flex mb-[50px]'><img src={matplotlib} className=''/></div>
                        <p className='text-[16px] ubuntu-bold text-[#f90004] mb-[30px]'>Tool</p>
                        <div className=''><img src={vs}/></div>       
                    </div>

                    <div className=''>
                        <div className='h-[595px] w-[361px] bg-[#181818] border-t-2 border-[#f90004] flex flex-col justify-center items-center'>
                        <div className='flex mt-[50px]'><img src={game}/></div>
                            <p className='text-[36px] ubuntu-bold text-white mt-[30px]'>Game</p>
                            <p className='text-[24px] ubuntu-bold text-white mb-[30px]'>developer</p>
                            <p className='text-[16px] ubuntu-bold text-center text-white mb-[60px]'>I'm a gamer by default since i was kid<br/>after all thoes experiance of gaming<br/>I got some ideas of what<br/>"Good game” should have .</p>
                            <p className='text-[16px] ubuntu-bold text-[#f90004] mb-[30px]'>Language  / Tool</p>
                            <div className=''><img src={godot} className=''/></div>
                        </div>
                        <div className='h-[240px] w-[361px] bg-[#181818] md:mt-[25px] border-t-2 border-[#f90004] flex justify-center items-center'>
                            <p className='text-white ubuntu-bold text-[24px] text-center'>Learning new thing ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}