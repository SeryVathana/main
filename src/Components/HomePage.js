import React from "react";
import Landing from "../Assets/landing.png";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="info">
        <h3>Séry Vathana</h3>
        <p>Information Technology Engineering Student, RUPP</p>
        <p className="para">
          Now studying in Royal University of Phnom Penh. I'm looking forward to
          enhance and explore more about technology and relates to{" "}
          <span className="text-special">Cyber Security</span>.
        </p>
      </div>
      <img className="landing-image" src={Landing} alt="" />
    </div>
  );
};

export default HomePage;
