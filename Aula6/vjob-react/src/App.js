import React, { Component } from 'react';
import './App.css';


import Header from './components/navigation/Header/Header';
import JobList from './components/job/JobList/JobList';
import JobForm from './components/job/JobForm/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <JobForm />
        <div className="container pt-3">
          <JobList />
        </div>
      </div>
    );
  }
}

export default App;
