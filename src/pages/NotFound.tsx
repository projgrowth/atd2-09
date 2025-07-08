import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-spacing-xl section-bg-primary">
        <div className="container-narrow text-center">
          {/* 404 Icon */}
          <div className="mb-8 animate-fade-in-up">
            <div className="bg-atd-error/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-atd-error" />
            </div>
          </div>

          {/* Error Message */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="heading-primary text-enhanced mb-6">
              Page Not Found
            </h1>
            <p className="text-body-large text-muted-enhanced mb-8 mobile-text-readable">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="heading-quaternary mb-6 text-enhanced">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link to="/how-it-works">
                <div className="premium-card enhanced-card-hover p-6 text-center">
                  <h4 className="font-heading text-enhanced mb-2">How It Works</h4>
                  <p className="text-caption text-muted-enhanced">Learn about ATD</p>
                </div>
              </Link>
              
              <Link to="/social-proof">
                <div className="premium-card enhanced-card-hover p-6 text-center">
                  <h4 className="font-heading text-enhanced mb-2">User Stories</h4>
                  <p className="text-caption text-muted-enhanced">See what others say</p>
                </div>
              </Link>
              
              <Link to="/join-beta">
                <div className="premium-card enhanced-card-hover p-6 text-center">
                  <h4 className="font-heading text-enhanced mb-2">Join Beta</h4>
                  <p className="text-caption text-muted-enhanced">Get early access</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;