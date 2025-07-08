import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const SignupSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-spacing-xl section-bg-primary">
        <div className="container-narrow text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-fade-in-up">
            <div className="bg-atd-success/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-atd-success" />
            </div>
          </div>

          {/* Success Message */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="heading-primary text-enhanced mb-6">
              Welcome to the ATD Community!
            </h1>
            <p className="text-body-large text-muted-enhanced mb-8 mobile-text-readable">
              Thank you for your interest in All Things Done. We're excited to have you on our early access list.
            </p>
          </div>

          {/* What's Next */}
          <div className="animate-fade-in-up mb-12" style={{ animationDelay: '0.2s' }}>
            <div className="premium-card p-6 md:p-8 max-w-2xl mx-auto">
              <h2 className="heading-tertiary mb-6 text-enhanced">What happens next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-atd-primary/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-atd-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-enhanced mb-1">Development Updates</h3>
                    <p className="text-sm text-muted-enhanced mobile-text-readable">
                      We'll send occasional updates on our progress and key milestones.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-atd-primary/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-atd-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-enhanced mb-1">Early Access Invitation</h3>
                    <p className="text-sm text-muted-enhanced mobile-text-readable">
                      When we're ready for early testing, you'll be among the first invited.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-atd-primary/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-atd-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-enhanced mb-1">Personal Onboarding</h3>
                    <p className="text-sm text-muted-enhanced mobile-text-readable">
                      Get a 1-on-1 setup session to ensure ATD works perfectly for your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More About ATD
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-enhanced mobile-text-readable">
              Questions? Reach out to us anytime. We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupSuccess;