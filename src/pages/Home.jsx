import React, { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=8",
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }).from(
        ".hero-btn",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      let ctx = gsap.context(() => {
        gsap.from(".card-animate", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-animate",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [data]);

  const handleScroll = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <div ref={containerRef}>
      <div className="bg-[url('https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg')] bg-no-repeat bg-cover bg-center h-screen px-4 lg:px-40 flex flex-col justify-center">
        <div>
          <p className="text-xl font-bold hero-item">New Collection</p>
          <h1 className="text-6xl hero-item lg:text-7xl font-bold mb-4">
            Luxury Without <br /> Labels
          </h1>
          <p className="hero-item">Explore new-in product and best sellers</p>
          <button
            onClick={handleScroll}
            className="hero-btn bg-gray-500 px-8 py-2 border border-primary rounded-full text-white hover:bg-gray-400 mt-4 cursor-pointer relative z-10"
          >
            View Collection
          </button>
        </div>
      </div>

      <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Best Seller</h2>
        <p>Explore Our best seller products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
