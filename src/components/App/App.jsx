import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../descrsption/Description";

import "./App.css";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  });

  // Визначаємо totalValue в окремій змінній
  const totalValue = values.good + values.neutral + values.bad;

  useEffect(() => {
    const positive =
      totalValue > 0 ? Math.round((values.good / totalValue) * 100) : 0;

    setValues((prevValues) => ({
      ...prevValues,
      total: totalValue,
      positive: positive,
    }));
  }, [values.good, values.neutral, values.bad, totalValue]);

  const goodValue = () => {
    setValues((prevValues) => ({
      ...prevValues,
      good: prevValues.good + 1,
    }));
  };

  const neutralValue = () => {
    setValues((prevValues) => ({
      ...prevValues,
      neutral: prevValues.neutral + 1,
    }));
  };

  const badlValue = () => {
    setValues((prevValues) => ({
      ...prevValues,
      bad: prevValues.bad + 1,
    }));
  };

  const resetValues = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: 0,
    });
  };

  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem("values"));
    if (savedValues) {
      setValues(savedValues);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        goodValue={goodValue}
        neutralValue={neutralValue}
        badlValue={badlValue}
        resetValues={resetValues}
        totalFeedback={totalValue}
      />

      {totalValue === 0 ? (
        <p>No feedback yeat</p>
      ) : (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={values.total}
          positive={values.positive}
        />
      )}
    </>
  );
}
