// import React from "react";
// import Image from "next/image";

// function SideBySide() {
//   return (
//     <div>
//       <div className="card lg:card-side bg-base-100 shadow-xl">
//         <div
//           className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
//           style={{ backgroundImage: "url('figureWdc.png')" }}
//         >
//           <div className="text-center p-8">

//             <p className="text-white">text</p>
//             <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2">
//               Learn More
//             </button>
//             <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
//               Buy
//             </button>
//           </div>
//         </div>
//         <div
//           className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
//           style={{ backgroundImage: "url('figureXbox.png')" }}
//         >
//           <div className="text-center p-8">
//             <h1 className="text-black">header</h1>
//             <p className="">text</p>
//             <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2">
//               Learn More
//             </button>
//             <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
//               Buy
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBySide;

import React, { useState, useEffect } from "react";
import Image from "next/image";

function SideBySide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/updated-data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  // Assuming data contains exactly two items
  const item1 = data[0] || {};
  const item2 = data[1] || {};

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        {/* Render first item */}
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px] flex flex-col justify-end"
          style={{ backgroundImage: `url('${item1.img_url}')` }}
        >
          <div className="text-center p-8 flex flex-col items-center">
            <p className="text-white">{item1.text}</p>
            <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2">
              Learn More
            </button>
          </div>
        </div>

        {/* Render second item */}
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px] flex flex-col justify-end"
          style={{ backgroundImage: `url('${item2.img_url}')` }}
        >
          <div className="text-center p-8 flex flex-col items-center">
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
              <h1 className="text-black md:font-bold text-3xl">
                {item2.header}
              </h1>
            </div>
            <p className="text-black">{item2.text}</p>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Learn More
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBySide;
