import React, { Component } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'



class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vote: 0,
            show: false
        }


    }
    changeVote = () => {

        this.setState(
            {
                vote: this.state.vote + 1

            })
    }
    handleModal = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        console.log(this.state.vote);
        return (

            

            < Card style={{ width: '18rem' }}>
                <Card.Img variant="top" onClick={this.changeVote} src={this.props.image_url} alt={this.props.title} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        <p> <span style={{ color: "red" }}>&#10084;</span>{this.state.vote} </p>
                        <Button onClick={this.handleModal} variant="primary">description</Button>
                    </Card.Text>

                </Card.Body>


                <Modal show={this.state.show} >
                    <Modal.Header closeButton onClick={() => { this.handleModal() }}>
                        <Modal.Title>{this.props.title}

                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <br></br>
                        <img src={this.props.image_url} alt={this.props.title} style={{ width: "100%" }} />
                        {this.props.description}
                        <br></br>
                        <p> <span style={{ color: "red" }}>&#10084;</span>{this.state.vote} </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.handleModal() }}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

            </Card >
             
        )
    }
}

export default HornedBeast
