import React, { useState } from 'react';
import './Step1.css'; // Import the CSS file for styling

const Step1 = ({ onNext }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate inputs (optional)
        if (name && email && phone) {
            onNext({ name, email, phone }); // Pass data to the next step
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="step1-container">
            <h2>Personal info</h2>
            <p className="subtitle">Please provide your name, email address, and phone number.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. King Khan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="e.g. kamranbgp15@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="e.g. +91 7059400392"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="navigation">
                    <button type="submit" className="next-button">Next Step</button>
                </div>
            </form>
        </div>
    );
};

export default Step1;