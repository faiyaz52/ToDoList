import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Navbar from './Component/Navbar'
import DataList from './Component/DataList';
import AddToDoList from './Component/AddToDoList';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Navbar/>
        <Switch>
          <Route exact path="/" component={DataList}/>
          <Route exact path="/users/add" component={AddToDoList}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
