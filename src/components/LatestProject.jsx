import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLocationDot,
  faCalendarDays,
  faRocket,
  faSortDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { latestProject } from "./data";
function LatestProject() {
  
  return (
    <>
      <div className="">
        <div className="container mx-auto pb-24 px-5 pt-24 ">
          <div className="block lg:flex lg:justify-between pb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">
              Latest Projects
              </h2>
              <p className="text-base font-normal leading-8 text-gray-600 pt-1">
              Know your worth and find the projects that qualify your life
              </p>
            </div>
            <div className="">
              <Link className="flex items-center">
                <h3 className="text-neutral-600 font-semibold">Browse All</h3>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-neutral-600 font-semibold pl-2"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
              {latestProject.map((latest) => (
                <div className="border rounded-md px-6 py-8 flex justify-between hover:shadow" key={latest.id}>
                  <div className="flex gap-5 lg:gap-10">
                    <div>
                      <img
                        src={latest.img}
                        alt="latestPostImg"
                        className="w-16 h-10 lg:h-16"
                      />
                    </div>
                    <div>
                      <div>
                        <Link className="text-lg font-semibold leading-normal text-neutral-800 group-hover/link:text-emerald-500 group-hover/link:underline">
                          {latest.title}
                        </Link>
                        <h3 className="text-emerald-500">{latest.subTitle}</h3>
                      </div>
                      <div className="flex gap-10 pt-3">
                        <span className="text-neutral-500 text-sm">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-emerald-900"
                          />{" "}
                          {latest.location}
                        </span>
                        <span className="text-neutral-500 text-sm">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="text-emerald-900"
                          />{" "}
                          {latest.time}
                        </span>
                        <span className="text-neutral-500 text-sm">
                          <FontAwesomeIcon
                            icon={faRocket}
                            className="text-emerald-900"
                          />{" "}
                          {latest.proposal}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="group relative h-10">
                    <div className="px-3 py-2 bg-white rounded-full shadow-md hover:bg-emerald-500 hover:text-white">
                      <FontAwesomeIcon icon={faHeart} className="group" />
                    </div>
                    <div className="absolute top-[-40px] right-[-20px] hidden group-hover:block">
                      <div className="w-[86px] px-2 py-2 rounded-md bg-black text-white text-xs">
                        Add Favorite
                      </div>
                      <div className="mt-[-10px] flex justify-center">
                        <FontAwesomeIcon icon={faSortDown} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProject;
