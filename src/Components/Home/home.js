import React, { Component } from 'react';
import style from './home.css'
 
class Home extends Component {
    render() {
        return (
            <div className='body'>
            <div className="container">
            <div className="row main_section">
                <div className="col-6">
                {/* <!--  ////////////////////////////////////////////////////////  --> */}
                <h2>Sewa & Rental Mobil Terbaik Di Kawasan Depok</h2>
                {/* <!--  ////////////////////////////////////////////////////////  --> */}
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
            </div>
            </div>    
            </div>
        );
    }
}
 
export default Home;