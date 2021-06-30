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
        dataInfo:{},
        hornsData:data,


    }
}
handleShowModal = (key) => {
  /*this.setState(this.toggleShowModal);
  if (this.state.showModal === false) {
    this.setState({
      dataInfo: data,
    });
  }*/
    
  this.setState({
    showModal:true,
    hornsData:key,
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
    dataInfo:{},

  })
}
        
          
      
  render() {
   /* if(!this.props.showModal){
      return null;
  }*/
    return (
      <div>
        <Header/>
        <Main selectCard={this.handleShowModal } data={this.state.hornsData} />
        <SelectedBeast close={this.toggleShowModal} showModal1={this.state.showModal } data1={this.state.dataInfo}/>
        <Footer/>

      </div>
    )
  }
}














export default App;
