export const demoSteps = [
  {
    title: "QR Code Access",
    description: "Contractors scan to instantly access job details",
    screen: {
      type: "qr-scan",
      content: (
        <div className="flex flex-col items-center justify-center h-full p-6 bg-gray-50">
          {/* QR Code Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-6 w-full max-w-sm">
            <div className="w-32 h-32 bg-gray-900 mx-auto rounded-xl flex items-center justify-center">
              <div className="text-white text-xs grid grid-cols-8 gap-[1px]">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2 text-gray-900">Kitchen Renovation</h3>
            <p className="text-gray-600 mb-4">123 Oak Street</p>
            <div className="bg-blue-600 text-white rounded-xl px-6 py-3 font-medium">
              Access Job Details
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
        <div className="p-4 h-full bg-gray-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900">Kitchen Renovation</h3>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              In Progress
            </div>
          </div>
          
          {/* Update Cards */}
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-900">Progress Update</span>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>
              <div className="bg-gray-100 rounded-lg h-16 mb-3 flex items-center justify-center">
                <span className="text-sm text-gray-600">📸 Cabinets installed</span>
              </div>
              <p className="text-sm text-gray-700">Cabinets are in and looking great! Starting countertop install tomorrow.</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-900">Material Delivered</span>
                <span className="text-xs text-gray-500">1 hour ago</span>
              </div>
              <p className="text-sm text-gray-700">Quartz countertops arrived on schedule.</p>
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
        <div className="p-4 h-full bg-gray-50">
          {/* Header */}
          <div className="flex items-center mb-6 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-700 text-sm font-bold">EC</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Elite Construction</h3>
              <p className="text-xs text-gray-500">Kitchen Renovation</p>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="space-y-3 flex-1">
            <div className="bg-white rounded-xl p-3 mr-6 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-900">Just finished installing the cabinets. They look amazing!</p>
              <span className="text-xs text-gray-500">10:30 AM</span>
            </div>
            
            <div className="bg-blue-500 text-white rounded-xl p-3 ml-6 shadow-sm">
              <p className="text-sm">Fantastic! When do you expect to start the countertops?</p>
              <span className="text-xs text-blue-100">10:35 AM</span>
            </div>
            
            <div className="bg-white rounded-xl p-3 mr-6 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-900">Tomorrow morning at 8 AM. Should be done by end of day.</p>
              <span className="text-xs text-gray-500">10:40 AM</span>
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
        <div className="p-4 h-full bg-gray-50">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="font-bold text-xl mb-4 text-gray-900">Payment Status</h3>
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium inline-block">
              Milestone Completed
            </div>
          </div>
          
          {/* Payment Cards */}
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900">Cabinet Installation</span>
                <span className="text-green-600 font-bold">✓ Complete</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payment Amount:</span>
                <span className="font-bold text-gray-900">$3,500</span>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900">Countertop Install</span>
                <span className="text-blue-600 font-bold">⏳ Next</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payment Amount:</span>
                <span className="font-bold text-gray-900">$2,800</span>
              </div>
            </div>
            
            <div className="bg-green-600 text-white rounded-xl p-4 text-center">
              <span className="font-medium">Release Payment</span>
            </div>
          </div>
        </div>
      )
    }
  }
];