import React, { useState } from 'react';

function Message({ color, initVisibility, children })
{
    const getVisibility = initVisibility;

    const [ visible, setVisible ] = useState(getVisibility);

    const handleVisibility = () =>
    {
        setVisible(false);
    }

    return (
        <div style={{
            backgroundColor: `${ color || 'cyan' }`,
            border: "1px solid black", 
            width: "200px",
            display: `${ visible ? "block" : "none" }`,
            margin: "0 auto"
        }}>
            <div>
                { children }
            </div>
            <button onClick={ handleVisibility }>Schließen</button>
            
        </div>
    );
}

export default Message;
