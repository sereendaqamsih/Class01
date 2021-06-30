import React from 'react';
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormInfo extends React.Component {
constructor(props){
    super(props)
}
render(){
    return(
        <Form>
  
        <Form.Label>You can choose to filter items by number of horns</Form.Label>
        <Form.Control onChange={this.props.submitForm} as='select' name='favoriteCatBreed' >
            <option value='true'>All</option>
            <option value='1'>ONE</option>
            <option value='2'>TWO</option>
            <option value='100'>WOW</option>
      
      </Form.Control>
      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    )
}

}




export default FormInfo;