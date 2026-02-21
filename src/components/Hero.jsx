import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiArrowUp } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'


const ScrollTopButton = dynamic(() => import('./ScrollTopButton'), { ssr: false })
const TypeAnimationClient = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false }
)

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 500], [1, 1.15])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const y = useTransform(scrollY, [0, 500], [0, 100])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToContact = () => {
    if (!isClient) return
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownload = () => {
    if (!isClient) return

    setIsAnimating(true)
    const link = document.createElement('a')
    link.href = '/Diego-Fanciulli-CV.pdf'
    link.download = 'Diego-Fanciulli-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background-dark overflow-hidden relative">
      <motion.div
        style={{ scale, opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-center origin-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-[2] text-center md:text-left w-full"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6 mt-16 md:mt-0">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mb-4 sm:mb-6 lg:mb-8">
                  Hello, I'm
                </span>
                {isClient ? (
                  <div className="h-[48px] sm:h-[60px] md:h-[80px] lg:h-[100px] flex items-center justify-center lg:justify-start">
                    <TypeAnimationClient
                      sequence={[
                        'Diego',
                        2000,
                        'Web Developer',
                        2000,
                        'UI/UX Designer',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap"
                      repeat={Infinity}
                    />
                  </div>
                ) : (
                  <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    Diego
                  </span>
                )}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                A passionate <span className="text-primary font-medium">full-stack developer</span> crafting beautiful and functional web experiences with modern technologies. Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto text-base sm:text-lg font-medium px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] relative overflow-hidden group border border-transparent"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Hire Me
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FiArrowUp className="w-5 h-5 rotate-45" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto text-base sm:text-lg font-medium px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative flex items-center justify-center gap-2 group"
                >
                  Download CV
                  <motion.div
                    animate={isAnimating ? { y: [0, 10, 0] } : { y: 0 }}
                    transition={{ duration: 0.5, times: [0, 0.5, 1] }}
                    className="text-primary group-hover:text-secondary transition-colors"
                  >
                    <FiDownload className="w-5 h-5" />
                  </motion.div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex-[1] w-full mt-12 md:mt-0 flex justify-center md:justify-end"
            >
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto md:mx-0">
                
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />

                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border border-primary/30 rounded-full border-dashed"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 border border-secondary/20 rounded-full border-dotted"
                />

                <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src="/dev-ed-wave.png"
                      alt="Diego"
                      className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {isClient && <ScrollTopButton />}
    </section>
  )
}