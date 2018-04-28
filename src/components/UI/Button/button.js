import React from 'react';
import classes from './button.css';

const Button = ({name, backgroundColor, textColor, marginLeft, onClick }) => {
   return(
      <button 
         className={classes.button}
         style={{ backgroundColor, color: textColor, marginLeft }}
         onClick={ onClick }
         >{name}
      </button>
   );
}

export default Button;