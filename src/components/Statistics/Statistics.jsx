import PropTypes from 'prop-types';
import { StatisticBox, Title, TextContent } from './Statistics.styled';
import {useFeedbackContext} from '../App'

export function Statistics({total, positivePercentage}) {
  const {good, neutral, bad} = useFeedbackContext()
  return (
    <StatisticBox>
      <Title>Statistics</Title>
      <TextContent>Good: {good}</TextContent>
      <TextContent>Neutral: {neutral}</TextContent>
      <TextContent>Bad: {bad}</TextContent>
      <TextContent>Total: {total}</TextContent>
      <TextContent>Positive feedback: {positivePercentage}%</TextContent>
    </StatisticBox>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}