import React from 'react';

class HornedBeast extends React.Component {
    render (){
        return (
            <div className='HornedBeast'>
<h2> {this.props.title} </h2>

<img src={this.props.image} alt={this.props.altImage}/>

<p>
 {this.props.description}
</p>
            </div>
            
        )
    }
}
export default HornedBeast ;