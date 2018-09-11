import React, {Component} from 'react'
import NavigationForm from '../../navigation-form/navigationForm'

class Layout extends Component {
    constructor(props){
        super(props)
    
    }

    handleForm = (event) => {
        event.preventDefault()
        console.log(this.val)
    }

    render(){
        return (
            <div className="">
                <NavigationForm handleForm={this.handleForm} />
                {
                    //aquí vamos a ir alternando los formularios
                }
            </div>
        )
    }
}

export default Layout