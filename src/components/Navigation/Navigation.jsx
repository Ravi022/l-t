import React from "react";
import { Link, NavLink } from "react-router-dom";
import LinkedInLogo from "../../assets/Images/linkedin2.png";
import SearchBarLogo from "../../assets/Images/SearchBar.png";
export default function Navigation() {
  return (
    <div className="relative sticky top-0 z-[999]   bg-[#F7F9F9]">
      <nav>
        <div>
          <ul className="flex h-22 rounded-none border-y-2 border-y-custom-blue">
            <div className=" bg-custom-blue ">
              <li className="flex items-center p-2 m-3 font-raleway font-sans">
                <Link to="/" className="flex items-center">
                  <img
                    src="https://www.lntecc.com/images/landt-logo.png"
                    className="mr-3 h-12"
                    alt="Logo"
                  />
                </Link>
              </li>
            </div>
            <div className="flex p-3 text-custom-blue">
              <li className="p-3 m-3 font-raleway font-sans">
                <NavLink to="/" className=" ease-in ">
                  <p className="hover:underline  "> Home</p>
                </NavLink>
              </li>
              <li className="p-3 m-3 font-raleway font-sans">
                <NavLink to="/project-1" className=" hover:underline  ">
                  Productivity Analyzer
                </NavLink>
              </li>
              <li className="p-3 m-3 font-raleway font-sans">
                <NavLink to="/project-2" className="hover:underline ">
                  Tweets Analyzer
                </NavLink>
              </li>
              <li className="p-3 m-3 font-raleway font-sans ">
                <NavLink to="/faq" className="hover:underline   ">
                  FAQ
                </NavLink>
              </li>
            </div>
            <div className="absolute ml-[85%] flex justify-center items-center p-3 mt-4">
              <li className="flex items-center   font-raleway font-sans">
                <Link to="/" className="flex items-center">
                  <img src={LinkedInLogo} className="mr-3 " alt="Logo" />
                </Link>
              </li>
              <li className="flex items-center  font-raleway font-sans">
                <Link to="/" className="flex items-center">
                  <img src={SearchBarLogo} className="mr-3 h-7 " alt="Logo" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
