import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const navItems = [
    {
        title: "Home",
        link: "/home"
    },
        {
        title: "Product",
        link: "/product"
    },

        {
        title: "Element",
        link: "/element"
    },

        {
        title: "Blog",
        link: "/blog"
    },


]
const Navbar = () => {
  return (
    <div className='w-full flex flex-col'>
        
        {/* nav1 */}
        <div className='px-[5%] flex justify-between items-center h-12 bg-blue-800 py-4'>
            <div className='hidden md:flex gap-8'>
                <div className='flex items-center gap-2 pr-8 border-r-1'>
                    <span className='text-orange-400'><FaPhoneAlt /></span>
                    <span className='text-white'>+91 8295637215</span>
                </div>
                    <div className='flex items-center gap-2 pr-8 border-r-1'>
                    <span className='text-orange-400'><IoMdMail /></span>
                    <span className='text-white'>insurance@gmail.com</span>
                </div>

                <div className='flex items-center gap-2 '>
                    <span className='text-orange-400'><IoLocation /></span>
                    <span className='text-white'>Berkley street</span>
                </div>

            </div>
            <div className='flex gap-6'>
                <a className='text-white text-xl opacity-75 hover:opacity-100 hover:scale-110' href="#"><FaInstagram /></a>
                <a className='text-white text-xl opacity-75 hover:opacity-100 hover:scale-110' href="#"><FaFacebook /></a>
                <a className='text-white text-xl opacity-75 hover:opacity-100 hover:scale-110' href="#"><FaTwitter /></a>
            </div>
        </div>
        {/* nav2 */}
        <div className='w-full bg-white top-0 px-[5%] flex justify-between items-center h-20'>
            <div><img src="/logo.avif" alt="logo_image" className='w-20'/></div>
            <div className='hidden md:flex gap-16 font-semibold'>{navItems.map((item, index) => (
                // <Link key={index}>Hello</Link>
                <a key={index} href={item.link} className='hover:text-orange-500'>{item.title}</a>
            ))}
            </div>
            <div className='flex gap-4 font-semibold'>
                <button className='px-4 py-1 outline-1 outline-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md'>Login</button>
                <button className='px-4 py-1  bg-blue-500 text-white hover:bg-blue-700 rounded-md'>Get a Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
