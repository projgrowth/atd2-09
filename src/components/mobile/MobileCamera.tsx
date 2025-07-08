import { useState } from "react";
import { Camera, Image, Video, Zap, Download, Share, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

const MobileCamera = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const photoGallery = [
    {
      id: 1,
      url: "/api/placeholder/300/400",
      title: "Kitchen Before",
      timestamp: "Today, 9:30 AM",
      type: "before"
    },
    {
      id: 2,
      url: "/api/placeholder/300/400", 
      title: "Cabinet Issue",
      timestamp: "Today, 10:30 AM",
      type: "progress"
    },
    {
      id: 3,
      url: "/api/placeholder/300/400",
      title: "New Hinge Installation",
      timestamp: "Today, 10:45 AM", 
      type: "progress"
    },
    {
      id: 4,
      url: "/api/placeholder/300/400",
      title: "Kitchen After",
      timestamp: "Today, 11:05 AM",
      type: "after"
    }
  ];

  const quickActions = [
    { icon: Camera, label: "Take Photo", color: "bg-blue-500" },
    { icon: Video, label: "Record Video", color: "bg-red-500" },
    { icon: Zap, label: "Auto Capture", color: "bg-green-500" }
  ];

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="px-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Project Photos</h2>
        <p className="text-muted-foreground">Document progress and results</p>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <TouchRipple key={index}>
              <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-200 mobile-button-press">
                <div className={cn("p-3 rounded-xl text-white mb-2", action.color)}>
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {action.label}
                </span>
              </button>
            </TouchRipple>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Recent Photos</h3>
          <Button variant="outline" size="sm" className="mobile-button-press">
            <Image className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {photoGallery.map((photo) => (
            <TouchRipple key={photo.id}>
              <div
                className="relative group cursor-pointer mobile-button-press"
                onClick={() => setSelectedPhoto(selectedPhoto === photo.id.toString() ? null : photo.id.toString())}
              >
                <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <Image className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
                
                {/* Photo Type Badge */}
                <div className={cn(
                  "absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-bold text-white",
                  photo.type === "before" && "bg-blue-500",
                  photo.type === "progress" && "bg-yellow-500", 
                  photo.type === "after" && "bg-green-500"
                )}>
                  {photo.type.toUpperCase()}
                </div>

                {/* Photo Info */}
                <div className="mt-2">
                  <p className="font-medium text-foreground text-sm">{photo.title}</p>
                  <p className="text-xs text-muted-foreground">{photo.timestamp}</p>
                </div>

                {/* Expanded Actions */}
                {selectedPhoto === photo.id.toString() && (
                  <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center animate-fade-in">
                    <div className="flex space-x-2">
                      <TouchRipple>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors mobile-button-press">
                          <Eye className="h-4 w-4" />
                        </button>
                      </TouchRipple>
                      <TouchRipple>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors mobile-button-press">
                          <Share className="h-4 w-4" />
                        </button>
                      </TouchRipple>
                      <TouchRipple>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors mobile-button-press">
                          <Download className="h-4 w-4" />
                        </button>
                      </TouchRipple>
                    </div>
                  </div>
                )}
              </div>
            </TouchRipple>
          ))}
        </div>
      </div>

      {/* Camera Tips */}
      <div className="px-6">
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
          <h4 className="font-semibold text-accent mb-2">📸 Photo Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Take before photos to document initial condition</li>
            <li>• Capture progress shots during work</li>
            <li>• Include after photos showing completed work</li>
            <li>• Use good lighting for clear documentation</li>
          </ul>
        </div>
      </div>

      {/* Storage Info */}
      <div className="px-6">
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-foreground">Storage Used</span>
            <span className="text-sm text-muted-foreground">2.3 GB / 10 GB</span>
          </div>
          <div className="w-full bg-accent/20 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '23%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCamera;