import React from "react";
import "./index.css";

const Services = () => {
  return (
    <div className="bg-containerr">
      <h1 className="Ser-heading">We are Best Because</h1>
      <p className="Ser-para">Affordable Web Development Company in India</p>

      <div className="main-container">
        <div className="container">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704109483/talenet-matchmaker_qolzoc.png"
            alt="Image"
            className="img"
          />
          <p className="ser-con-para1">Talent Matchmaker</p>
          <p className="ser-con-para2">
            STACKKAROO is a platform for identifying Indian talent for global
            companies seeking remote workers. It considers skills, experience,
            preferences, availability to find the best match.
          </p>
        </div>
        <div className="container">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704109497/easy-hiring_cj3nxr.png"
            alt="Image"
            className="img"
          />
          <p className="ser-con-para1">Easy Hiring</p>
          <p className="ser-con-para2">
            We help with hiring, including interviews, negotiations, contracts,
            and onboarding. Indian talent and the company receive support during
            recruitment.
          </p>
        </div>

        <div className="container">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704109728/longtern-relation_xlpgfi.png"
            alt="Image"
            className="img"
          />
          <p className="ser-con-para1">Affordability</p>
          <p className="ser-con-para2">
            The company pays a fee for talent hire based on salary and role
            difficulty. The talent is not charged a fee.
          </p>
        </div>

        <div className="container">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704109483/talenet-matchmaker_qolzoc.png"
            alt="Image"
            className="img"
          />
          <p className="ser-con-para1">Long-Term Relationship</p>
          <p className="ser-con-para2">
            STACKKAROO maintains good talent-org relationships by providing
            feedback, performance appraisal, career development, and settling
            disputes.
          </p>
        </div>
      </div>
      <div className="services-last-para-container">
        <p className="services-last-para">
          STACKKAROO aims to simplify the remote hiring process and allows
          global companies to tap into top tech talent from India. Also, it
          assists Indian talent to find the dream jobs on the global level
        </p>
      </div>
      <img
        className="service-last-image"
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704393933/benefits-of-recruitment-process-scaled-1_1_zpywiz.png"
        alt="service-image"
      />
    </div>
  );
};

export default Services;
