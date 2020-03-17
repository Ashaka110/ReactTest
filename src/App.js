import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Head from './header'
import QuizListPage from './QuizList/QuizListPage'
import clientPage from './Client/Client'
import QuizEditor from './Editor/QuizEditor';
import Login from './LogIn/Login';
import SignUp from './LogIn/SignUp';
import Server from './Server/Server';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Head />
        <div className="container center">
          <div>{' '}</div>
          <Switch>
            <Route exact path='/' component={clientPage} />
            <Route exact path='/Editor' component={QuizListPage} />
            <Route path='/Editor/:id' component={QuizEditor} />
            <Route path='/Play/:id' component={Server} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
          </Switch>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
