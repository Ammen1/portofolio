import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/images/Projects/img1.png";
import city2 from "../assets/images/Projects/img2.png";
import city3 from "../assets/images/Projects/img3.png";
import planet1 from "../assets/images/Projects/img1.png";
import planet2 from "../assets/images/Projects/img1.png";
import { Button } from "flowbite-react";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [city1, city2, city3, planet1, planet2];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center dark:bg-black h-screen">
      <h2 className="text-3xl font-bold text-center mb-4  dark:text-white">
        Explore My Projects
      </h2>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] w-full max-w-[500px] mx-auto absolute"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <Button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
          gradientDuoTone="purpleToPink"
        >
          Back
        </Button>
        <Button
          className="text-white mt-[400px] bg-gradient-to-r via-orange-400 to-orange-800 bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
          gradientDuoTone="purpleToPink"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;
