// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Menu from './Components/Menu/menu'
// import Home from './Components/Home/home'
// import Profile from './Components/Profile/profile'
// import Contact from './Components/Contact/contact'
// import Footer from './Components/Footer/footer'
// import SearchBar from './Components/SearchBar/SearchBar';
 
// function App() {
//   return (
//     <Router >
//       <div className="app-header">
//         <Menu />
//       </div>
//       <Switch>
//         <div className="app-content">
//           <Route path="/" exact component={Home} />
//           <Route path="/profile" exact component={Profile} />
//           <Route path="/contact" exact component={Contact} />
//         </div>
//       </Switch>
//       <SearchBar />
//       <div className=''>
//         <Footer/>
//       </div>
//     </Router>
//   );
// }
 
// export default App;

//  ======================================================================== //

// App = bagian komponen
// opening dan closing tag disini diambil dari import <burger></burger>
// atau dengan single tag <burger/>
// routes = disini adalah jrx

// -------------------------------------------------------------------------------- //

// Folder Component disini mirip seperti Partials Challange-03
// Folder Burger disini mirip seperti User C 2q1hallange-03
// import dari folder component

import React from 'react';
import Layout from './Components/Layouts/layouts';
import Home from './Components/Home/home'
import Footer from './Components/Footer/footer'
import SearchBar from './Components/SearchBar/SearchBar'



function App() {
  return (
    <>
    <Layout />
    <Home />
    <SearchBar />
    <Footer />
    </>
  );
}

export default App;


