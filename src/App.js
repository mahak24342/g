/*import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
//import Profile from "./pages/profile/Profile";
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/">
          <Home/>

        </Route>
        <Route path="/login">
          <Login/>

        </Route>
        <Route path="/register">
<Register/>
        </Route>
<Route path="/profile/:username">
<Profile/>
</Route>
      <Switch/>
    </Router>
     </> 
    
  );  
}

export default App;*/


import React from 'react'
import Home from "./pages/home/Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>

        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
       <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;