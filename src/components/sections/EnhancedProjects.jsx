// src/components/sections/EnhancedProjects.jsx

import React, { useState, useEffect } from 'react';
import GlassCard from '../common/GlassCard';
import MagneticButton from '../common/MagneticButton';
import ParallaxContainer from '../common/ParallaxContainer';
import FloatingElements from '../effects/FloatingElements';
import { useIntersection } from '../../hooks/useIntersection';
import { ExternalLink, Github, Play, Info, X, Calendar, User, Award, Star } from 'lucide-react';

export default function EnhancedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef, hasIntersected } = useIntersection();

  const projectsData = [
    {
      id: 1,
      title: "Rajeshwari Pawar Portfolio",
      subtitle: "Professional Portfolio Website",
      description: "A stunning, modern portfolio website for a professional showcasing their work, skills, and achievements with seamless user experience and responsive design.",
      longDescription: "Developed a comprehensive portfolio website featuring advanced animations, smooth navigation, project showcases, and contact integration. Built with modern web technologies ensuring optimal performance, SEO optimization, and cross-browser compatibility. Successfully delivered on time with 100% client satisfaction.",
      image: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1767983740/Screenshot_2026-01-10_at_12.03.18_AM_tryb2b.png",
      images: [
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748940122/Screenshot_2025-06-03_at_2.11.15_PM_urfp48.png"
      ],
      stack: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Vite", "EmailJS"],
      category: "Client Project",
      role: "Full Stack Developer",
      duration: "2 months",
      team: "Solo Project",
      client: "Rajeshwari Pawar",
      isClientProject: true,
      successRate: 100,
      links: {
        live: "https://www.rajeshwaripawar.com/",
        demo: "https://www.rajeshwaripawar.com/"
      },
      features: [
        "Modern, responsive design across all devices",
        "Smooth scroll animations and page transitions",
        "Interactive project showcase with filtering",
        "Integrated contact form with email notifications",
        "SEO optimized for better visibility",
        "Fast loading with optimized assets",
        "Cross-browser compatible",
        "Accessibility compliant (WCAG 2.1)"
      ],
      achievements: [
        "100% client satisfaction rating",
        "Delivered ahead of schedule",
        "95+ PageSpeed Insights score",
        "Zero post-launch bugs",
        "Responsive across 20+ device types"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Chatt Application",
      subtitle: "Real-time Communication Platform",
      description: "A sophisticated real-time chat application featuring user authentication, group creation, quick replies, notifications, and online status tracking with modern UI/UX design.",
      longDescription: "Built with the MERN stack, this chat application provides seamless real-time communication with advanced features like message encryption, file sharing, emoji reactions, and responsive design. The backend utilizes WebSocket for instant messaging and includes comprehensive user management.",
      image: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574156/chat-app_te3k7k.png",
      images: [
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574156/chat-app_te3k7k.png",
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574156/chat-ui_yw5ygr.png"
      ],
      stack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT"],
      category: "Full Stack",
      role: "Full Stack Developer",
      duration: "3 months",
      team: "Solo Project",
      links: {
        live: "https://chatt-app-jt87.onrender.com/",
        github: "https://github.com/niranjan-aware/chat-app",
        demo: "https://chatt-app-jt87.onrender.com/"
      },
      features: [
        "Real-time messaging with Socket.io",
        "User authentication & authorization", 
        "Group chat functionality",
        "File sharing capabilities",
        "Online status indicators",
        "Message notifications",
        "Responsive design"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Magnewin Harmonic Insights",
      subtitle: "Industrial Data Analytics Platform",
      description: "An advanced industrial data analysis solution that automates and visualizes 50+ key metrics for real-time insights and operational efficiency optimization.",
      longDescription: "A comprehensive industrial IoT platform that processes real-time sensor data, performs advanced analytics, and provides actionable insights through interactive dashboards. Features predictive maintenance algorithms and automated reporting systems.",
      image: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/magnewin_s52kiv.jpg",
      images: [
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/magnewin_s52kiv.jpg"
      ],
      stack: ["MongoDB", "Express.js", "Node.js", "React.js", "Tailwind CSS", "Chart.js", "D3.js"],
      category: "Full Stack",
      role: "Full Stack Developer",
      duration: "4 months",
      team: "Team of 3",
      links: {
        github: "https://github.com/niranjan-aware/MagnewinHarmonicInsights",
        demo: "https://github.com/niranjan-aware/MagnewinHarmonicInsights"
      },
      features: [
        "Real-time data visualization",
        "50+ automated metrics tracking",
        "Interactive analytics dashboard",
        "Predictive maintenance alerts",
        "Custom reporting system",
        "Multi-device compatibility",
        "Export capabilities"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Cryptify",
      subtitle: "Blockchain Document Verification",
      description: "A revolutionary blockchain-based certificate verification portal that reduces processing time from days to minutes with immutable security.",
      longDescription: "Leveraging blockchain technology to create tamper-proof digital certificates. The system provides instant verification, eliminates fraud, and offers a decentralized approach to document authentication with smart contract integration.",
      image: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748577067/Screenshot_2025-05-30_at_9.20.47_AM_qms75u.png",
      images: [
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748577067/Screenshot_2025-05-30_at_9.20.47_AM_qms75u.png"
      ],
      stack: ["MongoDB", "Express.js", "Node.js", "React", "Blockchain", "Web3.js", "Solidity"],
      category: "Full Stack",
      role: "Full Stack Developer & Blockchain Developer",
      duration: "5 months",
      team: "Team of 4",
      links: {
        github: "https://github.com/niranjan-aware/WCE_verification-portal",
        demo: "https://github.com/niranjan-aware/WCE_verification-portal"
      },
      features: [
        "Blockchain-based verification",
        "Smart contract integration",
        "95% faster processing time",
        "Tamper-proof certificates",
        "QR code verification",
        "Multi-institution support",
        "Decentralized storage"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "ConnectSpace",
      subtitle: "Communication Platform UI/UX",
      description: "Modern UI design for an all-in-one communication platform featuring secure chat, video calls, and team collaboration tools.",
      longDescription: "A comprehensive design system for a modern communication platform, focusing on user experience, accessibility, and visual hierarchy. Created detailed wireframes, prototypes, and design systems for both mobile and desktop applications.",
      image: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574156/chat-ui_yw5ygr.png",
      images: [
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574156/chat-ui_yw5ygr.png"
      ],
      stack: ["Figma", "Adobe XD", "Sketch", "Principle"],
      category: "UI/UX Design",
      role: "UI/UX Designer",
      duration: "2 months",
      team: "Solo Project",
      links: {
        figma: "https://www.figma.com/design/ML544V0F62UJvYYJH2P7ge/chat-app?node-id=0-1&t=aij8CRlXNBguGCJa-1",
        demo: "https://www.figma.com/design/ML544V0F62UJvYYJH2P7ge/chat-app?node-id=0-1&t=aij8CRlXNBguGCJa-1"
      },
      features: [
        "Modern glassmorphism design",
        "Dark/Light mode support",
        "Responsive layout system",
        "Interactive prototypes",
        "Accessibility compliant",
        "Design system creation",
        "User flow optimization"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Personal Portfolio Design",
      subtitle: "Modern Portfolio UI/UX",
      description: "A sleek, modern portfolio design showcasing projects, skills, and experience with cutting-edge UI trends and micro-interactions.",
      longDescription: "Complete redesign of personal portfolio with focus on modern design trends, user experience, and performance optimization. Features advanced animations, interactive elements, and responsive design principles.",
      image: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748940122/Screenshot_2025-06-03_at_2.11.15_PM_urfp48.png",
      images: [
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748940122/Screenshot_2025-06-03_at_2.11.15_PM_urfp48.png"
      ],
      stack: ["Figma", "Adobe Illustrator", "After Effects"],
      category: "UI/UX Design",
      role: "UI/UX Designer",
      duration: "1 month",
      team: "Solo Project",
      links: {
        figma: "https://www.figma.com/design/jcldGsCYomho0ogHafJpiP/Portfolio?node-id=0-1&t=HXatqCoaSJG5Hbf9-1",
        demo: "https://www.figma.com/design/jcldGsCYomho0ogHafJpiP/Portfolio?node-id=0-1&t=HXatqCoaSJG5Hbf9-1"
      },
      features: [
        "3D visual elements",
        "Advanced micro-interactions",
        "Performance-focused design",
        "Mobile-first approach",
        "Brand identity design",
        "Animation specifications",
        "Developer handoff ready"
      ],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section 
      id="projects" 
      ref={elementRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-light-surface-variant dark:bg-dark-surface"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FloatingElements count={8} />
        <div className="absolute inset-0 bg-gradient-to-br from-light-primary/5 via-transparent to-light-accent/5 dark:from-dark-primary/5 dark:via-transparent dark:to-dark-accent/5" />
        
        {/* Parallax background elements */}
        <ParallaxContainer speed={0.2} className="absolute top-20 left-20">
          <div className="w-64 h-64 bg-gradient-to-br from-light-primary/10 to-blue-500/10 dark:from-dark-primary/10 dark:to-blue-400/10 rounded-full blur-3xl"></div>
        </ParallaxContainer>
        
        <ParallaxContainer speed={-0.3} className="absolute bottom-20 right-20">
          <div className="w-48 h-48 bg-gradient-to-br from-light-accent/10 to-orange-500/10 dark:from-dark-accent/10 dark:to-orange-400/10 rounded-full blur-2xl"></div>
        </ParallaxContainer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-light-primary/20 dark:border-dark-primary/20 mb-6">
            <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Featured Work
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-light-text dark:text-dark-text">My </span>
            <span className="bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full mx-auto"></div>
          
          <p className="mt-6 text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in full-stack development, UI/UX design, and modern web technologies.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <GlassCard
              key={`${project.id}-${selectedCategory}`}
              className="group overflow-hidden hover:scale-[1.02] hover:-translate-y-2"
              variant="subtle"
              delay={400 + (index * 100)}
            >
              <div className="relative">
                {/* Project Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" 
                       style={{ background: `linear-gradient(135deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})` }} />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="flex space-x-4">
                      <MagneticButton
                        onClick={() => openModal(project)}
                        variant="secondary"
                        size="sm"
                        className="backdrop-blur-sm"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        Details
                      </MagneticButton>
                      
                      {project.links.live && (
                        <MagneticButton
                          onClick={() => window.open(project.links.live, '_blank')}
                          variant="primary"
                          size="sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </MagneticButton>
                      )}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {/* <span className="px-3 py-1 glass text-sm font-medium text-white rounded-full border border-white/20">
                      {project.category}
                    </span> */}
                    {project.isClientProject && (
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full flex items-center gap-1 shadow-lg">
                        <Award className="w-3 h-3" />
                        Client Project
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-light-text-muted dark:text-dark-text-muted font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-light-text-muted dark:text-dark-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Success Rate Badge for Client Projects */}
                  {project.isClientProject && project.successRate && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <Star className="w-5 h-5 text-green-600 dark:text-green-400 fill-current" />
                      <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                        {project.successRate}% Success Rate
                      </span>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-light-primary/10 to-blue-500/10 dark:from-dark-primary/10 dark:to-blue-400/10 
                                 text-light-primary dark:text-dark-primary text-xs font-medium rounded-full border border-light-primary/20 dark:border-dark-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 bg-light-surface-variant dark:bg-dark-surface-variant text-light-text-muted dark:text-dark-text-muted text-xs rounded-full">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-medium text-light-text-muted dark:text-dark-text-muted">
                      {project.role}
                    </span>
                    
                    <div className="flex space-x-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 glass rounded-lg hover:scale-110 transition-all duration-300 hover:text-light-primary dark:hover:text-dark-primary"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      
                      {(project.links.live || project.links.figma) && (
                        <a
                          href={project.links.live || project.links.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 glass rounded-lg hover:scale-110 transition-all duration-300 hover:text-light-primary dark:hover:text-dark-primary"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <GlassCard className="p-6 text-center" variant="strong">
            <div className="text-3xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent mb-2">
              {projectsData.length}+
            </div>
            <div className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Projects Completed
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-center" variant="strong">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
              {projectsData.filter(p => p.isClientProject).length}+
            </div>
            <div className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Client Projects
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-center" variant="strong">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Performance Improvement
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-center" variant="strong">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Client Satisfaction
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <GlassCard className="p-0" variant="strong">
              {/* Modal Header */}
              <div className="relative h-64 lg:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 glass rounded-full hover:scale-110 transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    {selectedProject.isClientProject && (
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Client Project
                      </span>
                    )}
                  </div>
                  <p className="text-lg opacity-90">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Client Project Achievement Banner */}
                {selectedProject.isClientProject && selectedProject.successRate && (
                  <GlassCard className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30" variant="subtle">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Star className="w-8 h-8 text-white fill-current" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-light-text dark:text-dark-text">
                            {selectedProject.successRate}% Success Rate
                          </h4>
                          <p className="text-light-text-muted dark:text-dark-text-muted">
                            Delivered with excellence • Client: {selectedProject.client || 'Confidential'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                )}

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">
                      Project Overview
                    </h4>
                    <p className="text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                        <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                          <strong>Role:</strong> {selectedProject.role}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                        <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                          <strong>Duration:</strong> {selectedProject.duration}
                        </span>
                      </div>
                      {selectedProject.client && (
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                          <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                            <strong>Client:</strong> {selectedProject.client}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Achievements (for client projects) */}
                {selectedProject.achievements && (
                  <div>
                    <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <GlassCard key={idx} className="p-4" variant="subtle">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Star className="w-4 h-4 text-white fill-current" />
                            </div>
                            <span className="text-sm text-light-text dark:text-dark-text">
                              {achievement}
                            </span>
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 glass rounded-full text-sm font-medium text-light-text dark:text-dark-text border border-light-primary/20 dark:border-dark-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.links.live && (
                    <MagneticButton
                      onClick={() => window.open(selectedProject.links.live, '_blank')}
                      variant="primary"
                      size="md"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live
                    </MagneticButton>
                  )}
                  
                  {selectedProject.links.github && (
                    <MagneticButton
                      onClick={() => window.open(selectedProject.links.github, '_blank')}
                      variant="secondary"
                      size="md"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </MagneticButton>
                  )}

                  {selectedProject.links.figma && (
                    <MagneticButton
                      onClick={() => window.open(selectedProject.links.figma, '_blank')}
                      variant="accent"
                      size="md"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      View Design
                    </MagneticButton>
                  )}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      )}
    </section>
  );
}