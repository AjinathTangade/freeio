import React from "react";
import { Pestimonial, rate } from "./data";

function Testimonial() {
  
  return (
    <>
      <div className="bg-[#F0EFEC]">
        <div className="container mx-auto py-16 md:py-20 px-5  ">
          <div className="block lg:flex lg:justify-between pb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                People Love To Learn With Freeio
              </h2>
              <p className="text-base font-normal leading-8 text-gray-600 pt-1">
                Most viewed and all-time top-selling
              </p>
            </div>
          </div>
          <div className="mx-auto overflow-x-auto pb-10 lg:pb-0 gap-5 lg:overflow-hidden flex lg:grid lg:grid-cols-3 gap-10">
            {Pestimonial.map((testimonial) => (
              <div key={testimonial.id}>
                <div
                className="bg-white px-10 py-8 rounded-2xl shadow-md w-[320px] lg:w-full"
                
              >
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold leading-normal lg:leading-loose text-emerald-500">
                    {testimonial.title}
                  </h3>
                  <p className="text-lg font-semibold leading-normal lg:leading-loose">
                    {testimonial.subTitle}
                  </p>
                </div>
                <div className="flex pt-4">
                  <div>
                    <img
                      src={testimonial.img}
                      className="rounded-full h-14 w-14"
                    />
                  </div>
                  <div className="pl-6">
                    <h4 className="text-md font-semibold leading-normal text-neutral-500">
                      {testimonial.author}
                    </h4>
                    <span className="text-neutral-500 text-sm">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
              </div>
              
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5 lg:gap-10 ">
            {rate.map((rate) => (
              <div className="lg:px-8 pt-10" key={rate.id}>
                <h2 className="font-bold text-2xl lg:text-3xl pb-2">{rate.count}</h2>
                <h5 className="text-neutral-800">{rate.text}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
