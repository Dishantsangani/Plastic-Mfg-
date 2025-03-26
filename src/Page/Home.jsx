import React from "react";
import homebg from "../assets/homebg.jpg";
import polypp from "../assets/pp.jpg";
import virgin from "../assets/virgin2.jpg";
import recycle from "../assets/recycle.jpg";
import highquelity from "../assets/high.jpg";

function Home() {
  return (
    <>
      <section className="text-gray-600 bg-[#ACE8F4] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Manufacturing Excellence,
              <br className="hidden lg:inline-block" />
              Supplying Quality
            </h1>
            <p className="mb-8 leading-relaxed">
              Yogi Plastic is a leading manufacturer of high-quality plastic
              products and a trusted supplier of premium raw materials. We are
              committed to innovation, durability, and sustainability, providing
              top-tier solutions for diverse industrial and commercial needs.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#4BC2CE] border-0 py-2 px-6 focus:outline-none hover:bg-[#4bc3cec2] rounded text-lg">
                Contact For Query
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={homebg}
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container max-w-6xl px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Industries We Serve
          </h2>
          <p className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Yogi Plastic specializes in{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Household & Consumer Goods
            </span>{" "}
            and Supplying Premium Raw Materials.
          </p>
          <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { src: polypp, title: "PP Granules" },
              { src: virgin, title: "Virgin Granule" },
              { src: recycle, title: "Recycle" },
            ].map((item, index) => (
              <div key={index} className="w-full max-w-xs mx-auto text-center">
                <img
                  className="object-cover object-center w-full h-52 mx-auto rounded-lg shadow-md"
                  src={item.src}
                  alt={item.title}
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-[#ACE8F4] dark:bg-gray-900">
        <div className="container px-5 py-14 mx-auto flex flex-wrap items-center">
          {/* Image Section (Left Side) */}
          <div className="lg:w-1/2 w-full">
            <img
              className="rounded-lg object-cover object-center w-full h-[300px] md:h-[300px]"
              src={highquelity}
              alt="High-Quality Materials"
              loading="lazy"
            />
          </div>

          {/* Text Section (Right Side) */}
          <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
            <h1 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              High-Quality Materials
            </h1>
            <p className="leading-relaxed text-lg  text-gray-700 dark:text-gray-300">
              At <span className="font-semibold">Yogi Plastic</span>, we are
              committed to delivering high-quality plastic raw materials that
              ensure durability, strength, and reliability. Our premium PP
              granules, virgin granules, and recycled plastics meet industry
              standards, making them ideal for various applications, from
              consumer goods to industrial manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed text-lg">
              At{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Yogi Plastic
              </span>{" "}
              we are committed to providing sustainable and eco-friendly plastic
              solutions that help reduce environmental impact without
              compromising quality. By utilizing advanced recycling techniques
              and sourcing high-quality raw materials, we ensure that our
              products promote a circular economy where plastics are reused and
              repurposed efficiently. Our premium PP granules, virgin granules,
              and recycled plastics meet stringent industry standards, making
              them ideal for various applications while supporting responsible
              manufacturing practices. 
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Sustainable & Eco-Friendly Solutions
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
