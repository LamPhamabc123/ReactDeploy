import React from 'react';
import { HashBrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Contacts from './commponents/contacts/Contacts';
import Header from './commponents/layout/Header';
import About from './commponents/pages/About';
import NotFound from './commponents/pages/NotFound';
import Test from './commponents/test/Test';
import AddContact from './commponents/contacts/AddContact';
import EditContact from './commponents/contacts/EditContact';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  return (
    <Provider>
      <Router>
      <div className="App">
          <Header branding="Contact Manager" /> 
          <div className="container">
            <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                <Route exact path="/about/:id" component={About}></Route>
                <Route exact path="/test" component={Test} />
                <Route component={NotFound}></Route>
            </Switch>
          </div>
    </div>
      </Router>
    </Provider>
  );
}

export default App;
