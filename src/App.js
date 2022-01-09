// eslint-disbale-next-line no-unused-vars
// import firebase from './services/firebaseService';
import React, { useState, useEffect } from 'react';
function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    setUser("Giriy");
  }

  return (
    <div className="App">
      <h1>Firebase GR-Info APP</h1>
      <div>
        Logged in user: {user}
      </div>

    </div>
  );
}

export default App;
