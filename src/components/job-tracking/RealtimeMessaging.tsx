import { useState, useEffect } from "react";
import { MessageSquare, Send, Clock, User, Smartphone, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "provider" | "homeowner";
  content: string;
  timestamp: string;
  type: "text" | "status" | "photo" | "notification";
  read: boolean;
}

interface RealtimeMessagingProps {
  isProvider?: boolean;
  onMessageSent?: (message: string) => void;
}

const RealtimeMessaging = ({ isProvider = true, onMessageSent }: RealtimeMessagingProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "homeowner",
      content: "Hi! Looking forward to getting this kitchen repair done today.",
      timestamp: "9:45 AM",
      type: "text",
      read: true
    },
    {
      id: "2",
      sender: "provider",
      content: "Hello Sarah! I'm on my way. Should arrive around 10:15 AM.",
      timestamp: "9:48 AM", 
      type: "text",
      read: true
    },
    {
      id: "3",
      sender: "provider",
      content: "Status Update: Arrived on site",
      timestamp: "10:15 AM",
      type: "status",
      read: true
    },
    {
      id: "4",
      sender: "provider",
      content: "I've identified the issue - the cabinet hinge needs replacement. I have the parts with me.",
      timestamp: "10:30 AM",
      type: "text",
      read: !isProvider
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new messages occasionally
      if (Math.random() > 0.97) {
        const newMsg: Message = {
          id: Date.now().toString(),
          sender: isProvider ? "homeowner" : "provider",
          content: isProvider 
            ? "Thanks for the update! How long will the repair take?"
            : "Work completed! Photos uploaded for your review.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "text",
          read: false
        };
        
        setMessages(prev => [...prev, newMsg]);
        setUnreadCount(prev => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isProvider]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: isProvider ? "provider" : "homeowner",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text",
      read: true
    };

    setMessages(prev => [...prev, message]);
    setNewMessage("");
    onMessageSent?.(newMessage);
  };

  const markAsRead = () => {
    setMessages(prev => prev.map(msg => ({ ...msg, read: true })));
    setUnreadCount(0);
  };

  const quickReplies = isProvider 
    ? ["On my way!", "Work in progress", "Need 30 more minutes", "Job complete!"]
    : ["Sounds good", "Thank you!", "Any updates?", "Great work!"];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5 text-blue-600" />
          <h4 className="font-semibold text-[hsl(var(--atd-text))]">Live Chat</h4>
          {unreadCount > 0 && (
            <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2 text-xs text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white border border-gray-200 rounded-lg p-3 h-64 overflow-y-auto space-y-3">
        {messages.map((message) => {
          const isOwn = message.sender === (isProvider ? "provider" : "homeowner");
          
          return (
            <div
              key={message.id}
              className={cn(
                "flex flex-col space-y-1",
                isOwn ? "items-end" : "items-start"
              )}
            >
              <div className={cn(
                "max-w-[80%] rounded-lg p-2 relative",
                isOwn 
                  ? "bg-blue-500 text-white" 
                  : message.type === "status"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-gray-100 text-gray-800",
                !message.read && !isOwn && "border-2 border-blue-300"
              )}>
                <div className="text-sm">{message.content}</div>
                
                {message.type === "status" && (
                  <div className="flex items-center space-x-1 mt-1">
                    <CheckCircle className="h-3 w-3" />
                    <span className="text-xs">Auto-generated</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{message.timestamp}</span>
                {isOwn && (
                  <CheckCircle className={cn(
                    "h-3 w-3",
                    message.read ? "text-blue-500" : "text-gray-400"
                  )} />
                )}
              </div>
            </div>
          );
        })}
        
        {isTyping && (
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-xs">Typing...</span>
          </div>
        )}
      </div>

      {/* Quick Replies */}
      <div className="flex flex-wrap gap-2">
        {quickReplies.map((reply, index) => (
          <TouchRipple key={index}>
            <Button
              variant="outline"
              size="sm"
              className="text-xs mobile-button-press"
              onClick={() => setNewMessage(reply)}
            >
              {reply}
            </Button>
          </TouchRipple>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex space-x-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1"
        />
        <TouchRipple>
          <Button 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="mobile-button-press"
          >
            <Send className="h-4 w-4" />
          </Button>
        </TouchRipple>
      </div>

      {unreadCount > 0 && (
        <TouchRipple>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={markAsRead}
            className="w-full mobile-button-press"
          >
            Mark {unreadCount} message{unreadCount > 1 ? 's' : ''} as read
          </Button>
        </TouchRipple>
      )}
    </div>
  );
};

export default RealtimeMessaging;