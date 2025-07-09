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
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-atd-surface/95 backdrop-blur-sm border-b border-atd-border/20">
        <div className="container-standard h-20 flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading text-enhanced text-xl">All Things Done</span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-body-medium transition-colors duration-200 touch-target ${
                    isActive(item.href)
                      ? 'text-atd-primary border-b-2 border-atd-primary pb-1'
                      : 'text-enhanced hover:text-atd-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link to="/join-beta">
                <Button className="touch-target">
                  Join Beta
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-atd-surface/95 backdrop-blur-sm border-b border-atd-border/20">
        <div className="container-standard h-16 flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-lg">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading text-enhanced text-lg">ATD</span>
            </Link>

            {/* Hamburger Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="touch-target hover:bg-atd-surface-muted transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-enhanced" />
              ) : (
                <Menu className="h-6 w-6 text-enhanced" />
              )}
            </Button>
          </div>
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
          className="absolute inset-0 bg-atd-neutral-900/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-atd-surface shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20">
            <div className="px-6">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full flex items-center px-4 py-4 text-left rounded-xl transition-colors duration-200 touch-target ${
                    isActive(item.href)
                      ? 'bg-atd-primary/10 text-atd-primary font-bold'
                      : 'text-enhanced hover:bg-atd-surface-muted'
                  }`}
                >
                  <span className="font-body-medium text-lg mobile-text-readable">{item.name}</span>
                </Link>
              ))}
            </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-8 lg:h-12"></div>
    </>
  );
};

export default Navigation;