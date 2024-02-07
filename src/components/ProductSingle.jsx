import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog } from "./data"; // Import your blog data or fetch it from an API
import Breadcrumbs from "./Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faStar,
  faMoneyCheckDollar,
  faHeart,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

function ProductSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Assuming you have the blog data available
    const fetchedProduct = blog.find((item) => item.id === parseInt(id));

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
  const card = blog.slice(0, 4);
  const serviceData = product.service;
  return (
    <div className="container mx-auto px-5 lg:px-10 py-10 border-b">
      <Breadcrumbs />
      <div
        className="bg-no-repeat rounded-xl bg-cover"
        style={{
          backgroundImage: "url(/assets/img/service-detail.jpg)",
        }}
      >
        <div className="h-56 lg:h-72 flex flex-col justify-center w-10/12 m-auto mt-8">
          <h2 className=" text-xl lg:text-4xl font-bold">{product.blogTile}</h2>
          <div className="flex gap-2 lg:gap-10 items-center pt-5">
            <div>
              <img
                src={product.authorImg}
                alt={product.blogTile}
                className="h-14 w-14 rounded-full"
              />
            </div>
            <div className="flex">
              <span className="">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-amber-300 pr-2 pt-3"
                />
              </span>
              <h4 className="text-neutral-700 py-2 text-lg font-semibold">
                {product.reviwes}
              </h4>
            </div>
            <div>
              <h4 className="text-neutral-700 py-2 text-lg font-semibold flex items-center gap-2">
                <span className="text-3xl">
                  <FontAwesomeIcon icon={faMoneyCheckDollar} />
                </span>
                <h4 className="">{product.pricingText}</h4>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:flex justify-between gap-16 lg:px-8 w-full">
        <div className="lg:w-10/12 mt-10 lg:mt-19">
          <div className="">
            <img
              src={product.img}
              alt=""
              className="w-full lg:max-w-6xl h-full lg:max-h-80 object-cover rounded-lg"
            />
          </div>
          <div className="pt-10">
            <h4 className="text-xl font-semibold">Service Description</h4>
            <div className="pt-3">
              <p className="text-neutral-500">{product.description}</p>
            </div>
            <div className="py-8 text-neutral-500 text-md">
              <p className="pb-2">Services I provide:</p>
              <ul>
                {Object.entries(serviceData).map(([key, value]) => (
                  <li key={key}>{`${key}) ${value}`}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-neutral-500">{product.subDescription}</p>
            </div>
            <div className="grid grid-cols-3 gap-16 lg:gap-36 pt-7 pb-10">
              <div>
                <h4>App type</h4>
                <span className="text-neutral-500">{product.appType}</span>
              </div>
              <div>
                {" "}
                <h4>Design tool</h4>
                <span className="text-neutral-500">{product.designTool}</span>
              </div>
              <div>
                <h4>Device</h4>{" "}
                <span className="text-neutral-500">{product.device}</span>
              </div>
            </div>
          </div>
          <div className="border-t py-10">
            <div>
              <h5 className="text-2xl">{product.reviwes}</h5>
              <div className="lg:block xl:flex gap-5 lg:gap-10 lg:justify-around items-center">
                <div className="my-8">
                  <div className="flex p-16 md:p-16 lg:p-20 bg-[#FFEDE8] items-center rounded-lg justify-center">
                    <span className="">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-amber-300 pr-2"
                      />
                    </span>
                    <h4 className="text-neutral-700 py-2  text-2xl lg:text-4xl font-semibold ">
                      {product.reviwes}
                    </h4>
                  </div>
                </div>
                <div className="md:w-6/12 lg:w-full xl:w-2/5">
                  <div className="flex justify-around gap-2 lg:gap-4 items-center py-1">
                    <p className="w-16">5 Star</p>{" "}
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-yellow-400 h-1 w-4/5 rounded-full"></div>
                    </div>
                    <p className="text-neutral-500">50%</p>
                  </div>
                  <div className="flex justify-around gap-4 items-center py-1">
                    <p className="w-16">4 Star</p>{" "}
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-yellow-400 h-1 w-4/5 rounded-full"></div>
                    </div>
                    <p className="text-neutral-500">40%</p>
                  </div>
                  <div className="flex justify-around gap-4 items-center py-1">
                    <p className="w-16">3 Star</p>{" "}
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-yellow-400 rounded-full"></div>
                    </div>
                    <p className="text-neutral-500">0%</p>
                  </div>
                  <div className="flex justify-around gap-4 items-center py-1">
                    <p className="w-16">2 Star</p>{" "}
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-yellow-400 rounded-full"></div>
                    </div>
                    <p className="text-neutral-500">0%</p>
                  </div>
                  <div className="flex justify-around gap-4 items-center py-1">
                    <p className="w-16">1 Star</p>{" "}
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className="bg-yellow-400 rounded-full"></div>
                    </div>
                    <p className="text-neutral-500">0%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="sticky top-0 lg:mt-[-100px] lg:w-[350px]">
            <div className="shadow-xl rounded-lg h-64 p-8 flex flex-col justify-between border bg-white">
              <div>
                <h4 className=" text-3xl font-bold text-neutral-700">
                  {product.pricingText}
                </h4>
                <p className="pt-2">
                  Addon Standard Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium. $45
                </p>
              </div>

              <Link
                to="#"
                className="inline-block px-6 py-3 w-full text-center text-base font-medium text-white bg-emerald-500 border-solid border-2 border-emerald-500 rounded hover:bg-transparent hover:text-emerald-500 hover:border-emerald-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
              >
                Buy Now {product.pricingText}
              </Link>
            </div>
            <div className="shadow-xl rounded-lg p-8 border mt-8 lg:mt-12 bg-white">
              <h4 className="text-xl font-semibold mb-8">About The Seller</h4>
              <div className="flex gap-10 pb-10 border-b">
                <div className="h-20 w-20">
                  <img
                    src={product.authorImg}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    {product.authorName}
                  </h4>
                  <p className="text-neutral-500 py-1">{product.development}</p>
                  <div className="flex">
                    <span className="">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-amber-300 pr-2"
                      />
                    </span>
                    <h4>{product.reviwes}</h4>
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
                className="inline-block px-6 py-3 w-full text-center text-base text-emerald-500 font-medium hover:text-white border-solid border-2 border-emerald-500 rounded hover:bg-emerald-500  hover:border-emerald-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h3 className="text-2xl font-semibold">Related Services</h3>
        <div className="mx-auto overflow-x-auto flex lg:grid gap-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 pt-12 px-3">
          {card.map((blog) => (
            <Link to={`/products/${blog.id}`} key={blog.id}>
              <div className="group/link relative border w-[300px] lg:w-full" key={blog.id}>
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

                <div className="bg-white p-4">
                  <div className="border-b pb-3">
                    <h3 className="text-neutral-500 hover:text-neutral-900">
                      {blog.development}
                    </h3>

                    <h2
                      to="/jobs"
                      className="text-lg font-semibold leading-normal text-neutral-800 group-hover/link:text-emerald-500 group-hover/link:underline"
                    >
                      {blog.blogTile}
                    </h2>
                    <div className="flex">
                      <span className="">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-amber-300 pr-2 pt-3"
                        />
                      </span>
                      <h4 className="text-neutral-500 py-2">{blog.reviwes}</h4>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSingle;
