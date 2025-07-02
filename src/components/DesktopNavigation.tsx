import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const DesktopNavigation = () => {
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="container-framer">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-black rounded-lg">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-black">All Things Done</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-neutral-700 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            className="btn-framer-primary"
            onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
          >
            Join Beta
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavigation;