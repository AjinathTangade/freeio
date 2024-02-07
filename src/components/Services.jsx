import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faHeadset,
  faFileInvoice,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";


const services = [
  {
    id: 1,
    Icon: faUserPen,
    title: "Post a job",
    subTitle:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    id: 2,
    Icon: faChalkboardUser,
    title: "Choose freelancers",
    subTitle:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    id: 3,
    Icon: faFileInvoice,
    title: "Pay safely",
    subTitle:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    id: 4,
    Icon: faHeadset,
    title: "We’re here to help",
    subTitle:
      "It’s free and easy to post a job. Simply fill in a title, description.",
  },
];

function Services() {
  return (
    <div>
      <div className="container mx-auto lg:pb-16">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Need something done?
          </h2>
          <p className="text-center text-base font-normal leading-8 text-gray-600 pt-1">
            Most viewed and all-time top-selling services
          </p>
          <div className="grid grid-cols-2 px-5  lg:grid lg:grid-cols-4 gap-10 py-10 lg:px-5">
            {services.map((service) => (
              <div className="group" key={service.id}>
                <FontAwesomeIcon
                  icon={service.Icon}
                  className="text-emerald-900 p-5 h-5 w-5 lg:p-9 shadow-lg shodow-neutral-200 lg:h-9 lg:w-9 rounded-full group-hover:bg-emerald-500 group-hover:text-white"
                />
                <h3 className="pt-3 text-neutral-600 font-semibold text-xl">
                  {service.title}
                </h3>
                <p className="pt-2 text-neutral-500">{service.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
