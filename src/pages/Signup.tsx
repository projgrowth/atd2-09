import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SignupForm } from "@/components/forms/SignupForm";

const Signup = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userType = (searchParams.get('type') as 'homeowner' | 'provider' | 'property-manager') || 'homeowner';

  const titles = {
    homeowner: "Join the Early Access List",
    provider: "Apply as a Service Provider",
    'property-manager': "Join as a Property Manager"
  };

  const descriptions = {
    homeowner: "Be the first to experience the home management solution that puts you back in control.",
    provider: "Get early access to PocketOffice and transform how you work with your clients.",
    'property-manager': "Streamline property management with our comprehensive dashboard solution."
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container-standard pt-8">
        <Button asChild variant="ghost" className="mb-8 touch-target">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <section className="section-spacing section-bg-primary">
        <div className="container-standard">
          <div className="text-center mb-8">
            <h1 className="heading-primary text-enhanced">
              {titles[userType]}
            </h1>
            <p className="text-lg md:text-xl font-semibold text-muted-enhanced mobile-text-readable">
              {descriptions[userType]}
            </p>
          </div>

          <div className="premium-card p-6 md:p-8">
            <SignupForm 
              userType={userType}
              onSuccess={() => {
                setTimeout(() => navigate('/signup-success'), 2000);
              }}
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-enhanced mobile-text-readable">
              By signing up, you'll be among the first to know when ATD is ready for early access.
              We're currently in development and will reach out when we have something to show.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;