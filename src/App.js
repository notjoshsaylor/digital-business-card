import Contact from "./Contact"
import About from "./About"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"./img/self.jpeg"} className="App-logo" alt="logo" />
        <Contact />
        <About />
      </header>
    </div>
  );
}

export default App;
