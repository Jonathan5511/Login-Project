import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import React from 'react';


function App() {
  const ctx = useContext(AuthContext);

  return (
      <React.Fragment>
        <MainHeader  />
          <main>
          {!ctx.isLoggedIn && <Login/>}
          {ctx.isLoggedIn && <Home/>}
      </main>
      </React.Fragment>
      
  );
}

export default App;
