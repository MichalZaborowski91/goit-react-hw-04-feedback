import React from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ onFeedbackChange }) => {
  const handleGoodBtn = () => {
    onFeedbackChange('good');
  };
  const handleNeutralBtn = () => {
    onFeedbackChange('neutral');
  };
  const handleBadBtn = () => {
    onFeedbackChange('bad');
  };

  return (
    <div>
      <button className={css.goodBtn} type="button" onClick={handleGoodBtn}>
        Good
      </button>
      <button
        className={css.neutralBtn}
        type="button"
        onClick={handleNeutralBtn}
      >
        Neutral
      </button>
      <button className={css.badBtn} type="button" onClick={handleBadBtn}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
