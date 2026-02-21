import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

  
    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1))
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.slice(1))
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const handleNavClick = (section) => {
    if (typeof window === 'undefined') return
    
    const element = document.getElementById(section)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-800 ${
      !activeSection ? 'bg-transparent' : 'bg-background-light/80 backdrop-blur-sm'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-[10%]">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
            diego.dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <button
                  onClick={() => handleNavClick(item.href.slice(1))}
                  className="text-base lg:text-lg text-slate-200 hover:text-primary transition-colors capitalize font-medium"
                >
                  {item.name}
                </button>
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <button
                  onClick={() => handleNavClick(item.href.slice(1))}
                  className="text-sm text-slate-200 hover:text-primary transition-colors capitalize font-medium"
                >
                  {item.name}
                </button>
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSectionTablet"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-200 hover:text-primary transition-colors p-1"
          >
            {isOpen ? <FiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background-light/95 backdrop-blur-sm border-b border-gray-800"
        >
          <div className="w-full px-4 sm:px-6 lg:px-[10%] py-4">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <button
                    onClick={() => handleNavClick(item.href.slice(1))}
                    className="text-base sm:text-lg text-slate-200 hover:text-primary transition-colors capitalize font-medium w-full text-left py-2"
                  >
                    {item.name}
                  </button>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSectionMobile"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
} 