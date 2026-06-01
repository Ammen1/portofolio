
import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
          {/* Branding */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-5 w-5 text-blue-400" />
            <span className="text-base md:text-lg font-bold text-white font-mono">
              Tamirat (Ethan) Guda
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {["#about", "#skills", "#projects", "#community"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
            <a
              href="/contact"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tamirat (Ethan) Guda Ali. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-right">
            Building the fintech infrastructure that powers Ethiopia's digital economy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
