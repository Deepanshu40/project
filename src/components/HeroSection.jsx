import ButtonWithIcon from "./ButtonWithIcon";
import HeroSectionImageCard from "./HeroSectionImageCard";
import { FaArrowRight } from "react-icons/fa6";


const heroImageSection = [
  {
    text: "Health Insurance",
    icon: "/hero/heart.svg",
    imageAddress: "/hero/image1.png",
    imageAlt: "heroImage",
    imagePosition: "bottom",
    cardAnimation: "animate-[easeInOutFromTop_1s_ease-in-out_backwards] xl:animate-[easeInOutFromBottom_1s_ease-in-out_backwards]",
    tabletAnimation: "animate-[linearInfiniteFromTop_1.4s_linear_infinite]"
    
  },
  {
    text: "Motor Insurance",
    icon: "/hero/shield1.svg",
    imageAddress: "/hero/image2.png",
    imageAlt: "heroImage",
    imagePosition: "top",
    cardAnimation: "animate-[easeInOutFromTop_1s_ease-in-out_backwards]",
    tabletAnimation: "animate-[linearInfiniteFromBottom_1.4s_linear_infinite]"
  },
  {
    text: "Home Insurance",
    icon: "/hero/shield2.svg",
    imageAddress: "/hero/image3.png",
    imageAlt: "heroImage",
    imagePosition: "bottom",
    cardAnimation: "animate-[easeInOutFromBottom_1s_ease-in-out_backwards]",
    tabletAnimation: "animate-[linearInfiniteFromTop_1.4s_linear_infinite]"
  },
];

const HeroSection = () => {
  return (
    <div className="flex items-center gap-16 px-[3%] py-20 bg-blue font-bold">
      <div className="flex flex-col gap-12 lg:w-[40%]">
        <h1 className="flex flex-col gap-4 w-[90%] text-6xl font-extrabold">
          <span className="text-white animate-[easeInOutFromTop_1s_ease-in-out_backwards]">Your Trusted</span>
          <span className="text-orange animate-[easeInOutFromLeft_1s_ease-in-out_backwards]"> Insurance</span>
          <span className="text-orange animate-[easeInOutFromBottom_1s_ease-in-out_backwards]">Partner</span>
        </h1>
        <span className="text-white text-2xl text-normal animate-[easeInOutFromBottom_1s_ease-in-out_backwards]">
          Making insurance accessible, valuable. Your protection is our
          <span className="text-orange"> lifetime commitment.</span>.
        </span>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <ButtonWithIcon
            btnText="Explore Products"
            classNames="w-full md:w-fit justify-center text-lg p-4 bg-white font-semibold rounded-xl hover:shadow-style1 animate-[easeInOutFromLeft_1s_ease-in-out_backwards]"
            icon={<FaArrowRight />}
          />
          <ButtonWithIcon
            btnText="Learn More"
            classNames="w-full md:w-fit justify-center text-lg p-4 bg-white font-semibold rounded-xl hover:shadow-style1 animate-[easeInOutFromRight_1s_ease-in-out_backwards]"
            icon={<FaArrowRight />}
          />
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-8 lg:w-[60%]">
        {heroImageSection.map((item, index) => (
          <div key={index} className="flex">
            <HeroSectionImageCard
              index={index}
              text={item.text}
              icon={item.icon}
              imageAddress={item.imageAddress}
              imageAlt={item.imageAlt}
              imagePosition={item.imagePosition}
              cardAnimation={item.cardAnimation}
              tabletAnimation={item.tabletAnimation}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
