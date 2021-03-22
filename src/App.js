import React from "react";
import "./App.css";
import Subheading from "./components/header/heading";
import Button from "./components/button/button";

// function App() {
//   return (
//     <div className="App">
//       <Subheading title="React is the future" />
//       <Subheading
//         title="React is a library of javascript"
//         className="heading-secondary"
//       />
//       <Button className="btn" title="Click Me" />
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {
  render() {
    return (
      <div className="App" data-testid="AppTest">
        <Subheading title="React is the future" />
        <Subheading
          title="React is a library of javascript"
          className="heading-secondary"
        />
        <Button className="btn" title="Click Me" />
      </div>
    );
  }
}
