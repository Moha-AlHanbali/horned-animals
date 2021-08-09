import React from 'react';
import HornedBeast from './HornedBeasts';
import Beasts from './data.json';



class Main extends React.Component {

  render() {

    return (

      Beasts.map(function (beast, index) {
        return (
          <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns} key={index}/>
        );
      })
    );
  }

}


export default Main;
