import React from 'react'
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

const Sidebar = () => {
  return (
    <aside className='sidebar fixed left-0 top-0 h-screen w-20 bg-[#1a1c1e] text-white z-100'>
        <ul className="p-4 flex flex-col justify-between items-center h-full">
            <div className="top">
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaHome className='mr-2 mb-3' size={18} />
                    </div>
                </li>
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaUser className='mr-2 mb-3' size={18} />
                    </div>
                </li>
                <li className="mb-2">
                    <div className="flex items-center">
                        <FaSearch className='mr-2 mb-3' size={18} />
                    </div>
                </li>
            </div>

            <div className="bottom">
                <li>
                    <IoMdSettings size={18}/>
                    <FaUser size={18} className='mt-3'/>
                </li>
            </div>
        </ul>
    </aside>
  )
}

export default Sidebar