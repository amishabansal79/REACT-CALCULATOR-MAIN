import React, { useState } from 'react';
import './App.scss';

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];

const App = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (e) => {
    const value = e.target.getAttribute("value");

    if (value === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === "RESET") {
      setExpression("");
    } else if (value === "=") {
      try {
        let exp = expression.replace(/x/g, "*"); // replace 'x' with '*'
        const result = eval(exp); // ⚡️calculate
        setExpression(result.toString());
      } catch (error) {
        setExpression("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="wrapper">
      <div className="cal_title">
        <span>Devops Calculator</span>
      </div>
      <div className="cal_result mt-10">
        <span>{expression || "0"}</span>
      </div>
      <div className="cal_pad mt-10">
        {btnValues.flat().map((item, i) => {
          return (
            <button
              className={`cal_btn 
                ${item === "DEL" ? 'del' : ''}
                ${item === "RESET" ? 'del' : ''}
                ${item === "=" ? 'eq' : ''}
              `}
              value={item}
              key={i}
              onClick={handleClick}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
