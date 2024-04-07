import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import "animate.css";
import Card, { cardData } from "./Card";
import { useMeasure } from "@uidotdev/usehooks";

const Carousel = () => {
  const xTranslation = useMotionValue(0);
  let [ref, { width }] = useMeasure();

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [xTranslation, width]);

  return (
    <div className="mt-5">
      <motion.h2
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-4xl font-bold text-zinc-900 mb-8 mt-8 text-left"
      >
        Does this sound familiar ...
      </motion.h2>
      <div className="carousel carousel-center p-4 space-x-4 bg-base-100 rounded-box  flex justify-between ">
        <motion.div
          className="carousel-item"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...cardData, ...cardData].map((card, index) =>
            index === 3 ? (
              <motion.div
                animate={{ rotate: -4 }}
                className="carousel-item"
                key={index}
              >
                <Card
                  title={card.title}
                  content={card.content}
                  color={card.color}
                />
              </motion.div>
            ) : (
              <Card
                key={index}
                title={card.title}
                content={card.content}
                color={card.color}
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
