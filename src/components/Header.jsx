import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "./data";

function Header() {
  return (
    <div className="container mx-auto mt-8">
      <div className="px-5">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-100 w-100"
                src="./src/assets/img/logo-green.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={
                      (item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-emerald-500",
                      "rounded-md px-3 py-2 text-base font-medium hover:text-emerald-500")
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="btn-group">
            <Link className="hidden md:inline-block px-4 py-2 text-base font-medium text-grey-100 hover:text-emerald-500">
              Become Seller
            </Link>
            <Link className="inline-block px-4 py-2 text-base font-medium text-grey-200 hover:text-emerald-500">
              Login
            </Link>
            <Link className="inline-block px-6 py-2 text-base font-medium text-white bg-emerald-500 rounded ml-3 hover:bg-emerald-800 hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
