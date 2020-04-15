import React from 'react';
import ReactDOM from 'react-dom';
//Import redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
//router 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Container from './components/Container';
import Map from './components/map'


let saveToLocalStorage = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState)
    //localStorage["state"] = serializeState
  }
  catch (e) {
    console.log(e);
  }
}

let loadFromLocalStorage = () => {
  try {
    const serializeState = localStorage.getItem('state');
    if (serializeState === null) {
      return undefined
    }
    else {
      return JSON.parse(serializeState)
    }
  }
  catch (e) {
    console.log(e);
    return undefined;
  }
}
const persistedState = loadFromLocalStorage()


let store = createStore(rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
  saveToLocalStorage(store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>

          <Route exact path="/" component={App} />
          <Route exact path="/container" component={Container} />
          {/* <Route exact path="/map" component={Map} /> */}
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);