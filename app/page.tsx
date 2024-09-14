"use client"
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import GridIcon from '/assets/logos/grid-view.png'
import ListIcon from '/assets/logos/list-view.png'
import SearchIcon from '/assets/logos/search.png'
import Image from 'next/image';

const Dashboard: React.FC = () => {
  const [gridMode, setGridMode] = useState(true)
  return (
    <div className="h-screen overflow-y-scroll font-manrope">
      <div className="flex justify-between items-center gap-4 h-28 py-6 px-10 border-b border-[#CBCBD5] rounded-md">
        <div className='inline-block relative w-full h-full'>
          <input
            type="text"
            placeholder="Search in Aro"
            className="border-2 border-gray-300 pl-12 p-1.5 rounded w-full h-full bg-transparent focus:border-aroGrey outline-none text-md text-black"
          />
          <Image
            src={SearchIcon.src}
            width={20}
            height={20}
            alt='Search Icon'
            className='absolute left-4 inline top-6'
          />
        </div>
        <div className="flex items-center justify-center gap-2.5 bg-aroWhite rounded-md py-2.5 px-5 border-2 border-gray-200"> 
          <div className='w-10 h-10 rounded-full bg-[#414172] flex items-center justify-center'>
            <p className='text-3xl text-center'>C</p>
          </div>
          <div>
            <p className='text-black font-semibold text-sm'>Cole Gawin</p>
            <p className='text-[#939393] font-medium text-xs'>colegawin@gmail.com</p>
          </div>
        </div>
      </div>

      <div className='mt-6 p-6'>
        <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'black' }}>All Projects</h2>
          <div className='flex items-center'>
            <div className={`w-[30px] h-[30px] rounded flex items-center justify-center ${gridMode ? 'bg-aroLightGrey' : ''}`} onClick={() => {setGridMode(!gridMode)}}>
              <Image
                src={GridIcon.src}
                width={16}
                height={16}
                alt="Grid View Icon"
                className={`aspect-square w-[16px] h-[16px] ${gridMode ? "bg-aroLightGrey" : ""}`}
              />
            </div>
            <div className={`w-[30px] h-[30px] rounded flex items-center justify-center ${!gridMode ? 'bg-aroLightGrey' : ''}`} onClick={() => {setGridMode(!gridMode)}}>
              <Image
                src={ListIcon.src}
                width={16}
                height={16}
                alt="List View Icon"
                className='aspect-square w-[16px] h-[16px]'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-4'>
          <ProjectCard 
            projectName="Assignment 1"
            lastUpdate="1m ago"
            gridMode={gridMode}
          />
          <ProjectCard 
            projectName="Lab 3"
            lastUpdate="40m ago"
            gridMode={gridMode}
          />
          <ProjectCard 
            projectName="Workbook Ch. 3"
            lastUpdate="2hrs ago"
            gridMode={gridMode}
          />
          <ProjectCard 
            projectName="Worksheet 2"
            lastUpdate="Apr 25, 2024"
            gridMode={gridMode}
          />
          <ProjectCard 
            projectName="Resume"
            lastUpdate="March 27, 2023"
            gridMode={gridMode}
          />
          <ProjectCard 
            projectName="Assignment 3"
            lastUpdate="Feb 20, 2023"
            gridMode={gridMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
