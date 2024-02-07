import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { blodDetiles, topProjects, topTrending, topSkills, topJobs } from "./data";

function OurBlog() {
  return (
    <>
      <div className="">
        <div className="container mx-auto pb-24 px-5 pt-24 ">
          <div className="block lg:flex lg:justify-between pb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">Our Blog</h2>
              <p className="text-base font-normal leading-8 text-gray-600 pt-1">
                See how you can up your career status
              </p>
            </div>
            <div className="flex items-center">
              <Link className="flex items-center">
                <h3 className="text-neutral-600 font-semibold">
                  All Categories{" "}
                </h3>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-neutral-600 font-semibold pl-2"
                />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 xl:gap-10 pb-24">
            {blodDetiles.map((detailes) => (
              <div className="rounded-lg shadow-lg group/blog" key={detailes.id}>
                <div className="overflow-hidden">
                  <Link>
                    <img
                      src={detailes.img}
                      alt="blog-img"
                      className="group-hover/blog:scale-110 transition duration-1000 cursor-pointer object-cover"
                    />
                  </Link>
                </div>
                <div className="p-3 xl:p-8">
                  <h6 className="text-neutral-500 lg:text-lg pb-2">
                    {detailes.date}{" "}
                  </h6>
                  <Link className="lg:text-xl font-semibold leading-normal text-neutral-800 group-hover/blog:text-emerald-500 group-hover/blog:underline">
                    {detailes.title}
                  </Link>
                  <p className="text-neutral-800 pt-2">{detailes.subTitle} </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 xl:gap-20">
            <div>
              <h3 className="text-2xl font-medium text-neutral-600">
                Projects
              </h3>
              {topProjects.map((project) => (
                <>
                  <ul className="pt-4" >
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">{project.name}</Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-medium text-neutral-600">
                Trending
              </h3>
              {topTrending.map((project) => (
                <>
                  <ul className="pt-4" >
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">{project.name}</Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-medium text-neutral-600">
                Top Skills
              </h3>
              {topSkills.map((project) => (
                <>
                  <ul className="pt-4" >
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">{project.name}</Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-medium text-neutral-600">Top Jobs</h3>
              {topJobs.map((project) => (
                <>
                  <ul className="pt-4" >
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">{project.name}</Link>
                    </li>
                  </ul>
                </>
              ))}
              
            </div>
            <div>
              <h3 className="text-2xl font-medium text-neutral-600">
                Your Services
              </h3>
              {topTrending.map((project) => (
                <>
                  <ul className="pt-4">
                    <li className="" key={project.id}>
                      <Link className="font-medium text-sm text-neutral-500 hover:transition hover:duration-700 hover:text-emerald-500">{project.name}</Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurBlog;
