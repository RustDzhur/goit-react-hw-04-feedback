import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeStatistics = e => {
    const { good, neutral, bad } = this.state;
    const ID = e.currentTarget.id;
    if (ID === '1') {
      this.setState({
        good: good + 1,
      });
    }
    if (ID === '2') {
      this.setState({
        neutral: neutral + 1,
      });
    }
    if (ID === '3') {
      this.setState({
        bad: bad + 1,
      });
    }
  };

  render() {
    return <Section title="Please leave feedback" state={this.state} changeState={this.onChangeStatistics}/>;
  }
}

App.propTypes  = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  })
}