import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { services } from "../constants";

import { textVariant } from "../utils/motion";

const ServiceCard = ({ service }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      className="hover:scale-125"
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: services.iconBg, scale: 20, boxSizing: 20   }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={service.icon}
            alt={service.company_name}
            className='w-11 h-11 object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold hover:'>{service.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          Details of each service
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <h2 className={`${styles.sectionHeadText} text-center relative top-24`}>
        We have all kinds of business solutions for you
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col relative top-36'>
        <VerticalTimeline>
          {services.map((service, index) => (
            <ServiceCard
              key={`service-${index}`}
              service={service}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Services