import React from 'react'

function NavigationForm(props){
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a onClick={props.handleForm} value="sadasd"  className="nav-link" href="#">Create</a>
            </li>
            <li className="nav-item">
                <a onClick={props.handleForm} className="nav-link" href="#">Find user</a>
            </li>
            <li className="nav-item">
                <a onClick={props.handleForm} className="nav-link" href="#">Update user</a>
            </li>
            <li className="nav-item">
                <a onClick={props.handleForm} className="nav-link" href="#">Delete user</a>
            </li>
        </ul>
    )
}

export default NavigationForm