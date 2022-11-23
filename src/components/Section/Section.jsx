import { Component } from 'react';
import { Title, InnerWrapper } from './Section.styled';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from '../Notification';

export class Section extends Component {
 

  countTotalFeedback = data => {
    return Object.values(data).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedbackPercentage = data => {
    const total = Object.values(data).reduce((acc, total) => acc + total, 0);
    const persent = (this.props.state.good * 100) / total;
    return Math.round(persent);
  };
  render() {
    const title = this.props.title;

    const totalFeedback = this.countTotalFeedback(this.props.state);
    const positiveFeedbackInPercents = this.countPositiveFeedbackPercentage(
      this.props.state
    );
    const { good, neutral, bad } = this.props.state;
    const { changeState } = this.props;
  
    return (
      <InnerWrapper>
        <Title>{title}</Title>

        <FeedbackOptions options={changeState} onLeaveFeedback={this.props.state}/>
        {good || neutral || bad !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackInPercents}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </InnerWrapper>
    );
  }
}

