import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  //   console.log(children);

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
  ];
  return (
    <div className="flex flex-col h-screen">
      <div className="p-10 text-white flex gap-6 bg-black">
        {navItems.map((nav) => {
          const isActive = window.location.pathname === nav.to;
          return (
            <Link
              key={nav.id}
              to={nav.to}
              className={classNames(
                "p-2 hover:bg-blue-300",
                isActive && "bg-blue-500"
              )}
            >
              {nav.navItem}
            </Link>
          );
        })}
      </div>
      <div className="flex h-full">
        <div className="bg-blue-500 h-full w-72">Sidebar</div>
        <div>{children}</div>
      </div>
      <div className="bg-black text-white p-2">Footer</div>
    </div>
  );
};

export default Layout;
