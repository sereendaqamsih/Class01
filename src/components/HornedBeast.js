import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state={
            numberOfPets:0,
        }
    }
    increaseNoOfPets=()=>{
        this.setState({
            numberOfPets:this.state.numberOfPets+1,
        })

    }
    // clickTorender = () => {
    //     this.props.modalSelect ({
    //         title: this.props.title,
    //         image_url: this.props.image_url,
    //         description: this.props.description
    //     })
    // }
   


    render () {
        return (
            <>
{/*<h2> {this.props.title} </h2>

<img onClick={this.increaseNoOfPets} src={this.props.image} alt={this.props.altImage} width={300}/>

<p>
 {this.props.description}

</p>
        <p>💚 {this.state.numberOfPets}</p>*/}

<Card style={{ width: '18rem',display: 'inline-flex',flex: 1 }}>
  <Card.Img variant="top"  src={this.props.image_url} alt={this.props.altImage} width={300}/>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    
    <Button  variant="primary" onClick={this.increaseNoOfPets}>💚</Button>
    
<Card.Text> {this.state.numberOfPets}</Card.Text>
<Button onClick={()=>{this.props.modalSelect(this.props.title)}} > modal</Button>

  </Card.Body>
</Card>
 

            </>
            
        )
    }
}
export default HornedBeast ;