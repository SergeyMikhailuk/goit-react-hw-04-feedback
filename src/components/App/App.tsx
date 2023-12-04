import React, { useState } from 'react';

import Section from 'components/Section';
import ButtonsBar from 'components/ButtonsBar';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { Wrapper } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setDad] = useState(0);

  const onLeaveFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setDad(prevState => prevState + 1);
        break;
      default:
        new Error('The name was not found');
    }
  };

  const total = good + neutral + bad;
  const key = Object.keys({ good, neutral, bad });
  const percentage = Math.round((good * 100) / total);

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <ButtonsBar options={key} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {!!total ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        </Section>
      ) : (
        <Notification />
      )}
    </Wrapper>
  );
};

export default App;

export type AppState = {
  good: number;
  neutral: number;
  bad: number;
};
