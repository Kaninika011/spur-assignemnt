import React from "react";

const timelineData = [
  {
    title: "It's not as easy as 1-2-3.",
    description:
      "The journey o change may be long, but our sessions are quick. we get to the point and tell you what you want to know.",
  },
  {
    title: "Old habits are hard to break",
    description:
      "And bad behaviours die hard.Fortunately, we give you a great, science-backed techniques to use",
  },
  {
    title: "HII",
    description: "loremIpsum",
  },
  {
    title: "You and your motivation",
    description:
      "And bad behaviours die hard.Fortunately, we give you a great, science-backed techniques to use",
  },
  {
    title: "You and your motivation",
    description:
      "And bad behaviours die hard.Fortunately, we give you a great, science-backed techniques to use",
  },
];

function TimeLine() {
  return (
    <div className="mt-10">
      <h6 className="text-left font-medium text-lg">
        {" "}
        Wrong with self-improvement & how we're fixing it.
      </h6>
      <h1 className="text-left font-extrabold text-5xl">
        Self-improvement.Ugh.
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10 list-outside text-left">
        {timelineData.map((item, index) => (
          <li key={index}>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div className="text-lg font-black ">{item.title}</div>
              {item.description}
            </div>
            <hr />
          </li>
        ))}
      </ul>
      {/* <div className="flex w-full h-screen  justify-center align-items-center">
        <div className="grid h-20 flex-grow card bg-base-100 rounded-box place-items-center justify-center">
          <span className="text-left font-bold text-2xl">
            {" "}
            Be the best you <br /> with Eq
          </span>
        </div>

        <div className="grid h-20 flex-grow card bg-base-100 rounded-box place-items-center">
          content
        </div>
        <div className="grid h-20 flex-grow card bg-base-100 rounded-box place-items-center">
          content
        </div>
      </div> */}
    </div>
  );
}

export default TimeLine;
