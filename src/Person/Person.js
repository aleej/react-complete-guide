import React from 'react';
import styled from 'styled-components';

//import './Person.css';

const StyledDiv = styled.div`            
    border: 1px solid #eee;
    padding: 16px;
    margin: 16px auto;
    box-shadow: 0 2px 3px #ccc;
    width: 60%;
    text-align: center;
    
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.value} />
        </StyledDiv>        
    )
};

export default person;