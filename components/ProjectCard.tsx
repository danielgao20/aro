import React from 'react'
import Image from 'next/image'
import ProjectIcon from '/assets/logos/project.png';

interface ProjectProps{
    projectName: string
    lastUpdate: string
    gridMode: boolean
}

export default function Project({
    projectName,
    lastUpdate,
    gridMode,
}: ProjectProps) {
  return (
    <div className={`h-fit p-6 rounded-lg border border-aroGrey bg-aroWhite ${!gridMode ? "flex !w-full gap-6" : "block md:w-[calc(33.33%-16px)] min-h-72"}`}>
        <div className={`rounded-md bg-aroDarkGrey w-full h-44 flex items-center justify-center ${!gridMode ? "!w-72" : "justify-center"}`}>
            <Image 
                src={ProjectIcon.src}
                width={57}
                height={71}
                alt={"Project Logo"}
            />
        </div>
        <div className='text-lg text-black mt-6'>
            <p className='font-bold'>{projectName}</p>
            <p>{lastUpdate}</p>
        </div>
    </div>
  )
}
