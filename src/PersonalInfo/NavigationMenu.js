

import React from 'react';
import '../Navigation.css';
import engage from '../Images/Rose.jpeg';

const NavigationMenu = () => {
    return (
        <div>
            <div className="bagroundColor">
            <h1 class="topleft">valentine's day Ma (JSK)!..</h1>
                <img
                    src={engage}
                    alt="Centered Image"
                    className="centeredImage"
                />
            </div>
        </div>
    );
};

export default NavigationMenu;
