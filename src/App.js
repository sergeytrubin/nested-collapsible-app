import React, { useState } from 'react';
import './App.css';  // This will include our CSS styles

const Collapsible = ({ children, label }) => {
    
    const [IsOpen, setIsOpen] = useState(false);
    
    return (
        <div className='container'>
            <button className='toggle' onClick={() => setIsOpen(!IsOpen)}>{label}</button>
            <div className={IsOpen ? 'content show' : 'content'}>{children}</div>
        </div>
    );
}

const App = () => {
    return (
        <div className="outer-container">
            <Collapsible label='Click Here'>
                <ul>
                    <li>Profile</li>
                    <li>Dashboard</li>
                    <li>Logout</li>
                </ul>
            </Collapsible>
        </div>
    );
}

export default App;

