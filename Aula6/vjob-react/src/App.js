import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import Main from './components/navigation/Main/Main';
import JobList from './components/job/JobList/JobList';
import { Switch, Route } from 'react-router-dom';
import About from './components/about/about';
import Login from './components/login/Login';
import axios from 'axios';

class App extends Component {
  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user'))
  }

  getLoggedUser(){
    return this.state.loggedUser;
  }

  loginHandler = (email, pass) => {
    axios.post('/login', {'email': email, 'password': pass})
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify(response.data.user));
        window.localStorage.setItem('token', response.data.token);

        this.setState({ loggedUser: response.data.user });
      })
      .catch (error => {
        console.log(error);
        alert("Login inválido!");
      });
  }

  logoutHandler = () => {
    window.localStorage.clear();
    this.setState({ loggedUser: null });
  }

  render() {
    if (this.getLoggedUser()) {
      return (
        <div className="App">
        
          <Header userName={this.state.loggedUser.name} logout={this.logoutHandler}/> 
          <Main>
            <Switch>
              <Route exact path='/' component={ JobList }></Route>
              <Route path='/vagas' component={ JobList }></Route>
              <Route path='/sobre' component={ About }></Route>
            </Switch>
          </Main> 
        </div>
      )
    } else {
      return (
        <Login login={this.loginHandler}/>
      )
    }
  }
}

export default App;
