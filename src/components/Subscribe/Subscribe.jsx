import React from "react";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width:"100%",

};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-64  md:py-64 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center  lg:max-w-[480px]  mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
             Mentor the teach new technology
            </h1>
            <p>
             These all mentor how know that what the market demand
            </p>
          
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
