import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import InsuranceProductCard from "./InsuranceProductCard";
import { Arrow } from "../assets/Svg";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    imageAddress: "bg-[url('/products/image1.png')]",
    iconImageAddress: "/products/icon1.png", //svg
    cardTitle: "Health Insurance",
    cardText: "Lorem ipsum dolor sit amet, consecte adipisicing elitsed do.",
    btnText: "Learn More",
    btnIcon: <span className="rotate-270 size-2"><Arrow /></span>,
  },
  {
    imageAddress: "bg-[url('/products/image2.png')]",
    iconImageAddress: "/products/icon2.png", //svg
    cardTitle: "Motor Insurance",
    cardText: "Lorem ipsum dolor sit amet, consecte adipisicing elitsed do.",
    btnText: "Learn More",
    btnIcon: <span className="rotate-270 size-2"><Arrow /></span>,
  },
  {
    imageAddress: "bg-[url('/products/image3.png')]",
    iconImageAddress: "/products/icon3.png", //svg
    cardTitle: "Life Insurance",
    cardText: "Lorem ipsum dolor sit amet, consecte adipisicing elitsed do.",
    btnText: "Learn More",
    btnIcon: <span className="rotate-270 size-2"><Arrow /></span>,
  },
];

const InsuranceProducts = () => {

    const insuranceCardRef = useRef();
    const {contextSafe} = useGSAP();

contextSafe(useGSAP(() => {
  gsap.from(insuranceCardRef.current.querySelectorAll(".insuranceCard"), {
    y: 200,
    opacity: 0,
    ease: "power1.in",
    scrollTrigger: {
      trigger: insuranceCardRef.current,
      scroller: "body",
      scrub: 1,
      start: "top 100%",
      end: "top 40%",
    },
  });
}, { dependencies: [] })
)
  return (
    <div className="flex flex-col items-center bg-sky pt-16 md:py-16 gap-12 isolate">
      <div className="flex flex-col items-center gap-4 sm:w-3/4 text-center px-[1rem] sm:px-[3rem] lg:px-[6.5rem]">
        <div className="flex items-center gap-2 border-1 border-blue/20 rounded-4xl px-4 py-2 w-fit flex-nowrap">
          <span className="text-2xl">
            <img src="/products/shield.svg" alt="icon" />
          </span>
          <span className="text-sm text-blue font-medium">Our Services</span>
        </div>
        <h1 className="text-6xl text-blue font-bold">Insurance Products</h1>
        <span className="text-2xl text-black/60 leading-10">
          Comprehensive insurance solutions tailored to your individual and
          business needs with industry leading coverage and competitive rates{" "}
        </span>
      </div>

      <div className="relative h-fit sm:h-[400px] md:h-[500px] xl:h-[600px] w-full">
        <div className="hidden md:block absolute w-full h-full">
          <img
            src="/products/top_right.png"
            alt="image"
            className="absolute -top-10 right-[2rem]"
          />
          <img
            src="/products/bottom_left.png"
            alt="image"
            className="absolute -bottom-10 left-[2rem]"
          />
        </div>

        <div ref={insuranceCardRef} className="md:absolute grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full z-10 px-[1rem] sm:px-[5rem]">
        {products.map((item, index) => (
          <InsuranceProductCard
            key={index}
            imageAddress={item.imageAddress}
            iconImageAddress={item.iconImageAddress}
            cardTitle={item.cardTitle}
            cardText={item.cardText}
            btnIcon={item.btnIcon}
            btnText={item.btnText}
            btnClassNames="max-w-fit border-1 border-orange bg-pink/28 text-black text-[0.75rem] font-normal hover:shadow-style1 hover:bg-orange hover:text-white duration-200"
          />
        ))}        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map((item, index) => (
          <div key={index} className="md:h-[500px] xl:h-[600px]">
          </div>
          ))}        
        </div>
      </div>
    </div>
  );
};

export default InsuranceProducts;
