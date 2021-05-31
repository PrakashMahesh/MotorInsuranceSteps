import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import DynamicForm from './DynamicForm';
import MenuBar from './MenuBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <MenuBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/form" component={DynamicForm}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
