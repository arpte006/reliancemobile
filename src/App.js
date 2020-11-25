import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Main from './components/Main';
import Mobiles from './components/Mobiles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
    <Switch>
      <Route exact path="/">
          <Main message="Welcome to RelianceMobile" showbutton="true"/>
      </Route>
      <Route exact path="/about">
          <Main message="Thank you for visiting us" showbutton="false"/>
      </Route>
      
      <Route exact path="/notfound">
          <Main message="404 Page Not Found" showbutton="false"/>
      </Route>
      <Route exact path="/mobiles">
          <Mobiles message="Welcome to Mobiles" showbutton="false"/>
      </Route>
      <Route exact path="/loginFailed">
          <Main message="Login Failed. Try Again" showbutton="true"/>
      </Route>
  </Switch>
    </Router>
    </div>
  );
}

export default App;