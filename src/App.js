import './App.css';
//import PropTypes from 'prop-types';
import { Component } from 'react';


class App extends Component{
  state = {
    count: 0,
    minus(params) {
      console.log("minus");
    },
    add(params) {
      console.log("add");
    }
  }
  render(){
    return(
      <div>
        The Number Is : {this.state.count}
        <br></br>
        <button onClick={this.state.add}>+</button> 
        <button onClick={this.state.minus}>-</button>
      </div>
      
    );
  }
}

export default App;
// const map_test = [
//   "123", "asd", {name:"test", value:1}
// ]
// function Food(props){
//   return(
//     <div>
//       {map_test.map(function(current){
//         console.log(current);
//         return current + "\n";
//       })}
//       <br></br>
//       {props.name}
//       {props.value}
//     </div>
//   )
// }

// Food.propTypes = {
//   name:PropTypes.string.isRequired,
//   value:PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       Hello
//       <Food name="this is food" value={1}></Food>
//     </div>
    
//   );
// }

// export default App;
