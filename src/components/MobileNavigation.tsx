
import { useState } from "react";
import { Menu, X, Home, Users, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "Features", href: "#features", icon: FileText },
    { name: "Providers", href: "#providers", icon: Users },
    { name: "Join Beta", href: "https://forms.gle/YXvNQm7P8hW2KzGz9", icon: Phone, external: true },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3">
        <div className="container-standard">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-lg">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-[hsl(var(--atd-text))]">ATD</span>
          </div>

          {/* Hamburger Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="w-11 h-11 p-0 hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[hsl(var(--atd-text))]" />
            ) : (
              <Menu className="h-6 w-6 text-[hsl(var(--atd-text))]" />
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
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20">
            <div className="px-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className="w-full flex items-center space-x-4 px-4 py-4 text-left text-[hsl(var(--atd-text))] hover:bg-gray-50 rounded-xl transition-colors duration-200 min-h-[52px] group"
                >
                  <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 to-[hsl(var(--atd-accent))]/10 p-2 rounded-lg group-hover:scale-105 transition-transform duration-200">
                    <item.icon className="h-5 w-5 text-[hsl(var(--atd-primary))]" />
                  </div>
                  <span className="font-medium text-lg">{item.name}</span>
                </button>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button
                className="w-full bg-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))]/90 text-white py-4 rounded-xl text-lg font-semibold min-h-[52px]"
                onClick={() => handleNavClick('https://forms.gle/YXvNQm7P8hW2KzGz9', true)}
              >
                Get Early Access
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="lg:hidden h-16"></div>
    </>
  );
};

export default MobileNavigation;
