import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<News/>}/>

        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
