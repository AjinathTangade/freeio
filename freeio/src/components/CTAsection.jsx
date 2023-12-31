import React from "react";
import { Link } from "react-router-dom";
function CTAsection() {
  return (
    <>
      <section className="overflow-hidden container px-5 mx-auto sm:grid sm:grid-cols-2 sm:items-center ">
        <div className="max-w-7xl mt-10">
          <div className="mx-auto max-w-xlltr:sm:text-left rtl:sm:text-right">
            <h2 className="hidden md:block text-2xl font-bold text-emerald-800 leading-[2rem] lg:leading-[3rem] lg:text-5xl md:text-2xl sm:text-2xl">
              Hire the best freelancers for <br /> any job, online.
            </h2>
            <h2 className="md:hidden text-2xl font-bold text-emerald-800 leading-[2rem] lg:leading-[3rem] lg:text-5xl md:text-2xl sm:text-2xl">
              Hire the best freelancers for any <br />job, online.
            </h2>
            <p className="text-gray-500 mt-4 md:mt-4 ">
              Millions of people use freeio.com to turn their ideas into reality.
            </p>
            <div className="mt-4 md:mt-8">
              <Link
                to=""
                className="inline-block px-6 py-3 text-base font-medium text-white bg-emerald-500 border-solid border-2 border-emerald-500 rounded mr-4 hover:bg-emerald-800 hover:text-white hover:border-emerald-800"
              >
                Find Work
              </Link>
              <Link
                to=""
                className="inline-block px-6 py-3 text-base font-medium text-emerald-500 border-solid border-2 border-emerald-500 rounded ml-4 hover:bg-emerald-500 hover:text-white "
              >
                Find Talent
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            alt="Violin"
            src="/src/assets/img/cta-img.png"
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
        </div>

      </section>
      <section className="container mx-auto">
        <div className="bg-white py-12 md:py-24 lg:py-32">
          <div className="mx-auto px-6 pb-8 lg:px-8 border-b ">
            <h2 className="text-center text-base font-normal leading-8 text-gray-600">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-5 pb-10 overflow-x-auto flex sm:overflow-x-auto lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTAsection;
