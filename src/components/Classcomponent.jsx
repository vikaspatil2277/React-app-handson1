import React, { Component } from 'react'
export default class Classcomponent extends Component {
  render() {
    return (
      <div id='containerleft'>
        <h1>This is created using class compionent</h1>
        <h3 className='p2'>This is done using external css</h3>
        <h3 style={{textAlign:"center",color:"red"}}>This is done using inline css</h3>
      </div>
    )
  }
}
