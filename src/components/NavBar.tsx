import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full border-b border-[#484849] border-opacity-45 bg-transparent backdrop-blur-sm h-20 sticky top-0 flex items-center justify-between px-5 z-50">
          <div>
          <img src="/IEEE_white_logo.webp" className="h-14 w-18 py-1 ml-16"></img>
          </div>
          
          <div className="flex gap-4 pr-14">
              <button className="h-8 px-3 py-1 bg-white/95 hover:bg-white rounded-md text-center font-montserrat text-black font-medium">Subscribe</button>
              <button className="h-8 px-4 py-1 border-white/95 border rounded-md">Sign Up</button>
          </div>
        </div>
  )
}

export default NavBar