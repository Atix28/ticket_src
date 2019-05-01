import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FeedbackForm from './FeedbackForm';
import PropTypes from 'prop-types';



class CardPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: this.props.location.total,


        }
        this.onSubmit = this.onSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.addPaymentDetails = this.addPaymentDetails.bind(this);
    }

    onSubmit(e) {
        const userdetail = {
            fname: this.refs.fname.value,
            lname: this.refs.lname.value,
            email: this.refs.email.value,
            postcode: this.refs.postcode.value,
            cost: this.props.location.total
        }

        this.addPaymentDetails(userdetail);
        e.preventDefault();
    }

    sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                feedback
            })
            .then(res => {
                console.log('MAIL SENT!')
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    addPaymentDetails(userdetail) {
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/buyers',
            data: userdetail
        }).then(response => {
            alert("Payment Successful!");

            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render() {


        const { total } = this.state;




        return (
            <div>

                <br />



                <div className="row">

                    <form id="myform" class="col s12" onSubmit={this.onSubmit.bind(this)} method="post">
                        <Link className="btn orange darken-3" to="/buy">Back</Link>
                        <ul className="collection">
                            <li className="collection-item">Enter Card Details</li>
                            <li className="collection-item">

                                <div className="input-field col s6">
                                    <i class="material-icons prefix">face</i>
                                    <input id="firstname" type="text" className="validate" ref="fname" required />
                                    <label htmlFor="first_name">Frist Name</label>

                                </div>
                                <div className="input-field col s6">
                                    <i class="material-icons prefix">face</i>
                                    <input id="lastname" type="text" className="validate" ref="lname" name="lname" required />
                                    <label htmlFor="last_name">Last Name</label>

                                </div>


                                <div className="input-field col s6">
                                    <i class="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" ref="email" required />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input-field col s6">
                                    <i class="material-icons prefix">room</i>
                                    <input id="postalcode" type="number" className="validate" ref="postcode" data-length="5" required />
                                    <label htmlFor="postalcode">Postal Code</label>

                                </div>

                                <div className="input-field col s6">
                                    <i class="material-icons prefix">credit_card</i>
                                    <input id="card_number" type="number" className="validate" data-length="10" required />
                                    <label htmlFor="card_number">Card Number</label>

                                </div>

                                <div className="input-field col s6">
                                    <i class="material-icons prefix">payment</i>
                                    <input id="cvc" type="number" className="validate" required data-length="3" />
                                    <label htmlFor="cvc">CVC</label>

                                </div>





                                <div className="input-field col s12">

                                    <input disabled value={"Your Total : " + total + " LKR"} id="disabled" name="cost" type="text" className="validate" />

                                </div>
                            </li>

                        </ul>
                        <input type="submit" className="btn green" value="Confrim" />






                    </form>
                </div>

            </div>
        )
    }
}



export default CardPayment;
