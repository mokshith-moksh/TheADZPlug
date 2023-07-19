import React, { useEffect, useState } from "react";
import logo from "/assets/freeskout.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const links = [
    {
      id: 1,
      link: "BRANDS",
    },
    {
      id: 2,
      link: "INFLUENCERS",
    },
    {
      id: 3,
      link: "PRICING",
    },
    {
      id: 4,
      link: "BLOGS",
    },
    {
      id: 5,
      link: "CONTACT",
    },
  ];
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div  className={`fixed left-0 z-20 right-0 h-16 w-[100vw] flex justify-between mx-auto px-4 transition-colors ${
            scrolled ? "bg-[#000422]" : "bg-transparent"
          }`}>
        <div
          className={`w-11/12 flex justify-between mx-auto`}
        >
          <img src={logo} alt="" className=" my-[3px] cursor-pointer" />
          <div>
            <ul className="hidden md:flex gap-5 mt-5 my-3 ">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className=" text-sm font-thin cursor-pointer capitalize text-[#f4f4f6] "
                >
                  {link}
                </li>
              ))}
            </ul>


      <div className={`md:hidden ${navOpen ? ("hidden"):("flex") }`}>
        <FaBars
          className="text-white text-3xl cursor-pointer mt-3"
          onClick={toggleNav}
        />
      </div>

      


      {navOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-50  bg-slate-50 opacity-40">
          <div className=" ml-[90vw] overflow-hidden ">
  
            <FaTimes
              className="text-black text-3xl cursor-pointer translate-y-3 absolute "
              onClick={toggleNav}
            />
          </div>

          <div className=" w-[50vw] absolute bg-slate-50 ">
            <ul>
              <li>Home</li>
              <li>BRANDS</li>
              <li>INFLUENCER</li>
              <li>PRICING</li>
              <li>BLOGS</li>
              <li>CONTACT</li>
            </ul>
          </div>

        </div>
      )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
