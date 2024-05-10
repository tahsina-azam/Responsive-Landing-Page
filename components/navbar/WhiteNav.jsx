import React from "react";
import { useState } from "react";

function WhiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lex flex-col md:flex-row md:items-center md:justify-between bg-base-100">
      {/* Hamburger Icon, visible only on small screens */}
      <button
        className="btn btn-ghost btn-circle menu-icon sm:hidden"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`flex flex-col md:flex-row items-center w-full md:justify-center pb-4 md:pb-0 md:static md:z-auto ${isOpen ? "" : "hidden"}`}
      >
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5"
            viewBox="0 0 256 315"
          >
            <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" />
          </svg>
        </button>
        <div className="text-sm px-4 py-2 m-2">Store</div>
        <div className="text-sm px-4 py-2 m-2">Mac</div>
        <div className="text-sm px-4 py-2 m-2">iPad</div>
        <div className="text-sm px-4 py-2 m-2">iPhone</div>
        <div className="text-sm px-4 py-2 m-2">Watch</div>
        <div className="text-sm px-4 py-2 m-2">Vision</div>
        <div className="text-sm px-4 py-2 m-2">Airpods</div>
        <div className="text-sm px-4 py-2 m-2">TV & Home</div>
        <div className="text-sm px-4 py-2 m-2">Entertainment</div>
        <div className="text-sm px-4 py-2 m-2">Accessories</div>
        <div className="text-sm px-4 py-2 m-2">Support</div>
        <button className="btn btn-ghost btn-circle px-4 py-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>

      {/* Navigation items shown on larger screens, centered */}
      <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5"
            viewBox="0 0 256 315"
          >
            <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" />
          </svg>
        </button>

        <div className="text-sm px-4 py-2 m-2">Store</div>
        <div className="text-sm px-4 py-2 m-2">Mac</div>
        <div className="text-sm px-4 py-2 m-2">iPad</div>
        <div className="text-sm px-4 py-2 m-2">iPhone</div>
        <div className="text-sm px-4 py-2 m-2">Watch</div>
        <div className="text-sm px-4 py-2 m-2">Vision</div>
        <div className="text-sm px-4 py-2 m-2">Airpods</div>
        <div className="text-sm px-4 py-2 m-2">TV & Home</div>
        <div className="text-sm px-4 py-2 m-2">Entertainment</div>
        <div className="text-sm px-4 py-2 m-2">Accessories</div>
        <div className="text-sm px-4 py-2 m-2">Support</div>

        <button className="btn btn-ghost btn-circle px-4 py-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default WhiteNav;

<div className="navbar-center bg-base-100 flex justify-center items-center">
  <div className="flex flex-wrap gap-0 flex-row">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-5"
        viewBox="0 0 256 315"
      >
        <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" />
      </svg>
    </button>

    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Store
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Mac
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      iPad
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      iPhone
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Watch
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Vision
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Airpods
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      TV & Home
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Entertainment
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Accessories
    </div>
    <div className="text-black-300 text-center text-sm px-4 py-2 m-2 w-full sm:w-auto">
      Support
    </div>

    <button className="btn btn-ghost btn-circle px-4 py-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>

    <button className="btn btn-ghost btn-circle px-4 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    </button>
  </div>
</div>;
