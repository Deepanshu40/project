import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Arrow } from "../assets/Svg";

// components
import ButtonWithIcon from "./ButtonWithIcon";

const appFeatures = {
  ebPortal: [
    {
      icon: "/glimpse/image1.png",
      title: "Hr Dashboard",
    },
    {
      icon: "/glimpse/image2.png",
      title: "Claim List",
    },
    {
      icon: "/glimpse/image3.png",
      title: "Policy List",
    },
    {
      icon: "/glimpse/image4.png",
      title: "Monthly Reporting",
    },
  ],
  employeeApp: [
    {
      icon: "/glimpse/image1.png",
      title: "Hr Dashboard",
    },
    {
      icon: "/glimpse/image2.png",
      title: "Claim List",
    },
    {
      icon: "/glimpse/image3.png",
      title: "Policy List",
    },
    {
      icon: "/glimpse/image4.png",
      title: "Monthly Reporting",
    },
  ],
};

const Glimpse = () => {
  const [activeTab, setActiveTab] = useState("ebPortal");
  const [activeIndex, setActiveIndex] = useState(0);
  const { contextSafe } = useGSAP();
  const imageRef = useRef();

  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  contextSafe(
    useGSAP(
      () => {
        gsap.from(imageRef.current, {
          x: 400,
          duration: 2,
          opacity: 0,
          scale: 0.8,
        });
      },
      { dependencies: [activeIndex] }
    )
  );

  return (
    <div className="hidden relative lg:flex flex-row p-[5%] lg:p-0">
      <div className=" flex flex-col lg:w-1/2 lg:p-[5%] gap-8">
        <h1 className="text-5xl text-blue-dark font-semibold">
          Glimpses of our -{" "}
        </h1>
        <div className="flex flex-col gap-8 w-fit items-center">
          <div className="flex flex-row gap-2">
            <ButtonWithIcon
              btnText="E.B Portal"
              classNames={`py-4 px-6 font-medium rounded-2xl text-xl  ${
                activeTab === "ebPortal"
                  ? "text-white bg-orange"
                  : "border-orange text-orange hover:shadow-style1 duration-200"
              }`}
              onClick={() => setActiveTab("ebPortal")}
            />
            <ButtonWithIcon
              btnText="Employee App"
              classNames={`py-4 px-6 font-medium rounded-2xl text-xl  ${
                activeTab === "employeeApp"
                  ? "text-white bg-orange"
                  : "border-orange text-orange hover:shadow-style1 duration-200 "
              }`}
              onClick={() => setActiveTab("employeeApp")}
            />
          </div>
          <div className="flex flex-row items-end gap-6">
            <div className="flex flex-col gap-4">
              {appFeatures[activeTab].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-center p-2 border-1 rounded-2xl ${
                    activeIndex === index
                      ? " border-orange"
                      : " border-black/5 hover:shadow-style1 duration-200"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={item.icon} alt="icon_image" />
                  <span className="text-xs">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-row mb-2 gap-6">
              <span
                className="cursor-pointer hover:scale-125 duration-200 size-12 text-blue-dark"
                onClick={() =>
                  activeIndex < appFeatures[activeTab].length - 1 &&
                  setActiveIndex((prev) => prev + 1)
                }
              >
                <Arrow />
              </span>
              <span
                className="rotate-180 cursor-pointer hover:scale-125 duration-200 size-12 text-blue-dark"
                onClick={() =>
                  activeIndex > 0 && setActiveIndex((prev) => prev - 1)
                }
              >
                {<Arrow />}
              </span>
              {/* <img
                src="/arrow.svg"
                className="rotate-180 cursor-pointer hover:scale-125 duration-200"
                onClick={() =>
                  activeIndex > 0 && setActiveIndex((prev) => prev - 1)
                }
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center w-1/2 bg-pink"></div>
      <img
        ref={imageRef}
        src="/glimpse/main_image1.png"
        alt="main_image"
        className={`translate-y-[50%] lg:absolute py-[5%] px-[10%] bg-orange/60 rounded-2xl w-5/12 lg:w-7/12 h-[50%] lg:h-[75%] lg:top-[50%] lg:translate-y-[-50%] lg:right-12`}
      />
    </div>
  );
};

export default Glimpse;
