import React from "react";

const TeamCard = ({ imgSrc, altText, name, title }) => {
  return (
    <div className="space-y-4 text-center">
      <img
        className="w-64 h-68 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
        src={imgSrc}
        alt={altText}
        loading="lazy"
        width="640"
        height="805"
      />
      <div>
        <h4 className="text-3xl text-white">{name}</h4>
        <span className="py-2 block text-xl text-gray-400">{title}</span>
      </div>
    </div>
  );
};

export default TeamCard;
