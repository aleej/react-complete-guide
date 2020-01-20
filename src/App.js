import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './Person/Person';


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  font: inherit;
  border: 1px solid gray;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, person) => {
    const persons = [...this.state.persons];
    const indexOfPerson = persons.findIndex(personElement => personElement.id === person.id);
    persons[indexOfPerson].name = event.target.value;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;

    if (this.state.showPersons === true ){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person)}
            />
          })}
        </div>
      );      
    }


    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); //classes wil be red
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
