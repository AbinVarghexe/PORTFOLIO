import React from "react";
import "./Tool.css";
import { ICONS } from "../../../public/data/data";
import { Fade } from "react-awesome-reveal";
const Tool = () => {
  return (
    <div className="tool-main">
      <p className="tool-tera">Tools Known</p>
      <div className="tool-sub">
        <div className="img-main">
          <Fade
            direction="up"
            cascade
            damping={0.4}
            delay={250}
            triggerOnce={true}
            duration={550}
          >
            {ICONS.map(({ id, src, title, style }) => (
              <div key={id} className={`icon ${style} img-primary`}>
                <img className="img-box" src={src} alt={title} />
                <p className="img-text">{title}</p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Tool;
