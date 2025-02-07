import React from "react";

import "./BgWithGradient.css";

export const BgWithGradient = ({ background, gradient }) => {
  return (
    <div className="bg__with__gradient">
      <div className={`gradient ${gradient}`} />
      <img src={background} className="gradient__cover" alt="gradient cover" />
    </div>
  );
};
