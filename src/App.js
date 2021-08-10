import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Beasts from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beastsData: Beasts,
      showModal: false,
      selectedBeast: '',
    };
  }

  selectBeast = (beast) => {
    this.setState({selectedBeast: beast});
    console.log('App Trigger', beast);
  }

  showModal = () => {
    this.setState ({showModal: true});
    console.log('App');
  }

  hideModal = () => {
    this.setState ({showModal: false});
  }



  render() {

    let matchDescription= '';
    let matchTitle = '';
    let matchImg = '';

    let {beastsData} = this.state;
    this.state.beastsData.forEach((match) => {
      if(match.title === this.state.selectedBeast){
        matchDescription = match.description;
        matchTitle = match.title;
        matchImg = match.image_url;
      }});

    return (
      <>
        <Header />
        <Main getBeasts= {beastsData} showModal={this.showModal} selectBeast={this.selectBeast}/>

        <SelectedBeast title={matchTitle} description={matchDescription} imgURL ={matchImg} showModal={this.showModal} hideModal={this.hideModal} modalState={this.state.showModal}/>
        <Footer />
      </>
    );
  }

}

export default App;
