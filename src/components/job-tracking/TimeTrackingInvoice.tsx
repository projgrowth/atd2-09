import { useState, useEffect } from "react";
import { Clock, DollarSign, FileText, Download, CheckCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

interface TimeEntry {
  id: string;
  activity: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  rate: number;
}

interface TimeTrackingInvoiceProps {
  onInvoiceGenerated?: (invoice: any) => void;
  isActive?: boolean;
}

const TimeTrackingInvoice = ({ onInvoiceGenerated, isActive = false }: TimeTrackingInvoiceProps) => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
    { id: "1", activity: "Travel to site", startTime: "9:30 AM", endTime: "10:15 AM", duration: 45, rate: 75 },
    { id: "2", activity: "Diagnosis & assessment", startTime: "10:15 AM", endTime: "10:30 AM", duration: 15, rate: 125 },
    { id: "3", activity: "Cabinet repair work", startTime: "10:30 AM", duration: undefined, rate: 125 }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);

  // Update current time every minute when active
  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, [isActive]);

  const getCurrentDuration = (startTime: string) => {
    const start = new Date();
    const [time, period] = startTime.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    const adjustedHours = period === 'PM' && hours !== 12 ? hours + 12 : (period === 'AM' && hours === 12 ? 0 : hours);
    
    start.setHours(adjustedHours, minutes, 0, 0);
    
    const diffMs = currentTime.getTime() - start.getTime();
    return Math.max(0, Math.floor(diffMs / (1000 * 60))); // minutes
  };

  const calculateTotal = () => {
    return timeEntries.reduce((total, entry) => {
      const duration = entry.duration ?? getCurrentDuration(entry.startTime);
      const hours = duration / 60;
      return total + (hours * entry.rate);
    }, 0);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const generateInvoice = () => {
    const invoice = {
      jobId: "JOB-2024-001",
      date: currentTime.toLocaleDateString(),
      timeEntries: timeEntries.map(entry => ({
        ...entry,
        finalDuration: entry.duration ?? getCurrentDuration(entry.startTime)
      })),
      total: calculateTotal(),
      taxRate: 0.08,
      grandTotal: calculateTotal() * 1.08
    };

    setInvoiceGenerated(true);
    onInvoiceGenerated?.(invoice);
  };

  const totalAmount = calculateTotal();
  const taxAmount = totalAmount * 0.08;
  const grandTotal = totalAmount + taxAmount;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-[hsl(var(--atd-text))]">Time & Invoice</h4>
        {isActive && (
          <div className="flex items-center space-x-2 text-xs text-orange-600">
            <Clock className="h-3 w-3 animate-pulse" />
            <span>Timer Active</span>
          </div>
        )}
      </div>

      {/* Time Entries */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="font-medium mb-3 flex items-center space-x-2">
          <Clock className="h-4 w-4 text-blue-600" />
          <span>Time Tracking</span>
        </div>
        
        <div className="space-y-3">
          {timeEntries.map((entry, index) => {
            const duration = entry.duration ?? getCurrentDuration(entry.startTime);
            const hours = duration / 60;
            const cost = hours * entry.rate;
            const isRunning = !entry.endTime;
            
            return (
              <div
                key={entry.id}
                className={cn(
                  "flex items-center justify-between p-2 rounded-lg transition-all duration-300",
                  isRunning ? "bg-orange-50 border border-orange-200" : "bg-gray-50"
                )}
              >
                <div className="flex-1">
                  <div className="font-medium text-sm text-[hsl(var(--atd-text))]">
                    {entry.activity}
                  </div>
                  <div className="text-xs text-gray-500">
                    {entry.startTime} {entry.endTime ? `- ${entry.endTime}` : "- Running"}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={cn(
                    "font-medium text-sm",
                    isRunning ? "text-orange-600" : "text-[hsl(var(--atd-text))]"
                  )}>
                    {formatDuration(duration)}
                  </div>
                  <div className="text-xs text-gray-500">
                    ${entry.rate}/hr = ${cost.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Invoice Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
        <div className="font-medium mb-3 flex items-center space-x-2">
          <Calculator className="h-4 w-4 text-green-600" />
          <span>Invoice Summary</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Labor Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (8%):</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span className="text-green-600">${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-gray-600 space-y-1">
          <div>• Parts: To be added separately</div>
          <div>• Payment due within 30 days</div>
          <div>• Digital receipt will be sent</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <TouchRipple>
          <Button 
            onClick={generateInvoice}
            disabled={invoiceGenerated}
            className={cn(
              "flex-1 mobile-button-press",
              invoiceGenerated && "bg-green-600 hover:bg-green-700"
            )}
          >
            {invoiceGenerated ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Invoice Sent
              </>
            ) : (
              <>
                <FileText className="h-4 w-4 mr-2" />
                Generate Invoice
              </>
            )}
          </Button>
        </TouchRipple>
        
        {invoiceGenerated && (
          <TouchRipple>
            <Button variant="outline" className="mobile-button-press">
              <Download className="h-4 w-4" />
            </Button>
          </TouchRipple>
        )}
      </div>

      {invoiceGenerated && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="text-sm text-green-700 font-medium">✓ Invoice generated and sent to homeowner</div>
          <div className="text-xs text-green-600">Payment link included for quick processing</div>
        </div>
      )}
    </div>
  );
};

export default TimeTrackingInvoice;