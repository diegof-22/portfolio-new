import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="lg:max-w-[400px] text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-white">
                Let's Connect
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:diegofanciulli2@gmail.com"
                  className="text-sm sm:text-base flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-primary transition-colors group"
                >
                  <FiMail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="break-all sm:break-normal">diegofanciulli2@gmail.com</span>
                </a>
                <a
                  href="https://github.com/diegof-22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-primary transition-colors group"
                >
                  <FiGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span>github.com/diegof-22</span>
                </a>
                <a
                  href="https://linkedin.com/in/diego-fanciulli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-primary transition-colors group"
                >
                  <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span>linkedin.com/in/diegofanciulli</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@google.com"
                  className="text-sm sm:text-base w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-[#18191E] text-gray-100 placeholder-gray-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className="text-sm sm:text-base w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-[#18191E] text-gray-100 placeholder-gray-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="text-sm sm:text-base w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-[#18191E] text-gray-100 placeholder-gray-500 resize-vertical min-h-[100px] sm:min-h-[120px] transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-primary/20 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 