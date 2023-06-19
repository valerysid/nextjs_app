import { useEffect, useState } from "react"
import GridWrapper from "./Layout/GridWrapper"

export default function TextSection({ color = 'red', title, text, className }) {

    return (
        <GridWrapper className={`relative flex justify-center items-center`}>
            <div className={`w-full md:w-8/12 p-4 text-center ${className}`}>
                <h2 className={`text-lg md:text-2xl font-circular 
                ${color === 'red' && 'text-red'}
                ${color === 'yellow' && 'text-yellow'}
                ${color === 'purple' && 'text-[#7C5FD0]'}
                ${color === 'green' && 'text-green'}
                ${color === 'teal' && 'text-teal'}
                `}>
                    {title}
                </h2>
                <p className='text-3xl md:text-6xl mt-4 font-medium text-white'>
                    {text}
                </p>
            </div>
        </GridWrapper>
    )
}