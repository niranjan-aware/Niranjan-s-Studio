// src/components/sections/EnhancedAbout.jsx
import React from 'react';
import GlassCard from '../common/GlassCard';
import ParallaxContainer from '../common/ParallaxContainer';
import FloatingElements from '../effects/FloatingElements';
import { useIntersection } from '../../hooks/useIntersection';

export default function EnhancedAbout() {
  const { elementRef, hasIntersected } = useIntersection();

  const interests = [
    { 
      emoji: "🎮", 
      text: "Gaming", 
      description: "Strategy & RPG games",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      emoji: "💻", 
      text: "Tech Exploration", 
      description: "Latest frameworks & tools",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      emoji: "🚀", 
      text: "Problem Solving", 
      description: "Complex challenges",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      emoji: "📚", 
      text: "Continuous Learning", 
      description: "Always growing",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  const achievements = [
    { number: "8.01", label: "CGPA", subtitle: "B.Tech EE" },
    { number: "6+", label: "Hackathons", subtitle: "Participated" },
    { number: "50+", label: "Coding Contests", subtitle: "Completed" },
    { number: "99.99%", label: "Uptime", subtitle: "System Reliability" }
  ];

  return (
    <section 
      id="about" 
      ref={elementRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-light-surface-variant dark:bg-dark-surface"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FloatingElements count={6} />
        <div className="absolute inset-0 bg-gradient-to-br from-light-accent/5 via-transparent to-light-primary/5 dark:from-dark-accent/5 dark:via-transparent dark:to-dark-primary/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-light-primary/20 dark:border-dark-primary/20 mb-6">
            <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Get to know me
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-light-text dark:text-dark-text">About </span>
            <span className="bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Profile Image Section - Desktop Only */}
          <div className={`hidden lg:flex relative justify-center ${hasIntersected ? 'animate-slide-in' : 'opacity-0 -translate-x-10'}`} style={{ animationDelay: '200ms' }}>
            <div className="relative">
              
              {/* Parallax Background Elements */}
              <ParallaxContainer speed={0.4} className="absolute -top-20 -right-20 -z-10">
                <div className="w-64 h-64 bg-gradient-to-br from-light-primary/10 to-blue-500/10 dark:from-dark-primary/10 dark:to-blue-400/10 rounded-full blur-3xl"></div>
              </ParallaxContainer>
              
              <ParallaxContainer speed={-0.3} className="absolute -bottom-20 -left-20 -z-10">
                <div className="w-48 h-48 bg-gradient-to-br from-light-accent/10 to-orange-500/10 dark:from-dark-accent/10 dark:to-orange-400/10 rounded-full blur-2xl"></div>
              </ParallaxContainer>

              {/* Main Image Container - Desktop */}
              <GlassCard className="p-6 hover:scale-105" hover={false}>
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-light-primary/20 to-blue-500/20 dark:from-dark-primary/20 dark:to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                  
                  {/* Profile Image */}
                  <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/NiranjanSinhagad_jf7vtl.jpg"
                      alt="Niranjan Aware - About"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Subtle corner accents */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-light-accent to-orange-500 dark:from-dark-accent dark:to-orange-400 rounded-full opacity-80"></div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 ${hasIntersected ? 'animate-slide-in' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '400ms' }}>
            
            {/* Main Description */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-light-text dark:text-dark-text leading-relaxed">
                  Hey there! 👋 I'm{" "}
                  <span className="font-semibold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                    Niranjan Aware
                  </span>
                  , a passionate full-stack developer who loves turning ideas into reality through code.
                </p>
                
                <p className="text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                  I specialize in building scalable web applications using modern technologies. My journey in tech is driven by curiosity and a genuine love for solving complex problems with elegant solutions.
                </p>
              </div>

              {/* Key Skills Highlight */}
              <GlassCard className="p-6" variant="subtle">
                <div className="flex flex-wrap gap-3">
                  {['React', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Java', 'JavaScript'].map((skill, index) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gradient-to-r from-light-primary/10 to-blue-500/10 dark:from-dark-primary/10 dark:to-blue-400/10 
                               text-light-primary dark:text-dark-primary text-sm font-medium rounded-full border border-light-primary/20 dark:border-dark-primary/20"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <GlassCard 
                  key={index} 
                  className="p-4 text-center hover:scale-105" 
                  variant="subtle"
                  delay={600 + (index * 100)}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-medium text-light-text dark:text-dark-text">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-light-text-muted dark:text-dark-text-muted">
                    {achievement.subtitle}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Interests Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text flex items-center">
                <span className="mr-3">🌟</span>
                When I'm Not Coding
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <GlassCard 
                    key={index}
                    className="p-5 group hover:scale-105"
                    variant="subtle"
                    delay={800 + (index * 100)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl group-hover:animate-bounce">
                        {interest.emoji}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                          {interest.text}
                        </h4>
                        <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <GlassCard className="p-6" variant="strong">
              <div className="text-center space-y-4">
                <div className="text-2xl">💡</div>
                <p className="text-light-text dark:text-dark-text">
                  <span className="font-semibold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                    Ready to collaborate?
                  </span>
                  <br />
                  <span className="text-light-text-muted dark:text-dark-text-muted">
                    Let's build something amazing together!
                  </span>
                </p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className={`mt-20 text-center ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <div className="inline-flex items-center space-x-4 px-6 py-3 glass rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                J
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                R
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                N
              </div>
            </div>
            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Java • React • Node.js enthusiast
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}