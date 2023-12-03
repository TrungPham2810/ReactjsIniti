import logo from './logo.svg';
import { useState, createContext, useContext } from 'react';
import './App.css';
import Content from './Content';
import {ThemeContext} from "./ThemeContext"
// 1. Create context
//2. Provider
//3.consumer

function App() {
  const value = useContext(ThemeContext);
    return (
        <div className="App">
            <button onClick={value.toggleTheme}>Toggle Theme</button>
            <Content />
        </div>
    );
}

export default App;
