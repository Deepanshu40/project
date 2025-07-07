import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

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
    link: "/privacy"
  },
    {
    title: "Terms of Service",
    link: "/terms"
  },
  {
    title: "Accessibilty",
    link: "/accessibilty"
  },

]

const Footer = () => {
  return (
    <div className=" bg-amber-600 px-[4%] pt-20 pb-8 flex flex-col gap-8 font-medium">
    <div className=" flex flex-col md:flex-row justify-between gap-14 md:gap-[2%] text-center md:text-left">
      <div className="hidden lg:flex flex-col items-center gap-8 w-1/6 ">
        <img src="/logo.avif" alt="logo" className="max-w-[80%]" />
        <SocialIcons iconSize='text-4xl' />
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full md:w-5/6 lg:w-4/6 gap-12">
        {linkGroup.map((item1, index1) => (
          <div key={index1} className="flex flex-col w-full md:w-fit gap-4">
            <span>{item1.title}</span>
            <div className="flex flex-col gap-1">{item1.linkSet.map((item2, index2) => (
              <a key={index2} href={item2.link} className="cursor-pointer">{item2.title}</a>
            ))}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 w-full md:w-1/6">
      <span>Apps for Employees</span>
        <div className="flex flex-col gap-8 w-[70%] md:w-full">
        <a className="flex items-center justify-center bg-white border-1 rounded-md gap-1 w-full">
          <span className="text-3xl"><IoLogoGooglePlaystore /></span>
          <div className="flex flex-col">
            <span className="text-sm">GET IN ON</span>
            <span>Google Play</span>
          </div>
      </a>
      <a className="flex items-center justify-center bg-white border-1 rounded-md gap-1 w-full">
          <span className="text-3xl"><FaApple /></span>
          <div className="flex flex-col">
            <span className="text-sm">Download on the</span>
            <span>App Store</span>
          </div>
      </a>
        </div>

      </div>
    </div>
      <hr className="text-gray-400" />
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 sm-gap-0">
        <span className="w-full sm:w-auto text-center">&copy; 2025.. All Rights Reserved</span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">{linkGroup2.map((item, index) => (
          <a key={index} href={item.link} className="w-full sm:w-auto text-center">{item.title}</a>
        ))}</div>
      </div>
    </div>
  );
};

export default Footer;
