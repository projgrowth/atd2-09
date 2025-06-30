
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface RippleProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const TouchRipple = ({ children, className, disabled = false }: RippleProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (event: React.TouchEvent | React.MouseEvent) => {
    if (disabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onTouchStart={addRipple}
      onMouseDown={addRipple}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
};
