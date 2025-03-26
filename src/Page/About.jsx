import React from "react";
import machine from "../assets/machine.jpg";

function About() {
  return (
    <>
      <section className="text-gray-600 bg-[#ACE8F4] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Delivering Excellence in
              <br className="hidden lg:inline-block" />
              Plastic Manufacturing
            </h1>
            <p className="mb-8 leading-relaxed">
              Established with a vision to redefine the plastic industry, Yogi
              Plastic has been a leader in high-quality plastic raw materials.
              We cater to various sectors, including household, consumer goods,
              packaging, automotive, and industrial applications. Our focus is
              on providing eco-friendly and cost-effective plastic solutions,
              ensuring that our customers receive durable, reliable, and
              sustainable products.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={machine}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:flex-nowrap items-start">
            {/* Left Side - Our Mission */}
            <div className="md:w-1/2 w-full p-4">
              <div className="h-full bg-gray-100 p-8 rounded">
                <h2 className="title-font font-medium text-gray-900 text-lg mb-4">
                  Our Mission
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-6 h-6 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed">
                  At Yogi Plastic, our mission is to provide the highest quality
                  plastic raw materials that empower our clients to excel in
                  their industries. We are committed to sustainability and
                  continuous innovation, ensuring that every product we offer is
                  not only durable and reliable but also eco-friendly and
                  cost-effective.
                </p>
              </div>
            </div>

            {/* Right Side - Our Vision */}
            <div className="md:w-1/2 w-full p-4">
              <div className="h-full bg-gray-100 p-8 rounded">
                <h2 className="title-font font-medium text-gray-900 text-lg mb-4">
                  Our Vision
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-6 h-6 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed">
                  We envision Yogi Plastic as a global leader in plastic
                  manufacturing, where innovation and environmental
                  responsibility drive every decision. Our goal is to redefine
                  industry standards by delivering superior raw materials that
                  meet the diverse needs of sectors such as household goods,
                  packaging, automotive, and industrial applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ACE8F4] dark:bg-gray-900">
        <div className="container px-6 py-5 mx-auto">
          <div className="grid grid-cols-1 gap-8 mx-auto mt-5 lg:grid-cols-2 max-w-7xl">
            {/* CEO Section */}
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Leading Innovation & Growth 🚀
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                A visionary leader dedicated to transforming the plastic
                industry through innovation and excellence.
              </p>
              <p className="leading-loose text-lg text-gray-500 dark:text-gray-400 mt-4">
                Steering the company into a new era of technological advancement
                and market expansion is
                <strong> CEO Dishant Sangani</strong>, whose dynamic leadership
                and forward-thinking strategies have been pivotal in positioning
                Yogi Plastic as a global leader in the industry. With a
                relentless focus on innovation, efficiency, and customer-centric
                solutions, Dishant has transformed operational practices to meet
                the evolving demands of diverse sectors. His commitment to
                fostering a collaborative environment, while integrating
                cutting-edge sustainable practices, ensures that Yogi Plastic
                remains at the forefront of the plastic manufacturing landscape.
              </p>
              <div className="flex items-center mt-8">
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500 text-xl">
                    Dishant Sangani
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    CEO Of Yogi Plastic PVT LTD
                  </span>
                </div>
              </div>
            </div>
            {/* Owner Section */}
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                A Legacy of Excellence & Sustainability 🌍
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                A pioneering entrepreneur committed to quality, sustainability,
                and shaping the future of plastic manufacturing.
              </p>
              <p className="leading-loose text-lg text-gray-500 dark:text-gray-400 mt-4">
                Under the visionary guidance of{" "}
                <strong>Ashokbhai Sangani</strong>, Yogi Plastic has cultivated
                a legacy steeped in innovation, excellence, and a deep
                commitment to sustainable practices. As the founder and owner,
                Ashokbhai has been instrumental in shaping the company’s ethos
                and strategic direction, ensuring that every facet of production
                adheres to the highest quality standards while championing
                environmental responsibility. His passion for redefining the
                plastic industry has not only driven the company’s growth but
                also inspired a culture of continuous improvement and customer
                satisfaction, laying a strong foundation for future generations.
              </p>
              <div className="flex items-center mt-8">
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500 text-xl">
                    Ashokbhai Sangani
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Owner Of Yogi Plastic PVT LTD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
