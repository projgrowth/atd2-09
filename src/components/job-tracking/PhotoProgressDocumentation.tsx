import { useState } from "react";
import { Camera, Upload, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

interface PhotoProgress {
  id: string;
  title: string;
  description: string;
  uploaded: boolean;
  timestamp?: string;
  required: boolean;
}

interface PhotoProgressDocumentationProps {
  onPhotoUpload?: (photoId: string) => void;
  readonly?: boolean;
}

const PhotoProgressDocumentation = ({ onPhotoUpload, readonly = false }: PhotoProgressDocumentationProps) => {
  const [photos, setPhotos] = useState<PhotoProgress[]>([
    { id: "before", title: "Before Work", description: "Initial state", uploaded: true, timestamp: "10:15 AM", required: true },
    { id: "diagnosis", title: "Problem Identified", description: "Root cause", uploaded: true, timestamp: "10:30 AM", required: true },
    { id: "progress1", title: "Work in Progress", description: "Mid-repair", uploaded: false, required: false },
    { id: "completion", title: "Work Complete", description: "Final result", uploaded: false, required: true }
  ]);

  const [isUploading, setIsUploading] = useState<string | null>(null);

  const handlePhotoUpload = (photoId: string) => {
    if (readonly) return;
    
    setIsUploading(photoId);
    
    // Simulate upload delay
    setTimeout(() => {
      setPhotos(prev => prev.map(photo => 
        photo.id === photoId 
          ? { ...photo, uploaded: true, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          : photo
      ));
      setIsUploading(null);
      onPhotoUpload?.(photoId);
    }, 1500);
  };

  const uploadedCount = photos.filter(p => p.uploaded).length;
  const totalCount = photos.length;
  const requiredCount = photos.filter(p => p.required).length;
  const uploadedRequiredCount = photos.filter(p => p.required && p.uploaded).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-[hsl(var(--atd-text))]">Photo Documentation</h4>
        <div className="text-xs text-gray-500">
          {uploadedCount}/{totalCount} photos • {uploadedRequiredCount}/{requiredCount} required
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo) => {
          const isCurrentlyUploading = isUploading === photo.id;
          
          return (
            <div
              key={photo.id}
              className={cn(
                "relative aspect-square rounded-lg border-2 border-dashed transition-all duration-300",
                photo.uploaded 
                  ? "border-green-300 bg-green-50" 
                  : photo.required 
                    ? "border-blue-300 bg-blue-50" 
                    : "border-gray-300 bg-gray-50",
                !readonly && !photo.uploaded && "hover:border-blue-400 cursor-pointer"
              )}
              onClick={() => !readonly && !photo.uploaded && handlePhotoUpload(photo.id)}
            >
              {photo.uploaded ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-1" />
                  <div className="text-xs text-green-700 font-medium text-center">{photo.title}</div>
                  {photo.timestamp && (
                    <div className="text-xs text-green-600">{photo.timestamp}</div>
                  )}
                </div>
              ) : isCurrentlyUploading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1"></div>
                  <div className="text-xs text-blue-600">Uploading...</div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <Camera className={cn(
                    "h-6 w-6 mb-1",
                    photo.required ? "text-blue-500" : "text-gray-400"
                  )} />
                  <div className={cn(
                    "text-xs font-medium text-center",
                    photo.required ? "text-blue-700" : "text-gray-600"
                  )}>
                    {photo.title}
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">
                    {photo.description}
                  </div>
                  {photo.required && (
                    <div className="text-xs text-blue-600 font-medium mt-1">Required</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!readonly && (
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-sm text-gray-700 mb-2">Photo Tips:</div>
          <div className="text-xs text-gray-600 space-y-1">
            <div>• Take before/after photos to show progress</div>
            <div>• Document any issues or complications</div>
            <div>• Photos help build trust with homeowners</div>
          </div>
        </div>
      )}

      {!readonly && uploadedRequiredCount === requiredCount && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="text-sm text-green-700 font-medium">✓ All required photos uploaded</div>
          <div className="text-xs text-green-600">Great job documenting your work!</div>
        </div>
      )}
    </div>
  );
};

export default PhotoProgressDocumentation;