import React, { useState } from 'react';
import PlanCard from './PlanCard';
import './Step2.css';

const Step2 = ({ onNext, onBack }) => {
  // Billing state (default: monthly)
  const [billing, setBilling] = useState('monthly');

  // Plan data with dynamic pricing based on billing state
  const plans = [
    { 
      icon: './assets/icon-arcade.svg', 
      name: 'Arcade', 
      price: billing === 'monthly' ? '$9/mo' : '$90/yr', 
    },
    { 
      icon: './assets/icon-advanced.svg',
      name: 'Advanced', 
      price: billing === 'monthly' ? '$12/mo' : '$120/yr', 
    },
    { 
      icon: './assets/icon-pro.svg',
      name: 'Pro', 
      price: billing === 'monthly' ? '$15/mo' : '$150/yr', 
    }
  ];

  // Handle changes for the billing option radio buttons
  const handleBillingChange = (e) => {
    setBilling(e.target.value);
  };

  return (
    <div className="step2-container">
      <h2>Select your plan</h2>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <PlanCard 
            key={index} 
            icon={plan.icon} 
            name={plan.name} 
            price={plan.price} 
          />
        ))}
      </div>
      <div className="billing-options">
        <label>
          <input 
            type="radio" 
            name="billing" 
            value="monthly" 
            checked={billing === 'monthly'}
            onChange={handleBillingChange} 
            aria-label="Monthly Billing"
          /> 
          Monthly
        </label>
        <label>
          <input 
            type="radio"
            name="billing" 
            value="yearly" 
            checked={billing === 'yearly'}
            onChange={handleBillingChange} 
            aria-label="Yearly Billing"
          /> 
          Yearly
        </label>
      </div>
      <div className="navigation">
        <button 
          type="button" 
          className="back-button" 
          onClick={onBack}
        >
          Go Back
        </button>
        <button 
          type="button" 
          className="next-button" 
          onClick={onNext}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;