import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import AboutUs from './components/pages/AboutUs';
import Education from './components/pages/Education';
import Blog from './components/pages/Blog';
import SignUp from './components/pages/SignUp';
import Register from './components/Register';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Education' component={Education} />
          <Route path='/Blog' component={Blog} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
