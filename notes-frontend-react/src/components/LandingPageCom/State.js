import React from "react";
import CardSlider from "./CardSlider";

const State = () => {
  return (
    <div className="py-28">
      <div className="flex justify-between items-center md:px-0 px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-slate-700 font-bold">
            7x
          </span>
          <span className="text-slate-600 text-center sm:text-sm text-xs ">
            High Conversion Rate
          </span>
        </div>{" "}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-slate-700 font-bold">
            42x
          </span>
          <span className="text-slate-600 text-center  sm:text-sm text-xs">
            Faster Impression
          </span>
        </div>{" "}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-slate-700 font-bold">
            300%
          </span>
          <span className="text-slate-600 text-center  sm:text-sm text-xs">
            Higher lead Quality
          </span>
        </div>
      </div>
      <div className="mt-10 md:px-0 px-4">
        <h3 className="text-slate-700 text-2xl font-semibold pb-5 pt-6">
        Analytics for the secure My Notes Application
        </h3>

        <div className="flex md:flex-row flex-col md:gap-0 gap-16 justify-between">
          <ul className="list-disc sm:px-5 ps-10 text-slate-700 flex flex-col gap-5 flex-1 overflow-hidden">
            <li>Join a global community of secure note-takers.</li>
            <li>Experience reliable access to your notes anytime, anywhere.</li>
            <li>
            Find what you need in seconds with our lightning-fast search.
            </li>
            <li>
            Access your notes securely—whenever and wherever you need them.
            </li>
            <li>Over 10,000 users trust us with their most important notes</li>
            <li>Consistent performance with 99.9% system uptime.</li>
            <li>Double-speed access to your notes—effortless and instant.</li>
          </ul>
          <div className="flex-1 overflow-hidden">
            <CardSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
