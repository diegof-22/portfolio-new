import { FiGithub, FiLinkedin} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-background-light border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
            © {new Date().getFullYear()} Diego. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/diegof-22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-fanciulli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 