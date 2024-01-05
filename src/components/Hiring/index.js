import React from "react";
import "./index.css";

const Hiring = () => {
  const imageUrl =
    "https://res.cloudinary.com/drvjsegeb/image/upload/v1704118341/technical_assistant_pvtfiu.png";

  return (
    <div className="hiring-bg-all-container">
      <div className="bg-containerr-hiring">
        <div>
          <h1 className="hring-top-heading">Our Rigorous Hiring Process</h1>
          <p className="hring-top-para">
            To make sure, our Talent get the Best Opportunities
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="900"
          height="800"
          viewBox="0 0 1200 900"
          fill="none"
        >
          {/* Set 1 */}
          <g>
            <circle
              cx="60px"
              cy="60"
              r="58.75"
              fill="white"
              stroke="#36454F"
              strokeWidth="2.5"
            />
            <circle
              cx="60px"
              cy="60"
              r="48.75"
              fill="white"
              stroke="#36454F"
              strokeWidth="2.5"
            />
            <image href={imageUrl} x="30" y="30" width="60" height="60" />
            <line
              x1="60"
              y1="120"
              x2="60"
              y2="180"
              stroke="black"
              strokeWidth="2"
            />

            {/* Text for Set 1 */}
            <text
              className="text-first"
              x="250"
              y="60"
              textAnchor="middle"
              fontSize="12"
              fill="#0A56F1"
            >
              Profile Screening
              <tspan x="250" dy="35">
                and Shortlisting
              </tspan>
            </text>

            <text
              x="600"
              y="60"
              className="text-second"
              textAnchor="start"
              fontSize="12"
              fill="black"
            >
              We evaluate applications based on minimum criteria,
              <tspan x="600" dy="35">
                professional experience, and background checks of
              </tspan>
              <tspan x="600" dy="35">
                candidates.
              </tspan>
            </text>
          </g>

          {/* Set 2 */}
          <circle
            cx="60"
            cy="240"
            r="58.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <circle
            cx="60"
            cy="240"
            r="48.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <image href={imageUrl} x="30" y="210" width="60" height="60" />
          <line
            x1="60"
            y1="300"
            x2="60"
            y2="360"
            stroke="black"
            strokeWidth="2"
          />

          {/* Text for Set 2 */}
          <text
            className="text-first"
            x="250"
            y="240"
            textAnchor="middle"
            fontSize="12"
            fill="#0A56F1"
          >
            Language{" "}
            <tspan x="250" dy="35">
              Proficiency
            </tspan>
          </text>

          <text
            className="text-second"
            x="600"
            y="240"
            textAnchor="start"
            fontSize="12"
            fill="black"
          >
            We use communication assessment test to assess
            <tspan x="600" dy="35">
              candidates' reading, writing, pronunciation, clarity
            </tspan>
            <tspan x="600" dy="35">
              fluency, and speech speed.
            </tspan>
          </text>

          {/* Set 3 */}
          <circle
            cx="60"
            cy="420"
            r="58.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <circle
            cx="60"
            cy="420"
            r="48.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <image href={imageUrl} x="30" y="390" width="60" height="60" />
          <line
            x1="60"
            y1="480"
            x2="60"
            y2="540"
            stroke="black"
            strokeWidth="2"
          />

          {/* Text for Set 3 */}
          <text
            className="text-first"
            x="250"
            y="420"
            textAnchor="middle"
            fontSize="12"
            fill="#0A56F1"
          >
            Aptitude
            <tspan x="250" dy="35">
              Evaluation
            </tspan>
          </text>

          <text
            className="text-second"
            x="600"
            y="420"
            textAnchor="start"
            fontSize="12"
            fill="black"
          >
            We administer scientifically designed aptitude test to
            <tspan x="600" dy="35">
              assess candidates' reasoning & problem-solving abilities
            </tspan>
          </text>

          {/* Set 4 */}
          <circle
            cx="60"
            cy="600"
            r="58.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <circle
            cx="60"
            cy="600"
            r="48.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <image href={imageUrl} x="30" y="570" width="60" height="60" />
          <line
            x1="60"
            y1="660"
            x2="60"
            y2="720"
            stroke="black"
            strokeWidth="2"
          />

          {/* Text for Set 4 */}
          <text
            className="text-first"
            x="250"
            y="600"
            textAnchor="middle"
            fontSize="12"
            fill="#0A56F1"
          >
            Technical
            <tspan x="250" dy="35">
              Assessment
            </tspan>
          </text>

          <text
            className="text-second"
            x="600"
            y="600"
            textAnchor="start"
            fontSize="12"
            fill="black"
          >
            We have developed challenging and advanced technical
            <tspan x="600" dy="35">
              assessments tailored to specific roles, ensuring that only
            </tspan>
            <tspan x="600" dy="35">
              the most skilled candidates make it.
            </tspan>
          </text>

          {/* Set 5 */}
          <circle
            cx="60"
            cy="780"
            r="58.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <circle
            cx="60"
            cy="780"
            r="48.75"
            fill="white"
            stroke="#36454F"
            strokeWidth="2.5"
          />
          <image href={imageUrl} x="30" y="750" width="60" height="60" />

          {/* Text for Set 5 */}
          <text
            className="text-first"
            x="250"
            y="780"
            textAnchor="middle"
            fontSize="12"
            fill="#0A56F1"
          >
            Panel{" "}
            <tspan x="250" dy="35">
              Interview
            </tspan>
          </text>

          <text
            className="text-second"
            x="600"
            y="780"
            textAnchor="start"
            fontSize="12"
            fill="black"
          >
            Our talent acquisition experts conduct a final video{" "}
            <tspan x="600" dy="35">
              interview in the presence of a representative from the
            </tspan>
            <tspan x="600" dy="35">
              hiring company.
            </tspan>
          </text>
        </svg>
      </div>

      <div className="hiring-mbl-bg-container">
        <div className="">
          <h1 className="hring-top-heading">Our Rigorous Hiring Process</h1>
          <p className="hring-top-para">
            To make sure, our Talent get the Best Opportunities
          </p>
        </div>
        <div className="svg-container-mbl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="750"
            viewBox="0 0 1200 900"
            fill="none"
          >
            {/* Set 1 */}
            <g>
              <circle
                cx="95px"
                cy="60"
                r="34.25"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <circle
                cx="95px"
                cy="60"
                r="29.75"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <image
                href="https://res.cloudinary.com/drvjsegeb/image/upload/v1704304206/list_8532959_1_jw2zxx.png"
                x="75px"
                y="42"
                width="35"
                height="35"
              />

              {/* Text for Set 1 */}
              <text
                className="text-first"
                x="250"
                y="45"
                textAnchor="middle"
                fontSize="16"
                fill="#0A56F1"
              >
                Profile Screening and
                <tspan x="260" dy="18">
                  Shortlisting
                </tspan>
              </text>

              <text
                x="30"
                y="120"
                className="text-second"
                textAnchor="start"
                fontSize="13"
                fill="black"
              >
                We evaluate applications based on minimum criteria,
                <tspan x="30" dy="18">
                  professional experience, and background checks of
                </tspan>
                <tspan x="180" dy="18">
                  candidates.
                </tspan>
              </text>
            </g>
          </svg>
        </div>

        <div className="svg-container-mbl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="750"
            viewBox="0 0 1200 900"
            fill="none"
          >
            {/* Set 1 */}
            <g>
              <circle
                cx="90px"
                cy="60"
                r="34.25"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <circle
                cx="90px"
                cy="60"
                r="29.75"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <image
                href="https://res.cloudinary.com/drvjsegeb/image/upload/v1704304223/language_484582_1_xaijq2.png"
                x="70px"
                y="42"
                width="35"
                height="35"
              />

              {/* Text for Set 1 */}
              <text
                className="text-first"
                x="250"
                y="55"
                textAnchor="middle"
                fontSize="16"
                fill="#0A56F1"
              >
                Language Proficiency
              </text>

              <text
                x="30"
                y="120"
                className="text-second"
                textAnchor="start"
                fontSize="12"
                fill="black"
              >
                We use communication assessment test to assess
                <tspan x="30" dy="18">
                  candidates' reading, writing, pronunciation, clarity,
                </tspan>
                <tspan x="130" dy="18">
                  fluency, and speech speed.
                </tspan>
              </text>
            </g>
          </svg>
        </div>

        <div className="svg-container-mbl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="750"
            viewBox="0 0 1200 900"
            fill="none"
          >
            {/* Set 1 */}
            <g>
              <circle
                cx="90px"
                cy="60"
                r="34.25"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <circle
                cx="90px"
                cy="60"
                r="29.75"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <image
                href="https://res.cloudinary.com/drvjsegeb/image/upload/v1704304213/mindset_10645906_1_uouu0m.png"
                x="70px"
                y="42"
                width="35"
                height="35"
              />

              {/* Text for Set 1 */}
              <text
                className="text-first"
                x="250"
                y="55"
                textAnchor="middle"
                fontSize="16"
                fill="#0A56F1"
              >
                Aptitude Evaluation
              </text>

              <text
                x="30"
                y="120"
                className="text-second"
                textAnchor="start"
                fontSize="12"
                fill="black"
              >
                We administer scientifically designed aptitude test to
                <tspan x="30" dy="18">
                  assess candidates' reasoning & problem-solving
                </tspan>
                <tspan x="180" dy="18">
                  abilities.
                </tspan>
              </text>
            </g>
          </svg>
        </div>

        <div className="svg-container-mbl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="750"
            viewBox="0 0 1200 900"
            fill="none"
          >
            {/* Set 1 */}
            <g>
              <circle
                cx="90px"
                cy="60"
                r="34.25"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <circle
                cx="90px"
                cy="60"
                r="29.75"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <image
                href="https://res.cloudinary.com/drvjsegeb/image/upload/v1704304703/computer_9330495_1_temqni.png"
                x="70px"
                y="42"
                width="35"
                height="35"
              />

              {/* Text for Set 1 */}
              <text
                className="text-first"
                x="250"
                y="55"
                textAnchor="middle"
                fontSize="16"
                fill="#0A56F1"
              >
                Technical Assessment
              </text>

              <text
                x="30"
                y="120"
                className="text-second"
                textAnchor="start"
                fontSize="12"
                fill="black"
              >
                We have developed challenging and advanced technical
                <tspan x="30" dy="18">
                  assessments tailored to specific roles, ensuring that only
                </tspan>
                <tspan x="130" dy="18">
                  the most skilled candidates make it.
                </tspan>
              </text>
            </g>
          </svg>
        </div>

        <div className="svg-container-mbl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="750"
            viewBox="0 0 1200 900"
            fill="none"
          >
            {/* Set 1 */}
            <g>
              <circle
                cx="90px"
                cy="60"
                r="34.25"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <circle
                cx="90px"
                cy="60"
                r="29.75"
                fill="white"
                stroke="#36454F"
                strokeWidth="2.5"
              />
              <image
                href="https://res.cloudinary.com/drvjsegeb/image/upload/v1704304199/job-interview_1436764_1_qbk9rj.png"
                x="70px"
                y="42"
                width="35"
                height="35"
              />

              {/* Text for Set 1 */}
              <text
                className="text-first"
                x="250"
                y="55"
                textAnchor="middle"
                fontSize="16"
                fill="#0A56F1"
              >
                Panel Interview
              </text>

              <text
                x="30"
                y="120"
                className="text-second"
                textAnchor="start"
                fontSize="12"
                fill="black"
              >
                Our talent acquisition experts conduct a final video
                <tspan x="30" dy="18">
                  interview in the presence of a representative from
                </tspan>
                <tspan x="140" dy="18">
                  hiring company.
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/drvjsegeb/image/upload/v1704393924/recruitment-process-removebg-preview_1_zabrmq.png"
        className="img-hring-lower"
        alt="recruitement"
      />
    </div>
  );
};

export default Hiring;
