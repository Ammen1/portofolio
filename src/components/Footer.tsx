
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and description */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold text-white font-mono">
              dev.portfolio
            </span>
          </div>

          {/* Quick links */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <span>
              © {new Date().getFullYear()} Backend Developer Portfolio.
            </span>
          </div>
          
          <p className="text-gray-500 text-sm text-center md:text-right">
            Crafting robust backend solutions • Building the infrastructure that
            powers great applications
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
