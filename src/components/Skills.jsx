import React, { useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaMicrochip, FaShieldAlt, FaBrain } from 'react-icons/fa';
import { SiTensorflow, SiArduino, SiJavascript, SiPython, SiC } from 'react-icons/si';
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.skill-card', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
    gsap.from('.lang-bar', {
      width: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
    });
  }, { scope: containerRef });

  const skills = [
    {
      category: 'Frontend',
      icon: <FaReact className="text-4xl text-white" />,
      items: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design']
    },
    {
      category: 'Backend',
      icon: <FaNodeJs className="text-4xl text-white" />,
      items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication']
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-4xl text-white" />,
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite']
    },
    {
      category: 'AI/ML',
      icon: <FaBrain className="text-4xl text-white" />,
      items: ['TensorFlow', 'CNNs', 'Supervised Learning', 'AI Workflows']
    },
    {
      category: 'IoT & Embedded',
      icon: <FaMicrochip className="text-4xl text-white" />,
      items: ['Arduino', 'Microcontrollers', 'Embedded C', 'IoT Automation']
    },
    {
      category: 'Security',
      icon: <FaShieldAlt className="text-4xl text-white" />,
      items: ['Network Security', 'System Hardening', 'Cryptography', 'VPNs']
    }
  ];

  const languages = [
    { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-white" />, level: '90%' },
    { name: 'Python', icon: <SiPython className="text-3xl text-white" />, level: '85%' },
    { name: 'C', icon: <SiC className="text-3xl text-white" />, level: '80%' },
    { name: 'Embedded C', icon: <FaMicrochip className="text-3xl text-white" />, level: '75%' },
  ];

  return (
    <section id="skills" className="py-24 bg-black text-blue-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="font-general text-sm uppercase md:text-[10px] text-blue-50/80 text-center">Capabilities</p>
          <AnimatedTitle title={"Technical <b>S</b>kills"} containerClass="!text-white text-center" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card border-hsla p-6 rounded-xl bg-transparent hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-blue-50/90">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Programming Languages</h3>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    {lang.icon}
                    <span className="font-medium text-blue-50">{lang.name}</span>
                  </div>
                  <span className="text-sm text-blue-50/60">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div 
                    className="lang-bar bg-white h-2.5 rounded-full" 
                    style={{ width: lang.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
