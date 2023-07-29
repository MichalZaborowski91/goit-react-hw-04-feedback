import React from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({
  onFeedbackChangeGood,
  onFeedbackChangeNeutral,
  onFeedbackChangeBad,
}) => {
  const handleGoodBtn = () => {
    onFeedbackChangeGood('good');
  };
  const handleNeutralBtn = () => {
    onFeedbackChangeNeutral('neutral');
  };
  const handleBadBtn = () => {
    onFeedbackChangeBad('bad');
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
