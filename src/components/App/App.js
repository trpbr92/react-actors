import React, {useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App(){
    const [join, setJoin] = useState('');
    
    const clickHandle = ()=>{
      console.log('click');
      console.log('join');
    }
    
    return (
      <div className="App">
        <Header />
        <About />
        <input type="text" placeholder="First Name"/><input type="text" placeholder="Last Name"/><input type="text" placeholder="Best Impression"/><button onClick={clickHandle}>Join Us!</button>
        <Contact />
        <Footer />
      </div>
    );
  
}

export default App;