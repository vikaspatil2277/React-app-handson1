
import './App.css';
import React, { Component } from 'react'
import Classcomponent from './components/Classcomponent';
import Functionalcomponent from './components/Functionalcomponent';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      functionalclick:false,
      classclick:false
    }
  }
  render() {
    return (
      <div className='App'>


        <h1 className='title'>STYLING USING FUNCTIONAL AND CLASS COMPONENT</h1>

      <div className='btns'>
      <button onMouseOver={()=>this.setState({functionalclick:!this.state.functionalclick})} className='btn'>To see styling in functional component</button>
        <button onMouseOver={()=>this.setState({classclick:!this.state.classclick})} className='btn'>To see styling in class component</button>
      </div>

<div className='boxes'>
  
{this.state.functionalclick && <Functionalcomponent/>}
{this.state.classclick && <Classcomponent/>}

</div>

      </div>
    )
  }
}

