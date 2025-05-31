import React, { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Full Stack Projects"
  );

  const projectsData = [
    {
      id: 1,
      title: "Chatt Application",
      description:
        "A real-time chat application with user authentication, group creation, quick replies and notifications, and online status tracking.",
      image:
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574156/chat-app_te3k7k.png",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      category: "Full Stack Projects",
      role: "Full Stack Developer",
      link: "https://chatt-app-jt87.onrender.com/",
    },
    {
      id: 2,
      title: "Magnewin Harmonic Insights",
      description:
        "An industrial data analysis solution that automates and visualizes over 50+ key metrics for real-time insights and operational efficiency.",
      image:
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/magnewin_s52kiv.jpg",
      stack: ["MongoDB", "Express", "Node.js", "React.js", "Tailwind CSS"],
      category: "Full Stack Projects",
      role: "Full Stack Developer",
      link: "https://github.com/niranjan-aware/MagnewinHarmonicInsights",
    },
    {
      id: 3,
      title: "Cryptify — Document Verification Portal using Blockchain",
      description:
        "A blockchain-based portal that streamlines certificate verification, reducing processing time from days to minutes.",
      image:
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748577067/Screenshot_2025-05-30_at_9.20.47_AM_qms75u.png",
      stack: ["MongoDB", "Express", "Node.js", "React", "Blockchain"],
      category: "Full Stack Projects",
      role: "Full Stack Developer",
      link: "https://github.com/niranjan-aware/WCE_verification-portal",
    },
    {
      id: 4,
      title: "ConnectSpace is an all-in-one communication",
      description:
        "Secure chat and video calls for teams and clients — all in one streamlined, reliable platform.",
      image:
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574156/chat-ui_yw5ygr.png",
      stack: ["Figma"],
      category: "UI Designs",
      role: "UI Designer",
      link: "https://www.figma.com/design/ML544V0F62UJvYYJH2P7ge/chat-app?node-id=0-1&t=aij8CRlXNBguGCJa-1",
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description:
        "My personal portfolio showcasing my projects, skills, and experience as a full-stack developer. Built with modern web technologies and a focus on clean UI and performance.",
      image:
        "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748576096/Screenshot_2025-05-30_at_9.04.16_AM_k1wpnt.png",
      stack: ["Figma"],
      category: "UI Designs",
      role: "UI Designer",
      link: "https://www.figma.com/design/jcldGsCYomho0ogHafJpiP/Portfolio?node-id=0-1&t=HXatqCoaSJG5Hbf9-1",
    },
  ];

  const categories = [...new Set(projectsData.map((p) => p.category))];
  const filteredProjects = projectsData.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex flex-col items-center justify-center px-4 w-screen"
    >
      <h2
        id="projects-heading"
        className="text-4xl font-bold text-teal mb-8"
      >
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={selectedCategory === category}
            className={`m-2 px-6 py-3 rounded-full text-sm font-serif font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-sky-200 text-gray-600 shadow-lg transform scale-105"
                : "bg-white text-gray-600 hover:bg-sky-50 hover:text-gray-900 shadow-md hover:shadow-lg"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div role="list" className="w-full">
        <div className="hidden md:block">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              role="listitem"
              className={`flex items-center mb-16 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2 px-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    width="640"
                    height="256"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="w-1/2 px-8">
                <div
                  id="card-bg"
                  className="bg-slate-600 rounded-2xl p-8 shadow-xl hover:shadow-inner transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mb-3" role="list">
                    {project.stack.map((tech, idx) => (
                      <li key={idx}>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-50">
                      {project.role}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="p-2 text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden">
          {filteredProjects.map((project) => (
            <article key={project.id} role="listitem" className="mb-8">
              <div
                id="card-bg"
                className="bg-slate-600 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    width="640"
                    height="384"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mb-3" role="list">
                    {project.stack.map((tech, idx) => (
                      <li key={idx}>
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold rounded-full">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-white">
                      {project.role}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="p-2 text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
