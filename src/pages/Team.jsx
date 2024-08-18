import React from "react";
import TeamCard from "./TeamCard"; // Adjust the import path as necessary
import img1 from './img/samyak.jpg';
import img2 from './img/ayush.png'

const Team = () => {
  return (
    <div className="py-20 gradient-bg-services">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 pb-4 text-center text-2xl text-white font-bold md:text-4xl">Meet The Team</h2>
        </div>
        <div className="px-36 grid items-center md:grid-cols-2">
          <TeamCard
            imgSrc={img1}
            altText="Samyak Jain"
            name="Samyak Jain"
            title="Frontend Developer"
          />
          <TeamCard
            imgSrc={img2}
            altText="Ayush Saini"
            name="Ayush Saini"
            title="Blockchain Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
