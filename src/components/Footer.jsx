import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const linkGroup = [
  {
    title: "Learn More",
    linkSet: [
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "FAQs",
        link: "/faqs",
      },

      {
        title: "Blogs",
        link: "/blogs",
      },

      {
        title: "Careers",
        link: "/careers",
      },

      {
        title: "Privacy & Policy",
        link: "/privacy",
      },
      {
        title: "Terms & Conditions",
        link: "/terms",
      },
    ],
  },
  {
    title: "RTF Care Products",
    linkSet: [
      {
        title: "Home & Digital Care",
        link: "/homecare",
      },
      {
        title: "Health Insurance",
        link: "/health-insurance",
      },

      {
        title: "Motor Insurance",
        link: "/motor-insurance",
      },

      {
        title: "Travel Insurance",
        link: "/travel-insurance",
      },

      {
        title: "Opd & Wellness",
        link: "/terms",
      },
    ],
  },
  {
    title: "RTF Business",
    linkSet: [
      {
        title: "S.E.M Insurance",
        link: "/sem-insurance",
      },
      {
        title: "Employee Benefit Insurance",
        link: "/employee-benefit-insurance",
      },

      {
        title: "Office Package Insurance",
        link: "/office-packages-insurance",
      },

      {
        title: "Liability Insurance",
        link: "/liability-insurance",
      },

      {
        title: "engineering-insurance",
        link: "/engineering-insurance",
      },
    ],
  },
];

const linkGroup2 = [
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
  {
    title: "Terms of Service",
    link: "/terms",
  },
  {
    title: "Accessibilty",
    link: "/accessibilty",
  },
];

const Footer = () => {
  return (
    <div className=" bg-sky px-[1rem] sm:px-[3rem] lg:px-[6.5rem] pt-20 pb-8 flex flex-col gap-8 font-medium">
      <div className=" flex flex-col md:flex-row justify-between gap-14 md:gap-[2%] text-center md:text-left">
        <div className="hidden lg:flex flex-col items-center gap-8 ">
          <Link to={"/"}><img src="/footer/logo.png" alt="logo" className="max-w-[80%]" /></Link>
          <SocialIcons iconSize="text-4xl" />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly w-full gap-12">
          {linkGroup.map((item1, index1) => (
            <div key={index1} className="flex flex-col gap-4">
              <span className="text-sm font-semibold">{item1.title}</span>
              <div className="flex flex-col gap-1">
                {item1.linkSet.map((item2, index2) => (
                  <Link
                    key={index2}
                    to={"/"}
                    className="text-sm font-medium cursor-pointer hover:scale-110 duration-200"
                  >
                    {item2.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-nowrap gap-4">
          <span className="text-sm font-semibold">Apps for Employees</span>
          <div className="flex flex-col gap-8">
            <a className="flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-style1 duration-500  bg-white border-1 rounded-md gap-4 px-6 py-1">
              <img src="/footer/app_icon1.png" alt="playstore_icon" />
              <div className="flex flex-col">
                <span className="text-xs text-black">GET IN ON</span>
                <span className="text-lg font-medium">Google Play</span>
              </div>
            </a>
            <a className="flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-style1 duration-500  bg-white border-1 rounded-md gap-4 px-6 py-1">
              <img src="/footer/app_icon2.png" alt="playstore_icon" />
              <div className="flex flex-col">
                <span className="text-xs text-black">Download on the</span>
                <span className="text-lg font-medium">App Store</span>
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
      <hr className="text-[#AFADAD]/75" />
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 sm-gap-0">
        <span className="w-full sm:w-auto text-center">
          © 2025 RTF Insurance Brokers Pvt Ltd. All rights reserved.
        </span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          {linkGroup2.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-full sm:w-auto text-center"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
