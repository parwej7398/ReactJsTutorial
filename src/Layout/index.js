import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {

  const navItems = [
    {
      id: 1,
      to: "/blog",
      navItem: "Blog",
    },
    {
      id: 2,
      to: "/products",
      navItem: "Product",
    },
    {
      id: 3,
      to: "/prop-drilling",
      navItem: "Props Drilling",
    },
    {
      id: 4,
      to: "/use-context",
      navItem: "Propse",
    },
    {
      id: 5,
      to: "/props",
      navItem: "Map",
    },
    {
      id: 6,
      to: "/useref",
      navItem: "UseState",
    },
    {
      id: 7,
      to: "/useeffect",
      navItem: "UseEffect",
    },
    {
      id: 8,
      to: "/demomap",
      navItem: "UseRef",
    },
    {
      id: 9,
      to: "/use-reducer",
      navItem: "UseReducerDemo"
    },
    {
      id: 2,
      to: "/calculator",
      navItem: "Calculator"
    },
  ];
  return (
    <div className="flex flex-col h-fit">
      {/* Header */}
      <div className="p-2 text-white flex gap-6 bg-black">
        {navItems.map((nav, index) => {
          const isActive = window.location.pathname === nav.to;
          console.log(isActive, index);
          return (
            <Link key={nav.id} to={nav.to} className={classNames("p-2 hover:bg-blue-300 rounded-xl", isActive && "bg-blue-500")}>
              {nav.navItem}
            </Link>
          );
        })}
      </div>
      <div className="flex h-full">
        {/* Sidebar  */}
        <div className="bg-blue-500 flex flex-col gap-2 text-white font-bold p-2 border-black text-xl cursor-pointer w-44">
          <p className="hover:bg-black  hover:rounded-lg p-2">Head Phone</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Mobile</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Charging</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Accesoriy</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Apple mobile</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Book</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Eyerphone</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Head Phone</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Mobile</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Charging</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Accesoriy</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Apple mobile</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Book</p>
          <hr />
          <p className="hover:bg-black  hover:rounded-lg p-2">Eyerphone</p>
          <hr />
        </div>
        {/* Body  */}
        <div className="w-full">{children}</div>
      </div>
      {/* Footer  */}
      <div className="bg-black text-white p-2">Footer</div>
    </div>
  );
};

export default Layout;
