import React from "react";
import "./Section2.scss";

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div className="section2__card ">
          <div className="boxshadow">
            <h3>Women</h3>
            <p>Spring 2018</p>
          </div>
        </div>

        <div className="section2__card card2">
        <div className="boxshadow">  <h3>Men</h3>
          <p>Spring 2018</p></div>
        
        </div>

        <div className="section2__card card3 ">
        <div className="boxshadow">  <h3>Accosories</h3>
          <p>New Trend</p></div>
        
        </div>
      </div>
    </>
  );
};

export default Section2;
