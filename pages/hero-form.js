import React, { useState } from "react";
import Nav from "../components/admin/Nav";

function HeroForm() {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [button_text, setButtonText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ heading, text, button_text }),
      });
      const data = await response.json();
      console.log("Update response:", data);
      // Handle success or error response from backend
    } catch (error) {
      console.error("Error updating hero data:", error);
      // Handle error
    }
  };

  return (
    <div>
      <Nav />
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
              value={button_text}
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
