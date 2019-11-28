import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Admin from './components/Admin';
import {
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='container-fuild'>
        <Header />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/admin' component={Admin} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
