import { useState } from "react";
import { challenges } from "./problem-solution/challengesData";
import { SectionHeader } from "./problem-solution/SectionHeader";
import { ChallengeCard } from "./problem-solution/ChallengeCard";
import { BottomCTA } from "./problem-solution/BottomCTA";

const ProblemSolution = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="section-spacing-large section-bg-content">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader />

        {/* Modern Challenge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              challenge={challenge}
              index={index}
              hoveredCard={hoveredCard}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        <BottomCTA />
      </div>
    </section>
  );
};

export default ProblemSolution;