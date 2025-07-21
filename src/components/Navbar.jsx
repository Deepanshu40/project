import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonWithIcon from "./ButtonWithIcon";
import {Call1, Message1, Location1} from "../assets/Svg"

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Product",
    link: "/product",
  },

  {
    title: "Element",
    link: "/element",
  },

  {
    title: "Blog",
    link: "/blog",
  },
];

const contact = [
  {
    icon: <Call1 />,
    info: "+(111) 99_283_473",
  },
  {
    icon: <Message1 />,
    info: "rtfinsurance@gmail.cm",
  },

  {
    icon: <Location1 />,
    info: "New work city us",
  },
];
const Navbar = () => {
  const [show, setShow] = useState();
  const menuRef = useRef();
  const toggleBtnRef = useRef();

  const toggleShow = () => setShow(!show);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 w-full flex flex-col z-10">
      {/* nav1 */}
      <div className="px-[1rem] sm:px-[3rem] lg:px-[6.5rem] flex justify-between items-center h-14 bg-blue-dark py-4">
        <div className="hidden lg:flex gap-8">
          {contact.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 pr-8 border-r-1 border-r-sky"
            >
              <span className="text-orange">
                {item.icon}
              </span>
              <span className="text-white">{item.info}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <a
            className="text-white text-xl opacity-75 hover:opacity-100 hover:scale-110"
            href="#"
          >
            <img
              src="/navbar/instagram.svg"
              alt="instagram_icon"
              className="size-7"
            />
          </a>
          <a
            className="text-white text-xl opacity-75 hover:opacity-100 hover:scale-110"
            href="#"
          >
            <img
              src="/navbar/facebook.svg"
              alt="facebook_icon"
              className="size-7"
            />
          </a>
          <a
            className="text-white text-xl opacity-75 hover:opacity-100 hover:scale-110"
            href="#"
          >
            <img
              src="/navbar/twitter.svg"
              alt="twitter_icon"
              className="size-7"
            />
          </a>
        </div>
        <div
          className="text-white text-2xl cursor-pointer lg:hidden flex gap-6"
          onClick={toggleShow}
          ref={toggleBtnRef}
        >
          <GiHamburgerMenu />
        </div>
      </div>
      {/* nav2 */}
      <div className="relative w-full bg-white top-0 px-[1rem] sm:px-[3rem]  lg:px-[6.5rem] flex justify-between items-center h-24">
          <Link to={"/"}><img src="/navbar/logo.png" alt="logo_image"/></Link>
        <div className="hidden lg:flex text-lg font-semibold gap-16 xl:gap-24">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`${
                item.link === pathname ? "text-orange cursor-default" : "hover:scale-105"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div
          className={`md:hidden overflow-hidden ${
            !show ? "max-h-0" : "max-h-auto"
          } duration-300  ease-in absolute left-0 top-0 flex flex-col bg-gray-100 w-full`}
          ref={menuRef}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`text-center border-b-1 border-b-gray py-2 cursor-pointer hover:bg-gray bg-white duration-200 ${
                item.link === pathname && "text-orange cursor-default"
              }`}
              onClick={() => setShow(!show)}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/login">
            <ButtonWithIcon
              btnText="Login"
              classNames="px-6 py-2 rounded-lg border-1 text-lg text-blue border-blue hover:bg-blue hover:text-white hover:shadow-style1 duration-200 "
            />
          </Link>
          <ButtonWithIcon
            btnText="Get a Quote"
            classNames="px-6 py-2 rounded-lg border-1 border-blue bg-blue text-white text-lg hover:shadow-style1 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
