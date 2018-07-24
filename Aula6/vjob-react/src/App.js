import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import Main from './components/navigation/Main/Main';
import JobList from './components/job/JobList/JobList';
import { Switch, Route } from 'react-router-dom';
import About from './components/about/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Main>
          <Switch>
            <Route exact path='/' component={ JobList }></Route>
            <Route path='/vagas' component={ JobList }></Route>
            <Route path='/sobre' component={ About }></Route>
          </Switch>
        </Main>
      </div>
    );
  }
}

export default App;
