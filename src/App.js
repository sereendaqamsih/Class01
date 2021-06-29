import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from "./SelectedBeast.js";
import data from "./data.json";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        clickSatus1:false,
        closeClick:false,
    }
}
showModle=()=>{
  this.setState({
      clickSatus1:this.state.clickSatus1 = true,
  
      })}
      handleClose=()=>{
        this.setState({   closeClick:this.state.closeClick=true, })
          
      }
  render() {
    if(!this.props.show){
      return null;
  }
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>

      </div>
    )
  }
}














export default App;
