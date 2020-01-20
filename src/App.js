import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    this.setState({
      persons: [
        { id: 1, name: newName, age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    })
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
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    };

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
      style.backgroundColor = 'red';
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
        <button
          onClick={this.togglePersonsHandler}
          style={style}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
