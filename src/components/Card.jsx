import React from "react";

const cardData = [
  {
    title: "🙂",
    content: "If a dog chews shoes whose shoes does he choose?",
    color: "bg-orange-100",
  },
  {
    title: "😎",
    content: "Why did the tomato turn red? Because it saw the salad dressing!",
    color: "bg-green-100",
  },
  {
    title: "🤔",
    content: "What starts with E, ends with E, and only has one letter in it?",
    color: "bg-purple-100",
  },
  {
    title: "🙂",
    content: "If a dog chews shoes whose shoes does he choose?",
    color: "bg-orange-100",
  },
  {
    title: "😎",
    content: "Why did the tomato turn red? Because it saw the salad dressing!",
    color: "bg-green-100",
  },
  {
    title: "🤔",
    content: "What starts with E, ends with E, and only has one letter in it?",
    color: "bg-purple-100",
  },
];

const Card = ({ title, content, color }) => {
  return (
    <div className={`card w-80 ${color} text-base-content mr-6`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
export { cardData };
