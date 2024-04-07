import React from "react";
import banner from "../assets/home.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="hero h-full pb-32 w-100 bg-orange-50 rounded-xl mb-40">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <motion.h6
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="text-left font-medium text-lg mt-7 ml-7"
            >
              {" "}
              Built out of frustration
            </motion.h6>
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.5, type: "tween" }}
              className="text-left font-bold text-xl lg:text-4xl ml-7"
            >
              Meet the ahead app
            </motion.h1>{" "}
            <img src={banner} className="max-w-64 mt-12" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5, type: "tween" }}
            className="lg:ml-20 font-medium tracking-wide "
          >
            <p className="mt-28 lg:mt-40 text-left">
              {" "}
              A personalized pocket coach that provides bite- <br />
              sized, science-driven tools to boost emotional
              <br /> intelligence.
            </p>
            <p className="text-left">
              Provident cupiditate voluptatem et in.
              <br /> Quaerat fugiat ut assumenda excepturi <br /> exercitationem
              quasi. In deleniti <br />
              eaque aut repudiandae et a id nisi.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
