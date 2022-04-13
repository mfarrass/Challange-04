// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import './menu.css';
 
// class Menu extends Component {
//     render() {
//         return (
//             <div>
//                 <header className="header">
//                     <a href="https://www.akscoding.com" className="logo">My Tutorial</a>
//                     <input className="menu-btn" type="checkbox" id="menu-btn" />
//                     <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
//                     <ul className="menu">
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/profile">Profile</Link></li>
//                         <li><Link to="/contact">Contact</Link></li>
//                     </ul>
//                 </header>
//             </div>
//         );
//     }
// }
 
// export default Menu;


import React from 'react'
import style from './menu.css'



const menu = () => {
  return (

    <>
       <div className={`container my-4 ${style.navbar_button}`}>
           <nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.custom_nav} bg-transparent`}>
           <a to="#" className="btn navbar_button"></a>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                        {/* <!--  ////////////////////////////////////////////////////////  --> */}
                        <li className={`${style.nav_item} active mr-4`}>
                            <a className="nav-link" to="/">Our Services</a>
                        </li>
                        {/* <!--  ////////////////////////////////////////////////////////  --> */}
                        <li className="nav_item mr-4">
                            <a className="nav-link" to="/profile">Why Us</a>
                        </li>
                        {/* <!--  ////////////////////////////////////////////////////////  --> */}
                        <li className="nav_item mr-4">
                            <a className="nav-link" to="/profile">Testimonial</a>
                        </li>
                        {/* <!--  ////////////////////////////////////////////////////////  --> */}
                        <li className="nav_item mr-4">
                            <a className="nav-link" to="/contact">FAQ</a>
                        </li>
                        {/* <!--  ////////////////////////////////////////////////////////  --> */}
                        <li className="nav_item">
                            <button className="btn btn-success" href="#">Register</button>
                        </li>
                        {/* <!--  ////////////////////////////////////////////////////////  --> */}
                </ul>
            </div>
          </nav>
      </div>
  </>
  );
}


export default menu