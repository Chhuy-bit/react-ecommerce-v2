import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function About() {
  const img = useRef(null);
  const paragraph = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(img.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      tl.from(title.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      const split = new SplitText(paragraph.current, { type: "lines" });

      tl.from(
        split.lines,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5",
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost mb-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start mt-4">
        <div ref={img}>
          <img
            className="w-full h-full"
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg"
            alt=""
          />
        </div>

        <div className="ml-5">
          <h1 ref={title} className="text-3xl font-bold">Our Story</h1>

          <p ref={paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque error maiores omnis cum eveniet nostrum, unde aperiam ipsa laudantium quidem eius atque, repudiandae laborum, molestiae illo veniam officiis! Harum porro nemo, pariatur quasi aperiam quam debitis qui incidunt delectus asperiores perspiciatis eum ipsam suscipit modi eligendi, sunt excepturi. Ipsam perferendis nam, fugiat, perspiciatis eos in ipsa facilis nisi velit excepturi, vero quaerat non! Distinctio quam fugit sit architecto adipisci maiores necessitatibus, dolorem voluptatibus, ipsa obcaecati odio commodi ullam qui eligendi nihil cumque perferendis eius doloremque quae voluptas, ipsam facere illum. Recusandae corporis, fuga obcaecati facilis facere porro inventore dolores et deleniti molestiae perferendis nesciunt sed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
