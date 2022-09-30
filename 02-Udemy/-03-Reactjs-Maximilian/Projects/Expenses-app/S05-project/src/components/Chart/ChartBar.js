import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let calculatedHeight = "0%";
  if (props.maxValue > 0) {
    calculatedHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: calculatedHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

// import React from "react";
// import "./ChartBar.css";

// const ChartBar = (props) => {
//   const precentageHeight = (+props.value / +props.maxVal) * 100 + "%";
//   console.log("precentage", precentageHeight);
//   return (
//     <div className="chart-bar">
//       <div className="chart-bar__inner">
//         <div
//           className="chart-bar__fill"
//           style={{ height: precentageHeight }}
//         ></div>
//       </div>
//       <div className="chart-bar__label">{props.label}</div>
//     </div>
//   );
// };

// export default ChartBar;
