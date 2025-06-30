
import { Home } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Providers", href: "#providers" },
    { name: "Join Beta", href: "https://forms.google.com/create" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-xl">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[hsl(var(--atd-text))]">All Things Done</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[hsl(var(--atd-text-muted))] hover:text-[hsl(var(--atd-primary))] font-medium transition-colors duration-300"
                onClick={link.href.startsWith('http') ? () => window.open(link.href, '_blank') : undefined}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-sm text-[hsl(var(--atd-text-muted))]">
            © 2024 All Things Done. Your home's quiet command center.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
