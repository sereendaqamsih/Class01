import React from 'react';
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast.js';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      showModal: false,
      dataInfoSelected:{},
        hornsData:data,
 }
}
handleShowModal = (key) => {
    let element = data.find(value=>{
      if(value.title === key){
       return value ;
      }
    })
  
  /*this.setState(this.toggleShowModal);
  if (this.state.showModal === false) {
    this.setState({
      dataInfo: data,
    });
  }*/
    console.log(element);
  this.setState({
    showModal:true,
    dataInfoSelected:element,
})
}

/*toggleShowModal = (state) => {
  return {
    showModal: !state.showModal
  };
}*/

toggleShowModal = ()=>{
  this.setState({
    showModal:false,
    dataInfoSelected:{},

  })
}
        
          
      
  render() {
   /* if(!this.props.showModal){
      return null;
  }*/
    return (
      <div>
        <Header/>
        <Main selectCard={this.handleShowModal } data={this.state.dataInfoSelected}  />
        <SelectedBeast close={this.toggleShowModal} showModal1={this.state.showModal } data1={this.state.dataInfoSelected}/>
        <Footer/>

      </div>
    )
  }
}














export default App;
