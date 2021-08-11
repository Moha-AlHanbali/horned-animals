import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class SelectFrom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectOption: '',
    };
  }

  getOption = async (event) => {
    this.setState({ selectOption: event.target.value });
    this.selectOption(event.target.value);
    console.log('SF', this.state);
  }

  selectOption = async (option) => {
    this.props.selectOption(option);
  }


  render() {

    return (

      <>
        <Card>
          <br /><br />
          <Form.Label style={{ marginLeft: '2.5%' }}>Select Beasts to View</Form.Label>

          <Form.Select aria-label="Default select example" onChange={this.getOption} style={{ marginLeft: '2.5%', width: '25%' }}>
            <option value="0">Show All Beasts</option>
            <option value="1">One Horned Beasts</option>
            <option value="2">Two Horned Beasts</option>
            <option value="3">Three Horned Beasts</option>
            <option value="100">Too many to Count..</option>
          </Form.Select>
          <br /><br />
        </Card>
      </>

    );
  }
}

export default SelectFrom;
