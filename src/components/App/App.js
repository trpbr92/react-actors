import React, {useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App(){
    const [join, setJoin] = useState('Thanks for Joining!');
    
    const clickHandle = ()=>{
      console.log('clicked Join Us!');
      console.log(join);
    }
    const handleChange = (event)=>{
      console.log('in handleChange', event.target.value);
      setText( );
    }
    const[text, setText] = useState('text');
    
    return (
      <div className="App">
        <Header />
        <About />
        <input type="text" placeholder="First Name"/> <input type="text" placeholder="Last Name"/><input type="text" placeholder="Best Impression" onChange={handleChange}></input> <button onClick={clickHandle}>Join Us!</button>
       <p>{text}</p>
        <Contact />
        <Footer />
      </div>
    );
  
}

export default App;