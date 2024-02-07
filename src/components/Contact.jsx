import React from "react";
import Breadcrumb from "./Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneVolume,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Contact() {
  const categories = [
    {
      id: 1,
      Icon: faLocationDot,
      service: "328 Queensberry Street, North Melbourne VIC 3051, Australia",
      title: "Address",
    },
    {
      id: 2,
      Icon: faPhoneVolume,
      service: "+(088) 123 456 789",
      title: "Phone",
    },
    {
      id: 3,
      Icon: faEnvelope,
      service: "hello@freelance.com",
      title: "Email ",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-5 pt-12">
        <Breadcrumb />
        <div
          className="bg-no-repeat rounded-xl bg-cover mt-10"
          style={{
            backgroundImage: "url(/assets/img/bg-become.jpg)",
          }}
        >
          <div>
            <div className="flex">
              <div className="h-56 md:h-72 flex flex-col justify-center w-10/12 m-auto">
                <div className="">
                  <h2 className="text-2xl md:text-4xl text-white font-bold">
                    Contact us
                  </h2>
                  <p className="text-white pt-2">
                    We’d love to talk about how we can help you.
                  </p>
                </div>
                <div className="flex justify-items-center items-center pt-7 md:pt-10">
                  <div className="mr-4">
                    <span class="relative flex h-10 w-10">
                      <span class="animate-ping absolute h-full w-full rounded-full bg-white opacity-50"></span>
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        className="text-white w-10 h-10 pr-3"
                      />
                    </span>
                  </div>
                  <div>
                    <span className="text-white font-semibold">
                      How Free Works
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="flex justify-between gap-8 flex-wrap relative">
            <div className="lg:w-5/12">
              <div>
                <h4 className="text-2xl font-semibold text-neutral">Keep In Touch With Us.</h4>
                <p className="text-neutral-800 pt-4">
                  Neque convallis a cras semper auctor. Libero id faucibus nisl
                  tincidunt egetnvallis.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {categories.map((categrie) => (
                  <div
                    className="rounded-md p-3 lg:p-5 relative flex gap-5 lg:gap-8 items-center"
                    key={categrie.id}
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={categrie.Icon}
                        className="text-emerald-900 h-8 font-semibold"
                      />
                    </div>
                    <div>
                      <h4 className="py-2 text-neutral-800 lg:text-lg lg:font-bold">
                        {categrie.title}
                      </h4>
                      <h6 className="text-neutral-600 text-sm before:content[''] before:absolute before:w-10 before:h-10 before:bg-[#FBF7ED] before:left-8 before:top-12 before:rounded-full before:-z-50">
                        {categrie.service}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:absolute lg:right-10 lg:top-[-34%] xl:top-[-40%]  xl:right-24 bg-white rounded-lg">
              <div className="border-gray-900/10 p-6 lg:p-10 lg:w-[500px] xl:w-[650px] border rounded-lg">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  Tell us about yourself
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </p>
                <form>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 h-14 p-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Name"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 h-14 p-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Messages
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 p-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="inline-block px-5 py-4 w-60 text-center text-base font-medium text-white bg-emerald-500 border-solid border-2 border-emerald-500 rounded-lg hover:bg-transparent hover:text-emerald-500 hover:border-emerald-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
                    >
                      Send Messages
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765336.148763802!2d61.022917156668605!3d19.732445881430774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1702192885104!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] rounded-xl"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
