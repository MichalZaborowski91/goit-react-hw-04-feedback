import React, { Component } from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  handleGoodBtn = () => {
    this.props.onFeedbackChange('good');
  };
  handleNeutralBtn = () => {
    this.props.onFeedbackChange('neutral');
  };
  handleBadBtn = () => {
    this.props.onFeedbackChange('bad');
  };
  render() {
    return (
      <div>
        <button
          className={css.goodBtn}
          type="button"
          onClick={this.handleGoodBtn}
        >
          Good
        </button>
        <button
          className={css.neutralBtn}
          type="button"
          onClick={this.handleNeutralBtn}
        >
          Neutral
        </button>
        <button
          className={css.badBtn}
          type="button"
          onClick={this.handleBadBtn}
        >
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
