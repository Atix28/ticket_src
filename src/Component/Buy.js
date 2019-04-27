import React, { Component } from 'react';
import axios from 'axios';
import PriceItem from './PriceItem';

class Buy extends Component{
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
        const priceItems = this.state.trains.map((train, i) => {
            return(
               <PriceItem key={train.id}  item={train}/>
            )
        })
        return(
            <div>
                
                <br/>
                <br/> 
                <ul class="collection with-header">
                <li class="collection-header"><h4>Chose a Train</h4></li>
                    {priceItems}
                </ul>
            </div>

        )
    }
}

export default Buy;