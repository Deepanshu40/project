import InsuranceProductCard from "./InsuranceProductCard";
import { FaArrowRight } from "react-icons/fa6";

const products = [
  {
    imageAddress: "bg-[url('/products/image1.png')]",
    iconImageAddress: "/products/icon1.png", //svg
    cardTitle: "Health Insurance",
    cardText: "Lorem ipsum dolor sit amet, consecte adipisicing elitsed do.",
    btnText: "Learn More",
    btnIcon: <FaArrowRight />,
  },
  {
    imageAddress: "bg-[url('/products/image2.png')]",
    iconImageAddress: "/products/icon2.png", //svg
    cardTitle: "Motor Insurance",
    cardText: "Lorem ipsum dolor sit amet, consecte adipisicing elitsed do.",
    btnText: "Learn More",
    btnIcon: <FaArrowRight />,
  },
  {
    imageAddress: "bg-[url('/products/image3.png')]",
    iconImageAddress: "/products/icon3.png", //svg
    cardTitle: "Life Insurance",
    cardText: "Lorem ipsum dolor sit amet, consecte adipisicing elitsed do.",
    btnText: "Learn More",
    btnIcon: <FaArrowRight />,
  },
];

const InsuranceProducts = () => {
  return (
    <div className="flex flex-col items-center bg-sky py-16 gap-12 isolate">
      <div className="flex flex-col items-center gap-4 sm:w-3/4 text-center px-[6%]">
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

      <div className="relative h-fit sm:h-[400px] md:h-[500px] xl:h-[700px] w-full">
        <div className="hidden md:block absolute w-full h-full">
          <img
            src="/products/top_right.png"
            alt="image"
            className="absolute -top-10 right-[2%]"
          />
          <img
            src="/products/bottom_left.png"
            alt="image"
            className="absolute -bottom-10 left-[2%]"
          />
        </div>

        <div className="md:absolute grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:h-full z-10 px-[6%]">
        {products.map((item, index) => (
          <InsuranceProductCard
            key={index}
            imageAddress={item.imageAddress}
            iconImageAddress={item.iconImageAddress}
            cardTitle={item.cardTitle}
            cardText={item.cardText}
            btnIcon={item.btnIcon}
            btnText={item.btnText}
            btnClassNames="max-w-fit border-1 border-orange bg-pink/28 text-black text-[0.75rem] font-normal hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          />
        ))}        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map((item, index) => (
          <div key={index} className="sm:h-[400px] md:h-[500px] xl:h-[700px]">
          </div>
          ))}        
        </div>
      </div>
    </div>
  );
};

export default InsuranceProducts;
