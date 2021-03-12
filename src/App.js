import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Skills from './components/pages/Skills';
import Contacts from './components/pages/Contacts';
import Sonda from './components/pages/Sonda';
import Carrer from './components/pages/Carrer';
import Feedbacks from './components/pages/Feedbacks';
import Donations from './components/pages/Donations';


function App() {
  return (
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/services' exact component={Services}/>
       <Route path='/contacts' exact component={Contacts}/>
       <Route path='/skills' exact component={Skills}/>
       <Route path='/sonda' exact component={Sonda}/>
       <Route path='/carrer' exact component={Carrer}/>
       <Route path='/feedbacks' exact component={Feedbacks}/>
       <Route path='/donations' exact component={Donations}/>
       </Switch>
    </Router>
  );
}

export default App;
