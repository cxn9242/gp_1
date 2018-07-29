import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'

import './style.css';
import BoxContainer from './containers/box-container'

const store = createStore(reducers, applyMiddleware(thunk)); 

class App extends Component {
  render() {
    return (
      <div class='Container'>
        <BoxContainer></BoxContainer>
      </div>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
