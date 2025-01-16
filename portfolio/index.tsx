import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import 'tailwindcss/tailwind.css';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Sexual Harassment Detection Model",
      description: "Developed an ML model for NIT Trichy hackathon that detects sexual harassment in textual content. Implemented using natural language processing techniques for content moderation.",
      tags: ["Machine Learning", "NLP", "Python", "Content Moderation"],
      highlight: true
    },
    {
      title: "Waste Management System",
      description: "Created a comprehensive waste management platform to streamline collection and disposal processes. Implemented real-time tracking and efficient route optimization.",
      tags: ["Full Stack", "React", "Node.js", "MongoDB"],
      highlight: true
    },
    {
      title: "Health Hand Band",
      description: "Designed a wearable health monitoring system that tracks vital signs and provides real-time health metrics to users and healthcare providers.",
      tags: ["IoT", "Hardware", "Mobile App", "Healthcare"],
      highlight: true
    },
    {
      title: "IoT Management Dashboard",
      description: "Built a responsive dashboard for monitoring and controlling IoT devices. Features include real-time data visualization and device management.",
      tags: ["React", "IoT", "Dashboard", "Real-time"],
      highlight: true
    },
    {
      title: "Calculator App",
      description: "Developed a feature-rich calculator application during internship with advanced mathematical functions and a clean user interface.",
      tags: ["JavaScript", "React", "CSS"],
      highlight: false
    },
    {
      title: "Password Generator",
      description: "Created a secure password generator with customizable parameters for length and character types.",
      tags: ["JavaScript", "Security", "Web App"],
      highlight: false
    },
    {
      title: "To-Do List Application",
      description: "Implemented a dynamic to-do list with features like task categorization, due dates, and progress tracking.",
      tags: ["React", "State Management", "UI/UX"],
      highlight: false
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "C++", "HTML", "CSS"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "TensorFlow"],
    "Tools & Technologies": ["Git", "MongoDB", "AWS", "Docker"],
    "Soft Skills": ["Problem Solving", "Team Leadership", "Project Management"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Your Name</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Full Stack Developer & ML Enthusiast</h1>
          <p className="text-xl mb-8">Building innovative solutions with modern technologies</p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 
                  ${project.highlight ? 'transform hover:-translate-y-1 transition-transform' : ''}`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:your.email@example.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="https://github.com/yourusername" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;