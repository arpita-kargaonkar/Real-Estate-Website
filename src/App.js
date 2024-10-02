// navbar component import
import  Navbar from "./component/Navbar.js"
import Home from "./secPage/Home.js"
import Residencies from "./secPage/Residencies.js";
import OurValue from "./secPage/Ourvalue.js";
import Contact from "./secPage/Contact.js";
import Getstarted from "./secPage/Getstarted.js";
import './App.css'
function App() {
  return (
    <div className="App" > 
      <Navbar/>
      <Home/>
      <Residencies/>
      <OurValue/>
      <Contact/>
      <Getstarted/>
    </div>
  );
}

export default App;
