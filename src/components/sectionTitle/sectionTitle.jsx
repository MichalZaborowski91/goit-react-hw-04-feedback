import React, { Component } from 'react';
import FeedbackOptions from 'components/feedbackOptions/feedbackOptions';
import Statistics from 'components/statistics/statistics';
import css from '../feedbackOptions/feedbackOptions.module.css';
import PropTypes from 'prop-types';

class SectionTitle extends Component {
  static defaultProps = {
    step: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedbackChange = evt => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + this.props.step,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.section}>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          onFeedbackChange={this.handleFeedbackChange}
        />
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
SectionTitle.propTypes = {
  step: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
export default SectionTitle;
