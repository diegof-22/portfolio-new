'use client'

import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function ScrollTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: showScrollTop ? 1 : 0, 
        y: showScrollTop ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-3 bg-black border-2 border-gray-700 text-white rounded-full hover:border-yellow-500 transition-all z-50"
      aria-label="Scroll to top"
    >
      <FiArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.button>
  );
}