import React from "react";

function HeroIntro(props) {
  return (
    <div>
      <div
        className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      >
        <div className="text-center p-8">
          <h1 className={props.style}>{props.heading}</h1>
          <p className={props.color}>{props.text}</p>
          <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2">
            Learn More
          </button>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroIntro;
