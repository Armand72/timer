import React, { Component } from 'react';


class App  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0
     }
  }
componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({
        count:this.state.count + 1
      }) 
    }, 1000)
  }


componentDidUpdate() {
  console.log(this.state.count)
  console.log('Un update a eu lieu');
}
  render() { 
   const {count} = this.state
    return ( 

      <div>
     <p>The time : {count}</p>
    </div>
     );
  }
}
 
export default App ;
