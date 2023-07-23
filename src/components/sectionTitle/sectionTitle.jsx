import React, { useState } from 'react';
import FeedbackOptions from 'components/feedbackOptions/feedbackOptions';
import Statistics from 'components/statistics/statistics';
import css from '../feedbackOptions/feedbackOptions.module.css';

const SectionTitle = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedbackChange = evt => {
    setFeedback(prevState => ({ ...prevState, [evt]: prevState[evt] + 1 }));
  };

  const { good, neutral, bad } = feedback;

  return (
    <div className={css.section}>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        good={good}
        neutral={neutral}
        bad={bad}
        onFeedbackChange={handleFeedbackChange}
      />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
export default SectionTitle;
