import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function convertDateFormat(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [day, month, year] = inputDate.split("-");
  const monthIndex = months.indexOf(month) + 1;

  // Ensure leading zeros for day and month
  const formattedDay = day.padStart(2, "0");
  const formattedMonth = monthIndex.toString().padStart(2, "0");

  // Form the new date string in "yyyy-mm-dd" format
  const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

  return formattedDate;
}

const ProductList = ({ blog }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeInterval, setSelectedTimeInterval] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  useEffect(() => {
    // Extract unique categories from blog
    const categoriesSet = new Set(blog.map((product) => product.development));
    const uniqueCategoriesArray = Array.from(categoriesSet);
    setUniqueCategories(uniqueCategoriesArray);
  }, [blog]);

  const handleCheckboxChange = (category) => {
    // Check if the category is already selected
    if (selectedCategories.includes(category)) {
      // If it is, remove it from the selected categories
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // If it's not selected, add it to the selected categories
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  const handleTimeIntervalChange = (event) => {
    const selectedTimeInterval = event.target.value;
    setSelectedTimeInterval(selectedTimeInterval);
  };

  const handleBudgetChange = (event) => {
    const selectedBudget = event.target.value;
    setSelectedBudget(selectedBudget);
  };

  const filterByTimeInterval = (productDate) => {
    if (selectedTimeInterval === "All") {
      return true; // No time filter, show all
    }

    const currentDate = new Date();
    const [day, month, year] = productDate.split("-");
    const productDateTime = new Date(`${year}-${month}-${day}`);

    switch (
      selectedTimeInterval
      // ... (rest of the cases remain the same)
    ) {
    }
  };

  const filterByBudget = (productPrice) => {
    if (selectedBudget === "All") {
      return true; // No budget filter, show all
    }

    // Assuming productPrice is in the format "$xxx"
    const price = parseInt(productPrice.replace("$", ""), 10);

    switch (selectedBudget) {
      case "Less than $50":
        return price < 50;
      case "$50 - $100":
        return price >= 50 && price <= 100;
      case "$100 - $200":
        return price > 100 && price <= 200;
      case "Over $200":
        return price > 200;
      default:
        return false; // Unknown filter
    }
  };

  const filteredProducts = blog.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.development);

    const inputDate = product.date;
    const convertedDate = convertDateFormat(inputDate);

    const dateMatch = !selectedDate || selectedDate === convertedDate;

    const timeIntervalMatch = filterByTimeInterval(product.date);

    const budgetMatch = filterByBudget(product.pricingText);

    return categoryMatch && dateMatch && timeIntervalMatch && budgetMatch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-10 ">
        <div className="hidden md:block row-span-2 w-60">
          <div className="border-b">
            <h3 className="text-2xl font-semibold text-neutral-700 pb-4">
              Categories
            </h3>
            <ul className="pb-4">
              {uniqueCategories.map((development) => (
                <li key={development} className="flex gap-4">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(development)}
                    onChange={() => handleCheckboxChange(development)}
                    className="my-3 w-4 h-4 bg-gray-100 border-gray-300 rounded"
                  />
                  <label className="text-base text-neutral-700 font-medium flex items-center gap-5">
                    {development}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-6 border-b">
            <h3 className="text-2xl font-semibold text-neutral-700 pb-4">
              Time Interval
            </h3>
            <select
              value={selectedTimeInterval}
              onChange={handleTimeIntervalChange}
              className="border-2 rounded-lg py-3 px-2 w-60 text-base text-neutral-700 font-medium focus:ring-0 focus:outline-none"
            >
              <option
                value="All"
                className="bg-gray-100 text-base text-neutral font-medium py-5"
              >
                All
              </option>
              <option
                value="Last Hour"
                className="bg-gray-100 text-base text-neutral font-medium py-5"
              >
                Last Hour
              </option>
              <option
                value="Last 24 hours"
                className="bg-gray-100 text-base text-neutral font-medium py-5"
              >
                Last 24 hours
              </option>
              <option
                value="Last 7 days"
                className="bg-gray-100 text-base text-neutral font-medium py-5"
              >
                Last 7 days
              </option>
              <option
                value="Last 14 days"
                className="bg-gray-100 text-base text-neutral font-medium py-5"
              >
                Last 14 days
              </option>
              <option
                value="Last 30 days"
                className="bg-gray-100 text-base text-neutral font-medium py-5"
              >
                Last 30 days
              </option>
            </select>
          </div>
          <div className="py-6 border-b">
            <h3 className="text-2xl font-semibold text-neutral-700 pb-4">
              Date
            </h3>
            <input
              type="date"
              value={selectedDate || ""}
              onChange={handleDateChange}
              className="border-2 rounded-lg py-3 px-2 w-60 text-base text-neutral-700 font-medium focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="py-6 border-b">
            <h3 className="text-2xl font-semibold text-neutral-700 pb-4">
              Budget
            </h3>
            <select
              value={selectedBudget}
              onChange={handleBudgetChange}
              className="border-2 rounded-lg py-3 px-2 w-60 text-base text-neutral-700 font-medium focus:ring-0 focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Less than $50">Less than $50</option>
              <option value="$50 - $100">$50 - $100</option>
              <option value="$100 - $200">$100 - $200</option>
              <option value="Over $200">Over $200</option>
            </select>
          </div>
        </div>
        <div className="row-span-2 col-span-3">
          <div className="">
            <h5 className="pb-8">
              Showing {indexOfFirstProduct + 1} – {indexOfLastProduct} of{" "}
              {filteredProducts.length} results{" "}
            </h5>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  xl:gap-10 relative">
              {currentProducts.map((blog) => (
                <Link to={`/products/${blog.id}`} key={blog.id}>
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

                    <div className="bg-white p-6 border">
                      <div className="border-b pb-3">
                        <h3 className="text-neutral-500 hover:text-neutral-900">
                          {blog.development}
                        </h3>

                        <h2 className="text-lg font-semibold leading-normal text-neutral-800 group-hover/link:text-emerald-500 group-hover/link:underline">
                          {blog.blogTile}
                        </h2>
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
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination flex justify-center mt-6">
            {pageNumbers.map((number) => (
              <span
                key={number}
                onClick={() => handlePageClick(number)}
                className={
                  currentPage === number
                    ? "active m-1 w-10 h-10 p-2 text-center text-white bg-emerald-500 rounded-full"
                    : "w-10 text-center h-10 p-2 m-1 hover:bg-emerald-500 hover:rounded-full hover:text-white"
                }
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
