import React from "react";
import { Link } from "react-router-dom";

import { projects, trending, support } from "./data";

function Footer() {
  return (
    <>
      <div className="container mx-auto pt-7 pb-10 px-5">
        <div className="lg:flex lg:justify-between border-b pb-7">
          <div className="flex gap-4 lg:gap-8">
            <Link className="text-lg font-semibold text-neutral-600">
              Terms of Service
            </Link>
            <Link className="text-lg font-semibold text-neutral-600">
              Privacy Policy
            </Link>
            <Link className="text-lg font-semibold text-neutral-600">
              Site Map
            </Link>
          </div>
          <div className="">
            <p className="text-lg font-semibold text-neutral-600">Follow Us</p>
          </div>
        </div>
        <div className="pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
            <div className="pt-10">
              <h3 className="text-xl font-medium text-neutral-700">About</h3>
              {trending.map((project) => (
                <>
                  <ul className="pt-4">
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">
                        {project.name}
                      </Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-medium text-neutral-700">
                Categories
              </h3>
              {projects.map((project) => (
                <>
                  <ul className="pt-4">
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">
                        {project.name}
                      </Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-medium text-neutral-700">Support</h3>
              {support.map((project) => (
                <>
                  <ul className="pt-4">
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">
                        {project.name}
                      </Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-medium text-neutral-700">
                Subscribe
              </h3>
              <div className="mt-5 relative">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-base placeholder:font-sm sm:text-sm sm:leading-6"
                  placeholder="Your email address"
                />
                <button className="absolute top-5 right-5">Send</button>
              </div>
              <div className="my-8">
                <img src="/src/assets/img/logo-green.png" alt="footer-logo" />
                <p className="pt-2">
                  Everyone bringing the culture of sharing to service
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="text-sm">© AjStyle. 2023 CreativeLayers. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
