import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Pulkit Saxena', age: 34 },
      { id: 'qwe1', name: 'Lipika Saxena', age: 33 },
      { id: 'fse1', name: 'Shanaya Saxena', age: 3 },
    ],

    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersons = () => {
    const currentShowPerson = this.state.showPersons;
    this.setState({
      showPersons: !currentShowPerson
    });
  }

  render () {
    let persons = null;
    
    if(this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersons}/>
          {persons}
          
        </div>
    );

    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'I\'m React App!!!'));
  }
}

export default App;