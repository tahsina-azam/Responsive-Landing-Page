import React from "react";

function SideBySideRow3(props) {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureCard.png')" }}
        >
          <div className="text-center md:p-8 sm:p-2">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
                />
              </svg>
              <h1 className={props.style}>{props.heading}</h1>
            </div>

            <p className={props.color}>{props.text1}</p>
            <p className={props.color}>{props.text2}</p>
            <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2">
              Learn More
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
              Apply now
            </button>
          </div>
        </div>
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureMobiles.png')" }}
        >
          <div className="text-center md:p-8 sm:p-2">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
                />
              </svg>
              <h1 className={props.style}>{props.headings}</h1>
            </div>

            <p className={props.color}>{props.texts1}</p>
            <p className={props.color}>{props.texts2}</p>
            <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2">
              Get your Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBySideRow3;
