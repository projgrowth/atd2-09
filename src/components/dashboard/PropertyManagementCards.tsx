import { useState } from "react";
import { Home, MapPin, Thermometer, Shield, Zap, Droplets, Calendar, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Property {
  id: string;
  name: string;
  address: string;
  type: "primary" | "rental" | "vacation";
  status: "active" | "maintenance" | "occupied";
  lastService: string;
  nextService?: string;
  alerts: number;
}

interface PropertyManagementCardsProps {
  onPropertySelect?: (propertyId: string) => void;
  isProviderView?: boolean;
}

const PropertyManagementCards = ({ onPropertySelect, isProviderView = false }: PropertyManagementCardsProps) => {
  const [selectedProperty, setSelectedProperty] = useState<string>("prop1");

  const properties: Property[] = [
    {
      id: "prop1",
      name: "Main Residence",
      address: "123 Oak Street",
      type: "primary",
      status: "active",
      lastService: "2 days ago",
      nextService: "Tomorrow",
      alerts: 1
    },
    {
      id: "prop2", 
      name: "Downtown Rental",
      address: "456 Pine Ave",
      type: "rental",
      status: "occupied",
      lastService: "1 week ago",
      alerts: 0
    },
    {
      id: "prop3",
      name: "Lake House",
      address: "789 Lake Drive",
      type: "vacation",
      status: "maintenance",
      lastService: "3 days ago",
      alerts: 2
    }
  ];

  const getStatusColor = (status: Property['status']) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50 border-green-200';
      case 'maintenance': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'occupied': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeIcon = (type: Property['type']) => {
    switch (type) {
      case 'primary': return <Home className="h-4 w-4" />;
      case 'rental': return <Zap className="h-4 w-4" />;
      case 'vacation': return <Droplets className="h-4 w-4" />;
      default: return <Home className="h-4 w-4" />;
    }
  };

  const handlePropertyClick = (propertyId: string) => {
    setSelectedProperty(propertyId);
    onPropertySelect?.(propertyId);
  };

  if (isProviderView) {
    return (
      <div className="space-y-3">
        <div className="text-center py-8">
          <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <div className="text-sm text-[hsl(var(--atd-text-muted))]">
            Limited property access
          </div>
          <div className="text-xs text-[hsl(var(--atd-text-muted))] mt-2">
            View only assigned properties
          </div>
        </div>
        <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-3 mb-2">
            <Home className="h-5 w-5 text-[hsl(var(--atd-primary))]" />
            <div className="flex-1">
              <div className="font-medium text-sm">123 Oak Street</div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">Current job location</div>
            </div>
            <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              Active
            </div>
          </div>
          <div className="text-xs text-[hsl(var(--atd-text-muted))]">
            Access limited to current service areas only
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-[hsl(var(--atd-text))]">My Properties</h4>
        <Button size="sm" variant="outline" className="text-xs">
          <Plus className="h-3 w-3 mr-1" />
          Add Property
        </Button>
      </div>

      <div className="grid gap-3">
        {properties.map((property) => (
          <div
            key={property.id}
            onClick={() => handlePropertyClick(property.id)}
            className={cn(
              "bg-white/80 rounded-lg p-4 border-2 transition-all duration-200 cursor-pointer hover:shadow-md",
              selectedProperty === property.id 
                ? "border-[hsl(var(--atd-primary))] bg-blue-50" 
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                {getTypeIcon(property.type)}
                <div>
                  <div className="font-medium text-sm">{property.name}</div>
                  <div className="text-xs text-[hsl(var(--atd-text-muted))] flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {property.address}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {property.alerts > 0 && (
                  <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {property.alerts}
                  </div>
                )}
                <div className={cn("text-xs px-2 py-1 rounded-full border", getStatusColor(property.status))}>
                  {property.status}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="text-[hsl(var(--atd-text-muted))]">Last Service</div>
                <div className="font-medium">{property.lastService}</div>
              </div>
              {property.nextService && (
                <div>
                  <div className="text-[hsl(var(--atd-text-muted))]">Next Service</div>
                  <div className="font-medium text-[hsl(var(--atd-primary))]">{property.nextService}</div>
                </div>
              )}
            </div>

            {selectedProperty === property.id && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Thermometer className="h-3 w-3 mr-1" />
                    Climate
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    Schedule
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Settings className="h-3 w-3 mr-1" />
                    Settings
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagementCards;