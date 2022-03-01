import React from 'react';  // technically we don't need this now

import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
