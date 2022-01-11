import React, { useState, useEffect } from 'react';

const Layout = ({ header, body, footer, menu }) => {
    const [params, setParams] = useState('');

    useEffect(() => {
        // load all the time
        setParams("Giriy")
    })
    return (
        <>
            <div className="main-container">
                <div className="header-section">
                    <div className="header">
                        {params}
                        {header}
                    </div>
                </div>
                <div className="body-section">
                    <div className="body">
                        {body}
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer">
                        {footer}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;