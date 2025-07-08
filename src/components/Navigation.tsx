import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Social Proof", href: "/social-proof" },
    { name: "Join Beta", href: "/join-beta" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-atd-primary to-atd-accent p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-atd-text">All Things Done</span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-atd-primary border-b-2 border-atd-primary pb-1'
                      : 'text-atd-text hover:text-atd-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link to="/join-beta">
                <Button className="premium-button">
                  Join Beta
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-atd-primary to-atd-accent p-2 rounded-lg">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-atd-text">ATD</span>
          </Link>

          {/* Hamburger Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="w-11 h-11 p-0 hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-atd-text" />
            ) : (
              <Menu className="h-6 w-6 text-atd-text" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center px-4 py-4 text-left rounded-xl transition-colors duration-200 min-h-[52px] ${
                    isActive(item.href)
                      ? 'bg-atd-primary/10 text-atd-primary font-bold'
                      : 'text-atd-text hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium text-lg">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navigation;