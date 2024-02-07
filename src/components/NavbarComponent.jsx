import { Link } from "react-router-dom";
import { Navbar } from "keep-react";
import { navigation } from "./data";
import { useState } from "react";
import { Modal} from "keep-react";
import { CloudArrowUp} from "phosphor-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export const NavbarComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const onClickOne = () => {
    setShowModal(!showModal);
  };

  return (
    <Navbar fluid={true} className="container mx-auto p-0 my-10">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand className="flex-shrink-0 w-7/12 md:w-5/12 lg:w-3/12">
            <Link to="/">
              <img
                className="w-fit"
                src="/assets/img/logo-2.png"
                alt="Your Company"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <nav className="flex items-center space-x-4 ">
              <div className="flex flex-col lg:ml-10 py-8 px-4 lg:p-0 lg:justify-center lg:top-0 lg:flex-row items-baseline itmes-center w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      item.current
                        ? "font-medium text-gray-800 hover:text-emerald-500"
                        : "font-medium text-gray-800 hover:text-emerald-500"
                    } rounded-md px-5 py-2 text-base font-medium hover:text-emerald-500 ${
                      // Display as block on medium screens and flex on large screens
                      "md:inline-block lg:flex"
                    }`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar" className="shadow-lg px-10">
            <Navbar.Container tag="ul" className="flex flex-col gap-5 ">
              <nav className="">
                <div className="flex flex-col">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${
                        item.current
                          ? "font-medium text-gray-800 hover:text-emerald-500"
                          : "font-medium text-gray-800 hover:text-emerald-500"
                      } rounded-md px-3 py-2 text-base font-medium hover:text-emerald-500 ${
                        // Display as block on medium screens and flex on large screens
                        "md:inline-block lg:flex"
                      }`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
        <Navbar.Container className="flex items-center">
          <div className="btn-group flex items-center lg:w-[200px] xl:w-full">
            <Link to="/projects" className="hidden xl:inline-block px-4 py-2 text-base font-medium text-gray-800 hover:text-emerald-500">
              Become Seller
            </Link>
            <button
              onClick={onClickOne}
              className="inline-block px-4 py-2 text-base font-medium text-gray-800 hover:text-emerald-500"
            >
              Login
            </button>
            <Modal
              size="lg"
              show={showModal}
              icon={<CloudArrowUp size={28} color="#10b981" />}
            >
              <Modal.Header className="flex justify-between itmes-end">
                <div>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-2xl flex justify-end"
                    onClick={onClickOne}
                  />
                </div>
              </Modal.Header>
              <Modal.Body className="max-w-sm mx-auto">
                <h3 className="text-4xl font-bold py-3  text-center">
                  Welcome to the your{" "}
                  <span className="text-emerald-500 underline">Freelance</span>{" "}
                  platform
                </h3>
                
                <div className="space-y-6">
                  <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="flex items-start mb-5">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        for="remember"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="inline-block px-6 py-3 text-base font-medium text-white bg-emerald-500 border-solid border-2 border-emerald-500 rounded mr-4 hover:bg-emerald-800 hover:text-white hover:border-emerald-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </Modal.Body>
            </Modal>
            <Link onClick={onClickOne} className="hidden lg:inline-block px-6 py-2 text-base font-medium text-white bg-emerald-500 rounded ml-3 hover:bg-emerald-800 hover:text-white">
              Sign Up
            </Link>
          </div>
          <div>
            <Navbar.Toggle className="stroke-emerald-800 ml-5 border-2 border-emerald-800 p-2 rounded fill-red-700" />
          </div>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
