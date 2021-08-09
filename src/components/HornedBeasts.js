import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteBeast: 0
    };
  }

  increaseVote = () => {
    this.setState({
      favoriteBeast: this.state.favoriteBeast + 1
    });
  }

  render() {

    return (

      <>
        <Card style={{ width: '18rem', display: 'inline-block', marginLeft: '3%' }}>
          <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageTitle} />
          <Card.Body>
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><h5> Keyword: {this.props.keyword}</h5></ListGroup.Item>
            <ListGroup.Item><h5> Horns: {this.props.horns} </h5></ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link><Button variant="outline-danger" onClick={this.increaseVote}> ❤ </Button></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link></Card.Link>
            <Card.Link><Badge pill bg="danger">Likes: {this.state.favoriteBeast}</Badge></Card.Link>
          </Card.Body>
        </Card>
      </>

    );
  }
}

export default HornedBeast;
