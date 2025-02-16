import React from 'react';
import './ThankYou.css';

const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <h2>Thank you!</h2>
            <p className="message">
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <a href="mailto:support@.com">support@kamrankhan.com</a>.
            </p>
        </div>
    );
};

export default ThankYou;