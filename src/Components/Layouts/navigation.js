// import React from 'react'


// // cara
// // import { Link } from 'react-router-dom'
// import style from './layout.module.css'

// const Navigation = () => {
//     return (
//         //   membuat style navigation global dan scope
//         <div className={style.navigation}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div className="d-flex justify-content-center align-items-center">
//                             <div class="px-2"><a to="/" className={style.navigation_item}>Home</a></div>
//                             <div class="px-2"><a to="/burger-maker" className={style.navigation_item}>Burger Maker</a></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navigation

// ------------------------------------------------------------------------------- //

import React from 'react'
import style from './layouts.css'
// import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
    <div className={`container my-4 ${style.navbar_button}`}>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.custom_nav} bg-transparent`}>
        <a to="#" className="btn navbar_button"></a>
                     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
             <ul className="navbar-nav">
                     {/* <!--  ////////////////////////////////////////////////////////  --> */}
                     <li className={`${style.nav_item} active mr-4`}>
                         <a className="nav-link" href="/">Our Services</a>
                     </li>
                     {/* <!--  ////////////////////////////////////////////////////////  --> */}
                     <li className="nav_item mr-4">
                         <a className="nav-link" href="../Profile/">Why Us</a>
                     </li>
                     {/* <!--  ////////////////////////////////////////////////////////  --> */}
                     <li className="nav_item mr-4">
                         <a className="nav-link" href="/profile">Testimonial</a>
                     </li>
                     {/* <!--  ////////////////////////////////////////////////////////  --> */}
                     <li className="nav_item mr-4">
                         <a className="nav-link" href="/contact">FAQ</a>
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
  )
}

export default Navigation

