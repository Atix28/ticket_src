import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { MDBView, MDBMask } from
"mdbreact";
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (<div align="center">
        <br/>
        <br/>
        <br/>
        <br/> 
      <table cellPadding="30"><th><tr><td>
    <Card style={{ width: '18rem' }}>
    <MDBView>
              <img className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/5/57/SentosaExpress_Blue.JPG" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
  <Card.Body>
    <Card.Title>Buy Tickets</Card.Title>
    <Card.Text>
     Buy tickets for the train you need 
  </Card.Text>
   <Link to="/buy"><Button variant="primary">Buy Ticket</Button></Link>
  </Card.Body>
</Card>

</td></tr><th></th></th>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="https://www.consumerguide.sg/wp-content/uploads/Couple-travelling-flipped.jpg" alt="Second slide" />
              <MDBMask overlay="black-light" />
            </MDBView>

<Card.Body>
  <Card.Title>Train Details</Card.Title>
  <Card.Text>
   Expore the Prices of train Tickets and details of Trains
  </Card.Text>
  <Link to="/prices"><Button variant="primary">See Details</Button></Link>
</Card.Body>
</Card>

</td></tr><th></th></th>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="https://media.self.com/photos/5b048339fb856d7d3d02375d/4:3/w_752,c_limit/first-backpacking-trip.jpg" alt="Therid slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
<Card.Body>
  <Card.Title>About Us</Card.Title>
  <Card.Text>
    Want to know who we are ? 
  </Card.Text>
  <Link to="/about"><Button variant="primary">Learn</Button></Link>
</Card.Body>
</Card>

</td></tr><th></th></th><tr></tr>

</table>
</div>
  
    );
  }
}

export default Home;