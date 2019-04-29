import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PriceDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details:'',
            value:'',
            total:''
         
        };

        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);

        const tot = (this.state.details.price * event.target.value);
        console.log(tot);
        this.setState({total: tot})

      }
    
       

    componentWillMount(){
        this.getTrainDetails();
    }

    calPrice(event){
        
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

        const {total} = this.state;

        return(
          <div>
              
                <br/>
                
              <Link className="btn orange darken-3" to  ="/buy">Back</Link>

              <h3>{this.state.details.name}</h3>

              <form>
              <ul className="collection">
                <li className="collection-item">Price : {this.state.details.price} LKR</li>
                <li className="collection-item">
                    <div className="input-field col s6">
                        <input id="no_ticket" type="number" className="validate" value={this.state.value} onChange={this.handleChange}/>
                        <label htmlFor="last_name">Number of Tickets</label>
                    </div>

                    <label>Total Price</label>
                    <div className="input-field col s12">
                        
                         <input disabled value={"Your Total : "+total + " LKR"} id="disabled" type="text" className="validate"/>
                        
                    </div>
                </li>
                
              </ul>
              <Link to={{pathname: "/CardPayment", total }} ><button className="btn green">Pay From Card<i className="material-icons right">send</i></button></Link> &nbsp;
              <button className="btn red">Pay From Dialog Credit<i className="material-icons right">send</i></button> 
              </form>
          </div>
        )
    }
}


export default PriceDetails;
