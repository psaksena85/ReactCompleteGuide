import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';
  const generatedClasses = [];

  if (props.persons.length <= 2) {
    generatedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    generatedClasses.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={generatedClasses.join(' ')}>This really works.</p>

      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Person</button>
    </div>
  );
}

export default cockpit;