import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoCallOutline, IoMail, IoLocation } from "react-icons/io5";

const contact = [
  {
    icon: <IoCallOutline />,
    title: "Call Us",
    info1: "+(555) 125-23889",
    info2: "Available 24/7 for emergencies",
  },
  {
    icon: <IoMail />,
    title: "Email Us",
    info1: "info@rtfinsurance.com",
    info2: "We will respond within 24 hours",
  },
  {
    icon: <IoLocation />,
    title: "Visit Us",
    info1: "123Insurance Ave, SUIT",
    info2: "Monday - Friday, 9AM - 6AM",
  },
];
const Contact = () => {
  return (
    <div className="flex text-center justify-center bg-blue-500 text-white py-12">
      <div className="flex flex-col gap-12 items-center px-[12%]">
        <h1 className="font-bold text-4xl">Ready to get Protected ?</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          temporibus, explicabo nam quam architecto eveniet deserunt praesentium
          facilis dolores beatae. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Possimus quaerat tempore nisi quasi ut repudiandae
          voluptatem laborum voluptatum optio facere.
        </span>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 w-56 md:w-[80%]">
          <button className="flex items-center gap-8 py-1 px-6 font-semibold bg-orange-300 hover:bg-orange-500 text-blue-900 rounded-md flex-nowrap w-full">
            <span>Get Free Quote</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
          <button className="py-1 px-6 bg-orange-300 hover:bg-orange-500 text-white rounded-md w-full">
            +1(555) 6823382
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-[5%] w-full">
          {contact.map((item, index) => (
            <div className="flex flex-col w-full md:w-1/3 gap-4 items-center text-white font-bold">
              <span className="outline-1 outline-amber-300 bg-amber-300 hover:bg-amber-500 rounded-lg p-3 text-2xl font-bold">
                {item.icon}
              </span>
              <div className="flex flex-col gap-2 items-center ">
                <div className="flex flex-col justify-center ">
                  <span>{item.title}</span>
                  <span>{item.info1}</span>
                </div>
                <span className="text-xs ">{item.info2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
