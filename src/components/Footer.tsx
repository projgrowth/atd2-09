
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Social Proof", href: "/social-proof" },
    { name: "Join Beta", href: "/join-beta" }
  ];

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Main Footer Content */}
      <div className="py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="space-y-8">
              {/* Enhanced Logo */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl shadow-xl">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">All Things Done</div>
                  <div className="text-white/70 text-sm">Your home's quiet command center</div>
                </div>
              </div>
              
              {/* Mission Statement */}
              <p className="text-white/80 leading-relaxed max-w-md">
                We're building the future of home management—where trusted relationships meet 
                beautiful, simple technology. Join us in making home care effortless.
              </p>

              {/* Social Media Coming Soon */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white/70 text-sm font-medium">
                  Social Media - <span className="text-blue-600">Coming Soon</span>
                </p>
              </div>
            </div>

            {/* Navigation & CTA */}
            <div className="space-y-8 lg:pl-8">
              {/* Navigation Links */}
              <div>
                <h4 className="font-heading text-white mb-6">Quick Links</h4>
                <nav className="grid grid-cols-2 gap-4">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="group text-white/70 hover:text-white font-medium transition-all duration-300 relative min-h-[48px] py-2"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Beta CTA */}
              <div className="bg-[hsl(var(--atd-primary))]/10 border border-[hsl(var(--atd-primary))]/20 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-bold text-white mb-2">Ready to get started?</h4>
                <p className="text-white/70 text-sm mb-4">Join our early access list and be among the first to experience the future of home management.</p>
                <Link
                  to="/signup"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] text-white font-semibold hover:shadow-lg hover:shadow-[hsl(var(--atd-primary))]/25 transition-all duration-300 group min-h-[48px]"
                  style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
                >
                  Join Early Access
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-white/70 text-center md:text-left">
              <p>© 2024 All Things Done. Crafted with care for homeowners everywhere.</p>
              <p className="mt-1 text-xs text-white/50">
                Built with care for homeowners and their trusted service providers.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-white/50">
              <a href="#" className="hover:text-white/70 transition-colors min-h-[48px] py-2">Privacy</a>
              <a href="#" className="hover:text-white/70 transition-colors min-h-[48px] py-2">Terms</a>
              <a href="#" className="hover:text-white/70 transition-colors min-h-[48px] py-2">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
