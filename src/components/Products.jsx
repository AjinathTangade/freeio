import React from "react";
import Breadcrumb from "./Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ProductList from "./ProductList";
import { blog } from "./data"; 

function Products() {
    return (
        <>
          <div className="container mx-auto pb-16 px-5 pt-10 border-b ">
            <Breadcrumb />
            <div
              className="bg-no-repeat rounded-xl bg-cover"
              style={{
                backgroundImage: "url(/assets/img/about-bg.jpg)",
              }}
            >
              <div className="h-56 md:h-72 flex flex-col justify-center w-10/12 m-auto mt-5 xl:mt-8">
                <div className="">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    Design & Creative
                  </h2>
                  <p className="text-white pt-2">
                    Give your visitor a smooth online experience with a solid UX
                    design
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
            <div className="pt-10 xl:pt-20">
              <div>
                <ProductList blog={blog}/>
              </div>
            </div>
          </div>
        </>
      );
}

export default Products