import './App.css';
//import PropTypes from 'prop-types';
import { Component } from 'react';


// class App extends Component{
//   constructor(props){
//     super(props);
//     console.log("cons");
//   }
//   add() {
//     console.log("add");
//     this.setState(current =>({
//       count: current.count + 1
//     }))
//   }
//   minus = () => {
//     console.log("minus");
//     this.setState({
//       count: this.state.count -1
//     })
//   }//auto bind
//   componentDidMount(){
//     console.log("did");
//   }
//   componentDidUpdate(){
//     console.log("update");
//   }
//   componentWillUnmount(){
//     console.log("unmount");
//   }
//   state = {
//     count: 0, 
//   }
//   add = this.add.bind(this);

//   render(){
//     console.log("render");
//     return(
//       <div>
//         The Number Is : {this.state.count}
//         <br></br>
//         <button onClick={this.add}>+</button> 
//         <button onClick={this.minus}>-</button>
//       </div>
      
//     );
//   }
// }

// export default App;
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
