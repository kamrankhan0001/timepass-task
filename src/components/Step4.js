import React from 'react';
import './Step4.css';

const Step4 = ({ selectedPlan, selectedAddOns, onBack, onNext }) => {
  // Calculate the total price safely using optional chaining and fallback values
  const calculateTotal = () => {
    const planPrice = parseFloat(
      (selectedPlan?.price || '$0').replace('$', '').replace('/mo', '')
    );
    const addOnsTotal = selectedAddOns?.reduce((sum, addOn) => {
      const price = parseFloat(
        (addOn?.price || '$0').replace('$', '').replace('/mo', '')
      );
      return sum + price;
    }, 0) || 0;
    return planPrice + addOnsTotal;
  };

  return (
    <div className="step4-container">
      <h2>Finishing up</h2>
      <p className="subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary-box">
        <div className="plan-summary">
          <div>
            <h3>
            {selectedPlan?.name} Arcade(Monthly)
            </h3>
            <button className="change-button">Change</button>
          </div>
          <p>{selectedPlan?.price}</p>
        </div>
        <hr />
        {selectedAddOns?.map((addOn, index) => (
          <div key={index} className="add-on-summary">
            <p>{addOn.name}</p>
            <p>{addOn.price}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <p>
          Total (per{' '}
          {selectedPlan?.billing === 'Monthly' ? 'month' : 'year'})
        </p>
        <p>
          +${calculateTotal().toFixed(2)}/
          {selectedPlan?.billing === 'Monthly' ? 'mo' : 'yr'}
        </p>
      </div>
      <div className="navigation">
        <button type="button" className="back-button" onClick={onBack}>
          Go Back
        </button>
        <button type="button" className="confirm-button" onClick={onNext}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;



