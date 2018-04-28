import React from 'react';
import classes from './backDrop.css';

const BackDrop = props => {
   return(
      props.showModal ? <div className={classes.BackDrop} >{props.children}</div> : null
   );
};

export default BackDrop;