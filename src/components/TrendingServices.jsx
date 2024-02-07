import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faStar,
  faHeart,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const blog = [
  {
    "id": 1,
    "img": "/src/assets/img/service12-495x370.jpg",
    "development": "Development & IT",
    "blogTile": "Web development, with HTML, CSS, JavaScript and PHP",
    "reviwes": "4.5 (2 Reviews)",
    "authorImg": "/src/assets/img/12-150x150.jpg",
    "authorName": "Agent Pakulla",
    "pricingText": "$229",
  },
  {
    "id": 2,
    "img": "./src/assets/img/service9-495x370.jpg",
    "development": "Design & Creative",
    "blogTile": "Developers drop the framework folder into a new parent",
    "reviwes": "4.3 (23 Reviews)",
    "authorImg": "/src/assets/img/5.jpg",
    "authorName": "John Powell",
    "pricingText": "$39",
  },
  {
    "id": 3,
    "img": "/src/assets/img/service11-495x370.jpg",
    "development": "Development & IT",
    "blogTile": "Flexibility & Customization with CMS vs PHP Framework",
    "reviwes": "5 (12 Reviews)",
    "authorImg": "/src/assets/img/8.jpg",
    "authorName": "Thomas Powell",
    "pricingText": "$199",
  },
  {
    "id": 4,
    "img": "/src/assets/img/service10-495x370.jpg",
    "development": "Design & Creative",
    "blogTile": "PHP framework that you can use to create your own custom",
    "reviwes": "3.2 (10 Reviews)",
    "authorImg": "/src/assets/img/bg-video-150x150.png",
    "authorName": "Ali Tufan",
    "pricingText": "$195",
  },
];
function TrendingServices() {
 
  return (
    <>
      <div className="bg-[#FBF7ED]">
        <div className="container mx-auto pb-24 px-5 pt-24 ">
          <div className="block lg:flex lg:justify-between pb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Trending Services
              </h2>
              <p className="text-base font-normal leading-8 text-gray-600 pt-1">
                Most viewed and all-time top-selling services
              </p>
            </div>
            <div className="flex items-center">
              <Link className="flex items-center">
                <h3 className="text-neutral-600 font-semibold">
                  All Services{" "}
                </h3>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-neutral-600 font-semibold pl-2"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10  relative ">
                {blog.map((blog) => (
                  <div className="group/link relative" key={blog.id}>
                    <div className=" absolute top-0 right-0 px-3 py-2 m-3 bg-white rounded-full shadow-md hover:bg-emerald-500 hover:text-white">
                      <FontAwesomeIcon icon={faHeart} className="" />
                    </div>
                    <div className="absolute top-[-30px] right-[-10px] hidden group-hover/link:block">
                      <div className="px-2 py-2 rounded-md bg-black text-white text-xs">
                        Add Favorite
                      </div>
                      <div className="mt-[-10px] flex justify-center">
                        <FontAwesomeIcon icon={faSortDown} />
                      </div>
                    </div>

                    <img src={blog.img} alt="blog-img" />

                    <div className="bg-white p-6">
                      <div className="border-b pb-3">
                        <Link>
                          <h3 className="text-neutral-500 hover:text-neutral-900">
                            {blog.development}
                          </h3>
                        </Link>
                        <Link className="text-lg font-semibold leading-normal text-neutral-800 group-hover/link:text-emerald-500 group-hover/link:underline">
                          {blog.blogTile}
                        </Link>
                        <div className="flex">
                          <span className="">
                            <FontAwesomeIcon
                              icon={faStar}
                              className="text-amber-300 pr-2 pt-3"
                            />
                          </span>
                          <h4 className="text-neutral-500 py-2">
                            {blog.reviwes}
                          </h4>
                        </div>
                      </div>
                      <div className="flex pt-5 justify-between items-center">
                        <div className="flex">
                          <img
                            src={blog.authorImg}
                            alt="blog-img"
                            className="h-10 w-10 rounded-full"
                          />
                          <span className="text-center pt-2 pl-3">
                            {blog.authorName}
                          </span>
                        </div>
                        <div>
                          <span className="text-neutral-600">Starting at:</span>
                          <span className="font-semibold pl-1">
                            {blog.pricingText}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingServices;
