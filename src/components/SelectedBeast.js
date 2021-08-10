import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }


  hideModal = () => {
    this.setState ({showModal: false});
    this.props.hideModal();
    console.log('closing');
  }

  render() {

    return (

      <>
        <Modal show={this.props.modalState}>
          <Modal.Header>
            <Modal.Title> {this.props.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img variant="top" src={this.props.imgURL}/>
            {this.props.description} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );
  }
}

export default SelectedBeast;
