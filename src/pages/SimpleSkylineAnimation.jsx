import React from "react";
import Lottie from "react-lottie";
import simpleSkyline from "../animations/simple-skyline.json";

const SimpleSkylineAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: simpleSkyline,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ margin: "40px auto", maxWidth: "400px" }}>
      <Lottie options={defaultOptions} height={300} width={400} />
    </div>
  );
};

export default SimpleSkylineAnimation;
