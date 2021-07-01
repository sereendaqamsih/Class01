import React from 'react';
import HornedBeast from './HornedBeast';
import data from "./data.json";
import FormInfo from './FormInfo';

class Main extends React.Component {
    constructor(props){
        super(props)  
    this.state={
        newData:data,
    }}

    submitForm = (event) =>{
    event.preventDefault();
    let valueEvent=event.target.value;
    let array ;
    if (valueEvent>0){
        array=data.filter(element=>{
            return element.horns === Number(valueEvent);
        })}
        else {
            array=data;
        }
        this.setState({
            newData:array
        })
    }
      
    render() {
        return(
            <div>
   <FormInfo submitForm={this.submitForm}/>
    {this.state.newData.map((item,index)=>{
        return(
            <HornedBeast title={item.title} description={item.description} image_url={item.image_url} altImage={item.keyword} horns={item.horns}
            modalSelect={this.props.selectCard} key={index}
           />
        )
    })}
    
        </div>
        )

    }
}

  export default Main;