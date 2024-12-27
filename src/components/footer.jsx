import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3
                        style={{
                            fontFamily: 'Montserrat, sans-serif'

                        }}>About Me</h3>
                    <p>
                        As a passionate environmental sustainability advocate, I'm dedicated to driving climate action and sustainable energy solutions. With a strong academic foundation and experience in volunteer work, I've developed leadership skills and a deep understanding of environmental challenges.
                    </p>
                    {/* <p>
                        I'm an entrepreneur and innovator, driven to create impactful solutions that make a real difference. My goal is to establish a sustainable energy company, providing affordable and reliable energy solutions to local communities, fostering economic development and social empowerment.
                    </p> */}

                </div>
                <div className="footer-section">
                    <h3
                        style={{
                            fontFamily: 'Montserrat, sans-serif'

                        }}>Services</h3>
                    <ul>
                        <li>Event Management</li>
                        <li>Product Management</li>
                        <li>Business Development</li>
                        <li>Digital Marketing</li>
                        <li>Project Management</li>
                        <li>Digital Career Navigation</li>
                        <li>Human Resources Management</li>
                    </ul>
                </div>
                <div className="footer-section2">
                    <h3>Get in Touch</h3>
                    {/* <p>
                        Email: <a href="mailto:example@example.com">example@example.com</a>
                    </p> */}<ul className="footer-list">
                        <li className='email'>
                            <a href="mailto:nwekedubemph@gmail.com" target="_blank">
                                <i class="fa fa-envelope"></i>
                                {/* <span>nwekedubemph@gmail.com :</span>               */}
                                <span>chidubemnwachinemere@gmail.com</span>

                            </a>
                        </li>
                        {/* <li className='email'>
                            <a href="mailto:chidubemnwachinemere@gmail.com" target="_blank">
                                <i class="fa fa-envelope"></i>
                                <span>chidubemnwachinemere@gmail.com</span>
                            </a>
                        </li> */}
                        <li className='phone'>
                            <a href="tel:+2348160218792" target="_blank">
                                <i class="fa fa-phone"></i>
                                <span>+234 816 021 8792</span>
                            </a>
                        </li>
                        <li className='facebook'>
                            <a href="https://www.facebook.com/your_facebook_profile" target="_blank">
                                <i class="fa fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className='twitter'>
                            <a href="https://x.com/GodfreyChi68415" target="_blank">
                                <i class="fa fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li className='instagram'>
                            <a href="https://www.instagram.com/chidubemnwachinemere1" target="_blank">
                                <i class="fa fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className='linkedin'>
                            <a href="https://www.linkedin.com/in/chidubem-nwachinemere" target="_blank">
                                <i class="fa fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>







                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Chidubem. All rights reserved. Developed by MistaCourteous: +2348138021900.</p>
            </div>
        </footer>
    );
};

export default Footer;
