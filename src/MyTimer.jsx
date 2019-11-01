import React, { Component } from 'react';


class MyTimer  extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            count : 0
         }
         console.log(this.state.count)
         this.timer = this.timer.bind(this)
    }
   

timer() {

    setInterval(() => { 
        this.setState({
            count: this.state.count + 1
            
        })
        
        
    }, 1000);
   
}


    render() { 
        return ( 
            <div>
            <p>MyTimer</p>
            <p>{this.timer}</p>
            <p>{this.state.count}</p>
            </div>
         );
    }
}
 
export default MyTimer;