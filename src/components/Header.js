import React from 'react';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {

  render() {

    return (
      <>

        <Card style={{ textAlign: 'center' }}>
          <Card.Body><h1>Horned Beasts</h1> </Card.Body>
        </Card>

      </>
    );
  }
}

export default Header;
