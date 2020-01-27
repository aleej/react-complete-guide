import React, { useEffect, useRef, useContext } from 'react';

import AuthContext from '../../context/auth-context';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleButtonRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect, canceling timer');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); //classes wil be red
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                ref={toggleButtonRef}
                onClick={props.clicked}>Toggle Persons
            </button>
            {authContext.authenticated ? <button onClick={authContext.logout}>Log Out</button> : <button onClick={authContext.login}>Log In</button>}
        </div>
    );
};

export default React.memo(cockpit);