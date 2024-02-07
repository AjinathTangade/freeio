import React from "react";
import { aboutImg } from "./data";
import Marketplace from "./Marketplace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faHandHoldingDollar,
  faUnlock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Innovative, membership } from "./data";
function AboutUs() {
  const categories = [
    {
      id: 1,
      Icon: faMedal,
      service:
        "Check any pro’s work samples, client reviews, and identity verification",
      title: "Proof of quality",
    },
    {
      id: 2,
      Icon: faHandHoldingDollar,
      service:
        "Check any pro’s work samples, client reviews, and identity verification",
      title: "No cost until you hire",
    },
    {
      id: 3,
      Icon: faUnlock,
      service:
        "Check any pro’s work samples, client reviews, and identity verification",
      title: "Safe and secure",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="pt-14">
          <h2 className="text-2xl md:text-4x font-bold">About</h2>
          <p className="pt-2">
            Give your visitor a smooth online experience with a solid UX design.
          </p>
        </div>
        <div>
          <div className="flex justify-evenly flex-wrap py-8 xl:py-16 gap-y-4 items-center">
            {aboutImg.map((img) => (
              <div key={img} className="w-5/12 xl:w-fit">
                <img src={img.img} alt="about img" className="shadow-lg" />
              </div>
            ))}
          </div>
          <div className="pb-16">
            <Marketplace />
          </div>
          <div className="bg-[#F0EFEC] rounded-lg">
            <div className=" block md:flex justify-between flex-wrap items-center w-full">
              <div className="p-5 lg:pl-10 md:w-6/12">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold md:leading-10">
                    A whole world of freelance <br /> talent at your fingertips
                  </h4>
                </div>
                <div className="flex flex-col gap-6">
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
              </div>
              <div className="bg-white rounded-lg md:w-6/12">
                <div className="border-gray-900/10">
                  <img src="/assets/img/about5.jpg" alt="about us" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="flex lg:w-5/6 mx-auto justify-between gap-8 lg:gap-20 items-center flex-wrap ">
            <div>
              <CountUp start={0} end={890} delay={0}>
                {({ countUpRef }) => (
                  <>
                    <div className="flex flex-col items-center">
                      <div>
                        <span ref={countUpRef} className="text-4xl font-bold" />
                        <span className="text-4xl font-bold">M</span>
                      </div>
                    </div>
                    <div>
                      <span>Total Freelancer</span>
                    </div>
                  </>
                )}
              </CountUp>
            </div>
            <div>
              <CountUp start={0} end={750} delay={0}>
                {({ countUpRef }) => (
                  <>
                    <div className="flex flex-col items-center">
                      <div>
                        <span ref={countUpRef} className="text-4xl font-bold" />
                        <span className="text-4xl font-bold">M</span>
                      </div>
                    </div>
                    <div>
                      <span>Positive Review</span>
                    </div>
                  </>
                )}
              </CountUp>
            </div>
            <div>
              <CountUp start={0} end={98} delay={0}>
                {({ countUpRef }) => (
                  <>
                    <div className="flex flex-col items-center">
                      <div>
                        <span ref={countUpRef} className="text-4xl font-bold" />
                        <span className="text-4xl font-bold">M</span>
                      </div>
                    </div>
                    <div>
                      <span>Order recieved</span>
                    </div>
                  </>
                )}
              </CountUp>
            </div>
            <div>
              <CountUp start={0} end={336} delay={0}>
                {({ countUpRef }) => (
                  <>
                    <div className="flex flex-col items-center">
                      <div>
                        <span ref={countUpRef} className="text-4xl font-bold" />
                        <span className="text-4xl font-bold">M</span>
                      </div>
                    </div>
                    <div>
                      <span>Projects Completed</span>
                    </div>
                  </>
                )}
              </CountUp>
            </div>
          </div>
        </div>

       
          <div
            style={{
              backgroundImage: "url(/assets/img/h8-bg2.jpg)",
            }}
            className="py-20 rounded-lg"
          >
            <div className="container mx-auto px-5 flex flex-wrap md:flex-nowrap gap-24 justify-center items-center">
              <div className="pl-10">
                <img src="/assets/img/about6.png" alt="Marketplace" />
              </div>
              <div className="lg:pr-0 xl:pr-52">
                <h2 className="text-3xl font-bold leading-10">
                  Truested By Best Freelancer
                </h2>
                <h4 className="leading-7 py-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </h4>
                <ul>
                  <li className="py-2 flex gap-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="px-[6px] py-[5px] rounded-full bg-[#C8973B] text-white"
                    />
                    Last Education of Bachelor Degree
                  </li>
                  <li className="py-2 flex gap-4">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="px-[6px] py-[5px] rounded-full bg-[#C8973B] text-white"
                    />
                    More Than 15 Years Experience
                  </li>
                  <li className="py-2 flex gap-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="px-[6px] py-[5px] rounded-full bg-[#C8973B] text-white"
                    />
                    12 Education Award Winning
                  </li>
                </ul>
                <Link
                  to="/projects"
                  className="inline-block mt-8 px-9 py-4 text-base font-medium text-white border-solid bg-emerald-800 rounded mr-4 hover:bg-black hover:text-white hover:border-emerald-800"
                >
                  Find Talent
                </Link>
              </div>
            </div>
          </div>
     
        <div className="xl:pt-20">
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

        <div className="bg-white pt-10 pb-24">
          <div className="mx-auto px-6 lg:px-8">
            <h2 className="text-center text-base font-normal leading-8 text-gray-600">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 pb-14 overflow-x-auto flex gap-10 sm:overflow-x-auto lg:mx-0 lg:max-w-none lg:grid-cols-5">
              {Innovative.map((innova) => (
                <img
                  src={innova.img}
                  alt="innovative-image"
                  className="col-span-2 max-h-6 w-full object-contain lg:col-span-1 "
                  key={innova.id}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#FFEDE8] flex justify-between items-center flex-wrap lg:flex-nowrap lg:gap-20 px-10 rounded-lg">
          <div className="pb-10 pt-10">
            <h4 className="text-3xl font-bold md:leading-10">
              Find the talent needed to get your <br />
              business growing.
            </h4>
            <p className="pt-3 pb-6">
              Advertise your jobs to millions of monthly users and search 15.8
              million CVs
            </p>
            <Link
              to="/projects"
              className="inline-block px-9 py-4 text-base font-medium text-white border-solid bg-emerald-800 rounded mr-4 hover:bg-black hover:text-white hover:border-emerald-800"
            >
              Find Talent
            </Link>
          </div>
          <div className="hidden md:block md:mt-[-100px]">
            <img src="/assets/img/about-9.png" alt="about-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
