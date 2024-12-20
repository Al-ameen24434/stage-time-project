import React, { useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "aos/dist/aos.css"; 
import AOS from "aos";
import "./FirstHome.css";

const FirstHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="first-home-content" data-aos="fade-right">
      <div className="first-home-content-1">
        <h1 data-aos="fade-up" data-aos-delay="100">
          Impacting lives of young people in Africa.
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Making youngsters leverage their skills, abilities, and talents stand out as a goal-getter.
        </p>
      </div>
      <div className="first-home-button">
        <button data-aos="fade-up" data-aos-delay="300">
          Join us
        </button>

        <div className="play-button" data-aos="fade-up" data-aos-delay="400">
          <PlayCircleIcon fontSize="large" />
          <p>How it works</p>
        </div>
      </div>
    </div>
  );
};

export default FirstHome;
