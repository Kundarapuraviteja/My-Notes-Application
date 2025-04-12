import React from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-x-4 gap-y-10 md:px-0 px-5">
      <TestimonialItem
        title="Professional Use"
        text=" As a project manager, I need to organize hundreds of thoughts and ideas daily. This notes app keeps everything secure and instantly accessible—no more scrambling through files!"
        name="Sonia R"
        status="Project Manager"
      />
      <TestimonialItem
        title="Student Perspective"
        text=" It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English."
        name="Rahul K"
        status="University Student"
      />
      <TestimonialItem
        title="Frequent Traveler"
        text=" I’m always on the move, and this app is a lifesaver. I can access all my notes offline or on any device, and I never worry about losing important info."
        name="Emily T"
        status="Digital Nomad"
      />
    </div>
  );
};

export default Testimonial;
