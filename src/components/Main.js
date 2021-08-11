import React from 'react';
import HornedBeast from './HornedBeasts';
import SelectFrom from './SelectFrom';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beastsData: this.props.getBeasts,
      selectedBeast: '',
      selectOption: '0',
    };
  }

  selectBeast = (beast) => {
    this.setState({ selectedBeast: beast });
    this.props.selectBeast(beast);
    console.log('MainTrigger', this.state);
  }

  showModal = () => {
    this.props.showModal();
    console.log('Main');
  }

  selectOption = async (option) => {
    this.setState({ selectOption: option });
  }

  render() {
    let { beastsData } = this.state;
    let filteredArray = [];

    if (this.state.selectOption === '0') {
      filteredArray = beastsData;
    } else {
      filteredArray = this.state.beastsData.filter((element) => {
        console.log(element.horns);

        if (element.horns.toString() === this.state.selectOption) {
          return true;
        }
      });
    }
    console.log('test2', filteredArray);

    return (
      <>
        <SelectFrom selectOption={this.selectOption} />
        <br/><br/>
        {filteredArray.map((beast, index) => {
          return (

            <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns} key={index} showModal={this.showModal} selectBeast={this.selectBeast} />

          );
        })}
      </>
    );
  }
}


export default Main;
