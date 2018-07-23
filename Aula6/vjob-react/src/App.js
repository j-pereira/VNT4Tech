import React, { Component } from 'react';
import './App.css';


import Header from './components/navigation/Header/Header';
import JobList from './components/job/JobList/JobList';
import JobForm from './components/job/JobForm/JobForm';
import Collapse from './hoc/Collapse/Collapse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <div className="container pt-3">
          <Collapse innerText="Criar vaga">
            < JobForm />
          </Collapse>
          <JobList />
        </div>
      </div>
    );
  }
}

export default App;
