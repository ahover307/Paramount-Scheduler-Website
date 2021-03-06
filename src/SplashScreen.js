import React from 'react';
import ParamountLogo from "./png/ParamountLogo.png";

const SplashScreen = () => {
    return (
        <header className="App-header">
            <img src={ParamountLogo} alt="logo"/>
            <p>
                Future page for Paramount Sports Complex Party Scheduler
            </p>
            <br/>
            <a
                className="App-link"
                href="http://www.paramountsportscomplex.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Paramount's Homepage
            </a>
        </header>
    )
};

export default SplashScreen;