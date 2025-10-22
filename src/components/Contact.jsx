import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import React from "react";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Let's Connect
          </p>

          <AnimatedTitle
            title="Ready to <b>b</b>uild <br /> something <br /> imp<b>a</b>ctful t<b>o</b>gether?"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <div className="mt-10 text-center space-y-3">
            <p className="font-circular-web text-lg text-blue-50">
              📩 <a href="mailto:tresorbana77@gmail.com" className="hover:text-yellow-300 transition-colors">tresorbana77@gmail.com</a>
            </p>
            <p className="font-circular-web text-lg text-blue-50">
              🐙 <a href="https://github.com/Tresorbana" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">github.com/Tresorbana</a>
            </p>
            <p className="font-circular-web text-lg text-blue-50">🌍 Rwanda</p>
          </div>
          <Button title="Get In Touch" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
