import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'; // підключення стилів на картку


function FeedbackOptions({clickBtn}) {
    return (
        <div className='Counter__controls'>
            <button  onClick={clickBtn} type="button" className={css.btn} name="good">Good</button>
            <button  onClick={clickBtn} type="button" className={css.btn} name="neutral">Neutral</button>
            <button  onClick={clickBtn} type="button" className={css.btn} name="bad">Bad</button>
        </div>
    );
  }
  
  FeedbackOptions.prototype = {
    clickBtn: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;