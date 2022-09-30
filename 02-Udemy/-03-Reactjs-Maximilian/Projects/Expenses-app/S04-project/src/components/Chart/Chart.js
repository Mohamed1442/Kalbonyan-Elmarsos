import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map(dataPoint => dataPoint.value)
  const maxValue = Math.max(...values)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;

// import React from "react";
// import "./Chart.css";
// import ChartBar from "./ChartBar";

// const Chart = (props) => {
//   // const filteredValues = props.items.map((bar) => bar.amount);
//   let allValues = new Array(12);
//   props.items.forEach((item) => {
//     allValues[item.date.getMonth()] =
//       (allValues[item.date.getMonth()] || 0) + item.amount;
//   });
//   const container = [];
//   allValues.forEach((value, index) => {
//     container.push({ index, value });
//   });
//   let lastArr = new Array(12);
//   lastArr.fill(0);
//   lastArr = lastArr.map((itemOut, index) => {
//     container.forEach((itemIn) => {
//       if (itemIn.index === index) {
//         itemOut = itemIn.value;
//       }
//     });
//     return itemOut;
//   });

//   const maxVal = Math.max(...lastArr);
//   console.log("maxVal", maxVal);
//   console.log("lastArr", lastArr);
//   return (
//     <div className="chart">
//       {props.bars.map((bar, index) => (
//         <ChartBar
//           label={bar.month}
//           key={bar.month}
//           value={lastArr[index]}
//           maxVal={maxVal}
//         />
//       ))}
//     </div>
//   );
// };

// export default Chart;
