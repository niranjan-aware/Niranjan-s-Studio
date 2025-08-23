// src/components/sections/EnhancedContact.jsx
import React, { useState, useRef, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import GlassCard from '../common/GlassCard';
import MagneticButton from '../common/MagneticButton';
import ParallaxContainer from '../common/ParallaxContainer';
import FloatingElements from '../effects/FloatingElements';
import { useIntersection } from '../../hooks/useIntersection';
import { useMouse } from '../../hooks/useMouse';
import { 
  Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, 
  MapPin, Calendar, Clock, Phone, Globe, Heart
} from 'lucide-react';

export default function EnhancedContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [particles, setParticles] = useState([]);
  
  const formRef = useRef();
  const { elementRef, hasIntersected } = useIntersection();
  const { mousePosition } = useMouse();

  // Generate interactive particles
  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  // Update particles based on mouse position
  useEffect(() => {
    if (mousePosition.x && mousePosition.y) {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + (Math.random() - 0.5) * 0.1,
        y: particle.y + (Math.random() - 0.5) * 0.1,
      })));
    }
  }, [mousePosition]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "niranjanaware26@gmail.com",
      href: "mailto:niranjanaware26@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/niranjan-aware-673019211/",
      color: "hover:text-blue-600",
      followers: "500+"
    },
    {
      name: "GitHub",
      icon: FaGithubSquare,
      url: "https://github.com/niranjan-aware",
      color: "hover:text-purple-600",
      followers: "50+"
    },
    {
      name: "Email",
      icon: SiGmail,
      url: "mailto:niranjanaware26@gmail.com",
      color: "hover:text-red-600",
      followers: "Direct"
    }
  ];

  const quickTopics = [
    "Web Development Project",
    "Full-Stack Application",
    "UI/UX Design",
    "Technical Consultation",
    "Collaboration Opportunity",
    "Job Opportunity"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    } else if (formData.user_name.trim().length < 2) {
      newErrors.user_name = "Name must be at least 2 characters";
    }
    
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus("sending");

    const ownerEmailPromise = emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_OWNER_TEMPLATE,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    );

    const userReplyPromise = emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_USER_TEMPLATE,
      {
        name: formData.user_name,
        recipient: formData.user_email,
      },
      import.meta.env.VITE_PUBLIC_KEY
    );

    try {
      await Promise.all([ownerEmailPromise, userReplyPromise]);
      setSubmitStatus("success");
      setFormData({ user_name: '', user_email: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setTimeout(() => {
        setSubmitStatus("");
        setIsSubmitting(false);
      }, 3000);
    }
  };

  const selectQuickTopic = (topic) => {
    setFormData(prev => ({
      ...prev,
      message: `Hi Niranjan,\n\nI'm interested in discussing "${topic}". `
    }));
  };

  const getSubmitButtonContent = () => {
    switch (submitStatus) {
      case "sending":
        return (
          <>
            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
            Sending...
          </>
        );
      case "success":
        return (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            Message Sent!
          </>
        );
      case "error":
        return (
          <>
            <AlertCircle className="w-5 h-5 mr-2" />
            Try Again
          </>
        );
      default:
        return (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        );
    }
  };

  const getSubmitButtonVariant = () => {
    switch (submitStatus) {
      case "success":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "error":
        return "bg-gradient-to-r from-red-500 to-red-600";
      default:
        return "";
    }
  };

  return (
    <section 
      id="contact" 
      ref={elementRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-light-surface-variant dark:bg-dark-surface"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FloatingElements count={12} />
        
        {/* Interactive Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-light-primary dark:bg-dark-primary rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
                transform: `scale(${particle.size})`,
                transition: 'all 0.3s ease-out',
              }}
            />
          ))}
        </div>
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-primary/5 via-transparent to-light-accent/5 dark:from-dark-primary/5 dark:via-transparent dark:to-dark-accent/5" />
        
        {/* Parallax Elements */}
        <ParallaxContainer speed={0.3} className="absolute top-20 right-20">
          <div className="w-40 h-40 bg-gradient-to-br from-light-primary/10 to-blue-500/10 dark:from-dark-primary/10 dark:to-blue-400/10 rounded-full blur-3xl"></div>
        </ParallaxContainer>
        
        <ParallaxContainer speed={-0.2} className="absolute bottom-20 left-20">
          <div className="w-32 h-32 bg-gradient-to-br from-light-accent/10 to-orange-500/10 dark:from-dark-accent/10 dark:to-orange-400/10 rounded-full blur-2xl"></div>
        </ParallaxContainer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-light-primary/20 dark:border-dark-primary/20 mb-6">
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Let's work together
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-light-text dark:text-dark-text">Get In </span>
            <span className="bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-full mx-auto"></div>
          
          <p className="mt-6 text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Have a project in mind or just want to chat about technology? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className={`${hasIntersected ? 'animate-slide-in' : 'opacity-0 -translate-x-10'}`} style={{ animationDelay: '200ms' }}>
            <GlassCard className="p-8" variant="strong">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">
                  Send me a message
                </h3>
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  I'll get back to you within 24 hours
                </p>
              </div>

              {/* Quick Topic Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-3">
                  Quick topic selection (optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickTopics.map((topic, index) => (
                    <button
                      key={topic}
                      onClick={() => selectQuickTopic(topic)}
                      className="px-3 py-1 text-xs glass rounded-full hover:scale-105 transition-all duration-300 hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-muted dark:text-dark-text-muted hover:text-light-primary dark:hover:text-dark-primary"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="user_name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-text-muted dark:text-dark-text-muted" />
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full pl-12 pr-4 py-4 glass rounded-xl text-light-text dark:text-dark-text placeholder-light-text-muted dark:placeholder-dark-text-muted 
                               focus:outline-none focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 focus:border-light-primary dark:focus:border-dark-primary
                               transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/10 focus:-translate-y-1
                               ${errors.user_name ? 'border-red-500 focus:ring-red-500/50' : 'border-light-border dark:border-dark-border'}`}
                    />
                  </div>
                  {errors.user_name && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.user_name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="user_email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-text-muted dark:text-dark-text-muted" />
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full pl-12 pr-4 py-4 glass rounded-xl text-light-text dark:text-dark-text placeholder-light-text-muted dark:placeholder-dark-text-muted 
                               focus:outline-none focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 focus:border-light-primary dark:focus:border-dark-primary
                               transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/10 focus:-translate-y-1
                               ${errors.user_email ? 'border-red-500 focus:ring-red-500/50' : 'border-light-border dark:border-dark-border'}`}
                    />
                  </div>
                  {errors.user_email && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.user_email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-light-text-muted dark:text-dark-text-muted" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
                      className={`w-full pl-12 pr-4 py-4 glass rounded-xl text-light-text dark:text-dark-text placeholder-light-text-muted dark:placeholder-dark-text-muted 
                               focus:outline-none focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 focus:border-light-primary dark:focus:border-dark-primary
                               transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/10 focus:-translate-y-1 resize-none
                               ${errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-light-border dark:border-dark-border'}`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className={`w-full ${getSubmitButtonVariant()} ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                    strength={20}
                  >
                    {getSubmitButtonContent()}
                  </MagneticButton>
                </div>
              </form>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-xl animate-slide-up">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <p className="text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent successfully. I'll get back to you soon!
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-xl animate-slide-up">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-red-800 dark:text-red-200">
                      Sorry, there was an error sending your message. Please try again or contact me directly.
                    </p>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>

          {/* Contact Information & Visual */}
          <div className={`space-y-8 ${hasIntersected ? 'animate-slide-in' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '400ms' }}>
            
            {/* Contact Information */}
            <GlassCard className="p-8" variant="subtle">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
                Let's connect
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="group">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 p-4 glass rounded-xl hover:scale-105 transition-all duration-300 hover:bg-white/5"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                            {info.label}
                          </h4>
                          <p className="text-light-text-muted dark:text-dark-text-muted text-sm">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            {/* Social Media */}
            <GlassCard className="p-8" variant="subtle">
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
                Follow me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 glass rounded-xl hover:scale-105 transition-all duration-300 group hover:bg-white/5"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className={`w-6 h-6 text-light-text-muted dark:text-dark-text-muted ${social.color} transition-colors`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                            {social.name}
                          </h4>
                          <p className="text-light-text-muted dark:text-dark-text-muted text-sm">
                            {social.followers} connections
                          </p>
                        </div>
                      </div>
                      <div className="text-light-text-muted dark:text-dark-text-muted group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </GlassCard>

            {/* Availability Status */}
            <GlassCard className="p-6 text-center" variant="strong">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-light-text dark:text-dark-text font-semibold">
                    Available for new projects
                  </span>
                </div>
                <p className="text-light-text-muted dark:text-dark-text-muted text-sm">
                  Currently accepting freelance projects and full-time opportunities. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <GlassCard className="p-8" variant="strong">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-light-text dark:text-dark-text mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-light-text-muted dark:text-dark-text-muted mb-6 leading-relaxed">
                Whether you need a stunning website, a powerful web application, or just want to discuss the latest in tech, I'm here to help. Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  onClick={() => document.querySelector('#user_name')?.focus()}
                  variant="primary"
                  size="lg"
                >
                  Start a Project
                </MagneticButton>
                <MagneticButton
                  onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
                  variant="secondary"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </MagneticButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}