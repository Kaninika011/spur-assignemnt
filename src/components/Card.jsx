import React from "react";

const cardData = [
  {
    title: "🙂",
    content: "you argue with colleague, you get angry and defensive.",
    color: "bg-orange-100",
  },
  {
    title: "😎",
    content:
      "you get a promotion at work, you questin yourself and feel anxious.",
    color: "bg-green-100",
  },
  {
    title: "🤔",
    content: "you argue with colleague, you get angry and defensive.",
    color: "bg-purple-100",
  },
  {
    title: "🙂",
    content:
      "you get a promotion at work, you question yourself and feel anxious.",
    color: "bg-orange-100",
  },
  {
    title: "😎",
    content: "you argue with colleague, you get angry and defensive.",
    color: "bg-green-100",
  },
  {
    title: "🤔",
    content:
      "you get a promotion at work, you question yourself and feel anxiou.",
    color: "bg-purple-100",
  },
];

const Card = ({ title, content, color }) => {
  return (
    <div className={`card w-80 ${color} text-base-content mr-6 cursor-pointer`}>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-md font-mono font-medium">{content}</p>
      </div>
    </div>
  );
};

export default Card;
export { cardData };
