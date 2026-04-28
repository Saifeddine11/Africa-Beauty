"use client";

import React from "react";
import { motion } from "motion/react";

const testimonials = [] as {
  text: string;
  image: string;
  name: string;
  role: string;
}[];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={`testimonial-column ${props.className || ""}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="testimonial-column-track"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-text">{text}</div>
                  <div className="testimonial-author">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-author-meta">
                      <div className="testimonial-name">{name}</div>
                      <div className="testimonial-role">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
