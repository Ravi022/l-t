import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="sticky top-0 z-[999] bg-white">
      <nav>
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
          <div className="  flex p-3 text-custom-blue">
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
          {/* <li className="ml-3 bg-red ">
            <DarkMode />
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
