import React, { useState } from 'react';
import './App.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import bgSidebar from './assets/bg-sidebar-desktop.svg'; 

import ThankYou from './components/ThankYou';


function App() {
    const [step, setStep] = useState(1);
    const [userInfo, setUserInfo] = useState({});
    const [selectedPlan, setSelectedPlan] = useState({});
    
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    

    const handleNextStep1 = (data) => {
        setUserInfo(data);
        setStep(2);
    };

    const handleNextStep2 = (data) => {
        setSelectedPlan(data);
        setStep(3);
    };

    const handleNextStep3 = (data) => {
        setSelectedAddOns(data);
        setStep(4); 
    };

    const handleNextStep4 = () => {
        setStep(5); 
    }

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1); 
    };

    return (
        <div className="app-container">
            <div
                className="sidebar"
                style={{
                    background: `url(${bgSidebar}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="step-indicators">
                    <div className={`step-indicator ${step === 1 ? 'active' : ''}`}>
                        <span>1</span>
                        <div>
                            <p>STEP 1</p>
                            <p>YOUR INFO</p>
                        </div>
                    </div>
                    <div className={`step-indicator ${step === 2 ? 'active' : ''}`}>
                        <span>2</span>
                        <div>
                            <p>STEP 2</p>
                            <p>SELECT PLAN</p>
                        </div>
                    </div>
                    <div className={`step-indicator ${step === 3 ? 'active' : ''}`}>
                        <span>3</span>
                        <div>
                            <p>STEP 3</p>
                            <p>ADD-ONS</p>
                        </div>
                    </div>
                    <div className={`step-indicator ${step === 4 ? 'active' : ''}`}>
                        <span>4</span>
                        <div>
                            <p>STEP 4</p>
                            <p>SUMMARY</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                {step === 1 && <Step1 onNext={handleNextStep1} />}
                {step === 2 && <Step2 onNext={handleNextStep2} onBack={handleBack} />}
                {step === 3 && <Step3 onNext={handleNextStep3} onBack={handleBack} />}
                {step === 4 && <Step4 selectedPlan={selectedPlan} selectedAddOns={selectedAddOns} onBack={handleBack} onNext = {handleNextStep4}/>}
                {step === 5 && <ThankYou />}
            </div>
        </div>
    );
}

export default App;