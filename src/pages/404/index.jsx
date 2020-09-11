import React from "react";
import { Link, useLocation } from "react-router-dom";

import FramerItem from "../../components/FramerItem";

import "./404.css";

export default () => {
  const location = useLocation();

  return (
    <FramerItem isContainer>
      <FramerItem>
        <div style={{ textAlign: "center" }}>
          <p>
            Oopsy doopsy : there is no content at this location (
            {location.pathname})
          </p>
          <Link to="/">homepage</Link>
        </div>
        <svg viewBox="0 0 1320 300" className="viewBox">
          {/* <!--pattern--> */}
          <defs>
            <pattern
              id="GPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(35)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="patternTransform"
                type="rotate"
                from="35"
                to="395"
                begin="0"
                dur="160s"
                repeatCount="indefinite"
              />
              <circle cx="10" cy="10" r="10" stroke="none" fill="yellow">
                <animate
                  attributeName="r"
                  type="xml"
                  from="1"
                  to="1"
                  values="1; 10; 1"
                  begin="0s"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </pattern>
          </defs>

          {/* <!-- Symbol --> */}
          <symbol id="s-text">
            <text textAnchor="middle" x="35%" y="50%" dy=".35em">
              4
            </text>
          </symbol>
          <symbol id="v-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              0
            </text>
          </symbol>
          <symbol id="g-text">
            <text textAnchor="middle" x="65%" y="50%" dy=".35em">
              4
            </text>
          </symbol>
          {/* <!-- Duplicate symbols --> */}
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#s-text" className="text"></use>
          <use xlinkHref="#v-text" className="text1"></use>
          <use xlinkHref="#v-text" className="text1"></use>
          <use xlinkHref="#v-text" className="text1"></use>

          <use
            id="g-usetag"
            xlinkHref="#g-text"
            className="text2"
            style={{ fill: "url(#GPattern)" }}
          />
        </svg>
      </FramerItem>
    </FramerItem>
  );
};
