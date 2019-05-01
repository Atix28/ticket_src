import React  , { Component }from 'react';
import Main from './Component/Main';
import './App.css';
import Nav from './Component/Nav';
import PropTypes from 'prop-types';
import FeedbackForm from './Component/FeedbackForm';




class App extends Component {
  render() {
    return (
        <div>
      <Nav/>
      <div className="container">
           <Main/>
           <FeedbackForm env={this.props.env}/>
                               
    </div>
    </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};


export default App;
