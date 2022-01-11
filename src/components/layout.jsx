import React, { useState, useEffect } from 'react';

const Layout = ({ header, body, footer, menu }) => {
    const [params, setParams] = useState('');

    useEffect(() => {
        // load all the time
        setParams("Giriy")
    })
    return (
        <>  Layout : {params}
            <div className="main-container">
                <div className="header-section">
                    <div className="header">
                        {(header && header !== null) && <header />}
                    </div>
                </div>
                <div className="body-section">
                    <div className="body">
                        {(body && body !== null) && <body />}
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer">
                        {(footer && footer !== null) && <footer />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;