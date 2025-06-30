
import { Home, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Providers", href: "#providers" },
    { name: "Join Beta", href: "https://forms.gle/YXvNQm7P8hW2KzGz9" },
    { name: "FAQ", href: "#faq" }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Main Footer Content */}
      <div className="section-spacing relative z-10">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="space-y-8">
              {/* Enhanced Logo */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-xl">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur opacity-30"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">All Things Done</div>
                  <div className="text-gray-400 text-sm">Your home's quiet command center</div>
                </div>
              </div>
              
              {/* Mission Statement */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                We're building the future of home management—where trusted relationships meet 
                beautiful, simple technology. Join us in making home care effortless.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation & CTA */}
            <div className="space-y-8 lg:pl-8">
              {/* Navigation Links */}
              <div>
                <h4 className="font-semibold text-white mb-6">Quick Links</h4>
                <nav className="grid grid-cols-2 gap-4">
                  {footerLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group text-gray-400 hover:text-white font-medium transition-all duration-300 relative"
                      onClick={link.href.startsWith('http') ? () => window.open(link.href, '_blank') : undefined}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Beta CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
                <h4 className="font-semibold text-white mb-2">Ready to get started?</h4>
                <p className="text-gray-400 text-sm mb-4">Join our beta and be among the first to experience the future of home management.</p>
                <a
                  href="https://forms.gle/YXvNQm7P8hW2KzGz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                >
                  Join Beta
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="container-responsive">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© 2024 All Things Done. Crafted with care for homeowners everywhere.</p>
              <p className="mt-1 text-xs text-gray-500">
                Built with care for homeowners and their trusted service providers.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
