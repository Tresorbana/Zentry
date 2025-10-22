import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import React from "react";
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, tech, link }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full bg-gradient-to-br from-blue-200 to-violet-300">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center opacity-20"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
          {tech && (
            <p className="mt-2 text-xs text-yellow-300 font-semibold">{tech}</p>
          )}
        </div>

        {link && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/80"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">View Project</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section id="projects" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Featured Projects
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Building scalable digital solutions that solve real-world problems — from healthcare and finance to smart systems powered by AI and IoT.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          title={
            <>
              MedCon<b>n</b>ect Rural
            </>
          }
          description="AI-assisted rural healthcare platform connecting patients with medical support. Reduces delays in medical guidance for underserved communities."
          tech="React, Node.js, MongoDB, AI Workflows"
          link="#"
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            title={
              <>
                AffordableH<b>o</b>mes
              </>
            }
            description="Low-cost housing planner generating cost-efficient housing plans to help communities build affordable homes faster."
            tech="React, Express, MySQL"
            link="#"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            title={
              <>
                SMEFl<b>o</b>w
              </>
            }
            description="Finance & operations tool for small businesses. Simplifies financial tracking, inventory, and reporting for data-driven decisions."
            tech="MERN Stack (MongoDB, Express, React, Node)"
            link="#"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            title={
              <>
                CitizenNews <b>A</b>I
              </>
            }
            description="AI-driven community reporting platform with intelligent filtering and categorization. Promotes transparency and responsible reporting."
            tech="Next.js, AI Processing, PostgreSQL"
            link="#"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <BentoCard
            title={
              <>
                Ubuzima Wall<b>e</b>t
              </>
            }
            description="Digital health finance wallet for managing medical payments and records."
            tech="React, Tailwind, API Backend"
            link="#"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re pr<b>o</b>jects on GitHub
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
