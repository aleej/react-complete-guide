import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';



class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] GetDerivedStateFromProps', props);
    return state;
  };

  // componentWillMount(){
  //   console.log('[App.js] Component will mount');
  // }

  componentDidMount() {
    console.log('[App.js] component did mount');
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  };

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  };

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const indexOfPerson = persons.findIndex(personElement => personElement.id === id);
    persons[indexOfPerson].name = event.target.value;
    console.log(this.state.changeCounter);
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  logoutHandler = () => {
    this.setState({ authenticated: false });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}>Show Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated, 
          login: this.loginHandler,
          logout: this.logoutHandler
          }}>
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.title}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
