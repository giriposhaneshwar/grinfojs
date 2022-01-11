import React, { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
// import firebase from './services/firebaseService';
import Layout from './components/layout';

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
      <Layout
        header={<div>Header</div>}
        body={<div>Body</div>}
        footer={<div>Footer</div>}
        menu={<div>Menu</div>}
      />
    </div>
  );
}

export default App;
