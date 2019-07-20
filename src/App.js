import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';

import Nav from './Components/Nav';
import Footer from './Components/Footer';
import store from './Publics/redux/store';
import HomePage from './Screens/HomePage';
import List from './Screens/ListBook';
import test from './Components/test';
import UpdateBook from './Components/UpdateBook';

import book from './Components/bookdetail';
import denda from './Components/denda';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ height:'100%'}}>
          <Nav />
          <Router>
            <Route exact path={'/'} component={HomePage} />
            <Route path ={'/books/'} component={List} />
            <Route path={'/book/:bookid'} component={book} />
            <Route path={'/booq/:bookid'} component={denda} />
            <Route path={'/books/:bookid'} component={UpdateBook} />
            <Route path={'/test/'} component={test} />
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
