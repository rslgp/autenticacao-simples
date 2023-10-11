import React, { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [param, setParam] = useState('');

  const handleAuthentication = async () => {
    try {
      const apiUrl = `https://qx8d2nrbe0.execute-api.sa-east-1.amazonaws.com/default/autenticacao-simples?param=${encodeURIComponent(param)}`;
      const response = await fetch(apiUrl);

      if (response.status === 200) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>User Authentication</h1>
      <input
        type="text"
        value={param}
        onChange={(e) => setParam(e.target.value)}
        placeholder="Enter the authentication string"
      />
      <button onClick={handleAuthentication}>Authenticate</button>

    {
        isAuthenticated ?        
        <>Show component</>
        : 
        <>Nao Autenticado</>
    }
    </div>
  );
}

export default App;
