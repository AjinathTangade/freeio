import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function DownloadApp() {
  return (
    <>
      <div className="bg-[#FFEDE8]">
        <div className="container mx-auto px-5 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20">
            <div className="xl:pt-24">
              <span className=" bg-[#FFFBF2] px-4 py-2 rounded-full text-sm hover:text-white hover:bg-emerald-500 hover:transition hover:duration-700 ">
                Start today
              </span>
              <h2 className="font-bold text-3xl pt-5">Download the App</h2>
              <p className="text-neutral-500 py-5 xl:pr-56">
                Take classes on the go with the freeio app. Stream or download
                to watch on the plane, the subway, or wherever you learn best.
              </p>
              <div className="flex gap-8 pt-5 xl:pt-10">
                <div>
                  <Link className="flex gap-3 lg:gap-5 xl:gap-5 bg-[#1F4B3F] rounded-md py-1 px-2 lg:px-5 xl:px-5 hover:bg-black hover:transition hover:duration-1000">
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      className="text-2xl text-white border-r pr-4 xl:pr-5 mt-3"
                    />{" "}
                    <div className="pl-1">
                      <span className="text-sm text-white">
                        Download on the
                      </span>{" "}
                      <p className="text-white font-semibold">Apple Store</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className="flex gap-3 lg:gap-5 xl:gap-5 bg-[#1F4B3F] rounded-md py-1 px-4 lg:px-5 xl:px-5 hover:bg-black hover:transition hover:duration-1000">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-2xl text-white border-r pr-4 xl:pr-5 mt-3"
                    />{" "}
                    <div className="pl-1">
                      <span className="text-sm text-white">Get in on</span>{" "}
                      <p className="text-white font-semibold">Google Play</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/img/h42.png" alt="download-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
