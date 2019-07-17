import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Nav from './Components/Nav';
import store from './Publics/redux/store';
import HomePage from './Screens/HomePage';
import List from './Screens/ListBook';

import book from './Components/bookdetail';
import BookForm from './Components/BookForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Route exact path={'/'} component={Nav}/>
            <Route exact path={'/'} component={HomePage} />

            <Route path={'/books/'} component={Nav}/>
            <Route path ={'/books/'} component={List} />
            
            <Route path={'/book/:bookid'} component={book} />
            
            <Route path={'/add/'} component={Nav}/>
            <Route path={'/add/'} component={BookForm} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
