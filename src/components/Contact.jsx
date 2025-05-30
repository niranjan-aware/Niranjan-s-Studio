import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    const form = formRef.current;
    const name = form.user_name.value;
    const email = form.user_email.value;
    const message = form.message.value;

    // 1. Send to Niranjan (you)
    const ownerEmailPromise = emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_OWNER_TEMPLATE,
      {
        user_name: name,
        user_email: email,
        message: message,
      },
      import.meta.env.VITE_PUBLIC_KEY
    );

    // 2. Auto-reply to user
    const userReplyPromise = emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_USER_TEMPLATE,
      {
        name: name,
        recipient: email,
      },
      import.meta.env.VITE_PUBLIC_KEY
    );

    try {
      await Promise.all([ownerEmailPromise, userReplyPromise]);
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setTimeout(() => {
        setSubmitStatus("");
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const getSubmitButtonText = () => {
    if (submitStatus === "sending") return "Sending...";
    if (submitStatus === "success") return "Message Sent!";
    if (submitStatus === "error") return "Error - Try Again";
    return "Send Message";
  };

  const getSubmitButtonClass = () => {
    if (submitStatus === "sending")
      return "bg-gradient-to-r from-gray-600 to-gray-700";
    if (submitStatus === "success")
      return "bg-gradient-to-r from-green-500 to-emerald-500";
    if (submitStatus === "error")
      return "bg-gradient-to-r from-red-500 to-red-600";
    return "bg-gradient-to-r from-[#caf0f8] via-[#90e0ef] to-[#00b4d8]";
  };

  return (
    <div
      id="contact"
      className="min-h-screen text-white flex items-center justify-center p-4 lg:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-45deg from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl -z-10"></div>

        <div className="p-6 lg:p-12 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#caf0f8] via-[#90e0ef] to-[#00b4d8] bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
              Ready to build something amazing together? Drop me a line!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 
                           focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 
                           transition-all duration-300 backdrop-blur-sm
                           group-hover:bg-white/10 focus:-translate-y-1"
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="w-full p-4 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 
                           focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 
                           transition-all duration-300 backdrop-blur-sm
                           group-hover:bg-white/10 focus:-translate-y-1"
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  required
                  className="w-full p-4 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 
                           focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 
                           transition-all duration-300 backdrop-blur-sm resize-y
                           group-hover:bg-white/10 focus:-translate-y-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full lg:w-auto px-8 py-4 rounded-xl font-semibold text-slate-700 transition-all duration-300 
                          transform hover:-translate-y-1 hover:shadow-lg disabled:cursor-not-allowed
                          ${getSubmitButtonClass()}`}
              >
                {getSubmitButtonText()}
              </button>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex bg-gradient-to-br from-gray-900 to-gray-800 items-center justify-center relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="w-80 h-[340px] bg-gray-800 rounded-lg border border-gray-600 relative">
              <div className="h-10 bg-gray-700 rounded-t-lg flex items-center px-4 gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-400 ml-4">App.jsx</span>
              </div>

              <div className="p-4 space-y-3 font-mono text-sm">
                <div className="flex">
                  <span className="text-gray-500 w-8">1</span>
                  <span className="text-purple-400">import</span>
                  <span className="text-white ml-2">React</span>
                  <span className="text-purple-400 ml-2">from</span>
                  <span className="text-green-400 ml-2">'react'</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">2</span>
                  <span className="text-purple-400">import</span>
                  <span className="text-white ml-2">'useState'</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">3</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">4</span>
                  <span className="text-blue-400">function</span>
                  <span className="text-yellow-400 ml-2">App</span>
                  <span className="text-white">() </span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">5</span>
                  <span className="text-purple-400 ml-4">const</span>
                  <span className="text-white ml-2">[state, setState]</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">6</span>
                  <span className="text-purple-400 ml-4">return</span>
                  <span className="text-red-400 ml-2">&lt;div&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">7</span>
                  <span className="text-white ml-8">Hello World!</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">8</span>
                  <span className="text-red-400 ml-4">&lt;/div&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">9</span>
                  <span className="text-white"></span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-16 left-16 w-8 h-8 bg-gradient-to-r from-teal/40 to-cyan-600/40 rounded-lg animate-pulse"></div>
              <div
                className="absolute bottom-24 right-20 w-6 h-6 bg-gradient-to-r from-purple-400/40 to-purple-600/40 rounded transform rotate-45 animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-32 right-8 w-4 h-4 bg-gradient-to-r from-pink-400/40 to-pink-600/40 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <div className="space-y-3">
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.linkedin.com/in/niranjan-aware-673019211/"
                  target="_blank"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300 hover:-translate-y-1 transform"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:niranjanaware26@gmail.com"
                  target="_blank"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300 hover:-translate-y-1 transform"
                >
                  <SiGmail className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/niranjan-aware"
                  target="_blank"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300 hover:-translate-y-1 transform"
                >
                  <FaGithubSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
