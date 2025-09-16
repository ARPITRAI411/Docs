import { data } from 'autoprefixer';
import React from 'react'
import { FaFileInvoice } from "react-icons/fa"
import { RiDownloadCloudFill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";


const Cards = ({data , reference}) => {
  return (
    <motion.div drag dragConstraints={reference} className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileInvoice />
        <p className='tetx-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-20 w-full h-6 left-0 '>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseCircleSharp/>: <RiDownloadCloudFill size=".8em" color="#fff"/>}
                   </span>
            </div>
            {
             data.tag.isOpen && (
             <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-500"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            )}
            
        </div>
    </motion.div>
    
  )

}

export default Cards