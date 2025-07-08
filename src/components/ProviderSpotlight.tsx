
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, CheckCircle } from "lucide-react";

const ProviderSpotlight = () => {
  const providers = [
    {
      name: "Rodriguez Home Services",
      type: "General Contractor",
      location: "Austin, TX",
      rating: 4.9,
      reviews: 127,
      specialties: ["Kitchen Remodels", "Bathroom Updates", "Flooring"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      responseTime: "< 2 hours"
    },
    {
      name: "Clean Sweep Solutions",
      type: "House Cleaning",
      location: "Denver, CO",
      rating: 5.0,
      reviews: 89,
      specialties: ["Deep Cleaning", "Move-in/out", "Eco-friendly"],
      image: "https://images.unsplash.com/photo-1494790108755-2616c240d3c6?w=150&h=150&fit=crop&crop=face",
      verified: true,
      responseTime: "< 1 hour"
    },
    {
      name: "Green Thumb Landscaping",
      type: "Landscaping & Lawn Care",
      location: "Portland, OR",
      rating: 4.8,
      reviews: 156,
      specialties: ["Garden Design", "Tree Service", "Irrigation"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      responseTime: "< 3 hours"
    }
  ];

  return (
    <section className="section-spacing section-bg-interactive section-separator">
      <div className="container-standard">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--atd-text))] mb-4">
            Trusted Service Providers
          </h2>
          <p className="text-xl text-[hsl(var(--atd-text-muted))] max-w-2xl mx-auto">
            Professional contractors and service providers who already use ATD to deliver exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {providers.map((provider, index) => (
            <div 
              key={provider.name}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                  {provider.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-[hsl(var(--atd-accent))] rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[hsl(var(--atd-text))] mb-1">
                  {provider.name}
                </h3>
                <p className="text-[hsl(var(--atd-text-muted))] text-sm mb-3">
                  {provider.type}
                </p>

                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-[hsl(var(--atd-text))]">{provider.rating}</span>
                  <span className="text-[hsl(var(--atd-text-muted))] text-sm">({provider.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm text-[hsl(var(--atd-text-muted))] mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{provider.responseTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 justify-center">
                  {provider.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-[hsl(var(--atd-text-muted))] mb-4">
            Join hundreds of professional service providers using ATD
          </p>
          <button 
            onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            className="text-[hsl(var(--atd-primary))] hover:text-[hsl(var(--atd-primary))]/80 font-semibold underline"
          >
            Apply to become a provider →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProviderSpotlight;
