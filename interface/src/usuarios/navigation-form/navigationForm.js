import React from 'react'

function NavigationForm(props){
    const nav = [
        {
            text : "Create",
            key : "create"
        },
        {
            text : "Update",
            key : "update"
        },
        {
            text : "Find User",
            key : "findUser"
        },
        {
            text : "Delete",
            key : "delete"
        }
    ]
    return (
        <ul className="nav nav-tabs">
            {
                nav.map((element) => {
                    return (
                        <li 
                            key={element.key}
                            className="nav-item"
                            onClick={props.handleForm} 
                            id={element.key} 
                            className="nav-link"
                            ref={props.setRef}
                            >
                            <a href="#" > {element.text} </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavigationForm