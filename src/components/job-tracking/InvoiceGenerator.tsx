import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Camera, FileText, CheckCircle, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useJobTracker } from '@/hooks/useJobTracker';
import { useDemoContext } from '@/contexts/DemoContext';
import { cn } from '@/lib/utils';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  total: number;
}

const InvoiceGenerator = () => {
  const { currentJob, isProvider } = useJobTracker();
  const { actions } = useDemoContext();
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([
    {
      id: '1',
      description: 'HVAC Maintenance Service',
      quantity: 1,
      rate: 180,
      total: 180
    },
    {
      id: '2', 
      description: 'Filter Replacement',
      quantity: 2,
      rate: 25,
      total: 50
    }
  ]);

  const [laborHours, setLaborHours] = useState(2.5);
  const [laborRate] = useState(120);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const subtotal = invoiceItems.reduce((sum, item) => sum + item.total, 0) + (laborHours * laborRate);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  useEffect(() => {
    // Auto-calculate labor hours based on job status
    if (currentJob.status === 'inprogress') {
      const interval = setInterval(() => {
        setLaborHours(prev => Math.round((prev + 0.1) * 10) / 10);
      }, 30000); // Increment every 30 seconds for demo

      return () => clearInterval(interval);
    }
  }, [currentJob.status]);

  const generateInvoice = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      setIsGenerated(true);
      setIsGenerating(false);
      
      // Update job with actual cost
      actions.updateJobStatus('complete');
      
      // Add notification about invoice
      actions.addMessage({
        sender: 'provider',
        message: `Invoice generated: $${total.toFixed(2)} total. Payment link sent to your email.`
      });
    }, 2000);
  };

  if (!isProvider) {
    return (
      <div className="space-y-4">
        <h4 className="font-semibold text-[hsl(var(--atd-text))]">Service Summary</h4>
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-[hsl(var(--atd-text-muted))]">Estimated Cost</span>
              <span className="font-medium">${currentJob.estimatedCost}</span>
            </div>
            {currentJob.actualCost && (
              <div className="flex justify-between border-t pt-2">
                <span className="text-sm font-medium">Final Total</span>
                <span className="font-semibold text-green-600">${currentJob.actualCost}</span>
              </div>
            )}
            <div className="text-xs text-[hsl(var(--atd-text-muted))]">
              Invoice will be sent via email when work is complete
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-[hsl(var(--atd-text))]">Invoice Generator</h4>
        {isGenerated && (
          <div className="flex items-center space-x-1 text-green-600 text-xs">
            <CheckCircle className="h-3 w-3" />
            <span>Sent</span>
          </div>
        )}
      </div>

      {/* Labor Tracking */}
      <Card className="p-3">
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium">Labor Time</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div>
            <Label className="text-xs">Hours</Label>
            <div className="text-lg font-mono">{laborHours}</div>
          </div>
          <div>
            <Label className="text-xs">Rate</Label>
            <div className="text-lg font-mono">${laborRate}/hr</div>
          </div>
          <div>
            <Label className="text-xs">Total</Label>
            <div className="text-lg font-mono font-semibold">${(laborHours * laborRate).toFixed(0)}</div>
          </div>
        </div>
      </Card>

      {/* Invoice Items */}
      <Card className="p-3">
        <div className="flex items-center space-x-2 mb-3">
          <FileText className="h-4 w-4 text-purple-600" />
          <span className="text-sm font-medium">Service Items</span>
        </div>
        <div className="space-y-2">
          {invoiceItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-sm">
              <div className="flex-1">
                <div className="font-medium">{item.description}</div>
                <div className="text-xs text-[hsl(var(--atd-text-muted))]">
                  {item.quantity} × ${item.rate}
                </div>
              </div>
              <div className="font-mono">${item.total}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Total Summary */}
      <Card className="p-3 bg-blue-50 border-blue-200">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-mono">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%)</span>
            <span className="font-mono">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-semibold">
            <span>Total</span>
            <span className="font-mono text-lg">${total.toFixed(2)}</span>
          </div>
        </div>
      </Card>

      {/* Generate Button */}
      {!isGenerated && (
        <Button
          onClick={generateInvoice}
          disabled={isGenerating || currentJob.status !== 'inprogress'}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Calculator className="h-4 w-4 mr-2 animate-spin" />
              Generating Invoice...
            </>
          ) : (
            <>
              <DollarSign className="h-4 w-4 mr-2" />
              Generate & Send Invoice
            </>
          )}
        </Button>
      )}

      {isGenerated && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
          <CheckCircle className="h-5 w-5 text-green-600 mx-auto mb-2" />
          <div className="text-sm font-medium text-green-700">Invoice Sent Successfully!</div>
          <div className="text-xs text-green-600">Customer will receive payment link via email</div>
        </div>
      )}
    </div>
  );
};

export default InvoiceGenerator;