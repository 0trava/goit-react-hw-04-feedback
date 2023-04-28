import PropTypes from 'prop-types';
import css from "./Statistics.module.css"; // підключення стилів на картку


function Statistics({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) {

        return (
            <div className="Counter">
            <ul className={css.counter__list}>
                <li className='Counter_item'>
                    <p>Good: <span className={css.counter__value}>{good}</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Neutral: <span className={css.counter__value}>{neutral}</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Bad: <span className={css.counter__value}>{bad}</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Total: <span className='Counter__total'>{countTotalFeedback}</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Positive feedback: <span className='Counter__percent'>{countPositiveFeedbackPercentage}</span> %</p>
                </li>
            </ul>
        </div>
        )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

export default Statistics;