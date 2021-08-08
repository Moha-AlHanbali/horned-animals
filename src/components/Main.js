import React from 'react';
import HornedBeast from './HornedBeasts';




class Main extends React.Component {

  render() {

    let beastsArray = [{
      "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      "title": "UniWhal",
      "description": "A unicorn and a narwhal nuzzling their horns",
      "keyword": "narwhal",
      "horns": 1
    },
    
    {
      "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
      "title": "Rhino Family",
      "description": "Mother (or father) rhino with two babies",
      "keyword": "rhino",
      "horns": 2
    },
      
    {
      "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      "title": "Unicorn Head",
      "description": "Someone wearing a creepy unicorn head mask",
      "keyword": "unicorn", 
      "horns": 1
    }];

    return (
      <>
        <HornedBeast title='Cyclopes' imageUrl='http://2.bp.blogspot.com/_fHdZDd_Y1Es/SwztRJeXSvI/AAAAAAAAAIs/Z6fhlqyeiD4/s1600/cyclops02_crop.jpg' imageAlt='Cyclopes Image' imageTitle='Cyclopes' description="Cyclopes are giant one-eyed creatures. Three groups of Cyclopes can be distinguished. In Hesiod's Theogony, the Cyclopes are the three brothers Brontes, Steropes, and Arges, who made for Zeus his weapon the thunderbolt." keyword='Cyclopes' horns='1'/>
        <HornedBeast title='Skin Walker' imageUrl='https://i.pinimg.com/originals/a7/c0/a5/a7c0a52de375d32e26f4a7a1da974729.jpg' imageAlt='Skin Walker Image' imageTitle='Skin Walker' description="In Navajo culture, a skin-walker is a type of harmful witch who has the ability to turn into, possess, or disguise themselves as an animal. The term is never used for healers." keyword='Skin Walker' horns='2'/>
        {
          beastsArray.map(function(beast){
            return(
              <HornedBeast title = {beast.title} imageUrl = {beast.image_url} description = {beast.description} keyword = {beast.keyword} horns = {beast.horns}/>
            );
          })
        }
      </>

    );
  }
}

export default Main;
