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

    handleForm = (event) => {
        console.log(this.link.id)
        switch(this.link.id){
            case 'create':
                this.setState({
                    formRendered : (
                        <CreateForm />
                    )
                })
                break;
            case 'update':
                this.setState({
                    formRendered : (
                        <UpdateForm />
                    )
                })
                break;
            // case 'findUser':
            //     this.setState({
            //         formRendered : (
            //             <FindUserForm />
            //         )
            //     })
            //     break;
            case 'delete':
                this.setState({
                    formRendered : (
                        <UpdateForm />
                    )
                })
                break;  
        }    
        
    }

    setRef = (element) => {
        this.link = element
    }

    render(){
        return (
            <div className="">
                <NavigationForm setRef={this.setRef} handleForm={this.handleForm} />
                {
                    this.state.formRendered
                }
            </div>
        )
    }
}

export default Layout