import React from 'react';
import HornedBeast from './HornedBeast';
import data from "./data.json";

class Main extends React.Component {

    render() {
        return(
            <div>
                {data.map((item,index)=>{
                    return(
                        <HornedBeast title={item.title} description={item.description} image={item.image_url} altImage={item.keyword} horns={item.horns} />
                    )
                })}
     
        </div>
        )

    }
}

  export default Main;