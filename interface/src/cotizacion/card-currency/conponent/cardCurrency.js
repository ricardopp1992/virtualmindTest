import React from 'react'
import './cardCurrency.css'
import intlRelativeFormat from 'intl-relativeformat'
const rf = new intlRelativeFormat('es-AR')

function CardCurrency(props){
    return (
        <div className="card CardCurrency">
            <div className="card-header">{props.quote}</div>
            <div className="card-block">
                <p className="card-text">{rf.format(props.timeAgo)}</p>
            </div>
        </div>
    )
}

export default CardCurrency