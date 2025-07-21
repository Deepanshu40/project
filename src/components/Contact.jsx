import { FaArrowRight } from "react-icons/fa6";
import { Call2, Message2, Location2 } from "../assets/Svg";
import ButtonWithIcon from "./ButtonWithIcon";

const contact = [
  {
    icon: <Call2 />,
    title: "Call Us",
    info1: "+(555) 125-23889",
    info2: "Available 24/7 for emergencies",
  },
  {
    icon: <Message2 />,
    title: "Email Us",
    info1: "info@rtfinsurance.com",
    info2: "We will respond within 24 hours",
  },
  {
    icon: <Location2 />,
    title: "Visit Us",
    info1: "123Insurance Ave, SUIT",
    info2: "Monday - Friday, 9AM - 6AM",
  },
];

const Contact = () => {
  return (
    <div className="flex text-center justify-center bg-blue-dark text-white py-12">
      <div className="flex flex-col gap-12 items-center w-full">
        <h1 className="font-bold text-5xl">Ready to get Protected ?</h1>
        <div className="flex flex-col text-center text-white/75 text-xl">
          <span>Take the first step towards securing your future. Get a personalized </span>
          <span>insurance quote in just minutes and discover how affordable protection can be </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 w-56 md:w-[80%]">
          <ButtonWithIcon btnText="Get Free Quote" icon={<FaArrowRight />} classNames="bg-orange border-0 text-lg rounded-lg text-blue py-2 font-semibold px-8 hover:shadow-style1 hover:scale-105 duration-200" />
          <ButtonWithIcon btnText="+1(555) 6823382" classNames="bg-orange border-0 text-lg rounded-lg text-white py-2 font-semibold px-8 hover:shadow-style1 hover:scale-105 duration-200" />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-[30%]">
          {contact.map((item, index) => (
            <div key={index} className="flex flex-col w-full md:w-1/3 gap-4 items-center text-white font-bold">
              <div className={`flex items-center justify-center border-1 ${index !== 1 ? 'bg-orange/15 border-orange' : 'bg-green/15 border-green'} p-2 rounded-2xl size-16`}>
                {item.icon}
              </div>
              <div className="flex flex-col gap-2 items-center ">
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-medium text-nowrap">{item.title}</span>
                  <span className="text-lg font-medium text-nowrap">{item.info1}</span>
                </div>
                <span className="text-xs text-nowrap">{item.info2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
