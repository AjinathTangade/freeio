import React from "react";
import Breadcrumb from "./Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { latestProject } from "./data";
import ProjectsList from "./ProjectsList";
function Projects() {
  return (
    <>
      <div className="container mx-auto pb-16 px-5 pt-10 border-b">
        <Breadcrumb />
        <div
          className="bg-no-repeat rounded-xl bg-cover"
          style={{
            backgroundImage: "url(/assets/img/bg-filter1.jpg)",
          }}
        >
          <div className="h-56 md:h-72 flex flex-col justify-center w-10/12 m-auto mt-5 xl:mt-8">
            <div className="">
              <h2 className="text-2xl md:text-4xl text-neutral-800 font-bold">
                Projects List
              </h2>
              <p className="text-neutral-700 pt-2">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
            <div className="flex justify-items-center items-center pt-7 md:pt-10">
              <div className="mr-4">
                <span class="relative flex h-10 w-10">
                  <span class="animate-ping absolute h-full w-full rounded-full bg-emerald-500 opacity-50"></span>
                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    className="text-emerald-500 w-10 h-10 pr-3"
                  />
                </span>
              </div>
              <div>
                <span className="text-neutral-700 font-semibold">
                  How Free Works
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 xl:pt-20">
          <div class="">
            <ProjectsList latestProject={latestProject} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
