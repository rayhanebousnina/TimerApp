// import React from 'react';
// import './App.css'
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {

//     this.state.value = Number(this.state.value);
//     var h = Math.floor(this.state.value / 3600);
//     var m = Math.floor(this.state.value % 3600 / 60);
//     var s = Math.floor(this.state.value % 3600 % 60);

//     var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
//     var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
//     var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     this.state.value =  hDisplay + mDisplay + sDisplay; 

//     return "L'heure est : " + this.state.value;
//   }

//   render() {
//     return (
//       <div>
//         <center>
//           <div className="timer">
//             <form >
//               <label>
//                 Entrer la valeur en secondes :
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//               </label>
             
//               <input type="submit" value="Reset" />
//             </form>
//             <p>{this.handleSubmit()}</p>
            
//           </div>
//         </center>
//       </div>
//     );
//   }
// }

// export default NameForm;