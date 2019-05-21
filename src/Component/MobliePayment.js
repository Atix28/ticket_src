import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MobilePayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: this.props.location.total,
            REACT_APP_EMAILJS_USERID: 'user_17Y3yksLiJyYnOXq04djD',
            templateId: 'dialog',
            receiverEmail: '',
            formSubmitted: false,
            feedback: 'Test'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.addPaymentDetails = this.addPaymentDetails.bind(this);
    }

    onSubmit(event) {

        event.preventDefault();

        const feedback = {
            name: this.refs.fname.value,
            lname: this.refs.lname.value,
            email: this.refs.email.value,
            mobile:this.refs.mobile.value,
            cost: this.props.location.total
        }
        
        

        const { templateId, receiverEmail } = this.state;
        
        console.log(feedback, 'onSubmit')
        

            this.sendFeedback(
                templateId,
                this.sender,
                this.refs.email.value,
                this.state.feedback,
                this.refs.lname.value,
                this.refs.fname.value,
                this.refs.mobile.value,
                feedback.cost
                


            );

            this.setState({
                formSubmitted: true
            });
            
            this.addPaymentDetails(feedback);
        
    }
    
    
    sendFeedback(templateId, senderEmail, receiverEmail, feedback,lname,fname,mobile,cost) {
        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                feedback,
                lname,
                fname,
                mobile,
                cost
                
                
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
                url: 'http://localhost:3000/api/dialog_buyers',
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

                    <form id="myform" className="col s12" onSubmit={this.onSubmit}>
                        <Link className="btn orange darken-3" to="/buy">Back</Link>
                        <ul className="collection">
                            <li className="collection-item">Enter Mobile Details</li>
                            <li className="collection-item">

                                <div className="input-field col s6">
                                    <i className="material-icons prefix">face</i>
                                    <input id="firstname" type="text" className="validate" ref="fname" required />
                                    <label htmlFor="first_name">Frist Name</label>

                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">face</i>
                                    <input id="lastname" type="text" className="validate" ref="lname" name="lname" required />
                                    <label htmlFor="last_name">Last Name</label>

                                </div>


                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" ref="email" required />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input-field col s6">
                                    <i className="material-icons prefix">phone</i>
                                    <input id="phone" type="number" className="validate" ref="mobile"  required onInput={(e)=>{ 
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,9)}} min={9} />
                                    <label htmlFor="phone">Mobile Number</label>

                                </div>

                                <div className="input-field col s6">
                                    <i className="material-icons prefix">payment</i>
                                    <input id="pin" type="number" className="validate" required onInput={(e)=>{ 
                                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)}} min={3} />
                                    <label htmlFor="pin">PIN</label>

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



export default MobilePayment;
