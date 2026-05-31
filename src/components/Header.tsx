import { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin, Twitter } from 'lucide-react';
import { SiMedium } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only update active section if we're on the home page
      if (location.pathname === '/') {
        const sections = ['about', 'skills', 'projects', 'blog', 'community', 'contact'];
        
        // Find which section is currently in view
        let currentSection = '';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;
            
            // Check if section is in the viewport (with some offset for better UX)
            if (elementTop <= 200 && elementBottom >= 200) {
              currentSection = section;
              break;
            }
          }
        }
        
        setActiveSection(currentSection);
        console.log('Active section:', currentSection); // Debug log
      } else {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { label: 'About', href: '#about', type: 'section' },
    { label: 'Skills', href: '#skills', type: 'section' },
    { label: 'Projects', href: '#projects', type: 'section' },
    { label: 'Blog', href: '#blog', type: 'section' },
    { label: 'Community', href: '#community', type: 'section' },
    { label: 'Contact', href: '/contact', type: 'page' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setActiveSection('');
    // Scroll to top when navigating to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (item: { href: string; type: string }) => {
    if (item.type === 'page') {
      navigate(item.href);
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 group cursor-pointer focus:outline-none"
          >
            <div className="relative">
              <div className="bg-primary p-1.5 md:p-2 rounded-lg transition-all duration-300 group-hover:scale-110">
                <Code2 className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold gradient-text">
                Tamirat(Ethan) Guda
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Senior Software Developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`relative px-3 md:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  (item.type === 'section' && activeSection === item.href.slice(1)) ||
                  (item.type === 'page' && location.pathname === item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {item.label}
                {((item.type === 'section' && activeSection === item.href.slice(1)) ||
                  (item.type === 'page' && location.pathname === item.href)) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-3">
            <ThemeToggle />
            <div className="flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-auto"
                onClick={() => window.open('https://github.com/Ammen1', '_blank')}
              >
                <Github className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-auto"
                onClick={() => window.open('https://www.linkedin.com/in/ethanguda/', '_blank')}
              >
                <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
               <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-auto"
                onClick={() => window.open('https://x.com/AmenGuda29899', '_blank')}
              >
                <Twitter className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-auto"
                onClick={() => window.open('https://medium.com/@amenguda', '_blank')}
              >
                <SiMedium className="h-4 w-4" />
              </Button>

            </div>
            <Button 
              size="sm" 
              className="button-glow font-medium text-xs md:text-sm px-3 md:px-4"
              onClick={() => navigate('/contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 h-auto"
            >
              {isMenuOpen ? <X className="h-4 w-4 md:h-5 md:w-5" /> : <Menu className="h-4 w-4 md:h-5 md:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border rounded-b-lg mt-2 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/50"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-2 px-3 py-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 h-auto"
                  onClick={() => window.open('https://github.com/Ammen1', '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 h-auto"
                  onClick={() => window.open('https://www.linkedin.com/in/ethanguda/', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
              <div className="px-3">
                <Button 
                  size="sm" 
                  className="w-full button-glow font-medium text-sm"
                  onClick={() => navigate('/contact')}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
