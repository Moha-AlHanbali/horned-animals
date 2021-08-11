import React from 'react';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {

  render() {

    return (
      <Card style={{textAlign:'center'}}>
        <Card.Body><h5>By Mohammed Al-Hanbali &copy;</h5></Card.Body>
      </Card>
    );
  }
}

export default Footer;
