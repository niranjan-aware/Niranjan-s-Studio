import React, { useState } from 'react';

import cssIcon from "../assets/Brand=css, Style=Light.svg";
import githubIcon from "../assets/Brand=github, Style=Light.svg";
import jsIcon from "../assets/Brand=js, Style=Light.svg";
import mongodbIcon from "../assets/Brand=mongodb, Style=Light.svg";
import nodejsIcon from "../assets/Brand=nodejs, Style=Light.svg";
import reactjsIcon from "../assets/Brand=reactjs, Style=Light.svg";
import tailwindIcon from "../assets/Brand=tailwind, Style=Light.svg";
import html5Icon from "../assets/Brand=html5, Style=Light.svg";
import postgreSQL from "../assets/postgreSQL.svg";
import Bamboo from "../assets/Bamboo.svg";
import Docker from "../assets/Docker.svg";
import intellij from "../assets/IntelliJ IDEA.svg";
import VS from "../assets/Visual Studio Code (VS Code).svg"
import splunk from "../assets/splunk.svg"
import springboot from "../assets/springboot.svg"
import Java from "../assets/Java.svg"
import cpp from "../assets/C++ (CPlusPlus).svg"

export default function Skills() {
 const [selectedCategory, setSelectedCategory] = useState("Languages");
 const reactjsIcon='https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574170/react_mb7olv.svg'
 const cssIcon = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574911/Brand_css_Style_Light_rw3w41.svg'
const githubIcon = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574168/Platform_Github_Color_Original_q8tvt1.svg'
const jsIcon = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574157/Brand_js_Style_Light_hztanc.svg'
const mongodbIcon = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574911/Brand_mongodb_Style_Light_ychvmg.svg'
const nodejsIcon = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574159/Brand_nodejs_Style_Light_ps32ag.svg'
const tailwindIcon = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574160/Brand_tailwind_Style_Light_cg0ibf.svg'
const html5Icon = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574155/Brand_html5_Style_Light_zzeltr.svg'
const postgreSQL = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574169/postgreSQL_wapxln.svg'
const Bamboo = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574157/Bamboo_jrxdto.svg'
const Docker = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574161/Docker_pmickf.svg'
const intellij = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574165/IntelliJ_IDEA_diivva.svg'
const VS  = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574171/Visual_Studio_Code_VS_Code_qtf6zf.svg'
const splunk  = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574170/splunk_wwchda.svg'
const springboot = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574170/springboot_nysbuo.svg'
const Java = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574165/Java_b0v94f.svg'
const cpp = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574161/C_CPlusPlus_l1utq6.svg'
const vitejs = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574161/Brand_vitejs_Style_Light_cxlm7w.svg'
const redux = 'https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574160/Brand_redux_Style_Light_qoap62.svg'
  const skillsData = [
    { src: Java, alt: "Java", category: "Languages", level: 75 },
    { src: cpp, alt: "C++", category: "Languages", level: 85 },
    { src: jsIcon, alt: "JavaScript", category: "Languages", level: 70 },
    { src: html5Icon, alt: "HTML5", category: "Languages", level: 80 },
    { src: cssIcon, alt: "CSS", category: "Languages", level: 80 },
    { src: springboot, alt: "Spring Boot", category: "Frameworks", level: 80 },
    { src: reactjsIcon, alt: "React", category: "Frameworks", level: 80 },
    { src: tailwindIcon, alt: "Tailwind CSS", category: "Frameworks", level: 80 },
    { src: nodejsIcon, alt: "Node.js", category: "Frameworks", level: 70 },
    { src: mongodbIcon, alt: "MongoDB", category: "Tools", level: 70 },
    { src: postgreSQL, alt: "PostgreSQL", category: "Tools", level: 65 },
    { src: splunk, alt: "Splunk", category: "Tools", level: 70 },
    { src: githubIcon, alt: "GitHub", category: "Tools", level: 75 },
    { src: Docker, alt: "Docker", category: "Tools", level: 60 },
    { src: Bamboo, alt: "Bamboo", category: "Tools", level: 70 },
    { src: intellij, alt: "IntelliJ IDEA", category: "Tools", level: 88 },
    { src: VS, alt: "VS Code", category: "Tools", level: 90 },
  ];

  const categories = [ ...new Set(skillsData.map(skill => skill.category))];

  const filteredSkills = skillsData.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level) => {
    if (level >= 90) return "bg-gradient-to-r from-[#caf0f8] via-[#ade8f4] to-[#90e0ef]  animate-gradient";
    if (level >= 80) return "bg-gradient-to-l from-[#ade8f4] via-[#90e0ef] to-[#caf0f8]  animate-gradient";
    if (level >= 70) return "bg-gradient-to-l from-[#90e0ef] via-[#caf0f8] to-[#ade8f4]  animate-gradient";
    return "bg-gradient-to-l from-[#caf0f8] via-[#ade8f4] to-[#90e0ef]";
  };

  return (
    <div id='skills' className="flex font-bold flex-col items-center justify-center px-4 py-20 w-screen xs:mt-20 md:mt-40 xs:mb-20 mb-40">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center mb-6 ">
          {categories.map(category => (
            <button
              key={category}
              className={`m-2 px-4 py-2 rounded-full text-sm font-serif font-semibold transition-colors  ${
                selectedCategory === category 
                  ? 'bg-teal text-white' 
                  : 'bg-gray-200 bg-opacity-25 text-gray-300 hover:bg-opacity-50 '
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl place-items-center">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="transform transition-transform duration-300 hover:scale-110 ">
                <div className="shadow-2xl xs:w-20 xs:h-24  w-[105px] h-[115px] md:w-[85px] md:h-[90px] relative rounded-lg ">
                  <div className={`absolute inset-0 ${getLevelColor(skill.level)} flex flex-col items-center justify-center rounded-3xl`}>
                    <div className="bg-gray-100 p-2 rounded-full mb-2 shadow-2xl">
                      <img src={skill.src} alt={skill.alt} className="w-10 h-10 xs:w-5 xs:h-5 object-contain" />
                    </div>
                    <span className="text-gray-600 xs:font-semibold font-bold xs:text-xs text-sm ">{skill.alt}</span>
                    <span className="text-gray-500  text-xs mt-1">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}