import React from "react";

function TabPanelCarousel() {
  return (
    <div>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img src="/tabOne.png" alt="tabONe" />
        </div>
        <div className="carousel-item">
          <img src="/tabTwo.png" alt="tabtwo" />
        </div>
        <div className="carousel-item">
          <img src="/tabThree.png" alt="tabthree" />
        </div>
      </div>
    </div>
  );
}

export default TabPanelCarousel;
