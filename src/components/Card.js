import React from 'react';
import { MENU_IMG } from '../utils/Constants';

const Card = (props) => {

    const {name, description, price, imageId, defaultPrice} = props?.props    

    console.log(props)
    return (
        <div className="menu-card">
            <div className="menu-header">
                <h2>{name}</h2>
            </div>
            <div className="menu-items">
            <img src={MENU_IMG + imageId} alt={name} />
                        <div className="item-details">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <p className="price">₹ {price / 100 || defaultPrice / 100}</p>
                        </div>
            </div>
        </div>
    );
};

export default Card;
