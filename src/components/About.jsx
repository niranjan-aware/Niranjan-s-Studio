import React from "react";

export default function About() {
  const interests = [
    { emoji: "🎮", text: "Gaming" },
    { emoji: "💻", text: "Tech Exploration" },
    { emoji: "🚀", text: "Problem Solving" },
    { emoji: "📚", text: "Continuous Learning" },
  ];

  return (
    <section aria-label="About me" className="about max-w-7xl flex items-center justify-center py-20">
      <div className="about-container flex xs:flex-col md:flex-row items-center justify-center gap-20">
        <div className="image relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-teal/30 to-cyan-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <img
            src="https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/NiranjanSinhagad_jf7vtl.jpg"
            alt="Portrait of Niranjan Aware"
            width="384"
            height="384"
            loading="lazy"
            className="abit-img relative rounded-full xs:w-64 xs:h-64 lg:w-96 lg:h-96 md:w-64 md:h-64 border-4 border-teal/30 hover:border-teal/60 transition-all duration-500 shadow-2xl hover:shadow-teal/20 transform hover:scale-105"
          />
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>

        <div className="abt-me space-y-8 flex flex-col justify-center xs:p-5 md:p-0 max-w-2xl">
          <div className="title-section">
            <div className="title xs:text-5xl sm:text-6xl font-bold mb-4">
              <h2 className="text-white">
                About{" "}
                <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
            </div>
            <div className="title-underline w-20 h-1 bg-gradient-to-r from-teal to-cyan-400 rounded-full"></div>
          </div>

          <div className="description-section space-y-4">
            <div className="main-description text-slate-300 xs:text-lg sm:text-xl leading-relaxed">
              <p className="mb-4">
                Hey there! 👋 I'm{" "}
                <span className="text-teal font-semibold">Niranjan Aware</span>,
                a passionate full-stack developer who loves turning ideas into
                reality through code.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in building scalable web applications using modern
                technologies. My journey in tech is driven by curiosity and a
                genuine love for solving complex problems with elegant
                solutions.
              </p>
            </div>
          </div>

          <div className="interests-section">
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">✨</span>
              When I'm Not Coding
            </h3>
            <ul role="list" className="interests-grid grid xs:grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <li
                  key={index}
                  className="interest-card flex flex-col items-center p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-teal/50 hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 transform group"
                >
                  <span className="text-2xl mb-2 group-hover:animate-bounce" aria-hidden="true">
                    {interest.emoji}
                  </span>
                  <span className="text-slate-400 text-sm text-center group-hover:text-teal transition-colors duration-300">
                    {interest.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cta-section">
            <div className="cta-box p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600 hover:border-teal/50 transition-all duration-300">
              <p className="text-slate-300 text-center leading-relaxed">
                💡{" "}
                <span className="text-teal font-semibold">
                  Ready to collaborate?
                </span>
                <br />
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
