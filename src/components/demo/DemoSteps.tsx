export const demoSteps = [
  {
    title: "QR Code Access",
    description: "Contractors scan to instantly access job details",
    screen: {
      type: "qr-scan",
      content: (
        <div className="flex flex-col items-center justify-center h-full p-6 relative">
          {/* Glass Card */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 mb-6">
            <div className="w-40 h-40 bg-black/80 mx-auto rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <div className="text-white text-xs grid grid-cols-8 gap-[1px]">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2 text-white">Kitchen Renovation</h3>
            <p className="text-white/80 mb-4">123 Oak Street</p>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3">
              <span className="text-white font-semibold">Access Job Details</span>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    title: "Real-Time Updates",
    description: "Progress photos and status updates sync instantly",
    screen: {
      type: "updates",
      content: (
        <div className="p-6 h-full relative">
          {/* Glass Header */}
          <div className="flex items-center justify-between mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <h3 className="font-bold text-xl text-white">Kitchen Renovation</h3>
            <div className="bg-green-400/30 backdrop-blur-sm text-green-100 px-4 py-2 rounded-full text-sm font-bold border border-green-300/30">
              In Progress
            </div>
          </div>
          
          {/* Glass Update Cards */}
          <div className="space-y-4">
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">Progress Update</span>
                <span className="text-xs text-white/70">2 min ago</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl h-20 mb-3 flex items-center justify-center border border-white/20">
                <span className="text-sm text-white/90">📸 Cabinets installed</span>
              </div>
              <p className="text-sm text-white/90">Cabinets are in and looking great! Starting countertop install tomorrow.</p>
            </div>
            
            <div className="bg-blue-400/20 backdrop-blur-lg rounded-2xl p-4 border border-blue-300/30 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">Material Delivered</span>
                <span className="text-xs text-white/70">1 hour ago</span>
              </div>
              <p className="text-sm text-white/90">Quartz countertops arrived on schedule.</p>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    title: "Organized Communication",
    description: "All messages, photos, and documents in one place",
    screen: {
      type: "chat",
      content: (
        <div className="p-6 h-full relative">
          {/* Glass Header */}
          <div className="flex items-center mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
              <span className="text-white text-sm font-bold">EC</span>
            </div>
            <div>
              <h3 className="font-bold text-white">Elite Construction</h3>
              <p className="text-xs text-white/70">Kitchen Renovation</p>
            </div>
          </div>
          
          {/* Glass Chat Bubbles */}
          <div className="space-y-4 flex-1">
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 mr-8 border border-white/20">
              <p className="text-sm text-white">Just finished installing the cabinets. They look amazing!</p>
              <span className="text-xs text-white/60">10:30 AM</span>
            </div>
            
            <div className="bg-blue-400/30 backdrop-blur-lg rounded-2xl p-4 ml-8 border border-blue-300/30">
              <p className="text-sm text-white">Fantastic! When do you expect to start the countertops?</p>
              <span className="text-xs text-white/70">10:35 AM</span>
            </div>
            
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 mr-8 border border-white/20">
              <p className="text-sm text-white">Tomorrow morning at 8 AM. Should be done by end of day.</p>
              <span className="text-xs text-white/60">10:40 AM</span>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    title: "Secure Payments",
    description: "Automatic escrow and milestone-based payments",
    screen: {
      type: "payment",
      content: (
        <div className="p-6 h-full relative">
          {/* Glass Header */}
          <div className="text-center mb-8">
            <h3 className="font-bold text-2xl mb-4 text-white">Payment Status</h3>
            <div className="bg-green-400/30 backdrop-blur-md text-green-100 px-6 py-3 rounded-full text-sm font-bold inline-block border border-green-300/30">
              Milestone Completed
            </div>
          </div>
          
          {/* Glass Payment Cards */}
          <div className="space-y-4">
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border border-white/20 shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-white">Cabinet Installation</span>
                <span className="text-green-300 font-bold">✓ Complete</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Payment Amount:</span>
                <span className="font-bold text-white">$3,500</span>
              </div>
            </div>
            
            <div className="bg-blue-400/20 backdrop-blur-lg rounded-2xl p-5 border border-blue-300/30 shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-white">Countertop Install</span>
                <span className="text-blue-300 font-bold">⏳ Next</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Payment Amount:</span>
                <span className="font-bold text-white">$2,800</span>
              </div>
            </div>
            
            <div className="bg-green-400/30 backdrop-blur-md rounded-2xl p-4 border border-green-300/30 text-center">
              <span className="text-white font-semibold">Release Payment</span>
            </div>
          </div>
        </div>
      )
    }
  }
];