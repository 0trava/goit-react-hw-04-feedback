import PropTypes from 'prop-types';
import css from "./Notification.module.css"; // підключення стилів на картку


function Notification({message}) {
    return (
        <div className={css.notification}>
            <h2  className={css.notification_title}>{message}</h2>
        </div>
    );
  }
  
  Notification.prototype = {
    message: PropTypes.string.isRequired,
  };
  
  export default Notification;