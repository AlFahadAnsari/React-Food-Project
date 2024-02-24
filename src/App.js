import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Type from './components/Type';
import { useState } from 'react';
// import Menu from './components/Menu';
import MenuBar from './components/MenuBar';
import Rating from './components/Rating';
import Contact from './components/Contact';

function App() {

  // const [btnColor, setbtnColor] = useState("dark")

  //     let btn=()=>{
  //       if(btnColor==='dark'){
  //         setbtnColor('success')
  //       }else{
  //         setbtnColor('dark')
  //       }
  //     }

  return (
    <div className="App">


    {/* navbar */}
        <Navbar />


      {/* types food */}
          <Type />

         {/* menubar */}
            <MenuBar/>


            {/*  rating */}
                  <Rating/>

                  {/* contact */}
                      <Contact/>
    </div>
  );
}

export default App;
