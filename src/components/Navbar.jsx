import React, { useEffect, useRef, useState } from 'react';
import Button from './Button.jsx';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying(prev => !prev);
    setIsIndicatorActive(prev => !prev);
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6  mt-4"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 transform">
        <nav className="flex justify-between items-center size-full p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="projects-button"
              title="Projects"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map(item => (
                <a
                  key={item.name}
                  className="nav-hover-btn"
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              className="flex items-center ml-10 space-x-0.5"
              onClick={toggleAudioIndicator}
              aria-label="Toggle Audio Playback"
            >
              <audio src="/audio/loop.mp3" ref={audioElementRef} loop />
              {[1, 2, 3, 4].map(bar => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
