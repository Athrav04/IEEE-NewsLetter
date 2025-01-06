import React from 'react'
import { IoIosLink } from 'react-icons/io'

const Suggestion = ({content}:{content:string}) => {
  return (
    <div className='w-full py-1 border-t-[0.5px] border-white/75 flex gap-3 items-center overflow-hidden group hover:cursor-pointer'>
        <IoIosLink className='ml-2 text-lg ternary-text group-hover:primary-text transition duration-100 ease-in-out '/>
        <h1 className=' ternary-text group-hover:primary-text transition duration-100 ease-in-out'>{content}</h1>
    </div>
  )
}

export default Suggestion