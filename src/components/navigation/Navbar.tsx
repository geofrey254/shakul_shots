'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { CgMenuLeft } from 'react-icons/cg'
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { RiCloseLargeFill } from 'react-icons/ri'
import { MdRestaurantMenu } from 'react-icons/md'
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link'

import { CiHome } from "react-icons/ci";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sideOpen, setSideOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden'
  }

  const opensidebar =()=>{
    setSideOpen(!sideOpen)
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon:CiHome },
    { name: 'Gallery', href: '/' },
    { name: 'About Us', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'Contact', href: '/' },
  ]

  return (
    <nav
      className={`fixed w-full flex justify-between items-center px-6 lg:px-12 py-4 ${
        scrolled
          ? 'bg-black/30 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-linear-to-b from-black/40 to-transparent'
      } transition-all duration-500 z-50`}
    >
      {/* Logo */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#feeede] to-white opacity-0 group-hover:opacity-30 blur transition duration-300 rounded-full"></div>
        <Image
          src="/images/whitelogo.png"
          alt="Kitimoke Logo"
          width={80}
          height={80}
          className="relative transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative px-5 py-2 font-semibold text-white text-sm uppercase tracking-wide group overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#feeede]">
              {item.name}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feeede] to-white transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <button
          className={`hidden md:flex items-center cursor-pointer gap-2 px-6 py-2.5 rounded-full font-bold uppercase text-xs md:text-sm tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
            scrolled
              ? 'bg-[#feeede] text-black hover:bg-white shadow-lg'
              : 'bg-black text-[#feeede] hover:bg-black shadow-sm shadow-black/50'
          }`}
          onClick={opensidebar}
        >
          <CgMenuLeft size={26} className="text-[#feeede]" />
        </button>

        <button
          className="md:hidden p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
          onClick={toggleMenu}
        >
          <CgMenuLeft size={26} className="text-[#feeede]" />
        </button>
      </div>

    {/* SideBar */}
{sideOpen && (
  <div className="fixed inset-0 z-50">
   

    {/* Menu Panel */}
    <div className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-black shadow-2xl animate-in slide-in-from-right duration-300 border-l border-white/10">
      <div className="relative h-full flex flex-col overflow-y-auto">
        
        {/* Header Section with Diagonal Design */}
        <div className="relative bg-linear-to-br from-white/5 to-transparent p-6 pb-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Close Button */}
          <div className="flex justify-end mb-6 relative z-10">
            <button
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group backdrop-blur-sm"
              onClick={opensidebar}
              aria-label="Close menu"
            >
              <RiCloseLargeFill size={22} className="text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Logo with Geometric Frame */}
          <div className="flex justify-center mb-4 relative z-10">
            <div className="relative">
              {/* Geometric frame */}
              <div className="absolute -inset-4 border border-white/20 rounded-lg rotate-45"></div>
              <div className="absolute -inset-6 border border-white/10 rounded-lg -rotate-45"></div>
              
              <div className="relative bg-black p-3 rounded-lg">
                <Image
                  src="/images/whitelogo.png"
                  alt="Kitimoke Logo"
                  width={100}
                  height={100}
                  className="relative"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 py-4">
          
          {/* Featured Instagram with unique card */}
          <div className="mb-8">
            <Link 
              href="https://instagram.com/shakul_shots" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl bg-gradient-to-r from-white/5 to-white/10 p-2 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              
              <div className="relative flex items-center gap-4">
                <div className="p-3 bg-black rounded-lg border border-white/20">
                  <FiInstagram size={32} className='text-white'/>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Follow on Instagram</p>
                  <h3 className='text-white text-lg font-bold'>@shakul_shots</h3>
                </div>
              </div>
            </Link>
          </div>

         
        
          {/* Social Media Grid */}
          <div className="mb-6">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-4 font-semibold flex items-center gap-2">
              <span className="w-8 h-px bg-white/20"></span>
              Social Media
              <span className="flex-1 h-px bg-white/20"></span>
            </p>
            
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: FaFacebook, href: 'https://facebook.com/shakulshots', label: 'Facebook', name: 'Facebook' },
                { icon: FaInstagram, href: 'https://instagram.com/shakul_shots', label: 'Instagram', name: 'Instagram' },
                { icon: FaXTwitter, href: 'https://twitter.com/shakulshots', label: 'X', name: 'X' },
                { icon: FaTiktok, href: 'https://tiktok.com/@shakulshots', label: 'TikTok', name: 'TikTok' },
                { icon: FaYoutube, href: 'https://youtube.com/@shakulshots', label: 'YouTube', name: 'YouTube' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <social.icon size={24} className="text-white/80 group-hover:text-white transition-colors" />
                  <span className="text-white/60 text-[10px] group-hover:text-white/80 transition-colors">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Wave Design */}
        <div className="relative mt-auto border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent p-6">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <p className="text-center text-white/40 text-xs">
            © 2025 Shakul Shots
          </p>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={toggleMenu}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-0 left-0 w-[60%] max-w-sm h-full bg-black shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="relative h-full flex flex-col p-6 overflow-y-auto">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-90 transform"
                  onClick={toggleMenu}
                >
                  <RiCloseLargeFill size={24} className="text-[#feeede] cursor-pointer" />
                </button>
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#feeede]/20 blur-xl rounded-full"></div>
                  <Image
                    src="/images/whitelogo.png"
                    alt="Kitimoke Logo"
                    width={110}
                    height={110}
                    className="relative"
                  />
                </div>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col gap-8 mb-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between  font-semibold text-white text-sm uppercase tracking-wide transition-all duration-300 group "
                    >
                      
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                      <span className="text-[#feeede] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          

              {/* Social Media */}
              <div className="mt-auto pt-6 border-t border-white/20">
                <p className="text-[#feeede] text-xs uppercase tracking-wider mb-3 text-center font-semibold">
                  Follow Us
                </p>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: FaFacebook, href: 'https://facebook.com' },
                    { icon: FaInstagram, href: 'https://instagram.com' },
                    { icon: FaXTwitter, href: 'https://twitter.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-[#feeede] text-[#feeede] hover:text-[#990000] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}