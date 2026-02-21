import { motion } from 'framer-motion'
import { useState } from 'react'

const skills = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'HTML',
  'CSS',
  'Git',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'Docker',

  
]

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "University of Pisa",
    year: "2023-now"
  }
]

const certifications = [
  {
    name: "Cybersecurity",
    issuer: "CISCO Networking Academy",
    year: "2023"
  },
  {
    name: "CISCO CCNA Routing and Switching",
    issuer: "CISCO Networking Academy",
    year: "2023"
  }
]



export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-semibold mb-6 text-white dark:text-text-dark">About Me</h2>
          <p className="text-lg text-white-600 mb-8">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. 
            I am a quick learner and I am always looking to expand my knowledge and skill set. 
            I am a team player and I am excited to work with others to create amazing applications.
          </p>

          <div className="flex gap-12 mb-8">
            <button
              onClick={() => setActiveTab('skills')}
              className={`text-xl font-medium transition-all relative ${
                activeTab === 'skills'
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Skills
              {activeTab === 'skills' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`text-xl font-medium transition-all relative ${
                activeTab === 'education'
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Education
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`text-xl font-medium transition-all relative ${
                activeTab === 'certifications'
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Certifications
              {activeTab === 'certifications' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>

          </div>

          <div className="min-h-[300px]">
            {activeTab === 'skills' && (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center gap-3"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-4 py-2 bg-black-700 border-2 border-gray-700 dark:bg-gray-800 text-white-700 dark:text-gray-200 rounded-full text-sm font-medium "
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className=""
              >
                {education.map((edu, index) => (
                  <motion.div key={index} variants={item} className="mb-4">
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className=""
              >
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={item} className="mb-4">
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                    <p className="text-gray-500 dark:text-gray-400">{cert.year}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}


          </div>
        </motion.div>
      </div>
    </section>
  )
} 