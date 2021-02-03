import React, { useState } from "react";
import WelcomePage from './WelcomePage';
import JokePage from './JokePage';

export default () => {
    const [onWelcomePage, setPage] = useState(true);

    return (
        <div style={{minHeight: "100vh", margin: 0}}>
            {onWelcomePage ?
                    <WelcomePage welcome={onWelcomePage} onEnterClick={() => setPage(false)}/> :
                    <JokePage />
            }
        </div>

    );
};