import React from 'react'
import './styles/CardSmall.css'

function CardSmall(props){
    return(
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
                <img src={props.icon} alt=""/>
            </p>
            <p className="card-small-number">{props.pageViews}</p>
            <p className="card-small-up">
                <span>
                    <img src="images/icon-up.svg" alt=""/>
                    {props.growth}%
                </span>
            </p>
        </div>
    )
}

export default CardSmall