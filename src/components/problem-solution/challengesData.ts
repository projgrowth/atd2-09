import { MessageSquare, FileX, Clock, Shield, CheckCircle, TrendingUp, Star, Users } from "lucide-react";
import { Challenge } from "./types";

export const challenges: Challenge[] = [
  {
    icon: MessageSquare,
    problem: "Communication Chaos",
    painPoint: "Juggling texts, emails, and calls across multiple contractors",
    description: "Lost messages, missed deadlines, and constant confusion about project status",
    solution: "Unified communication hub with automatic message organization",
    benefit: "Never miss another important update or decision",
    impact: "87% reduction in miscommunication",
    timesSaved: "3 hours per week",
    statIcon: TrendingUp
  },
  {
    icon: FileX,
    problem: "Documentation Disaster",
    painPoint: "Photos and receipts scattered everywhere",
    description: "Important project documents lost in phone galleries and email threads",
    solution: "Automatic photo organization with searchable project history",
    benefit: "Complete documentation without the hassle",
    impact: "100% project transparency",
    timesSaved: "2 hours per project",
    statIcon: Star
  },
  {
    icon: Clock,
    problem: "Status Blackout",
    painPoint: "Wondering if contractors even showed up today",
    description: "No visibility into work progress, arrival times, or completion estimates",
    solution: "Real-time updates with photos and progress tracking",
    benefit: "Complete project visibility from anywhere",
    impact: "Real-time peace of mind",
    timesSaved: "Daily check-ins eliminated",
    statIcon: Users
  },
  {
    icon: Shield,
    problem: "Trust Uncertainty",
    painPoint: "How do you know if work is actually done right?",
    description: "Difficulty verifying quality and ensuring accountability without being there",
    solution: "Documented work history with two-way rating system",
    benefit: "Confidence in every project outcome",
    impact: "95% homeowner satisfaction",
    timesSaved: "Zero quality surprises",
    statIcon: CheckCircle
  }
];