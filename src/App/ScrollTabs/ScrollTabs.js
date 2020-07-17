import React, { useState } from "react";
import sampleData from "./sampleData";
import "./sample.css";

const ScrollTabs = () => {
  const [country, setCountry] = useState("");
  const scrollTest = (e) => {
    const mainElement = e.target;
    let element = mainElement.querySelectorAll("li");
    var x = mainElement.offsetHeight;
    var y = mainElement.scrollTop;
    // console.log("x", x);
    // console.log("y", y);
    // console.log("element", element);
    element.forEach((currentValue, currentIndex) => {
      console.log("object", currentValue.offsetTop + " , " + y);
      if (y >= currentValue.offsetTop) {
        setCountry(currentValue.dataset.company);
        let elmnt = document.getElementById(currentValue.dataset.company);
        elmnt.scrollIntoView();
      }
    });
    // console.log("mainElement", mainElement + ", " + mainElement.offsetTop);
    // console.log("e", e.target);
    // console.log("e", e.target);

    // console.log(
    //     currentValue.id +
    //       ", " +
    //       currentIndex +
    //       ", " +
    //       currentValue.offsetTop +
    //       ", " +
    //       currentValue.offsetHeight +
    //       ", " +
    //       y,
    //     ", " + currentValue.offsetTop,
    //     ", " + y + currentValue.offsetTop
    //   );
  };
  return (
    <div>
      <div className="container">
        <h2>{country}</h2>
        <ul className="horizontal-scroll">
          {sampleData.map((data) => (
            <li key={data._id} id={data.company}>
              <a href={`#${data._id}`}>{data.name}</a>
            </li>
          ))}
        </ul>
        <ul
          id="verticalScroll"
          className="vertical-scroll"
          onScroll={scrollTest}
        >
          {sampleData.map((data) => (
            <li key={data._id} id={`${data._id}`} data-company={data.company}>
              <h4>{data.name}</h4>
              <a href={`#${data.company}`}>{data.company}</a>
              <p>{data.about}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollTabs;
