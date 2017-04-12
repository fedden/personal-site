import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import PrivateRoute from './components/Routes/PrivateRoute';
import AdminRoute from './components/Routes/AdminRoute';

// Featured
import Index from './views/Index';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';

import Blog from './views/Blog';
// import First from './views/posts/first/First';
// <Route path="/blog/first" component={First} />
// <Route path="/blog" component={Blog} />

// Hidden
import Music from './views/Music';

import Login from './views/Login';
import Admin from './views/Admin';

import NotFound from './views/NotFound';

// All of our CSS
require('../public/css/main.scss');

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/music" component={Music} />
      <Route path="/login" component={Login} />


      <PrivateRoute path="/resume" component={Resume} />
      <AdminRoute path="/admin" component={Admin} />

      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
