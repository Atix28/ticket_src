import React, { Component } from 'react';
import axios from 'axios';
import TrainItem from './TrainItem';

class Prices extends Component{
    constructor(){
        super();
        this.state = {
            trains : []
        }
    }

    componentWillMount(){
        this.getTrains();
    }


    getTrains(){
        axios.get('http://localhost:3000/api/trains')
        .then (response => {
            this.setState({trains: response.data}, () =>{
                console.log(this.state);
            })
        }).catch(err =>console.log(err));
    }



    render(){
        const trainItems = this.state.trains.map((train, i) => {
            return(
               <TrainItem key={train.id}  item={train}/>
            )
        })
        return(
            <div>
                
                <br/>
                <br/> 
                <ul class="collection with-header">
                <li class="collection-header"><h4>Trains</h4></li>
                    {trainItems}
                </ul>
            </div>

        )
    }
}

export default Prices;