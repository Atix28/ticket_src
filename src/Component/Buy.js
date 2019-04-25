import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Buy extends Component{
    render(){
        return(
        
        <div className="container">
        <br/>
            <h3>Buy Your Ticket</h3>
        <br/>
        <div class="input-field col s12">
     <select>
            <option value="" disabled selected>Choose your Train</option>
            <option value="Train A">Train A</option>
            <option value="Train B">Train B</option>
            <option value="Train C">Train C</option>
            <option value="Train D">Train D</option>
     </select>
            <label>Select Train </label>
        </div>
        
            <div class="input-field col s6">
                
                <input id="last_name" type="number" class="validate"/>
                <label for="last_name">Number of Tickets</label>
            </div>

            <div class="row">
            <div class="input-field col s12">
                 <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
                 <label for="disabled">Price</label>
            </div>
      </div>
        </div>
        )   
        }

}

export default Buy;
