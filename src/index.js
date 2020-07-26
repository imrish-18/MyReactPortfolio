import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Jokes from './Components/Jokes'
import  createBrowserHistory  from 'history/createBrowserHistory'
import {Router,Switch,Route} from'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const history=createBrowserHistory();
ReactDOM.render(
<Router history={history}>
    <Switch>
        <Route exact={true} path='/' component={App}/>
        <Route path='/jokes' component={Jokes}/>
    </Switch>
</Router>
    , document.getElementById('root'));
registerServiceWorker();
