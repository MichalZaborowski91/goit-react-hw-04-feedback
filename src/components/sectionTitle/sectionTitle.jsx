import React, { useState } from 'react';
import FeedbackOptions from 'components/feedbackOptions/feedbackOptions';
import Statistics from 'components/statistics/statistics';
import css from '../feedbackOptions/feedbackOptions.module.css';

const SectionTitle = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };
  return (
    <div className={css.section}>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        good={good}
        neutral={neutral}
        bad={bad}
        onFeedbackChangeGood={handleGoodClick}
        onFeedbackChangeNeutral={handleNeutralClick}
        onFeedbackChangeBad={handleBadClick}
      />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
export default SectionTitle;
