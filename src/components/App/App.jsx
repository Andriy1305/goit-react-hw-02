import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../description/Description";
import Notification from "../Notification/Notification";

import "./App.css";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalValue = values.good + values.neutral + values.bad;
  const positive =
    totalValue > 0 ? Math.round((values.good / totalValue) * 100) : 0;

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetValue = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
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
        updateFeedback={updateFeedback}
        resetValue={resetValue}
        totalFeedback={totalValue}
      />

      {totalValue === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalValue}
          positive={positive}
        />
      )}
    </>
  );
}
