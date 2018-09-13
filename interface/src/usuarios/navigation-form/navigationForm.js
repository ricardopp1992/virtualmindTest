import React from 'react'

function NavigationForm (props){
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
                    nav.map((element, index) => {
                        return (
                            <li 
                                // ref={(element) => { this.link[index] = element}}
                                key={element.key}
                                className="nav-item"
                                id={element.key}
                                // con un clousure paso el parámetro que me identificará cada pestaña
                                onClick={props.handleForm(element.key)} 
                                >
                                <a href="#" className="nav-link" > {element.text} </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
}

export default NavigationForm