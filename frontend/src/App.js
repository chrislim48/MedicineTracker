import React from 'react';
// import Home from './components/Home';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Calendar from './components/Calendar';
import MedForm from './components/MedForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path="/home" exact>
            <Homepage/>
          </Route>
          <Route path="/calendar" exact>
            <Calendar/>
          </Route>
          <Route path="/medform" exact>
            <MedForm/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
