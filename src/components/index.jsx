import React from "react";

const Index = () => {
  return (
    <div className="div">
      <div className="relative w-full h-96">
        <img
          src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Dd_Azan4EhIQo1a6JL5LGg.png"
          alt="รองเท้า"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 pl-32 w-full h-full bg-black bg-opacity-30 flex items-center justify-start">
          <div className="text-center text-white p-4">
            <h2 className="text-6xl font-bold mb-4">Building things </h2>
            <h2 className="text-6xl font-bold mb-4">is our mission</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-14 mt-14">Our Reputation</h1>
        {/* Card 3*/}
        <div className="grid grid-cols-3 gap-44">
          <div className="card bg-base-100 w-96 shadow-xl border-2 border-slate-300 rounded-md mb-14">
            <div className="card-body">
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f46600"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
              <h2 className="card-title">Best Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                est?
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl border-2 border-slate-300 rounded-md mb-14">
            <div className="card-body">
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f46600"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h2 className="card-title">Best Teams</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
                debitis?
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl border-2 border-slate-300 rounded-md mb-14">
            <div className="card-body">
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f46600"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
              <h2 className="card-title">Best Designs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ipsam!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-72 min-h-screen ">
      <div className="relative bg-white rounded-lg shadow-lg max-w-screen-lg">
        {/* Image */}
        <img
          src="/src/assets/person.png" // Replace with your actual image source
          alt="Person"
          className="rounded-lg "
        />

        {/* Text Box */}
        <div className="absolute right-0 top-1/2 ml-96  transform -translate-y-1/2 translate-x-48 bg-blue-600 p-9 text-white rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold mb-4">About us</h2>
          <p className="text-sm mb-4">
            For more than 30 years we have been delivering world-class
            construction and we've built many lasting relationships along the
            way.
          </p>
          <p className="text-sm mb-6">
            We've matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <button className="btn bg-white text-blue-600 font-bold py-2 px-4 rounded">
            More on Our History
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Index;
