import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from'./firebase';

function App() {
  

  const [{basket}, dispatch ]=useStateValue();
         

useEffect( () => { 
  
  
  
        const unsubscribed=auth.onAuthStateChanged((authuser)=>{
  
          if(authuser){
            
            dispatch({

              type:"SETUSER",
              user:authuser,
            });


          }else{
            dispatch({

              type:"SETUSER",
              user:null,
            });

          }

          })
              
               
          }  , []);

  return (
    <Router>
      <div className="App">
     <Switch>
       <Route path="/checkout">
         <Header />
         <Checkout />
       </Route>
       <Route path="/login">
         <Login/>
       
       </Route>
       <Route path="/">
       <Header />
         <Home />
         
       </Route>
     </Switch>
    </div>

    </Router>
    
    
  );
}

export default App;
