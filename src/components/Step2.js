import React, { useState } from 'react';
import PlanCard from './PlanCard';
import './Step2.css';
import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';

const Step2 = ({ onNext, onBack }) => {
  const [billing, setBilling] = useState('monthly');

  const plans = [
    { 
      icon: arcadeIcon, 
      name: 'Arcade', 
      price: billing === 'monthly' ? '$9/mo' : '$90/yr', 
    },
    { 
      icon: advancedIcon,
      name: 'Advanced', 
      price: billing === 'monthly' ? '$12/mo' : '$120/yr', 
    },
    { 
      icon: proIcon,
      name: 'Pro', 
      price: billing === 'monthly' ? '$15/mo' : '$150/yr', 
    }
  ];

  const handleBillingChange = () => {
    setBilling(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <div className="step2-container">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
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
      <div className="billing-toggle-container">
        <span className={billing === 'monthly' ? 'active' : ''}>Monthly</span>
        <div 
          className={`billing-toggle-switch ${billing === 'yearly' ? 'yearly' : ''}`}
          onClick={handleBillingChange}
        >
          <div className="billing-toggle-slider"></div>
        </div>
        <span className={billing === 'yearly' ? 'active' : ''}>Yearly</span>
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