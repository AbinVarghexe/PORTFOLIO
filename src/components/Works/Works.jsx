import React from "react";
import "./Works.css";
import WorkCard from "./WorkCards/WorkCard";

const Works = () => {
  return (
    <section className="work">
      <h1>PROJECTS</h1>
      <div className="landing-page-container">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </section>
  );
};

export default Works;
