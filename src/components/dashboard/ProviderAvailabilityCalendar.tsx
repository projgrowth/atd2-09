import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Star, 
  CheckCircle, 
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  available: boolean;
  provider?: {
    name: string;
    rating: number;
    distance: string;
    specialties: string[];
  };
  price?: number;
}

interface DaySchedule {
  date: string;
  dayName: string;
  slots: TimeSlot[];
}

interface ProviderAvailabilityCalendarProps {
  onSlotSelect?: (date: string, time: string, provider?: any) => void;
  serviceType?: string;
  isProviderView?: boolean;
}

const ProviderAvailabilityCalendar = ({ 
  onSlotSelect, 
  serviceType = "HVAC Maintenance",
  isProviderView = false 
}: ProviderAvailabilityCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentWeek, setCurrentWeek] = useState(0);

  // Generate week data
  const generateWeekSchedule = (): DaySchedule[] => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + (currentWeek * 7));
    
    const week: DaySchedule[] = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      
      const timeSlots: TimeSlot[] = [
        { time: "8:00 AM", available: false },
        { time: "9:00 AM", available: true, provider: { name: "Mike's HVAC", rating: 4.8, distance: "2.3 mi", specialties: ["HVAC", "Electrical"] }, price: 150 },
        { time: "10:00 AM", available: true, provider: { name: "TechPro Services", rating: 4.6, distance: "3.1 mi", specialties: ["HVAC", "Plumbing"] }, price: 135 },
        { time: "11:00 AM", available: false },
        { time: "12:00 PM", available: false },
        { time: "1:00 PM", available: true, provider: { name: "Elite Maintenance", rating: 4.9, distance: "1.8 mi", specialties: ["HVAC", "General"] }, price: 175 },
        { time: "2:00 PM", available: true, provider: { name: "Mike's HVAC", rating: 4.8, distance: "2.3 mi", specialties: ["HVAC", "Electrical"] }, price: 150 },
        { time: "3:00 PM", available: false },
        { time: "4:00 PM", available: true, provider: { name: "QuickFix Pro", rating: 4.5, distance: "4.2 mi", specialties: ["HVAC"] }, price: 125 },
        { time: "5:00 PM", available: false }
      ];
      
      week.push({
        date: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        slots: timeSlots
      });
    }
    
    return week;
  };

  const weekSchedule = generateWeekSchedule();

  const handleSlotClick = (date: string, slot: TimeSlot) => {
    if (!slot.available) return;
    
    setSelectedDate(date);
    setSelectedTime(slot.time);
    onSlotSelect?.(date, slot.time, slot.provider);
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentWeek(prev => direction === 'next' ? prev + 1 : Math.max(0, prev - 1));
    setSelectedDate("");
    setSelectedTime("");
  };

  if (isProviderView) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-[hsl(var(--atd-text))]">My Availability</h4>
          <Button size="sm" variant="outline" className="text-xs">
            <Clock className="h-3 w-3 mr-1" />
            Update Schedule
          </Button>
        </div>

        <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {['9:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'].map((time) => (
              <div key={time} className="text-center">
                <div className="text-xs text-[hsl(var(--atd-text-muted))]">{time}</div>
                <div className="w-full h-6 bg-green-100 rounded mt-1 border border-green-200">
                  <div className="h-full bg-green-500 rounded" style={{ width: '80%' }}></div>
                </div>
                <div className="text-xs text-green-600 mt-1">Available</div>
              </div>
            ))}
          </div>
          
          <div className="text-xs text-[hsl(var(--atd-text-muted))] text-center">
            Your schedule is 80% booked this week
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="h-4 w-4 text-[hsl(var(--atd-primary))]" />
            <span className="text-sm font-medium text-[hsl(var(--atd-text))]">Schedule Tip</span>
          </div>
          <div className="text-xs text-[hsl(var(--atd-text-muted))]">
            Update your availability 24 hours in advance for better job matching.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-semibold text-[hsl(var(--atd-text))]">Available Times</h4>
          <p className="text-xs text-[hsl(var(--atd-text-muted))]">Book {serviceType}</p>
        </div>
        <Button size="sm" variant="outline" className="text-xs">
          <Filter className="h-3 w-3 mr-1" />
          Filters
        </Button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Button
          size="sm"
          variant="outline"
          onClick={() => navigateWeek('prev')}
          disabled={currentWeek === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <span className="text-sm font-medium">
          {currentWeek === 0 ? 'This Week' : `Week of ${weekSchedule[0]?.dayName}`}
        </span>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => navigateWeek('next')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {weekSchedule.map((day) => (
          <div key={day.date} className="text-center">
            <div className="text-xs font-medium text-[hsl(var(--atd-text))] mb-2">
              {day.dayName}
            </div>
            <div className="space-y-1">
              {day.slots.filter(slot => slot.available).slice(0, 3).map((slot) => (
                <button
                  key={`${day.date}-${slot.time}`}
                  onClick={() => handleSlotClick(day.date, slot)}
                  className={cn(
                    "w-full text-xs p-1 rounded border transition-all duration-200",
                    selectedDate === day.date && selectedTime === slot.time
                      ? "bg-[hsl(var(--atd-primary))] text-white border-[hsl(var(--atd-primary))]"
                      : "bg-white border-gray-200 hover:border-[hsl(var(--atd-primary))] hover:bg-blue-50"
                  )}
                >
                  {slot.time}
                </button>
              ))}
              {day.slots.filter(slot => slot.available).length > 3 && (
                <div className="text-xs text-[hsl(var(--atd-text-muted))]">
                  +{day.slots.filter(slot => slot.available).length - 3} more
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedDate && selectedTime && (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="font-medium text-sm">Time Selected</span>
            </div>
            <Button
              size="sm"
              onClick={() => {
                setSelectedDate("");
                setSelectedTime("");
              }}
            >
              Change
            </Button>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[hsl(var(--atd-text-muted))]">Date & Time</span>
              <span className="font-medium">
                {weekSchedule.find(d => d.date === selectedDate)?.dayName} at {selectedTime}
              </span>
            </div>
            
            {(() => {
              const selectedSlot = weekSchedule
                .find(d => d.date === selectedDate)
                ?.slots.find(s => s.time === selectedTime);
              
              if (selectedSlot?.provider) {
                return (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-[hsl(var(--atd-text-muted))]">Provider</span>
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">{selectedSlot.provider.name}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs ml-1">{selectedSlot.provider.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[hsl(var(--atd-text-muted))]">Distance</span>
                      <span className="font-medium">{selectedSlot.provider.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[hsl(var(--atd-text-muted))]">Price</span>
                      <span className="font-bold text-[hsl(var(--atd-primary))]">${selectedSlot.price}</span>
                    </div>
                  </>
                );
              }
              return null;
            })()}
          </div>
          
          <Button className="w-full mt-4" size="sm">
            Confirm Booking
          </Button>
        </div>
      )}

      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
        <div className="flex items-center space-x-2 mb-2">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-800">Booking Protection</span>
        </div>
        <div className="text-xs text-green-700 space-y-1">
          <div>• Free cancellation up to 2 hours before</div>
          <div>• Provider background checked & insured</div>
          <div>• Payment held in escrow until completion</div>
        </div>
      </div>
    </div>
  );
};

export default ProviderAvailabilityCalendar;