import React, {Component} from 'react';
import './App.css';

// create a box with div
// onclick create a function that stich color 
// set a state where color can chage 
export default class  App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'blue',
      on: false,
      count: 0
   
    }
  }
  
  toggleColor = () => {
    this.setState({ count : this.state.count + 1 })
    if(this.state.on === false) {
      this.setState({
        on: true,
        color: 'purple'
       })
    } else {
      this.setState({
        on: false,
        color: 'blue'
       })
    }
  }

 

  render(){
    return (
      <div className="App">
        <h1 className="description"> Box-Color Change on Click </h1>
        <div 
          className='box' 
          style={{ backgroundColor: this.state.color }} 
          onClick={this.toggleColor}>
            <div className='innerText'>Click Here</div>
        </div>
      
      </div>

      );
    
    }
}

