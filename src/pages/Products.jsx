import React from 'react'
import GetAllProducts from '../hooks/GetAllProducts'
import Card from '../components/Card';
import gsap from "gsap";
import { useEffect } from "react";

function Products() {
    const {data, isLoading} = GetAllProducts();
     useEffect(() => {
      if (data.length > 0) {
        let ctx = gsap.context(() => {
          gsap.from(".card-animate", {
            y: 40,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power2.out",
            delay : 0.5
          });
        });
        return () => ctx.revert();
      }
    }, [data]);
  return (
     <div className="my-10">
      <h1 className="text-center text-3xl uppercase">All Products</h1>
      <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto text-center mt-8">
        {isLoading == true && 
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-8 w-8 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        }
        {isLoading == false && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ">
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Products