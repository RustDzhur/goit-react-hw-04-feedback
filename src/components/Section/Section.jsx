import { Title, InnerWrapper } from './Section.styled';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from '../Notification';

import { useFeedbackContext } from '../App';

export function Section({ title, changeState }) {
  const { good, neutral, bad } = useFeedbackContext();

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackInPercents = Math.round((good * 100) / totalFeedback);

  return (
    <InnerWrapper>
      <Title>{title}</Title>

      <FeedbackOptions options={changeState} />
      {good || neutral || bad !== 0 ? (
        <Statistics
          total={totalFeedback}
          positivePercentage={positiveFeedbackInPercents}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </InnerWrapper>
  );
}
