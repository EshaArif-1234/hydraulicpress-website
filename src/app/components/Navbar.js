'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaIndustry, FaTools, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Products', href: '/#products', icon: FaIndustry },
    { name: 'Services', href: '/#services', icon: FaTools },
    { name: 'About', href: '/#about', icon: FaInfoCircle },
    { name: 'Contact', href: '/contact', icon: FaEnvelope },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UH Hydraulics
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <BsSunFill className="w-5 h-5 text-yellow-500" />
                ) : (
                  <BsMoonFill className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <span className={`
                    flex items-center gap-2 text-sm font-medium transition-colors duration-300
                    ${activeSection === link.href.replace('#', '') 
                      ? 'text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}
                  `}>
                    {link.icon && <link.icon className={`w-4 h-4 ${activeSection === link.href.replace('#', '') ? 'text-blue-600 dark:text-blue-400' : ''}`} />}
                    {link.name}
                  </span>
                  <span className={`
                    absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300
                    ${activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              >
                {theme === 'dark' ? (
                  <>
                    <BsSunFill className="w-5 h-5 text-yellow-500" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <BsMoonFill className="w-5 h-5 text-gray-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                    ${activeSection === link.href.replace('#', '') 
                      ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800 font-bold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'}
                  `}
                >
                  {link.icon && <link.icon className="w-5 h-5" />}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
