import React from 'react';
import classes from './Person.css';

const person = (props) => {
  // const styles = {
  //   '@media (min-width:1200px) and (max-width:1440px)': {
  //     width: '450px'
  //   },

  //   '@media (min-width:1441px)': {
  //     width: '600px'
  //   },
  // };

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default person;