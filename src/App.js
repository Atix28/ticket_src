import React  , { Component }from 'react';
import Main from './Component/Main';
import './App.css';
import Nav from './Component/Nav';
import FeedbackForm from './Component/FeedbackForm';
import PropTypes from 'prop-types';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FeedbackForm env={this.props.env} />
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};


export default App;
