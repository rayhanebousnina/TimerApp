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
    let s = this.state.s;

    if (s === 60){
      this.state.m++ 
      this.state.s = 0 

    }
    if (this.state.m === 60){
        this.state.h++
        this.state.m = 0 
    }

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
      <div className="flex">
     <div className="rayhan"> Heure : {this.state.h}<br/></div>
     <div className="rayhan">Minutes : {this.state.m}<br/></div> 
     <div className="rayhan">Secondes : {this.state.s}<br/></div> 
     </div>
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