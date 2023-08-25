import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20pc] shadow-card">
          <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate full stack web developer skilled in MERN stack, and
        ability to work in a team utilizing available resources to it's best and able to write a good clean code and bring out best even in challenging environment
      </motion.p>
      <div className="my-4"><BasicIcons/></div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const BasicIcons = () => {
  return (
    <section>
      <ul className="flex flex-wrap">
       <a href="https://github.com/mohitsvp" target="_blank"><li className="m-5 text-[40px] hover:text-[#1da1f2]"><AiFillGithub/></li></a> 
       <a href="https://www.linkedin.com/in/mohitsvp" target="_blank"><li className="m-5 text-[40px] hover:text-[#1da1f2]"><AiFillLinkedin/></li></a> 
       <a href="https://twitter.com/Mohitdevcode" target="_blank"><li className="m-5 text-[40px] hover:text-[#1da1f2]"><BsTwitter/></li></a> 
      </ul>
    </section>
  )
}

export default SectionWrapper(About, "about");
