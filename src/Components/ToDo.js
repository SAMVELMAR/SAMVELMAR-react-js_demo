import React, {Component} from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';

class ToDo extends Component{
render(){
    return(
        <Container fluid ={true}>
            <Row>
                <InputGroup className = "mb-3">
                <FormControl
                    placeholder = "Input task"
                    aria-label = "Input task"
                    aria-describedby = "basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant = "outline-primary">Add task</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
            <Row></Row>


        </Container>
    )
}

}

export default ToDo