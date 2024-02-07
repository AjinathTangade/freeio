import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faStar,
  faHeart,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { blog } from "./data";

function TrendingServices() {
  const card = blog.slice(0, 4);
  return (
    <>
      <div className="bg-[#FBF7ED]">
        <div className="container mx-auto py-16 md:pb-12 px-5">
          <div className="block lg:flex lg:justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Trending Services
              </h2>
              <p className="text-base font-normal leading-8 text-gray-600 pt-1">
                Most viewed and all-time top-selling services
              </p>
            </div>
            <div >
              <Link to="products" className="flex items-center">
                <h3 className="text-neutral-600 font-semibold">
                  All Services{" "}
                </h3>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-neutral-600 font-semibold pl-2"
                />
              </Link>
            </div>
          </div>
            <div>
              <div className="mx-auto overflow-x-auto pt-10 pb-10 lg:overflow-hidden pr-2 flex lg:grid gap-5 lg:grid-cols-3 xl:grid-cols-4 relative ">
                {card.map((blog) => (
                  <Link to={`/products/${blog.id}`} key={blog.id}>
                    <div className="group/link relative w-[330px] lg:w-full" key={blog.id}>
                      <div className=" absolute top-0 right-0 px-3 py-2 m-3 bg-white rounded-full shadow-md hover:bg-emerald-500 hover:text-white">
                        <FontAwesomeIcon icon={faHeart} className="" />
                      </div>
                      <div className="absolute top-[-30px] right-[-10px] hidden group-hover/link:block">
                        <div className="px-2 py-2 rounded-md bg-black text-white text-xs">
                          Add Favorite
                        </div>
                        <div className="mt-[-10px] flex justify-center">
                          <FontAwesomeIcon icon={faSortDown} />
                        </div>
                      </div>

                      <img src={blog.img} alt="blog-img" />

                      <div className="bg-white p-6">
                        <div className="border-b pb-3">
                          <h3 className="text-neutral-500 hover:text-neutral-900">
                            {blog.development}
                          </h3>

                          <h2
                            to="/jobs"
                            className="text-lg font-semibold leading-normal text-neutral-800 group-hover/link:text-emerald-500 group-hover/link:underline"
                          >
                            {blog.blogTile}
                          </h2>
                          <div className="flex">
                            <span className="">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="text-amber-300 pr-2 pt-3"
                              />
                            </span>
                            <h4 className="text-neutral-500 py-2">
                              {blog.reviwes}
                            </h4>
                          </div>
                        </div>
                        <div className="flex pt-5 justify-between items-center">
                          <div className="flex">
                            <img
                              src={blog.authorImg}
                              alt="blog-img"
                              className="h-10 w-10 rounded-full"
                            />
                            <span className="text-center pt-2 pl-3">
                              {blog.authorName}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-600">
                              Starting at:
                            </span>
                            <span className="font-semibold pl-1">
                              {blog.pricingText}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default TrendingServices;
