import { useRef, useEffect } from "react";
import gsap from "gsap";

function Topbar() {
  const topbarRef = useRef(null);

  useEffect(() => {
    if (!topbarRef.current) return;

    gsap.fromTo(
      topbarRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={topbarRef}>
      <div className="bg-gray-800 font-jost text-white text-center py-1 text-sm ">
        🚚 Free shipping on order over <span className="text-red-600">$50</span>{" "}
        ✨
      </div>
    </div>
  );
}

export default Topbar;
