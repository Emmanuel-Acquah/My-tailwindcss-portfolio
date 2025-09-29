import React, { useState } from "react";
import { cn } from "../lib/util";
const skills = [
  //frontend
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 60, category: "frontend" },
  { name: "React/React-Native", level: 60, category: "frontend" },
  { name: "TypeScript", level: 10, category: "frontend" },
  { name: "Next.js", level: 0, category: "frontend" },
  { name: "Tailwind CSS", level: 20, category: "frontend" },

  //backend
  { name: "Java-Spring-Boot", level: 0, category: "backend" },
  { name: "PostgreSQL", level: 0, category: "backend" },

  //Machine Learning
  { name: "Python", level: 50, category: "ML" },

  //tools
  { name: "Git/GitHib", level: 50, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Vs Code", level: 70, category: "tools" },
  { name: "Py Charm", level: 20, category: "tools" },
  { name: "SQL", level: 70, category: "tools" },
  { name: "Pandas, Numpy", level: 20, category: "tools" },
];
const categories = ["all", "frontend", "backend", "ML", "tools"];

const SkillSection = () => {
  const [activeCat, setActiveCat] = useState("all");

  const fillterdSkill = skills.filter((skill)=>activeCat==='all'|| skill.category===activeCat)
  return (
    <section id="skill" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold items-center mb-12">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCat(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCat === category
                  ? "bg-primary text-white "
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fillterdSkill.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h2 className="font-semibold text-lg ">{skill.name}</h2>
              </div>
              <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
