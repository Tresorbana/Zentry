import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'MedConnect Rural',
      description: 'AI-Assisted Rural Healthcare Platform connecting rural patients with healthcare support, offering quick symptom guidance and medical information access.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI Workflows'],
      impact: 'Reduces delays in medical support and helps underserved communities access guidance faster.',
      github: 'https://github.com/Tresorbana/medconnect-rural'
    },
    {
      title: 'AffordableHomes Planner',
      description: 'A platform that generates cost-efficient housing plans to assist communities in building affordable homes.',
      tech: ['React', 'Express', 'MySQL'],
      impact: 'Helps families and local builders reduce planning time and construction cost uncertainty.',
      github: '#'
    },
    {
      title: 'SMEFlow',
      description: 'A system that simplifies financial tracking, inventory, and reporting for small and medium enterprises.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      impact: 'Empowers small business owners to make faster and data-driven decisions.',
      github: '#'
    },
    {
      title: 'CitizenNews AI',
      description: 'A platform that allows citizens to report issues and events, with AI filtering and categorization for clarity and safety.',
      tech: ['Next.js', 'AI Processing', 'PostgreSQL'],
      impact: 'Promotes transparency, community engagement, and responsible reporting.',
      github: '#'
    },
    {
      title: 'Ubuzima Wallet',
      description: 'A medical wallet system that helps users manage health-related payments and records.',
      tech: ['React', 'Tailwind CSS', 'API Backend'],
      impact: 'Simplifies access and financial planning for medical services.',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          A selection of projects that showcase my skills and experience in building impactful solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-1">Impact:</h4>
                  <p className="text-sm text-gray-600">{project.impact}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                  <a 
                    href={`#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-gray-700 hover:text-black"
                  >
                    Learn More
                    <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
