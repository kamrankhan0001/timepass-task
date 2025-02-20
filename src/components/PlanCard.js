import React from 'react';
import './PlanCard.css';

const PlanCard = ({ name, price, icon }) => {
    return (
        <div className="plan-card">
             <img src={icon} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default PlanCard;