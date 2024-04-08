import { motion } from "framer-motion";
import React from "react";

const CollapseComponent = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-4xl font-extrabold mb-8 mt-16 text-left"
      >
        {" "}
        Open Vacancies{" "}
      </motion.h2>
      <div className="flex flex-col w-full lg:flex-row gap-5 mt-10 pb-20">
        <div className="collapse bg-orange-50 ">
          <div className="collapse-title ">
            <h6 className="mb-3 text-lg font-bold text-left">
              {" "}
              Senior Full-Stack Engineer{" "}
            </h6>
            <ul className="text-sm font-normal text-left list-disc ml-2 ">
              <li>Full-time psoition</li>
              <li> Berlin or remote </li>
              <li> $65-85K,0.5-1.50% equity share</li>
            </ul>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              delay: 1,
            }}
            className="btn btn-active  w-24 ml-7 mb-8 rounded-full"
          >
            See Details{" "}
          </motion.a>
        </div>
        <div className="collapse bg-orange-50 ">
          <div className="collapse-title ">
            <h6 className="mb-3 text-lg font-bold text-left">
              {" "}
              Senior Designer{" "}
            </h6>
            <ul className="text-sm font-normal text-left list-disc ml-2 ">
              <li>Full-time psoition</li>
              <li> Berlin or remote </li>
              <li> $65-85K,0.5-1.50% equity share</li>
            </ul>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              delay: 1,
            }}
            className="btn btn-active  w-24 ml-7 mb-8 rounded-full"
          >
            See Details{" "}
          </motion.a>
        </div>
        <div className="collapse bg-orange-50 ">
          <div className="collapse-title ">
            <h6 className="mb-3 text-lg font-bold text-left">
              {" "}
              Superstar Intern{" "}
            </h6>
            <ul className="text-sm font-normal text-left list-disc ml-2 ">
              <li>Full-time psoition</li>
              <li> Berlin or remote </li>
              <li> $65-85K,0.5-1.50% equity share</li>
            </ul>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              delay: 1,
            }}
            className="btn btn-active  w-24 ml-7 mb-8 rounded-full"
          >
            See Details{" "}
          </motion.a>
        </div>
      </div>
    </>
  );
};
export default CollapseComponent;
