import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "./data";
function Test() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 container mx-auto flex justify-between">
        <div className="flex items-center ">
          <div className="flex-shrink-0 w-3/12">
            <img
              className=""
              src="/src/assets/img/logo-2.png"
              alt="Your Company"
            />
          </div>
          <nav
            className={`md:flex md:flex-col md:items-end space-x-4 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
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
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="btn-group flex">
            <Link className="hidden md:inline-block px-4 py-2 text-base font-medium text-grey-100 hover:text-emerald-500">
              Become Seller
            </Link>
            <Link className="inline-block px-4 py-2 text-base font-medium text-grey-200 hover:text-emerald-500">
              Login
            </Link>
            <Link className="hidden md:inline-block px-6 py-2 text-base font-medium text-white bg-emerald-500 rounded ml-3 hover:bg-emerald-800 hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>
    </header>
  );
}

export default Test;
