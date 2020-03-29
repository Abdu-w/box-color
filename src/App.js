import React, {Component} from 'react';
import './App.css';


export default class  App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
      color: 'blue',
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
        <h1 className="text"> Box-Color Change on Click {this.state.count}</h1>
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

