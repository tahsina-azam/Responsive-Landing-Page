import React, { useState } from "react";

function HeroForm() {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Heading:", heading);
    console.log("Text:", text);
    console.log("Button Text:", buttonText);
    // You can send this data to an API or update state in a parent component
  };

  return (
    <div>
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Update Components</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="heading"
              className="block text-sm font-semibold mb-2"
            >
              Heading
            </label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter new heading..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-semibold mb-2">
              Text
            </label>
            <textarea
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Enter new text..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="buttonText"
              className="block text-sm font-semibold mb-2"
            >
              Button Text
            </label>
            <input
              type="text"
              id="buttonText"
              name="buttonText"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter new button text..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroForm;
