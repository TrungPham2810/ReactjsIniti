import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Content from './Content';
import Button from './Button';



function App() {
  return (
    <div className="App">
     <Heading></Heading>
     <Content></Content>
     <Button primary/>
     <Button success/>

     <Button error/>

    </div>
  );
}

export default App;
