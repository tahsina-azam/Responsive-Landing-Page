import React from "react";

function FooterHelp() {
  return (
    <div>
      <footer className="bg-base-200 p-10 text-center  lg:text-left text-sm">
        <p className="text-gray-600">
          More ways to shop:{" "}
          <span className="text-blue-600">
            <a href="#" className="text-blue underline hover:underline">
              Find an Apple Store
            </a>
          </span>{" "}
          or{" "}
          <span className="text-blue-600">
            <a href="#" className="text-blue underline hover:underline">
              other retailer
            </a>
          </span>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
      </footer>
    </div>
  );
}

export default FooterHelp;
