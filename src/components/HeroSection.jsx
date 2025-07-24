import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';


import {Heart, Shield1, Shield2, Arrow} from "../assets/Svg"
import ButtonWithIcon from "./ButtonWithIcon";
import HeroSectionImageCard from "./HeroSectionImageCard";
import HeroSectionBackgroundImage from './HeroSectionBackgroundImage';

const heroImageSection = [
  {
    text: "Health Insurance",
    icon: <Heart />,
    imageAddress: "/hero/image1.png",
    imageAlt: "heroImage",
    imagePosition: "bottom",
  },
  {
    text: "Motor Insurance",
    icon: <span className='text-[#3A68FF]'><Shield1 /></span>,
    imageAddress: "/hero/image2.png",
    imageAlt: "heroImage",
    imagePosition: "top",
  },
  {
    text: "Home Insurance",
        icon: <span className='text-[#1AE5AF]'><Shield1 /></span>,
    imageAddress: "/hero/image3.png",
    imageAlt: "heroImage",
    imagePosition: "bottom",
  },
];


const HeroSection = () => {

  const headingRef = useRef();
  const paraRef = useRef();
  const btnLeftRef = useRef();
  const btnRightRef = useRef();
  const heroImageCardRef = useRef();
  const {contextSafe} = useGSAP();
  const heroRef = useRef();

   contextSafe(useGSAP(() => {
    gsap.to(heroImageCardRef.current.querySelectorAll(".tabletAnimation"), {
      y: 5,
      duration: 1,
      repeat: -1,
      yoyo: true
    })

    const tl = gsap.timeline();
    tl.from(headingRef.current.querySelectorAll("span"), {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.7
    })

      tl.from(paraRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
    })

    tl.from(btnLeftRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
    }, "<")

      tl.from(btnRightRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
    }, "<")
})
)

console.log(heroRef.current)
  return (
    <div className={`relative overflow-x-hidden flex items-center gap-8 px-[1rem] sm:px-[2rem] lg:px-[3rem] py-16 sm:py-36 bg-blue font-bold`}>
      <HeroSectionBackgroundImage bannerWidth={heroRef.current?.innerWidth || 1580} bannerHeight={55} rows={5} cols={5} imageUrl='/Background.png' />
      <div ref={heroRef} className={`flex flex-col gap-8 sm:gap-16 lg:w-full`}>
        <h1 ref={headingRef} className="flex flex-col gap-6 sm:gap-6 w-[80%] text-5xl sm:text-6xl font-extrabold text-nowrap">
          <span className="text-white">
            Your Trusted
          </span>
          <span className="text-orange">
            {" "}
            Insurance
          </span>
          <span className="text-orange">
            Partner
          </span>
        </h1>
        <span ref={paraRef} className="text-white text-xl sm:text-2xl text-normal max-w-[50rem]">
          Making insurance accessible, valuable. Your protection is our
          <span className="text-orange"> lifetime commitment.</span>.
        </span>
        {/* check why duration on button is not working */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <ButtonWithIcon
            btnText="Explore Products"
            classNames="w-full md:w-fit justify-center items-center text-lg p-4 bg-white font-semibold rounded-xl hover:shadow-style1 hover:bg-orange hover:text-white hover:text-white hover:border-0"
            icon={<span className='size-4 rotate-270'><Arrow/></span>}
            ref={btnLeftRef}
          />
          <ButtonWithIcon
            btnText="Learn More"
            classNames="w-full md:w-fit justify-center items-center text-lg p-4 bg-white font-semibold rounded-xl hover:shadow-style1 hover:bg-orange hover:text-white hover:border-0"
            icon={<span className='size-4 rotate-270'><Arrow/></span>}
            ref={btnRightRef}
          />
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-8 w-[70%]" ref={heroImageCardRef}>
        {heroImageSection.map((item, index) => (
          <div key={index} className="flex">
            <HeroSectionImageCard
              index={index}
              text={item.text}
              icon={item.icon}
              imageAddress={item.imageAddress}
              imageAlt={item.imageAlt}
              imagePosition={item.imagePosition}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
