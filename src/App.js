import React from 'react';
import './styling/App.css';
import {Home} from "./pages/Home";
import Navbar from "./Navbar";
import {Projects} from "./pages/Projects";
import {Info} from "./pages/Info";


function App(){
    let component
    switch(window.location.pathname){
       case "/":
           component = <Home />
           break
       case "/projects":
           component = <Projects />
           break
       case "/info":
           component = <Info />
           break
        default:
            component = <Home />
            break

   }
   return (
       <>
           <Navbar />
           {component}
       </>
   )
}

export default App;
