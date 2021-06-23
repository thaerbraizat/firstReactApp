import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import data from './data.json'
import HornedBeast from './HornedBeast';

class SelectedBest extends Component {
    constructor() {
        super();
        this.state = {
            horns: '',
            show: false
        }
    }
    hornsHandler = (e) => {
        let HornedList= data.filter(element=>{
            return(element.horns ==  e.target.value)

        })
        this.setState({
            
            HornedList,
            horns: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            show: true
        })
        this.props.handleSelect();
    }

    render() {
        console.log(this.state.horns);
        return (

            <>
                <Form onSubmit={(e) => { this.submitHandler(e) }}>

                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Custom select &nbsp;&nbsp; </Form.Label>
                        <Form.Control as="select" custom onChange={(e) => this.hornsHandler(e)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>

                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>

                {this.state.show &&
                this.state.HornedList.map((element, i) => {

                    return (<HornedBeast key={i} title={element.title} image_url={element.image_url} description={element.description} />)
                })}




            </>

        )
    }
}

export default SelectedBest
