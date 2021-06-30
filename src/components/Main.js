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
    let array =[];
    array =data.filter(element=>{
        if (element.horns==valueEvent){return true;}
    })
    this.setState ({newData:array})
if (array.length==0){ this.setState({newData:data})
}
}
      
    render() {
        return(
            <div>
   <FormInfo submitForm={this.submitForm}/>
   {data.map((item,index)=>{
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