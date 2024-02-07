import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Marketplace() {
  return (
    <div className="container mx-auto px-5 pt-24 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-20">
      <div>
        <img src="/assets/img/h41.png" alt="Marketplace" />
      </div>
      <div className="lg:pr-0 xl:pr-52">
        <h2 className="text-3xl font-bold leading-10">
          Join World's Best Marketplace for Workers
        </h2>
        <h4 className="leading-7 py-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h4>
        <ul>
          <li className="py-2">
            <FontAwesomeIcon icon={faCheck} className="pr-2" />
            Last Education of Bachelor Degree
          </li>
          <li className="py-2">
            {" "}
            <FontAwesomeIcon icon={faCheck} className="pr-2" />
            More Than 15 Years Experience
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faCheck} className="pr-2" />
            12 Education Award Winning
          </li>
        </ul>
        <Link
          to="/projects"
          className="inline-block px-6 py-3 text-base font-medium text-emerald-500 border-solid border-2 border-emerald-500 rounded mt-5 hover:bg-emerald-500 hover:text-white "
        >
          Find Talent
        </Link>
      </div>
    </div>
  );
}

export default Marketplace;
