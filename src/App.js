import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Head from './header'
import QuizListPage from './QuizList/QuizListPage'
import clientPage from './clientPage'
import QuizEditor from './Editor/QuizEditor';


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
          </Switch>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
