import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'

 class Main extends Component {
     
    render() {
        return (

            <div>
                
               {!this.props.hideList &&
               data.map((element,i) => {
                   console.log(element.title);
                return( <HornedBeast key={i} title={element.title} image_url={element.image_url} description={element.description}  />)
               })}
            
  
            </div>
        )

    }

}

export default Main
