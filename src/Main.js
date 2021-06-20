import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

 class Main extends Component {
    render() {
        let list=[{
            image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            title: "UniWhal",
            description: "A unicorn and a narwhal nuzzling their horns",
        
          },
          {
            image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            title: "Unicorn Head",
            description: "Someone wearing a creepy unicorn head mask",
            
        }]
        return (

            <div>
            <HornedBeast title={list[0].title} image_url={list[0].image_url} description={list[0].description} />
            <HornedBeast title={list[1].title} image_url={list[1].image_url} description={list[1].description}/>
            
            </div>
        )
    }
}

export default Main
