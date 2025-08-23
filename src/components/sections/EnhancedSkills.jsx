// src/components/sections/EnhancedSkills.jsx
import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import MagneticButton from '../common/MagneticButton';
import ParallaxContainer from '../common/ParallaxContainer';
import FloatingElements from '../effects/FloatingElements';
import { useIntersection } from '../../hooks/useIntersection';

export default function EnhancedSkills() {
  const [selectedCategory, setSelectedCategory] = useState("Languages");
  const { elementRef, hasIntersected } = useIntersection();

  const skillsData = [
    {
      name: "Java",
      category: "Languages",
      level: 85,
      icon: "☕",
      color: "from-orange-500 to-red-500",
      description: "Enterprise applications"
    },
    {
      name: "JavaScript",
      category: "Languages", 
      level: 80,
      icon: "⚡",
      color: "from-yellow-400 to-orange-500",
      description: "Modern ES6+ features"
    },
    {
      name: "TypeScript",
      category: "Languages",
      level: 75,
      icon: "📘",
      color: "from-blue-500 to-blue-700",
      description: "Type-safe development"
    },
    {
      name: "Python",
      category: "Languages",
      level: 70,
      icon: "🐍",
      color: "from-green-400 to-blue-500",
      description: "Automation & scripting"
    },
    {
      name: "HTML5",
      category: "Languages",
      level: 90,
      icon: "🌐",
      color: "from-orange-500 to-red-600",
      description: "Semantic markup"
    },
    {
      name: "CSS3",
      category: "Languages",
      level: 85,
      icon: "🎨",
      color: "from-blue-400 to-purple-500",
      description: "Modern styling"
    },
    {
      name: "React",
      category: "Frontend",
      level: 85,
      icon: "⚛️",
      color: "from-cyan-400 to-blue-500",
      description: "Component-based UI"
    },
    {
      name: "Next.js",
      category: "Frontend",
      level: 75,
      icon: "▲",
      color: "from-gray-800 to-gray-600",
      description: "Full-stack React"
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: 90,
      icon: "💨",
      color: "from-teal-400 to-cyan-500",
      description: "Utility-first CSS"
    },
    {
      name: "Framer Motion",
      category: "Frontend",
      level: 70,
      icon: "🎭",
      color: "from-purple-500 to-pink-500",
      description: "Advanced animations"
    },
    {
      name: "Spring Boot",
      category: "Backend",
      level: 80,
      icon: "🌱",
      color: "from-green-500 to-emerald-600",
      description: "Java microservices"
    },
    {
      name: "Node.js",
      category: "Backend",
      level: 75,
      icon: "🟢",
      color: "from-green-400 to-green-600",
      description: "Server-side JavaScript"
    },
    {
      name: "Express.js",
      category: "Backend",
      level: 80,
      icon: "🚀",
      color: "from-gray-700 to-gray-900",
      description: "Web application framework"
    },
    {
      name: "REST API",
      category: "Backend",
      level: 85,
      icon: "🔌",
      color: "from-blue-500 to-indigo-600",
      description: "RESTful services"
    },
    {
      name: "PostgreSQL",
      category: "Database",
      level: 80,
      icon: "🐘",
      color: "from-blue-600 to-indigo-700",
      description: "Relational database"
    },
    {
      name: "MongoDB",
      category: "Database",
      level: 75,
      icon: "🍃",
      color: "from-green-500 to-green-700",
      description: "Document database"
    },
    {
      name: "Redis",
      category: "Database",
      level: 70,
      icon: "🔴",
      color: "from-red-500 to-red-700",
      description: "In-memory caching"
    },
    {
      name: "Elasticsearch",
      category: "Database",
      level: 65,
      icon: "🔍",
      color: "from-yellow-400 to-orange-500",
      description: "Search & analytics"
    },
    {
      name: "Docker",
      category: "DevOps",
      level: 75,
      icon: "🐳",
      color: "from-blue-500 to-cyan-500",
      description: "Containerization"
    },
    {
      name: "Git",
      category: "DevOps",
      level: 85,
      icon: "📝",
      color: "from-orange-500 to-red-500",
      description: "Version control"
    },
    {
      name: "GitHub Actions",
      category: "DevOps",
      level: 70,
      icon: "⚙️",
      color: "from-purple-500 to-indigo-600",
      description: "CI/CD pipelines"
    },
    {
      name: "Splunk",
      category: "DevOps",
      level: 75,
      icon: "📊",
      color: "from-green-500 to-teal-600",
      description: "Log analysis"
    },
  ];

  const categories = [...new Set(skillsData.map(skill => skill.category))];
  const filteredSkills = skillsData.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level) => {
    if (level >= 85) return "bg-gradient-to-r from-green-400 to-emerald-500";
    if (level >= 75) return "bg-gradient-to-r from-blue-400 to-cyan-500";
    if (level >= 65) return "bg-gradient-to-r from-yellow-400 to-orange-500";
    return "bg-gradient-to-r from-gray-400 to-gray-500";
  };

  return (
    <section 
      id="skills" 
      ref={elementRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-light-bg dark:bg-dark-bg"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FloatingElements count={10} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-light-primary/20 dark:border-dark-primary/20 mb-6">
            <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Technical Expertise
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-light-text dark:text-dark-text">My </span>
            <span className="bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full mx-auto"></div>
          
          <p className="mt-6 text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '200ms' }}>
          {categories.map((category, index) => (
            <MagneticButton
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "primary" : "ghost"}
              size="sm"
              strength={15}
              className={`${selectedCategory === category ? '' : 'glass'} transition-all duration-300`}
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              {category}
            </MagneticButton>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <GlassCard
              key={`${skill.name}-${selectedCategory}`}
              className="p-6 group hover:scale-105 hover:-translate-y-2"
              variant="subtle"
              delay={400 + (index * 100)}
            >
              <div className="space-y-4">
                
                {/* Skill Header */}
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-2xl group-hover:animate-bounce shadow-lg`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                      Proficiency
                    </span>
                    <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-light-surface-variant dark:bg-dark-surface-variant rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                      style={{ 
                        width: hasIntersected ? `${skill.level}%` : '0%',
                        transitionDelay: `${600 + (index * 100)}ms`
                      }}
                    />
                  </div>
                </div>

                {/* Skill Level Badge */}
                <div className="flex justify-end">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    skill.level >= 85 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : skill.level >= 75 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : skill.level >= 65 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}>
                    {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 65 ? 'Intermediate' : 'Learning'}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          
          <GlassCard className="p-6 text-center" variant="strong">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
              Problem Solver
            </h3>
            <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
              I love tackling complex challenges and finding elegant solutions through code.
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center" variant="strong">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
              Performance Focused
            </h3>
            <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Optimizing applications for speed, scalability, and user experience.
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center" variant="strong">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
              Continuous Learner
            </h3>
            <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Always exploring new technologies and staying updated with industry trends.
            </p>
          </GlassCard>
        </div>

        {/* Tech Stack Visualization */}
        <div className={`mt-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1000ms' }}>
          <GlassCard className="p-8" variant="strong">
            <h3 className="text-2xl font-bold text-center text-light-text dark:text-dark-text mb-8">
              Current Tech Stack
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl">
                  ⚛️
                </div>
                <h4 className="font-semibold text-light-text dark:text-dark-text">Frontend</h4>
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted">React, Next.js, Tailwind</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl">
                  🌱
                </div>
                <h4 className="font-semibold text-light-text dark:text-dark-text">Backend</h4>
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted">Spring Boot, Node.js</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl">
                  🐘
                </div>
                <h4 className="font-semibold text-light-text dark:text-dark-text">Database</h4>
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted">PostgreSQL, MongoDB</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl">
                  🐳
                </div>
                <h4 className="font-semibold text-light-text dark:text-dark-text">DevOps</h4>
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted">Docker, GitHub Actions</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}