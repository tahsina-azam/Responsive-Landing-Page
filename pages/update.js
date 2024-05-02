import React, { useState } from "react";
import { imgDb } from "../lib/firebaseConnect";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Nav from "../components/admin/Nav";

function ImageForm() {
  const [image_code, setSelectedImage] = useState("image1");
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [img_url, setAttachment] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
  };

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
    const imgs = ref(imgDb, `Imgs${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        console.log(val);
        setAttachment(val);
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Selected Image:", image_code);
    console.log("Header:", header);
    console.log("Text:", text);
    console.log("Attachment:", img_url);
    // You can send this data to an API or handle it in your component
    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_code, header, text, img_url }),
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
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Update Content</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold mb-2">
              Select Image
            </label>
            <select
              id="image"
              name="image"
              value={image_code}
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="image1">Image 1</option>
              <option value="image2">Image 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="header"
              className="block text-sm font-semibold mb-2"
            >
              Header
            </label>
            <input
              type="text"
              id="header"
              name="header"
              value={header}
              onChange={handleHeaderChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter header..."
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
              onChange={handleTextChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Enter text..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="attachment"
              className="block text-sm font-semibold mb-2"
            >
              Attachment
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={handleAttachmentChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ImageForm;
