import React from 'react';

const PlanCard = ({ name, price }) => {
    return (
        <div className="plan-card">
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default PlanCard;