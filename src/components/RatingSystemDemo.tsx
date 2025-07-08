import { useState } from "react";
import { Star, Heart, ThumbsUp, MessageSquare, Camera, CheckCircle, User, Shield, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TouchRipple } from "./TouchRipple";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useDemoContext } from "@/contexts/DemoContext";

const RatingSystemDemo = () => {
  const { state, actions } = useDemoContext();
  const { currentJob, userType } = state;
  const [homeownerRating, setHomeownerRating] = useState({
    quality: 0,
    timeliness: 0,
    communication: 0,
    overall: 0
  });
  
  const [providerRating, setProviderRating] = useState({
    payment: 0,
    communication: 0,
    access: 0,
    instructions: 0
  });
  
  const [activeTab, setActiveTab] = useState(userType === 'provider' ? "provider" : "homeowner");
  const [submitState, setSubmitState] = useState("idle"); // idle, submitting, success
  const [feedback, setFeedback] = useState("");
  const isMobile = useIsMobile();

  const StarRating = ({ rating, onRate, category }: { rating: number, onRate: (rating: number) => void, category: string }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchRipple key={star}>
            <button
              onClick={() => onRate(star)}
              className={cn(
                "p-1 transition-all duration-200 mobile-interactive",
                isMobile && "active:scale-95"
              )}
            >
              <Star
                className={cn(
                  "h-6 w-6 transition-colors duration-200",
                  star <= rating 
                    ? "fill-yellow-400 text-yellow-400" 
                    : "text-gray-300 hover:text-yellow-300"
                )}
              />
            </button>
          </TouchRipple>
        ))}
      </div>
    );
  };

  const handleHomeownerRating = (category: keyof typeof homeownerRating, rating: number) => {
    setHomeownerRating(prev => ({ ...prev, [category]: rating }));
  };

  const handleProviderRating = (category: keyof typeof providerRating, rating: number) => {
    setProviderRating(prev => ({ ...prev, [category]: rating }));
  };

  const submitRating = async () => {
    setSubmitState("submitting");
    
    // Add rating notification to shared context
    const ratingType = activeTab === "homeowner" ? "Provider" : "Homeowner";
    actions.addMessage({
      sender: userType,
      message: `${ratingType} rating submitted: ${activeTab === "homeowner" ? homeownerRating.overall : Math.round((providerRating.payment + providerRating.communication + providerRating.access + providerRating.instructions) / 4)} stars`
    });
    actions.markScenarioComplete('ratingSubmitted');
    
    setTimeout(() => setSubmitState("success"), 1500);
    setTimeout(() => setSubmitState("idle"), 3000);
  };

  const mockHistoricalData = {
    homeowner: { avgRating: 4.8, totalReviews: 23, trustScore: 95 },
    provider: { avgRating: 4.6, totalReviews: 156, trustScore: 92 }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Star className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[hsl(var(--atd-text))] mb-2">
          Two-Sided Rating System
        </h3>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          Mutual accountability through transparent feedback
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="homeowner" className="text-xs sm:text-sm">Rate Provider</TabsTrigger>
          <TabsTrigger value="provider" className="text-xs sm:text-sm">Provider Rates</TabsTrigger>
          <TabsTrigger value="mutual" className="text-xs sm:text-sm">Mutual View</TabsTrigger>
        </TabsList>

        <TabsContent value="homeowner" className="space-y-6">
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <User className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-700">Rating: {currentJob.title} - Provider</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">Work Quality</span>
                  <StarRating 
                    rating={homeownerRating.quality} 
                    onRate={(rating) => handleHomeownerRating("quality", rating)}
                    category="quality"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">Timeliness</span>
                  <StarRating 
                    rating={homeownerRating.timeliness} 
                    onRate={(rating) => handleHomeownerRating("timeliness", rating)}
                    category="timeliness"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">Communication</span>
                  <StarRating 
                    rating={homeownerRating.communication} 
                    onRate={(rating) => handleHomeownerRating("communication", rating)}
                    category="communication"
                  />
                </div>
                
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="text-sm font-semibold text-blue-700">Overall Rating</span>
                  <StarRating 
                    rating={homeownerRating.overall} 
                    onRate={(rating) => handleHomeownerRating("overall", rating)}
                    category="overall"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Additional Feedback</span>
              </div>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share details about the work quality, professionalism, cleanup..."
                className="w-full h-20 p-2 text-sm border rounded resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={200}
              />
              <div className="text-xs text-gray-500 mt-1">{feedback.length}/200 characters</div>
            </div>
            
            <div className="flex items-center space-x-3">
              <TouchRipple>
                <Button 
                  onClick={submitRating}
                  disabled={submitState !== "idle"}
                  className={cn(
                    "flex-1 mobile-button-press",
                    submitState === "success" && "bg-green-600 hover:bg-green-700"
                  )}
                >
                  {submitState === "idle" && <><Star className="h-4 w-4 mr-2" />Submit Rating</>}
                  {submitState === "submitting" && <>Submitting...</>}
                  {submitState === "success" && <><CheckCircle className="h-4 w-4 mr-2" />Rating Submitted!</>}
                </Button>
              </TouchRipple>
              <TouchRipple>
                <Button variant="outline" className="mobile-button-press">
                  <Camera className="h-4 w-4" />
                </Button>
              </TouchRipple>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="provider" className="space-y-6">
          <div className="space-y-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-orange-700">Provider Rating: {state.selectedProperty.name}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-700">Payment Reliability</span>
                  <StarRating 
                    rating={providerRating.payment} 
                    onRate={(rating) => handleProviderRating("payment", rating)}
                    category="payment"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-700">Communication</span>
                  <StarRating 
                    rating={providerRating.communication} 
                    onRate={(rating) => handleProviderRating("communication", rating)}
                    category="communication"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-700">Property Access</span>
                  <StarRating 
                    rating={providerRating.access} 
                    onRate={(rating) => handleProviderRating("access", rating)}
                    category="access"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-700">Clear Instructions</span>
                  <StarRating 
                    rating={providerRating.instructions} 
                    onRate={(rating) => handleProviderRating("instructions", rating)}
                    category="instructions"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Professional Assessment:</strong></p>
                <p className="text-xs">"Homeowner was well-prepared with clear problem description. Workspace was accessible and clean. Payment was processed promptly upon completion."</p>
                <div className="flex items-center space-x-2 mt-3">
                  <ThumbsUp className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-green-700">Recommended for future jobs</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mutual" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-center">
                <Heart className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-700 mb-2">Homeowner Rating</h4>
                <div className="text-2xl font-bold text-blue-800 mb-1">
                  {mockHistoricalData.homeowner.avgRating}★
                </div>
                <div className="text-xs text-blue-600">
                  {mockHistoricalData.homeowner.totalReviews} reviews
                </div>
                <div className="bg-blue-100 rounded-full px-2 py-1 mt-2">
                  <span className="text-xs font-medium text-blue-700">
                    {mockHistoricalData.homeowner.trustScore}% Trust Score
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-center">
                <Shield className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-orange-700 mb-2">Provider Rating</h4>
                <div className="text-2xl font-bold text-orange-800 mb-1">
                  {mockHistoricalData.provider.avgRating}★
                </div>
                <div className="text-xs text-orange-600">
                  {mockHistoricalData.provider.totalReviews} reviews
                </div>
                <div className="bg-orange-100 rounded-full px-2 py-1 mt-2">
                  <span className="text-xs font-medium text-orange-700">
                    {mockHistoricalData.provider.trustScore}% Trust Score
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-center">
              <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-700 mb-2">Mutual Match Quality</h4>
              <div className="text-lg font-bold text-green-800 mb-2">Excellent Match</div>
              <div className="text-xs text-green-600 space-y-1">
                <div>• Both parties consistently rate each other highly</div>
                <div>• Strong communication and reliability scores</div>
                <div>• Recommended for priority matching</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Recent Interaction Timeline
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Kitchen Repair - Dec 2024</span>
                <span className="text-yellow-600">★★★★★ / ★★★★★</span>
              </div>
              <div className="flex justify-between">
                <span>Bathroom Fixture - Nov 2024</span>
                <span className="text-yellow-600">★★★★☆ / ★★★★★</span>
              </div>
              <div className="flex justify-between">
                <span>Pipe Maintenance - Oct 2024</span>
                <span className="text-yellow-600">★★★★★ / ★★★★☆</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RatingSystemDemo;