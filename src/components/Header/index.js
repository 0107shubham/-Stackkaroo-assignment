import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="bg-container">
      <div className="mb-upper-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <g clip-path="url(#clip0_401_711)">
            <path
              d="M20.8334 18.2292C21.2347 18.2294 21.6205 18.384 21.9109 18.6609C22.2013 18.9378 22.3741 19.3158 22.3933 19.7166C22.4126 20.1174 22.277 20.5103 22.0145 20.8138C21.752 21.1173 21.3828 21.3082 20.9834 21.3469L20.8334 21.3542H4.16675C3.76548 21.354 3.37967 21.1994 3.08926 20.9225C2.79885 20.6456 2.62611 20.2676 2.60683 19.8668C2.58754 19.466 2.7232 19.0731 2.98568 18.7696C3.24816 18.4661 3.61735 18.2752 4.01675 18.2365L4.16675 18.2292H20.8334ZM20.8334 10.9375C21.2478 10.9375 21.6452 11.1022 21.9383 11.3952C22.2313 11.6882 22.3959 12.0856 22.3959 12.5C22.3959 12.9144 22.2313 13.3119 21.9383 13.6049C21.6452 13.8979 21.2478 14.0625 20.8334 14.0625H4.16675C3.75235 14.0625 3.35492 13.8979 3.06189 13.6049C2.76887 13.3119 2.60425 12.9144 2.60425 12.5C2.60425 12.0856 2.76887 11.6882 3.06189 11.3952C3.35492 11.1022 3.75235 10.9375 4.16675 10.9375H20.8334ZM20.8334 3.64587C21.2478 3.64587 21.6452 3.81049 21.9383 4.10352C22.2313 4.39655 22.3959 4.79397 22.3959 5.20837C22.3959 5.62277 22.2313 6.0202 21.9383 6.31323C21.6452 6.60625 21.2478 6.77087 20.8334 6.77087H4.16675C3.75235 6.77087 3.35492 6.60625 3.06189 6.31323C2.76887 6.0202 2.60425 5.62277 2.60425 5.20837C2.60425 4.79397 2.76887 4.39655 3.06189 4.10352C3.35492 3.81049 3.75235 3.64587 4.16675 3.64587H20.8334Z"
              fill="#36454F"
            />
          </g>
          <defs>
            <clipPath id="clip0_401_711">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <img
          className="mb-header-imag"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704295319/Stackkaroo-removebg-preview_1_flbqfk.png"
          alt=""
        />
      </div>
      <div className="header-card-container">
        <img
          className="image"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704104535/image1_cih1fw.png"
          alt="Image1"
        />
        <img
          className="image-mbl"
          src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704446241/1673600177315_1_wndkbt.png"
          alt="Image1"
        />

        <h1 className="heading">Experience Seamless Hiring</h1>
        <p className="heading2">
          “Connecting Global Companies with the Best Indian Talent”
        </p>
        <p className="para1">
          STACKKAROO is a hiring platform that picks the best of IT & Non-IT
          fields as well as web development, digital marketing, data science,
          business development, human resource, content writing, advertising and
          much more in India. Their communication skills, fit for culture, and
          ability to be ethical for global work will be assessed.
        </p>
        <button className="btn">Job Opening</button>
      </div>
    </div>
  );
};

export default Header;
