
import { Home } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Providers", href: "#providers" },
    { name: "Join Beta", href: "https://forms.gle/YXvNQm7P8hW2KzGz9" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-xl shadow-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-[hsl(var(--atd-text))]">All Things Done</span>
              <div className="text-sm text-[hsl(var(--atd-text-muted))]">Your home's quiet command center</div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[hsl(var(--atd-text-muted))] hover:text-[hsl(var(--atd-primary))] font-medium transition-colors duration-300 relative group"
                onClick={link.href.startsWith('http') ? () => window.open(link.href, '_blank') : undefined}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--atd-primary))] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-sm text-[hsl(var(--atd-text-muted))]">
            © 2024 All Things Done. Your home's quiet command center.
          </p>
          <p className="text-xs text-[hsl(var(--atd-text-muted))] mt-2">
            Built with care for homeowners and their trusted service providers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
