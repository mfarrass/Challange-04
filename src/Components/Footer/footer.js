
import './footer.css'
import { Icon } from '@iconify/react';

const Footer = () => {

  return (
    <>
        <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget company_widget">
                            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            {/* <!-- <a href="#">binarcarrental@gmail.com</a>  */}
                            <p>binarcarrental@gmail.com</p>
                            <p>081-233-334-808</p>
                        </div>
                    </div>
                    {/* ////////////////////////////////////////////////////////  --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                            <ul className="list-unstyled f_list">
                                <li><a href="#our-services" className='text-decoration-none text-dark'>Our services</a></li>
                                <li><a href="#why-us-section" className='text-decoration-none text-dark'>Why Us</a></li>
                                <li><a href="#testimonial-section" className='text-decoration-none text-dark'>Testimonial</a></li>
                                <li><a href="#frequently-asked" className='text-decoration-none text-dark'>FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    {/*  ////////////////////////////////////////////////////////  --> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget social_widget pl_70 wow fadeInLeft">
                            <p>Connect with us</p>
                            <div className="f_social_icon">
                            <a to="#"><Icon icon="icon-park-outline:facebook" className='mb-1'/></a>
                            <a to="#"><Icon icon="akar-icons:instagram-fill" className='mb-1'/></a>
                            <a to="#"><Icon icon="iconoir:twitter" className='mb-1'/></a>
                            <a to="#"><Icon icon="ci:mail" className='mb-1'/></a>
                            <a to="#"><Icon icon="akar-icons:chat-question" className='mb-1'/></a>
                        </div> 
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget f_subscribe_two pl_70 wow fadeInLeft">
                            <p className="ml-5">Copyright Binar 2022</p>
                            <button className="ml-5 btn btn_get btn_get_two"></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </footer>
    </>
  );
}

export default Footer

