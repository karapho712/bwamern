import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

import Example from "pages/Example";

// const FunctionalComponent = (props) => {
//   const [name, setName] = React.useState("");
//   const [lastName, setLastName] = React.useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   React.useEffect(() => {
//     alert("woyy just changed");

//     return () => {

//     }
//   }, []);

//   return (
//     <div>
//       <input value={name} onChange={handleChange} />
//       <h1>Hello from parent {props.fromParent}</h1>
//       <h1>Hello from local {name}</h1>
//     </div>
//   );
// };

// class ClassComponent extends React.Component {
//   state = {
//     name: "",
//     lastName: "",
//   };

//   handleChange = (e) => {
//     this.setState({ name: e.target.value });
//   };

//   componentDidMount() {
//     alert("Component just mounted");
//   }

//   componentDidUpdate() {
//     alert("Component got updated");
//   }

//   componentWillUnmount() {

//   }

//   render() {
//     return (
//       <div>
//         <input value={this.state.name} onChange={this.handleChange} />
//         <h1>Hello {this.state.name}</h1>
//         <FunctionalComponent fromParent={this.state.name} />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
