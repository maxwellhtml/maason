import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';


const Footer = () => {
    return (
        <footer className="footer py-80">
            <div className="container">
                <div className="row footer-row">
                    {/* Logo and About */}
                    <div className="col-12 col-md-12 col-lg-3 me-auto">
                        <div className="footer-logo">
                           <Image src={"/images/webapp-logo.png"} alt="Footer logo" width={140} height={40} />
                        </div>
                        <p className='mt-2 mt-md-3 mt-lg-4'>Clarity gives you the blocks and components you need to create a truly professional website.</p>
                        <div className="social-icons mt-2 pt-0 mt-md-3 pt-md-2 mt-lg-4 pt-lg-3">
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><IoLogoGithub /></a>
                        </div>
                    </div>
                    {/* Company Links */}
                    <div className="col-6 col-lg-2 mx-auto">
                        <p className='primary-color fs-20 fw-semibold'>Company</p>
                        <ul className='footer-ul-space'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    {/* Help Links */}
                    <div className="col-6 col-lg-2 me-auto">
                    <p className='primary-color fs-20 fw-semibold'>Help</p>
                        <ul className='footer-ul-space'>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Delivery Details</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* Resources Links */}
                    <div className="col-md-12 col-lg-2 me-auto">
                    <p className='primary-color fs-20 fw-semibold'>Resources</p>
                        <ul  className='footer-ul-space'>
                            <li><a href="#">Free eBooks</a></li>
                            <li><a href="#">Development Tutorial</a></li>
                            <li><a href="#">How to - Blog</a></li>
                            <li><a href="#">YouTube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
