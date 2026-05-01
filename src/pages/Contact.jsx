import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Contact() {
  const [isLoading, setIsLoading] = React.useState(true);
 useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true); // ✅ start loading

    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // ✅ always stop loading
    }
  };

  fetchData();
}, []);
  if (isLoading) {
    return <div className="loader h-dvh relative top-50 left-150"></div>;
  }
  return (
    <div className="my-10 font-jost max-w-[90%] lg:max-w-3xl mx-auto mb-50">
      <form className="w-full shadow-md py-4" action="">
        <h1 className="text-center font-bold text-3xl ">Contact Us</h1>
        <div className="mx-3 mb-3">
          <div className="mb-4">
            <label>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 transition-al ease-in-out"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label>
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 transition-al ease-in-out"
              placeholder="Enter your phone"
            />
          </div>
          <div className="mb-4"> 
            <label>
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              type="text"
              className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 transition-al ease-in-out"
              placeholder="Enter your messages"
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-primary text-white px-8 py-2 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
