import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-24 md:pt-32 overflow-hidden relative" id="hero">
      <div className="absolute inset-0 w-full h-full z-0 ">
        <img
          src={heroBackground}
          className="w-full h-full object-cover"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-10 text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="heading-1 mb-6">
            <span className="block">Intelligent AI Assistant</span>
            <span className="inline-block relative">
              For Modern Creators
              <img
                src={curve}
                className="absolute top-full left-0 w-full mt-1 mb-8 md:mt-2"
                width={624}
                height={28}
                alt=""
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="paragraph text-primary-300 max-w-3xl mx-auto mt-12 mb-8">
            SynapFlow AI combines cutting-edge artificial intelligence with
            intuitive design to revolutionize how you work, create, and
            communicate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#pricing" cyan>
              Get Started
            </Button>
            <Button href="#features" cyan>
              Explore Features
            </Button>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-dark-800 rounded-[1rem]">
              <div className="h-[1.4rem] bg-dark-500 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/390]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[20%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-4 mt-2 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-primary-900 backdrop-blur border border-dark-200/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute bg-primary-900 border border-dark-200/10 -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Crafting Code with AI"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
