import "./App.css";
import Subheading from "./components/header/heading";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <Subheading title="React is the future" />
      <Subheading
        title="React is a library of javascript"
        className="heading-secondary"
      />
      <Button className="btn" title="Click Me" />
    </div>
  );
}

export default App;
