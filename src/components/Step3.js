import React, { useState } from 'react';
import './Step3.css';

const Step3 = ({ onNext, onBack }) => {
    const [addOns, setAddOns] = useState({
        onlineService: { name: 'Online service', price: '+$1/mo', selected: false },
        largerStorage: { name: 'Larger storage', price: '+$2/mo', selected: false },
        customizableProfile: { name: 'Customizable profile', price: '+$2/mo', selected: false },
    });

    const handleAddOnChange = (e) => {
        const { name, checked } = e.target;
        setAddOns((prev) => ({
            ...prev,
            [name]: { ...prev[name], selected: checked },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedAddOnsArray = Object.values(addOns).filter((addOn) => addOn.selected);
        onNext(selectedAddOnsArray); // Pass the array of selected add-ons to the next step
    };

    return (
        <div className="step3-container">
            <h2>Pick add-ons</h2>
            <p className="subtitle">Add-ons help enhance your gaming experience.</p>
            <form onSubmit={handleSubmit}>
                {Object.entries(addOns).map(([key, addOn]) => (
                    <div key={key} className="add-on">
                        <input
                            type="checkbox"
                            id={key}
                            name={key}
                            checked={addOn.selected}
                            onChange={handleAddOnChange}
                        />
                        <label htmlFor={key}>
                            <h3>{addOn.name}</h3>
                            <p>{addOn.price}</p>
                        </label>
                    </div>
                ))}
                <div className="navigation">
                    <button type="button" className="back-button" onClick={onBack}>
                        Go Back
                    </button>
                    <button type="submit" className="next-button">
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step3;