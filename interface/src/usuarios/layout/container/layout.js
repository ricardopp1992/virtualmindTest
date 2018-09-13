'use strict'
import React, {Component} from 'react'
import NavigationForm from '../../navigation-form/navigationForm'
import CreateForm from '../../formularios/components/create-form'
import UpdateForm from '../../formularios/components/update-form'

class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {
            formRendered :  <CreateForm />
        }

    } 
    
    handleForm = (element) => {
        return (event) => {
            switch(element){
                case 'create':
                    this.setState({
                        formRendered : <CreateForm />
                    })
                    break
                case 'update':
                    this.setState({
                        formRendered : <UpdateForm />
                    })
                    break
            }
        }
    }

    render(){
        return (
            <div className="">
                <NavigationForm handleForm={this.handleForm} />
                {
                    this.state.formRendered
                }
            </div>
        )
    }
}

export default Layout