import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DesktopNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Providers", href: "#providers" },
    { name: "FAQ", href: "#faq" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block ${
      isScrolled 
        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 xl:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-atd-primary to-atd-accent p-2.5 rounded-xl shadow-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-atd-primary to-atd-accent rounded-xl blur opacity-20"></div>
            </div>
            <div className="text-xl font-bold text-white">All Things Done</div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 font-medium hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline"
              className="hidden xl:inline-flex text-white border-white/30 hover:bg-white/10 hover:border-white/50"
              onClick={() => scrollToSection('#demo')}
            >
              Try Demo
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 border border-blue-400/50"
              onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            >
              Join Beta
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavigation;