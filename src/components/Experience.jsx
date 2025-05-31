import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Code,
  Database,
  Server,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Sincro Digital Pvt Ltd",
      subtitle: "(A DealerOn Company)",
      location: "Pune",
      position: "Member Technical (Software Engineer)",
      duration: "Sep 2024 - Present",
      type: "current",
      logo: "SD",
      achievements: [
        "Maintained and Improved 5+ microservices, boosting code reliability by 40%",
        "Improved Content Management service reliability from SonarQube rating D to A",
        "Achieved 100% test coverage with JUnit, Mockito",
        "Optimized system performance using Splunk and Grafana for 99.99% uptime",
        "Maintained 100% code review coverage with SonarQube A rating",
      ],
      technologies: [
        "Spring Boot",
        "Java",
        "Microservices",
        "Splunk",
        "Grafana",
        "JUnit",
        "Mockito",
        "Bitbucket",
        "Bamboo",
      ],
      highlights: {
        scalability: "40%",
        uptime: "99.99%",
        coverage: "100%",
        rating: "A",
      },
    },
    {
      id: 2,
      company: "Walchand College of Engineering",
      subtitle: "Sangli",
      location: "Sangli",
      position: "B.Tech. Electrical Engineering",
      duration: "Aug 2020 - Jun 2024",
      type: "education",
      logo: "WCE",
      achievements: [
        "CGPA: 8.01/10",
        "Developed Cryptify - Document Verification Portal using Blockchain",
        "Built Magnewin Harmonic Insights - Industrial Data Analysis Solution",
        "Reduced certificate authentication time by 95% (3-5 days to 2 minutes)",
        "Increased operational efficiency by 65% for industrial clients",
      ],
      technologies: [
        "MongoDB",
        "Express",
        "Node.js",
        "React",
        "Blockchain",
        "Tailwind CSS",
      ],
      highlights: {
        cgpa: "8.01",
        hackathons: "6+ hackathons participated",
        codingContests: "50+ coding contests",
        platforms: "LeetCode, CodeChef, HackerRank",
      },
    },
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="min-h-screen text-white p-4 lg:p-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="experience-heading"
            className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#caf0f8] via-[#90e0ef] to-[#00b4d8] bg-clip-text text-transparent"
          >
            Professional Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable solutions and continuously learning in the world of
            full-stack development
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full hidden lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute left-8 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full lg:hidden"
          ></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2 lg:ml-auto"
              }`}
            >
              <div
                className={`absolute w-6 h-6 rounded-full border-4 border-black z-10 ${
                  exp.type === "current"
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                } ${
                  index % 2 === 0
                    ? "lg:right-0 lg:transform lg:translate-x-1/2"
                    : "lg:left-0 lg:transform lg:-translate-x-1/2"
                } left-5 lg:left-auto`}
              >
                {exp.type === "current" && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-75"
                  ></div>
                )}
              </div>

              <div className={`ml-16 lg:ml-0 ${index % 2 === 0 ? "lg:mr-16" : "lg:ml-16"}`}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="p-6 relative overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full transform translate-x-16 -translate-y-16"
                    ></div>

                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${
                              exp.type === "current"
                                ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                                : "bg-gradient-to-r from-purple-500 to-pink-500"
                            }`}
                            aria-hidden="true"
                          >
                            {exp.logo}
                          </div>
                          {exp.type === "current" && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium animate-pulse">
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">{exp.subtitle}</p>
                        <p className="text-cyan-400 font-medium mb-3">{exp.position}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar aria-hidden="true" className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin aria-hidden="true" className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        aria-expanded={expandedCard === exp.id}
                        aria-controls={`details-${exp.id}`}
                        onClick={() => toggleCard(exp.id)}
                        className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {expandedCard === exp.id ? (
                          <ChevronUp aria-hidden="true" className="w-5 h-5" />
                        ) : (
                          <ChevronDown aria-hidden="true" className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                      {Object.entries(exp.highlights).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {expandedCard === exp.id && (
                    <div
                      id={`details-${exp.id}`}
                      role="region"
                      className="px-6 pb-6 border-t border-gray-700"
                    >
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Code aria-hidden="true" className="w-5 h-5 text-cyan-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Server aria-hidden="true" className="w-5 h-5 text-purple-400" />
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium hover:bg-white/20 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section aria-labelledby="tech-arsenal-heading" className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8">
          <div className="text-center mb-8">
            <h3 id="tech-arsenal-heading" className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </h3>
            <p className="text-gray-400">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Code aria-hidden="true" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Languages</h4>
              <p className="text-sm text-gray-400">C/C++, Java, JavaScript, HTML, CSS, SQL</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Server aria-hidden="true" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <p className="text-sm text-gray-400">Spring Boot, Node.js, REST APIs, RabbitMQ</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe aria-hidden="true" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <p className="text-sm text-gray-400">ReactJS, HTML5, CSS3, Tailwind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Database aria-hidden="true" className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Database</h4>
              <p className="text-sm text-gray-400">PostgreSQL, Elasticsearch, Redis</p>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            "Passionate about creating scalable solutions and continuous learning"
          </p>
        </div>
      </div>
    </section>
  );
}
