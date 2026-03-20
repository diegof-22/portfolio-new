import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'UI-dev',
    image: '/ui-dev.png',
    tags: ['Next.js', 'TailwindCSS'],
    github: 'https://github.com/diegof-22/ui-components',
    live: 'https://ui-components-two.vercel.app/',
    category: 'web'
  },
  {
    title: 'FinanceFlow',
    image: '/FinanceFlow.png',
    tags: ['React', 'Express.js', 'Firebase'],
    github: 'https://github.com/diegof-22/FinanceFlow',
    live: 'https://financeflow-yeqs.onrender.com',
    category: 'web'
  },
  {
    title: 'StreamSync',
    image: '/web1.png',
    tags: ['React', 'Firebase','Web Scraping'],
    github: 'https://github.com/diegof-22/FinanceFlow',
    live: 'https://streamsync-it.vercel.app/',
    category: 'web'
  }
  
  
  
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-12 text-white text-center">
            Projects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
            {['all', 'web', 'mobile'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border-2 border-gray-700 bg-black text-white capitalize transition-all text-sm sm:text-base font-medium ${
                  filter === category ? 'border-primary text-primary' : 'hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-black border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 bg-black/80 border-2 border-gray-700 text-white rounded-full hover:border-primary hover:text-primary transition-all transform hover:scale-110"
                      aria-label="View GitHub repository"
                    >
                      <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 bg-black/80 border-2 border-gray-700 text-white rounded-full hover:border-primary hover:text-primary transition-all transform hover:scale-110"
                      aria-label="View live project"
                    >
                      <FiExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-gray-700 hover:border-primary/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 