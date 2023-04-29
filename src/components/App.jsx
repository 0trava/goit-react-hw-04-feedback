import { useState } from 'react'; // підключення Хук для стану
import Section from './Section/Section';// підключення секції Section
import Statistics from './Statistics/Statistics'; // підключення секції Statistics
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'; // підключення секції FeedbackOptions
import Notification from './Notification/Notification'; // підключення секції Notification
import css from "./App.module.css";// підключення стилів на картку





export const App = () => {

  // !!! ОБОВ'ЯЗКОВО 
  // (Стан застосунку повинен бути наступного вигляду, 
  // додавати нові властивості не можна)
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


    // BUTTON - команди при click (good, bad, neutral  )
    // Додавання обов'язково робимо через функцію, з поверненням стану
  const clickBtn = (evt) => {
    const name = evt.target.name;
    if (name === 'good') setGood(prev => prev + 1);
    if (name === 'neutral') setNeutral(prev => prev + 1);
    if (name === 'bad') setBad(prev => prev + 1);    
  }
  
  // підрахунок загальної кількості відгуків
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

// підрахунок відсотка позитивних відгуків
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0);
  }

// РЕНДНЕРІНГ сторінки

    let visible = false;

    if (good+neutral+bad > 0) { visible = true;}
    else {visible = false; };

    return (
      <div className={css.container}>
        <div className={css.card}>
            <Section title="Please leave feedback">
              <FeedbackOptions clickBtn={clickBtn}/>
            </Section>
            
            <Section title="Statistics">
              {!visible && (
                <Notification message={"There is no feedback"}></Notification>
              )}
              { visible && (
                <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={countTotalFeedback()} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}/>
              )}
              
            </Section>
        </div>
      </div>
    );
  }
