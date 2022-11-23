import PropTypes from 'prop-types'
import { useState, createContext, useContext } from 'react';
import { Section } from './Section';

const feedbackContext = createContext();
export const useFeedbackContext = () => useContext(feedbackContext);

export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onChangeStatistics = e => {

    const ID = e.currentTarget.id;
    if (ID === '1') {
      setGood(good + 1);
    }
    if (ID === '2') {
      setneutral(neutral + 1);
    }
    if (ID === '3') {
      setBad(bad + 1);
    }
  };

    return (
    <feedbackContext.Provider value={{good, neutral, bad}}>
      <Section title="Please leave feedback" changeState={onChangeStatistics}/>
    </feedbackContext.Provider>);
  }


App.propTypes  = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  })
}