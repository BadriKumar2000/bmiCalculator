import { Component } from "react";
import CommentsComponent from "./components/CommentsComponent/index.js";
//import Clock from "./components/Clock/index.js";

//import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting/index.js";
import BmiCalculator from "./components/BmiCalculator/index.js";

// class App extends Component {
//   state = {
//     showClock: false,
//   };

//   showClock = () => {
//     const { showClock } = this.state;
//     this.setState({ showClock: !showClock });
//   };

//   hideClock = () => {
//     const { showClock } = this.state;
//     this.setState({ showClock: !showClock });
//   };

//   render() {
//     const { showClock } = this.state;
//     return (
//       <div className="main-container d-flex justify-content-center flex-column align-items-center bg-dark text-center">
//         <div className="row">
//           <div className="col-12">
//             <h1>Clock</h1>
//             {showClock && <Clock />}
//             <button className="btn btn-primary mx-2" onClick={this.showClock}>
//               Show
//             </button>
//             <button className="btn btn-primary mx-2" onClick={this.hideClock}>
//               Hide
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return <BmiCalculator />;
  }
}

export default App;
