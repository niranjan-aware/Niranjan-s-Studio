import React, { useState } from "react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Languages");

  const skillsData = [
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574165/Java_b0v94f.svg",
      alt: "Java",
      category: "Languages",
      level: 75,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574161/C_CPlusPlus_l1utq6.svg",
      alt: "C++",
      category: "Languages",
      level: 85,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574157/Brand_js_Style_Light_hztanc.svg",
      alt: "JavaScript",
      category: "Languages",
      level: 70,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574155/Brand_html5_Style_Light_zzeltr.svg",
      alt: "HTML5",
      category: "Languages",
      level: 80,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574911/Brand_css_Style_Light_rw3w41.svg",
      alt: "CSS",
      category: "Languages",
      level: 80,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574170/springboot_nysbuo.svg",
      alt: "Spring Boot",
      category: "Frameworks",
      level: 80,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574170/react_mb7olv.svg",
      alt: "React",
      category: "Frameworks",
      level: 80,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574160/Brand_tailwind_Style_Light_cg0ibf.svg",
      alt: "Tailwind CSS",
      category: "Frameworks",
      level: 80,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574159/Brand_nodejs_Style_Light_ps32ag.svg",
      alt: "Node.js",
      category: "Frameworks",
      level: 70,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574911/Brand_mongodb_Style_Light_ychvmg.svg",
      alt: "MongoDB",
      category: "Tools",
      level: 70,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574169/postgreSQL_wapxln.svg",
      alt: "PostgreSQL",
      category: "Tools",
      level: 65,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574170/splunk_wwchda.svg",
      alt: "Splunk",
      category: "Tools",
      level: 70,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574168/Platform_Github_Color_Original_q8tvt1.svg",
      alt: "GitHub",
      category: "Tools",
      level: 75,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574161/Docker_pmickf.svg",
      alt: "Docker",
      category: "Tools",
      level: 60,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574157/Bamboo_jrxdto.svg",
      alt: "Bamboo",
      category: "Tools",
      level: 70,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574165/IntelliJ_IDEA_diivva.svg",
      alt: "IntelliJ IDEA",
      category: "Tools",
      level: 88,
      width: 40,
      height: 40,
    },
    {
      src: "https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574171/Visual_Studio_Code_VS_Code_qtf6zf.svg",
      alt: "VS Code",
      category: "Tools",
      level: 90,
      width: 40,
      height: 40,
    },
  ];

  const categories = [...new Set(skillsData.map((skill) => skill.category))];

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === selectedCategory
  );

  const getLevelColor = (level) => {
    if (level >= 90)
      return "bg-gradient-to-r from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] animate-gradient";
    if (level >= 80)
      return "bg-gradient-to-l from-[#ade8f4] via-[#90e0ef] to-[#caf0f8] animate-gradient";
    if (level >= 70)
      return "bg-gradient-to-l from-[#90e0ef] via-[#caf0f8] to-[#ade8f4] animate-gradient";
    return "bg-gradient-to-l from-[#caf0f8] via-[#ade8f4] to-[#90e0ef]";
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex flex-col items-center justify-center px-4 py-20 w-screen xs:mt-20 md:mt-40 xs:mb-20 mb-40"
    >
      <h2 id="skills-heading" className="text-3xl font-bold text-white mb-8">
        Skills
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center mb-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              className={`m-2 px-4 py-2 rounded-full text-sm font-serif font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-teal text-white"
                  : "bg-gray-200 bg-opacity-25 text-gray-300 hover:bg-opacity-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ul
          role="list"
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl place-items-center w-full"
        >
          {filteredSkills.map((skill, index) => (
            <li key={index} className="transform transition-transform duration-300 hover:scale-110">
              <div className="shadow-2xl xs:w-20 xs:h-24 w-[105px] h-[115px] md:w-[85px] md:h-[90px] relative rounded-lg">
                <div
                  className={`${getLevelColor(skill.level)} absolute inset-0 flex flex-col items-center justify-center rounded-3xl`}
                >
                  <div className="bg-gray-100 p-2 rounded-full mb-2 shadow-2xl">
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      width={skill.width}
                      height={skill.height}
                      loading="lazy"
                      className="w-10 h-10 xs:w-5 xs:h-5 object-contain"
                    />
                  </div>
                  <span className="text-gray-600 xs:font-semibold font-bold xs:text-xs text-sm">
                    {skill.alt}
                  </span>
                  <span className="text-gray-500 text-xs mt-1">{skill.level}%</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
