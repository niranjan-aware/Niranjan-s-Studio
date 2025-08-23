// src/components/sections/EnhancedExperience.jsx
import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import ParallaxContainer from '../common/ParallaxContainer';
import FloatingElements from '../effects/FloatingElements';
import { useIntersection } from '../../hooks/useIntersection';
import { 
  Calendar, MapPin, Code, Database, Server, Globe, 
  ChevronDown, ChevronUp, Building, Award, Target,
  TrendingUp, Users, Zap, CheckCircle 
} from 'lucide-react';

export default function EnhancedExperience() {
  const [expandedCard, setExpandedCard] = useState(null);
  const { elementRef, hasIntersected } = useIntersection();

  const experiences = [
    {
      id: 1,
      company: "Sincro Digital Pvt Ltd",
      companySize: "500+ employees",
      subtitle: "(A DealerOn Company)",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGxqJo8QHgOdQ/company-logo_200_200/company-logo_200_200/0/1630511473258/sincrodigital_logo?e=1748275200&v=beta&t=YQjKN-V6CbvMCzehqGBEd_eV6fNBRaX9YZjGbQEz_tM",
      location: "Pune, Maharashtra",
      position: "Member Technical (Software Engineer)",
      level: "Mid-Level",
      duration: "Sep 2024 - Present",
      type: "current",
      logoText: "SD",
      industry: "Automotive Technology",
      workMode: "Hybrid",
      achievements: [
        "Maintained and enhanced 5+ microservices, improving code reliability by 40%",
        "Upgraded Content Management service from SonarQube rating D to A grade",
        "Achieved 100% test coverage implementation using JUnit and Mockito",
        "Optimized system performance using Splunk and Grafana for 99.99% uptime",
        "Maintained consistent 100% code review coverage with SonarQube A rating",
        "Led critical bug fixes that reduced system downtime by 60%",
        "Implemented automated testing pipelines reducing deployment time by 50%"
      ],
      responsibilities: [
        "Develop and maintain Java-based microservices architecture",
        "Collaborate with cross-functional teams on feature development",
        "Conduct code reviews and ensure coding standards compliance",
        "Monitor system performance and implement optimization strategies",
        "Participate in agile development processes and sprint planning"
      ],
      technologies: [
        "Spring Boot", "Java", "Microservices", "PostgreSQL", "Splunk", 
        "Grafana", "JUnit", "Mockito", "Bitbucket", "Bamboo", "Docker", "Redis"
      ],
      highlights: {
        reliability: "40% improvement",
        uptime: "99.99%",
        coverage: "100%",
        rating: "A Grade"
      },
      impact: [
        "Reduced system downtime by 60%",
        "Improved deployment speed by 50%",
        "Enhanced code quality significantly",
        "Optimized performance monitoring"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      company: "Walchand College of Engineering",
      companySize: "5000+ students",
      subtitle: "Sangli, Maharashtra",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Walchand_College_of_Engineering_logo.png/220px-Walchand_College_of_Engineering_logo.png",
      location: "Sangli, Maharashtra",
      position: "B.Tech. Electrical Engineering",
      level: "Bachelor's Degree",
      duration: "Aug 2020 - Jun 2024",
      type: "education",
      logoText: "WCE",
      industry: "Higher Education",
      workMode: "On-campus",
      achievements: [
        "Graduated with CGPA: 8.01/10 with distinction",
        "Developed Cryptify - Blockchain-based Document Verification Portal",
        "Built Magnewin Harmonic Insights - Industrial Data Analysis Solution",
        "Reduced certificate authentication time by 95% (3-5 days to 2 minutes)",
        "Increased operational efficiency by 65% for industrial clients",
        "Participated in 6+ national and international hackathons",
        "Completed 50+ coding contests across multiple platforms",
        "Led technical team in college symposium and events"
      ],
      responsibilities: [
        "Completed coursework in electrical engineering fundamentals",
        "Developed multiple full-stack web applications as projects",
        "Participated in research activities and technical competitions",
        "Mentored junior students in programming and development",
        "Organized technical events and coding competitions"
      ],
      technologies: [
        "MongoDB", "Express.js", "Node.js", "React", "JavaScript", "Python",
        "Blockchain", "Web3.js", "Tailwind CSS", "Git", "Figma"
      ],
      highlights: {
        cgpa: "8.01/10",
        hackathons: "6+ participated",
        contests: "50+ completed",
        projects: "5+ major projects"
      },
      impact: [
        "95% faster document verification",
        "65% efficiency improvement",
        "Multiple award-winning projects",
        "Strong foundation in engineering"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "Python", "C/C++", "HTML5", "CSS3", "SQL"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Backend",
      items: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "Microservices"],
      icon: Server,
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      icon: Database,
      color: "from-orange-500 to-red-500"
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      ref={elementRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-light-bg dark:bg-dark-bg"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FloatingElements count={6} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
        
        {/* Parallax background elements */}
        <ParallaxContainer speed={0.1} className="absolute top-32 right-10">
          <div className="w-32 h-32 bg-gradient-to-br from-light-primary/10 to-blue-500/10 dark:from-dark-primary/10 dark:to-blue-400/10 rounded-full blur-2xl"></div>
        </ParallaxContainer>
        
        <ParallaxContainer speed={-0.2} className="absolute bottom-32 left-10">
          <div className="w-40 h-40 bg-gradient-to-br from-light-accent/10 to-orange-500/10 dark:from-dark-accent/10 dark:to-orange-400/10 rounded-full blur-3xl"></div>
        </ParallaxContainer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-light-primary/20 dark:border-dark-primary/20 mb-6">
            <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Professional Journey
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-light-text dark:text-dark-text">My </span>
            <span className="bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full mx-auto"></div>
          
          <p className="mt-6 text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Building scalable solutions and continuously learning in the world of full-stack development and engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-light-primary via-blue-500 to-light-accent dark:from-dark-primary dark:via-blue-400 dark:to-dark-accent rounded-full opacity-30"></div>
          
          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-light-primary via-blue-500 to-light-accent dark:from-dark-primary dark:via-blue-400 dark:to-dark-accent rounded-full opacity-30"></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'
              }`}
            >
              {/* Timeline node */}
              <div
                className={`absolute w-8 h-8 rounded-full border-4 border-light-bg dark:border-dark-bg z-10 ${
                  exp.type === "current"
                    ? "bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 shadow-glow"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg"
                } ${
                  index % 2 === 0
                    ? "lg:right-0 lg:transform lg:translate-x-1/2"
                    : "lg:left-0 lg:transform lg:-translate-x-1/2"
                } left-4 lg:left-auto transform -translate-x-1/2 lg:translate-x-0`}
              >
                {exp.type === "current" && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-light-primary dark:bg-dark-primary opacity-30"></div>
                )}
              </div>

              {/* Experience Card */}
              <div className={`ml-16 lg:ml-0 ${index % 2 === 0 ? "lg:mr-16" : "lg:ml-16"}`}>
                <GlassCard
                  className="overflow-hidden hover:scale-[1.02] hover:-translate-y-2 group"
                  variant="subtle"
                  delay={200 + (index * 200)}
                >
                  <div className="p-8 relative">
                    {/* Background gradient overlay */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.gradient} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          {/* Company Logo */}
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg bg-gradient-to-br ${exp.gradient}`}>
                            {exp.logoText}
                          </div>
                          
                          {/* Status Badge */}
                          {exp.type === "current" && (
                            <div className="flex items-center space-x-2">
                              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium animate-pulse">
                                <div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></div>
                                Current
                              </span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-1 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                          {exp.company}
                        </h3>
                        
                        <p className="text-light-text-muted dark:text-dark-text-muted mb-2 font-medium">
                          {exp.subtitle}
                        </p>
                        
                        <h4 className="text-xl font-semibold text-light-primary dark:text-dark-primary mb-4">
                          {exp.position}
                        </h4>

                        {/* Meta Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-light-text-muted dark:text-dark-text-muted mb-6">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-light-primary dark:text-dark-primary" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-light-primary dark:text-dark-primary" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4 text-light-primary dark:text-dark-primary" />
                            <span>{exp.companySize}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-light-primary dark:text-dark-primary" />
                            <span>{exp.workMode}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => toggleCard(exp.id)}
                        className="ml-4 p-3 glass rounded-xl hover:scale-110 transition-all duration-300 hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
                        aria-expanded={expandedCard === exp.id}
                      >
                        {expandedCard === exp.id ? (
                          <ChevronUp className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                        )}
                      </button>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {Object.entries(exp.highlights).map(([key, value], idx) => (
                        <div key={key} className="text-center p-3 glass rounded-xl">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-xs text-light-text-muted dark:text-dark-text-muted capitalize font-medium">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Impact - Always visible */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-light-text dark:text-dark-text mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 text-light-primary dark:text-dark-primary mr-2" />
                        Key Impact
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.impact.map((impact, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                              {impact}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    {expandedCard === exp.id && (
                      <div className="border-t border-light-border dark:border-dark-border pt-6 space-y-6 animate-slide-up">
                        {/* Achievements */}
                        <div>
                          <h5 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4 flex items-center">
                            <Award className="w-5 h-5 text-light-primary dark:text-dark-primary mr-2" />
                            Key Achievements
                          </h5>
                          <div className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-3 group">
                                <div className="w-2 h-2 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                <span className="text-sm text-light-text-muted dark:text-dark-text-muted leading-relaxed group-hover:text-light-text dark:group-hover:text-dark-text transition-colors">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h5 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4 flex items-center">
                            <Target className="w-5 h-5 text-light-primary dark:text-dark-primary mr-2" />
                            Key Responsibilities
                          </h5>
                          <div className="space-y-3">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <Zap className="w-4 h-4 text-light-accent dark:text-dark-accent mt-1 flex-shrink-0" />
                                <span className="text-sm text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                                  {responsibility}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4 flex items-center">
                            <Server className="w-5 h-5 text-light-primary dark:text-dark-primary mr-2" />
                            Technologies & Tools
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 glass text-sm font-medium text-light-text dark:text-dark-text rounded-full border border-light-primary/20 dark:border-dark-primary/20 hover:scale-105 transition-transform cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Overview */}
        <div className={`mt-20 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <GlassCard className="p-8" variant="strong">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-light-text dark:text-dark-text">Technical </span>
                <span className="bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                  Arsenal
                </span>
              </h3>
              <p className="text-light-text-muted dark:text-dark-text-muted">
                Technologies and tools I work with to build exceptional solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div key={skillGroup.category} className="text-center group">
                    <div className={`w-20 h-20 bg-gradient-to-br ${skillGroup.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-3 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                      {skillGroup.category}
                    </h4>
                    <div className="space-y-1">
                      {skillGroup.items.map((item, idx) => (
                        <div key={idx} className="text-sm text-light-text-muted dark:text-dark-text-muted">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* Quote/Philosophy */}
        <div className={`mt-12 text-center ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <GlassCard className="p-8" variant="subtle">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl text-light-primary/20 dark:text-dark-primary/20 mb-4">"</div>
              <blockquote className="text-xl lg:text-2xl font-medium text-light-text dark:text-dark-text leading-relaxed mb-4">
                Passionate about creating scalable solutions, optimizing performance, and continuous learning in the ever-evolving world of technology.
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full mx-auto mb-4"></div>
              <cite className="text-light-text-muted dark:text-dark-text-muted font-medium">
                — Niranjan Aware, Full Stack Developer
              </cite>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}