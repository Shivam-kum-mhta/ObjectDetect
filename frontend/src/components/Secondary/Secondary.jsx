import React from "react";
import Card from "../Card/Card";

const teamData = [
  {
    name: "Debajyoti Pandit",
    id: 1,
    link: "https://github.com/davepandit",
  },
  {
    name: "Shivam Kumar A",
    id: 2,
    link: "https://github.com/davepandit",
  },
  {
    name: "Jayant",
    id: 3,
    link: "https://github.com/davepandit",
  },
];

const Secondary = () => {
  return (
    <div className="mt-9 flex flex-col gap-9 justify-center items-center">
      <span
        className="text-5xl font-bold bg-yellow-200 rounded-lg px-2 py-1"
        id="problemStatement"
      >
        Problem Statement
      </span>
      <span className="text-lg opacity-80 w-[700px]">
        In today's fast-paced world, there is a growing need for applications
        that can provide real-time situational awareness in various fields such
        as security, healthcare, retail, and transportation. Object detection
        technology, powered by Convolutional Neural Networks (CNNs), has the
        potential to revolutionize these fields by identifying and classifying
        objects in real-time, thereby enhancing decision-making and operational
        efficiency.
      </span>

      <span
        className="text-5xl font-bold bg-blue-200 rounded-lg px-2 py-1"
        id="solution"
      >
        Solution
      </span>
      <span className="text-lg opacity-80 w-[700px]">
        Developing a web application, "ObjectDetect," that leverages real-time
        object detection to identify and classify objects from a video feed or
        uploaded images. The application should provide accurate and fast object
        detection, displaying results to the user with bounding boxes and
        labels.
      </span>
      <span
        className="text-5xl font-bold bg-red-200 rounded-lg px-2 py-1"
        id="solution"
      >
        Team
      </span>
      <div className="flex gap-4">
        {teamData.map((teamMember, index) => (
          <Card name={teamMember.name} link={teamMember.link} />
        ))}
      </div>
    </div>
  );
};

export default Secondary;
