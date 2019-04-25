import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TrainDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details:''
        }
    }

    componentWillMount(){
        this.getTrainDetails();
    }

    getTrainDetails(){
        let trainid = this.props.match.params.id; 
        axios.get(`http://localhost:3000/api/trains/${trainid}`)
        .then (response => {
            this.setState({details: response.data}, () =>{
                console.log(this.state);
            })
        }).catch(err =>console.log(err));
    }

    render(){
        return(
          <div>
              
                <br/>
                <br/>
              <Link className="btn grey" to  ="/prices">Back</Link>
              <h1>{this.state.details.name}</h1>
              <ul className="collection">
                <li className="collection-item">Price : {this.state.details.price}</li>
              </ul>
          </div>
        )
    }
}


export default TrainDetails;
