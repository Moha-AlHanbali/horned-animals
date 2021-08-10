import React from 'react';
import HornedBeast from './HornedBeasts';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beastsData: this.props.getBeasts,
      selectedBeast:'',
    };
  }

  selectBeast = (beast) => {
    this.setState({selectedBeast: beast});
    this.props.selectBeast(beast);
    console.log('MainTrigger', this.state);
  }

  showModal = () => {
    this.props.showModal();
    console.log('Main');
  }

  render() {
    let {beastsData} = this.state;
    return (
      beastsData.map((beast, index) => {
        return (
          <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns} key={index} showModal={this.showModal} selectBeast={this.selectBeast}/>
        );
      })
    );
  }

}


export default Main;
