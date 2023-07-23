import React from 'react';
import css from '../feedbackOptions/feedbackOptions.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = (good / totalFeedback) * 100;

  return (
    <div className={css.textInfo}>
      {totalFeedback > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive Feedback: {Math.floor(positiveFeedback)}%</p>
        </div>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};
export default Statistics;
