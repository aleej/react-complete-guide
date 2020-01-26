import React, { Component, Fragment } from 'react';

import Aux from '../../../hoc/Aux';
import classes from './Person.css';

class Person extends Component {
    render(){
        return (
            <Aux className={classes.Person}>
                <p onClick = { this.props.click } > I'm {this.props.name} and I'm { this.props.age } years old!</p >
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
                    {/* </div> */ }
            </Aux >
        );
    }
}

export default Person;