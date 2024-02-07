import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { membership } from "./data";
import {
  faLaptopCode,
  faPenRuler,
  faPenToSquare,
  faUsersViewfinder,
  faMicrophoneLines,
  faFileVideo,
  faCompassDrafting,
  faGopuram,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    id: 1,
    Icon: faLaptopCode,
    service: "8 Services",
    title: "Development & IT",
    subTitle: "Software Engineer, Web / Mobile Developer & More.",
  },
  {
    id: 2,
    Icon: faPenRuler,
    service: "8 Services",
    title: "Design & Creative",
    subTitle: "Website Design Adobe XD, Figma,Adobe Photoshop.",
  },
  {
    id: 3,
    Icon: faPenToSquare,
    service: "3 Services",
    title: "Digital Marketing",
    subTitle: "Service Digital and Social Media Management.",
  },
  {
    id: 4,
    Icon: faUsersViewfinder,
    service: "5 Services",
    title: "Writing & Translation",
    subTitle: "Writing , Translation Project, get It Quickly done.",
  },
  {
    id: 5,
    Icon: faMicrophoneLines,
    service: "2 Services",
    title: "Music & Audio",
    subTitle: "Freelancer Music, Audio Services, Music Projects.",
  },
  {
    id: 6,
    Icon: faFileVideo,
    service: "0 Services",
    title: "Video & Animation",
    subTitle: "Animation Video Maker that Brings Studio Quality.",
  },
  {
    id: 7,
    Icon: faCompassDrafting,
    service: "1 Services",
    title: "Programming & Tech",
    subTitle: "Programmers and coders Both for Your Project.",
  },
  {
    id: 8,
    Icon: faGopuram,
    service: "3 Services",
    title: "Finance & Accounting",
    subTitle: "Team Works , Collaboration Meet for Your Business.",
  },
];
function Help() {
  return (
    <div className="container mx-auto px-5">
      <div className="py-10">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-center">How can we help you?</h2>
          <p className="text-base font-normal leading-8 text-gray-600 pt-1 text-center">
            Give your visitor a smooth online experience with a solid UX design
          </p>
        </div>
        <div className="pt-14">
          <div className=" mx-auto overflow-x-auto pb-10 lg:pb-0 gap-5 lg:overflow-hidden flex lg:grid lg:grid-cols-4 lg:gap-8">
            {categories.map((categrie) => (
              <Link to="/products" key={categrie.id}>
                {/* {console.log(JSON.parse(JSON.stringify(categrie.Icon)))} */}
                <div className="border rounded-md p-5 lg:p-10 hover:border-neutral-950 relative w-[320px] lg:w-full">
                  <FontAwesomeIcon
                    icon={categrie.Icon}
                    className="text-emerald-900 h-8 font-semibold"
                  />
                  <h6 className="pt-4 text-neutral-600 text-sm before:content[''] before:absolute before:w-10 before:h-10 before:bg-[#FBF7ED] before:left-14 before:top-12 before:rounded-full before:-z-50">
                    {categrie.service}
                  </h6>
                  <h4 className="py-2 text-neutral-800 text-xl font-bold">
                    {categrie.title}
                  </h4>
                  <p className="text-neutral-600">{categrie.subTitle}</p>
                </div>
                
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-16">
          <div className="flex flex-col items-center mt-10 xl:mt-0">
            <h3 className="text-3xl font-bold leading-10">Membership Plans</h3>
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="overflow-x-auto lg:overflow-hidden flex pb-10 lg:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-7 mt-12 ">
            {membership.map((member) => (
              <div
                key={member.priceing}
                className="p-3 xl:p-12 rounded-lg border"
              >
                <div className="w-[320px] lg:w-full">
                  <div className="text-center">
                    <h4 className="font-bold text-3xl">{member.priceing}</h4>
                    <h5 className="font-semibold text-lg py-2 text-neutral-700">
                      {member.plan}
                    </h5>
                    <p className="text-neutral-600">{member.desc}</p>
                  </div>
                  <div className="text-center pt-6 xl:py-10">
                    <ul className="text-neutral-600">
                      <li>{member.list}</li>
                      <li className="py-2">{member.day}</li>
                      <li>{member.search}</li>
                      <li className="py-2">{member.revision}</li>
                      <li>{member.delivery}</li>
                      <li className="py-2">{member.support}</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Link
                    to="#"
                    className="inline-block w-full text-center px-7 py-2 text-lg font-medium text-emerald-500 border-solid border-2 border-emerald-500 rounded-lg mt-6 hover:bg-emerald-500 hover:text-white "
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Help;
