import {Component} from 'react';

import Section from './Section/Section';// підключення секції Section
import Statistics from './Statistics/Statistics'; // підключення секції Statistics
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'; // підключення секції FeedbackOptions
import Notification from './Notification/Notification'; // підключення секції Notification
import css from "./App.module.css";// підключення стилів на картку





class App extends Component {

  // !!! ОБОВ'ЯЗКОВО 
  // (Стан застосунку повинен бути наступного вигляду, 
  // додавати нові властивості не можна)
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


    // BUTTON - команди при click (good, bad, neutral  )
    // Додавання обов'язково робимо через функцію, з поверненням стану
   clickBtn = (evt) => {


      if (evt.target.name === "good"){
        this.setState((prevState) => {
          return {good: prevState.good + 1,}  
        });
      } else if (evt.target.name === "bad"){
        this.setState((prevState) => {
          return {bad: prevState.bad + 1,}  
        });
      } else {
        this.setState((prevState) => {
          return {neutral: prevState.neutral + 1, }  
        });
      }      
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let count = Math.round((good * 100) / (good + neutral + bad));
    if (!count){count = 0} ;
    return count;
  }

// РЕНДНЕРІНГ сторінки
  render () {
    // Змінні для роботи
    const { good, neutral, bad } = this.state;
    let visible = false;

    if (good+neutral+bad > 0) { visible = true;}
    else {visible = false; };

    return (
      <div className={css.container}>
        <div className={css.card}>
            <Section title="Please leave feedback">
              <FeedbackOptions clickBtn={this.clickBtn}/>
            </Section>
            
            <Section title="Statistics">
              {!visible && (
                <Notification message={"There is no feedback"}></Notification>
              )}
              { visible && (
                <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={this.countTotalFeedback()} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}/>
              )}
              
            </Section>
        </div>
      </div>
    );
  }
}

export default App;