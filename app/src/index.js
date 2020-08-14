import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login';
import {Router,Route,browserHistory} from 'react-router';
import * as serviceWorker from './serviceWorker';

class AppRoute extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={Login}/>
        <Route path={'/dashbord'} component={App}/>
      </Router>
    )
  }
}
ReactDOM.render(
  <AppRoute/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
