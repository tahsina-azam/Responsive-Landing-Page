import React, { useState, useEffect } from "react";

function DynamicHeroIntro(props) {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const response = await fetch("/api/hero-data");
        const data = await response.json();
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    }

    fetchHeroData();
  }, []);

  return (
    <div>
      {heroData && (
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: `url(${props.imgUrl})` }}
        >
          <div className="text-center md:p-8 sm:p-2">
            <h1 className={props.style}>{heroData.heading}</h1>
            <p className={props.color}>{heroData.text}</p>
            <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2">
              {heroData.button_text}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DynamicHeroIntro;
