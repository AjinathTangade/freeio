import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faArrowRightLong,
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
    "id": 1,
    "Icon": faLaptopCode,
    "service": "8 Services",
    "title": "Development & IT",
    "subTitle": "Software Engineer, Web / Mobile Developer & More."
  },
  {
    "id": 2,
    "Icon": faPenRuler,
    "service": "8 Services",
    "title": "Design & Creative",
    "subTitle": "Website Design Adobe XD, Figma,Adobe Photoshop."
  },
  {
    "id": 3,
    "Icon": faPenToSquare,
    "service": "3 Services",
    "title": "Digital Marketing",
    "subTitle": "Service Digital and Social Media Management."
  },
  {
    "id": 4,
    "Icon": faUsersViewfinder,
    "service": "5 Services",
    "title": "Writing & Translation",
    "subTitle": "Writing , Translation Project, get It Quickly done."
  },
  {
    "id": 5,
    "Icon": faMicrophoneLines,
    "service": "2 Services",
    "title": "Music & Audio",
    "subTitle": "Freelancer Music, Audio Services, Music Projects."
  },
  {
    "id": 6,
    "Icon": faFileVideo,
    "service": "0 Services",
    "title": "Video & Animation",
    "subTitle": "Animation Video Maker that Brings Studio Quality."
  },
  {
    "id": 7,
    "Icon": faCompassDrafting,
    "service": "1 Services",
    "title": "Programming & Tech",
    "subTitle": "Programmers and coders Both for Your Project."
  },
  {
    "id": 8,
    "Icon": faGopuram,
    "service": "3 Services",
    "title": "Finance & Accounting",
    "subTitle": "Team Works , Collaboration Meet for Your Business."
  }
];
function Talent() {
  

  return (
    <>
      <div className="container mx-auto pb-16 px-5">
        <div className="block lg:flex lg:justify-between pb-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Browse talent by category​
            </h2>
            <p className="text-base font-normal leading-8 text-gray-600 pt-1">
              Get some Inspirations from 1800+ skills
            </p>
          </div>
          <div className="flex items-center">
            <h3 className="text-neutral-600 font-semibold">All Categories </h3>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="text-neutral-600 font-semibold pl-2"
            />
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-5 lg:grid lg:grid-cols-4 lg:gap-8">
            {categories.map((categrie) => (
              <Link key={categrie.id}>
                {/* {console.log(JSON.parse(JSON.stringify(categrie.Icon)))} */}
                <div className="border rounded-md p-5 lg:p-10 hover:border-neutral-950 relative">
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
    </>
  );
}

export default Talent;
