import PropTypes from 'prop-types';
import css from './Section.module.css';


function Section({ title, children }) {
    return (
      <section>
        {title && <h2 className={css.section_title}>{title}</h2>}
        {children}
      </section>
    );
  }
  
  Section.prototype = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
  };
  
  export default Section;