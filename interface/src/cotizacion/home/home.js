import React, {Component} from 'react'
import Column from '../Column/content/Column'
import './home.css'
import CardCurrency from '../card-currency/conponent/cardCurrency'
import config from '../config'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            currencyCard : [{
                quote : '12',
                timeAgo : new Date()
            }]
        }
    }

    pushingCurrencyCard = () => {
        return this.state.currencyCard.unshift({
            quote : '5',
            timeAgo : new Date()
        })
    }

    componentDidMount(){
        setInterval( () => {
            this.pushingCurrencyCard()

            this.setState({
                currencyCard : this.state.currencyCard
            })
        },config.refreshingTime)
        
    }

    render(){
        return(
            <div className="container">
                <Column className="hola">
                    <h1 className="currencyTitle">Dolar</h1>
                    {
                        this.state.currencyCard.map((element) => {
                            console.log(element)
                            return(
                                <CardCurrency {...element} />
                            )
                        })
                    }
                </Column>
                <Column>
                    <h1 className="currencyTitle">Real</h1>
                    <CardCurrency />

                </Column>
                <Column>
                  <h1 className="currencyTitle">Pesos</h1>

                </Column>
            </div>
        )
    }
}

export default Home