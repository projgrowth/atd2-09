import { useState, useEffect } from "react";
import { Send, Clock, CheckCircle, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "provider" | "homeowner" | "system";
  content: string;
  timestamp: string;
  type: "text" | "status" | "photo";
  read: boolean;
  avatar?: string;
}

interface MobileChatProps {
  onNewMessage?: () => void;
}

const MobileChat = ({ onNewMessage }: MobileChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "provider",
      content: "Hi Sarah! I'm on my way to your property for the kitchen repair. Should arrive around 10:15 AM.",
      timestamp: "9:48 AM",
      type: "text",
      read: true,
      avatar: "MJ"
    },
    {
      id: "2",
      sender: "homeowner",
      content: "Perfect! The key is under the mat as discussed. Thank you!",
      timestamp: "9:50 AM", 
      type: "text",
      read: true
    },
    {
      id: "3",
      sender: "system",
      content: "Mike Johnson has arrived at your property",
      timestamp: "10:15 AM",
      type: "status",
      read: true
    },
    {
      id: "4",
      sender: "provider",
      content: "I've identified the issue - the cabinet hinge needs replacement. I have the parts with me. Work will take about 30 minutes.",
      timestamp: "10:30 AM",
      type: "text",
      read: true,
      avatar: "MJ"
    },
    {
      id: "5",
      sender: "system",
      content: "Work in progress - Kitchen repair",
      timestamp: "10:35 AM",
      type: "status",
      read: true
    },
    {
      id: "6",
      sender: "provider",
      content: "All done! Kitchen cabinet is working perfectly now. Photos uploaded for your review.",
      timestamp: "11:05 AM",
      type: "text",
      read: false,
      avatar: "MJ"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Thank you!",
    "Sounds good",
    "Any updates?",
    "Perfect timing"
  ];

  useEffect(() => {
    // Mark messages as read when component mounts
    if (onNewMessage) {
      onNewMessage();
    }
  }, [onNewMessage]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: "homeowner",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text",
      read: true
    };

    setMessages(prev => [...prev, message]);
    setNewMessage("");

    // Simulate provider typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: "provider",
        content: "Got it! I'll keep you updated on the progress.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "text",
        read: false,
        avatar: "MJ"
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  const handleQuickReply = (reply: string) => {
    setNewMessage(reply);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              MJ
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Mike Johnson</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600 font-medium">Online</span>
              </div>
            </div>
          </div>
          <TouchRipple>
            <button className="p-2 rounded-lg hover:bg-accent/10 transition-colors mobile-button-press">
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
          </TouchRipple>
        </div>
        
        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Kitchen Repair - In Progress</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 py-4 space-y-4 overflow-y-auto">
        {messages.map((message) => {
          const isOwn = message.sender === "homeowner";
          const isSystem = message.sender === "system";
          
          return (
            <div
              key={message.id}
              className={cn(
                "flex flex-col",
                isOwn ? "items-end" : "items-start"
              )}
            >
              {/* System Messages */}
              {isSystem && (
                <div className="w-full flex justify-center mb-2">
                  <div className="bg-accent/20 text-accent px-4 py-2 rounded-full text-xs font-medium">
                    {message.content}
                  </div>
                </div>
              )}

              {/* Regular Messages */}
              {!isSystem && (
                <div className={cn(
                  "flex items-end space-x-2 max-w-[85%]",
                  isOwn ? "flex-row-reverse space-x-reverse" : "flex-row"
                )}>
                  {/* Avatar */}
                  {!isOwn && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {message.avatar}
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div className={cn(
                    "px-4 py-3 rounded-2xl shadow-sm",
                    isOwn 
                      ? "bg-primary text-primary-foreground rounded-br-md" 
                      : "bg-card border border-border rounded-bl-md"
                  )}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              )}

              {/* Timestamp */}
              {!isSystem && (
                <div className={cn(
                  "flex items-center space-x-1 text-xs text-muted-foreground mt-1",
                  isOwn ? "flex-row-reverse space-x-reverse" : "flex-row"
                )}>
                  <Clock className="h-3 w-3" />
                  <span>{message.timestamp}</span>
                  {isOwn && (
                    <CheckCircle className={cn(
                      "h-3 w-3",
                      message.read ? "text-primary" : "text-muted-foreground"
                    )} />
                  )}
                </div>
              )}
            </div>
          );
        })}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-end space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              MJ
            </div>
            <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replies */}
      <div className="px-6 py-2">
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <TouchRipple key={index}>
              <button
                onClick={() => handleQuickReply(reply)}
                className="px-3 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-full text-xs font-medium transition-colors mobile-button-press"
              >
                {reply}
              </button>
            </TouchRipple>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 border-t border-border bg-card">
        <div className="flex items-center space-x-3">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 rounded-full border-border focus:border-primary"
          />
          <TouchRipple>
            <Button 
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              size="icon"
              className="rounded-full w-10 h-10 mobile-button-press"
            >
              <Send className="h-4 w-4" />
            </Button>
          </TouchRipple>
        </div>
      </div>
    </div>
  );
};

export default MobileChat;