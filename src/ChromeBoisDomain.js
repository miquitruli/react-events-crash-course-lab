import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
    
  handleMouseMove = (event) => {
   drawChromeBoiAtCoords (event.clientX, event.clientY)
    //invokes the `drawChromeBoiAtCoords` method within `handleMouseMove`, 
    //passing the captured x and y values of the mouse from the event
  }
  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+') // when the 'a' key is pressed, `resize` is invoked with the argument of '+'
    } else if (event.key === 's') {
      resize('-') //when the 's' key is pressed, `resize` is invoked with the argument of '-'
    }
  }
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}} //has an event listener for clicks on the <canvas> element that triggers `toggleCycling`
        onKeyDown={this.handleKeyDown} //has an event listener for key presses on the <canvas> element that triggers `resize`
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}