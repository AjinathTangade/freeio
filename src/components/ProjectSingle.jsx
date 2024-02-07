import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { latestProject } from "./data"; // Import your blog data or fetch it from an API
import Breadcrumbs from "./Breadcrumb";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEye,
  faRocket,
  faStar,
  faCalendarDays,
  faFileExport,
  faLaptopCode,
  faPenRuler,
  faPenToSquare,
  faUsersViewfinder,
  faMicrophoneLines,
  faFileVideo,
  faCompassDrafting,
  faGopuram,
} from "@fortawesome/free-solid-svg-icons";
function ProjectSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Assuming you have the blog data available
    const fetchedProduct = latestProject.find(
      (item) => item.id === parseInt(id)
    );

    // If fetching from an API, make an API call here

    setProduct(fetchedProduct);
  }, [id]);

  // Render loading or error state while fetching
  if (!product) {
    return (
      <div className="">
        <div class="flex items-center justify-center h-screen">
          <div class="relative">
            <div class="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div class="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-emerald-500 animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }
  const card = latestProject.slice(0, 4);
  const serviceData = product.skills;
  const categories = [
    {
      id: 1,
      Icon: faLaptopCode,
      service: "Remote",
      title: "Project location type",
    },
    {
      id: 2,
      Icon: faPenRuler,
      service: "Hourly Based Project",
      title: "Project Type",
    },
    {
      id: 3,
      Icon: faPenToSquare,
      service: "2 -3 Hours",
      title: "Duration",
    },
    {
      id: 4,
      Icon: faUsersViewfinder,
      service: "Fluent",
      title: "Level",
    },
    {
      id: 5,
      Icon: faMicrophoneLines,
      service: "Italian",
      title: "Language",
    },
    {
      id: 6,
      Icon: faFileVideo,
      service: "Professional",
      title: "English Level",
    },
  ];
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-10">
      <Breadcrumbs />
      <div className="block lg:flex justify-between gap-16 w-full">
        <div className="lg:w-9/12 mt-10 lg:mt-19">
          <div
            className="bg-no-repeat rounded-xl bg-cover"
            style={{
              backgroundImage: "url(/assets/img/project-detail1.jpg)",
            }}
          >
            <div className="py-8 lg:py-0 lg:h-64 flex flex-col justify-center w-10/12 m-auto">
              <div className="">
                <h2 className="text-3xl font-bold text-neutral-800">
                  {product.title}
                </h2>
                <p className="pt-2 text-neutral-800">{product.description}</p>
              </div>
              <div className="flex justify-items-center items-center pt-6 gap-5">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-emerald-900"
                  />
                  <span>{product.location}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-emerald-900"
                  />
                  <span>{product.date}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faEye} className="text-emerald-900" />
                  <span>{product.reviews}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-10 justify-items-stretch">
            {categories.map((categrie) => (
              <div
                className="rounded-md p-3 lg:p-5 relative flex gap-5 lg:gap-8 items-center"
                key={categrie.id}
              >
                <div>
                  <FontAwesomeIcon
                    icon={categrie.Icon}
                    className="text-emerald-900 h-8 font-semibold"
                  />
                </div>
                <div>
                  <h4 className="py-2 text-neutral-800 lg:text-lg lg:font-bold">
                    {categrie.title}
                  </h4>
                  <h6 className="text-neutral-600 text-sm before:content[''] before:absolute before:w-10 before:h-10 before:bg-[#FBF7ED] before:left-8 before:top-12 before:rounded-full before:-z-50">
                    {categrie.service}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <div className="pb-10">
              <h4 className="text-xl font-semibold">Project Description</h4>
              <div className="pt-4">
                <p className="text-neutral-500 pb-5">{product.description}</p>
                <p className="text-neutral-500">{product.des}</p>
              </div>
              <div>
                <p className="text-neutral-500">{product.subDescription}</p>
              </div>
            </div>
            <div className="py-8 lg:py-14 border-t">
              <p className="pb-6 text-xl font-semibold">Attachments</p>
              <div className="flex lg:gap-16 gap-8 flex-wrap">
                <div className="bg-[#5bbb7b1a] py-4 px-5 lg:w-54 rounded-lg group/file">
                  <a
                    href="#"
                    download
                    className="flex items-center lg:gap-16 gap-8"
                  >
                    <span>
                      Project <br />
                      <span className="text-neutral-500">PDF</span>{" "}
                    </span>
                    <FontAwesomeIcon
                      icon={faFileExport}
                      className="h-8 text-[#5bbb7b8f] group-hover/file:text-emerald-500"
                    />
                  </a>
                </div>
                <div className="bg-[#5bbb7b1a] py-4 px-5 lg:w-54 rounded-lg group/file">
                  <a
                    href="#"
                    download
                    className="flex items-center lg:gap-14 gap-8"
                  >
                    <span>
                      Information <br />
                      <span className="text-neutral-500">PDF</span>{" "}
                    </span>
                    <FontAwesomeIcon
                      icon={faFileExport}
                      className="h-8 text-[#5bbb7b8f] group-hover/file:text-emerald-500"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="py-8 lg:py-14 border-y">
              <p className="pb-6 text-xl font-semibold">Skills Required</p>
              <ul className="flex gap-4 lg:gap-6 flex-wrap">
                {Object.entries(serviceData).map(([key, value]) => (
                  <li
                    key={key}
                    className="bg-[#FFEDE8] px-4 py-2 rounded-full text-black text-sm hover:text-white hover:bg-emerald-500 hover:transition hover:duration-700 "
                  >{`${value}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="sticky top-0 mt-10 lg:w-[350px]">
            <div className="shadow-xl rounded-lg h-60 p-8 flex flex-col justify-between border bg-white">
              <div>
                <h4 className=" text-3xl font-bold text-neutral-700">
                  {product.pricingText}
                </h4>
                <span className="pl-1 font-base pt-3">{product.jobType}</span>
                <p className="pt-2 text-sm font-base">
                  Voluptatem accusantium dolor sit amet consectetur adipisicing
                  elit $11
                </p>
              </div>

              <Link
                to="#"
                className="inline-block px-6 py-3 w-full text-center text-base font-medium text-white bg-emerald-500 border-solid border-2 border-emerald-500 rounded hover:bg-transparent hover:text-emerald-500 hover:border-emerald-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
              >
                Submit a Proposal {product.pricingText}
              </Link>
            </div>
            <div className="shadow-xl rounded-lg p-8 border mt-8 lg:mt-12 bg-white">
              <h4 className="text-xl font-semibold mb-8">About The Seller</h4>
              <div className="flex gap-6 pb-10 border-b">
                <div className="h-20 w-20">
                  <img src={product.img} alt="" className="rounded-full" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{product.subTitle}</h4>
                  <p className="text-neutral-500 py-1">{product.development}</p>
                  <div className="flex">
                    <span className="">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-amber-300 pr-2"
                      />
                    </span>
                    <h4>{product.reviews}</h4>
                  </div>
                </div>
              </div>
              <div className="flex justify-between my-5 ">
                <div className="flex gap-2 items-center">
                  <h4 className="text-lg font-semibold">Location:</h4>
                  <p>{product.location}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <h4 className="text-lg font-semibold">Rate:</h4>
                  <p>{product.pricingText}</p>
                </div>
              </div>
              <Link
                to="#"
                className="inline-block px-6 py-3 w-full text-center text-base text-emerald-500 font-medium hover:text-white hover:bg-emerald-500 border-solid border-2 border-emerald-500 rounded hover:border-emerald-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h3 className="text-2xl font-semibold pb-8">Related Services</h3>
        <div className="mx-auto overflow-x-auto flex lg:grid gap-10 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 relative ">
          {card.map((latestProject) => (
            <Link to={`/projects/${latestProject.id}`} key={latestProject.id}>
              <div
                className="group/link border rounded-lg p-6 w-[300px] lg:w-full"
                key={latestProject.id}
              >
                <div className="flex gap-6 items-center">
                  <div className="w-3/12">
                    <img
                      src={latestProject.img}
                      alt="latestProject-img"
                      className=" rounded-full"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="text-neutral-500 text-sm">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-emerald-900"
                      />{" "}
                      {product.location}
                    </span>

                    <span className="text-neutral-500 text-sm">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-emerald-900"
                      />{" "}
                      {latestProject.proposal}
                    </span>
                    <span className="text-neutral-500 text-sm">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-emerald-900"
                      />{" "}
                      {latestProject.reviews}
                    </span>
                  </div>
                </div>

                <div className="">
                  <div className="pb-3 pt-3">
                    <h2 className="text-md font-semibold pb-2 leading-normal text-neutral-800 group-hover/link:text-emerald-500 group-hover/link:underline">
                      {latestProject.title.length > 45
                        ? `${latestProject.title.substring(0, 45)}...`
                        : latestProject.title}
                    </h2>
                    <p className="">
                      {latestProject.description.length > 60
                        ? `${latestProject.description.substring(0, 60)} ... `
                        : latestProject.description}
                    </p>
                  </div>
                  <div className="py-2">
                    <div className="flex items-center">
                      <h4 className=" text-xl font-semibold">
                        {latestProject.pricingText}
                      </h4>
                      <span className="pl-1 font-base">
                        / {latestProject.jobType}
                      </span>
                    </div>
                    <Link
                      to={`/projects/${latestProject.id}`}
                      className="inline-block px-6 py-4 text-lg font-medium text-emerald-500 w-full text-center mt-5 border-solid border-2 border-emerald-500 rounded-xl hover:bg-emerald-500 hover:text-white "
                    >
                      Send Proposal
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSingle;
