import React, { Component } from 'react'

class HornedBeast extends Component {
    constructor(props){
        super(props)
        this.state ={
            vote:0
        }
            
        
    }
    changeVote=()=>{
    
        this.setState(
            {
                vote:this.state.vote+1

            })
    }

    render()
     {
         console.log(this.state.vote);
        return (
            <div>
                <h2>{this.props.title}</h2>
               
                <img onClick={this.changeVote} src={this.props.image_url} alt={this.props.title}></img>

                <p>{this.props.description}</p>
                <p>{this.state.vote} <span style={{color: "red"}}>&#10084;</span></p>
            </div>
            
        )
    }
}

export default HornedBeast
