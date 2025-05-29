import React from 'react'

export default function About() {
  return (
    <section className="about max-w-7xl xs:mt-16 p-5">
      <div className="about-container  flex xs:flex-col md:flex-row items-center justify-center xs:gap-10 md:gap-20">
        <div className="image  ">
          <img src="src/assets/NiranjanSinhagad.jpeg" alt="" className="abit-img rounded-full xs:w-64 xs:h-64 lg:w-96 lg:h-96 md:w-64 md:h-64" />
        </div>
        <div className="abt-me space-y-5 flex flex-col  justify-center xs:p-5 md:p-0">
          <div className="title xs:text-5xl sm:text-6xl font-bold">
            <h1 className='text-white'>About <span className='text-teal'>Me</span></h1>
        </div>    
        <div className="description text-slate-500 xs:text-lg sm:text-xl max-w-[50ch]">
          <p>I'm Niranjan Aware, a full-stack developer skilled in Java, Spring Boot, and React. I enjoy building scalable systems, solving real-world problems, and writing clean, maintainable code. In my free time, I enjoy gaming, explore new tech.</p>
        </div>
        </div>
      </div>
    </section>
  )
}
