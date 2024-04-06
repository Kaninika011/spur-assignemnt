import React from "react";
import Card, { cardData } from "./Card"; // Importing cardData array from Card.jsx
import { motion } from "framer-motion";
import "animate.css";

const Carousel = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-zinc-900 mb-8 mt-8 text-left animate__animated animate__fadeInLeft">
        Does this sound familiar ...
      </h2>
      <div className="carousel carousel-center p-4 space-x-4 bg-base-100 rounded-box  flex justify-between ">
        <div className="carousel-item">
          {cardData.map((card, index) =>
            index === 2 ? (
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
        </div>
      </div>
    </div>
  );
};

export default Carousel;
