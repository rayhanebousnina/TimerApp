import React, { Component } from 'react'
import './App.css'

/**
* @author
* @class Timer
**/

class Timer extends Component {
 state = {value : ''}

 takeValue = (event) => {
  this.setState ({
    value : Number(event.target.value)
  })
 }

 convertValue = () => {
   let a = this.state.value;
  
  this.setState({
     h : Math.floor(a / 3600),
     m : Math.floor(a % 3600 / 60),
     s : Math.floor(a % 3600 % 60),
    
  })
 }
 
launchTimer = () => {
  this.myInterval = setInterval(() => {
    this.setState({
      s : Number(this.state.s) +1,
    });
  }, 1000)
}

stopTimer = () => {
  clearInterval(this.myInterval);
};

resetTimer = () => {
  this.setState({
    h : 0, m : 0, s : 0
  })
}
//  launchTimer = () => {
//   let b = this.state.s
//    this.setState({
//      b : b++
    
//    })
  //  console.log(setInterval(b,1000))
  // console.log(setInterval(this.launchTimer,1000))

  
 render() {
  return(
   <div className="timer">
     <center>
      <label>
        Entrer la valeur en secondes :
        <input type="text" onChange={this.takeValue}/>
      </label>
      <button onClick={this.convertValue}>Convertir</button>
      <br/>
      Heure : {this.state.h}<br/>
      Minutes : {this.state.m}<br/>
      Secondes : {this.state.s}<br/>

      <button onClick={this.launchTimer}>Démarrer</button>
      <button onClick={this.stopTimer}>Stop</button>
      <button onClick={this.resetTimer}>Reset</button>
      {/* <h1>{setInterval(this.launchTimer,1000)}</h1> */}
      {/* <h1>{this.state.s}</h1> */}
     </center>
   </div>
    )
   }
 }


Timer.propTypes = {}
export default Timer