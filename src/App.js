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
   
    }
  }
  toggleColor = () => {)
    if(this.state.on === false) {
      this.setState({
        color: 'purple'
       })
    }
  }
 

  render(){
    return (
      <div className="App">
       <h1 className="description"> Box-Color Change on Click </h1>
        <div className='box'>
           <div className='innerText'>Click Here</div>
        </div>
      
      </div>

      );
    
    }
}

