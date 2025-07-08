import { LucideIcon } from "lucide-react";

export interface Challenge {
  icon: LucideIcon;
  problem: string;
  painPoint: string;
  description: string;
  solution: string;
  benefit: string;
  impact: string;
  timesSaved: string;
  statIcon: LucideIcon;
}