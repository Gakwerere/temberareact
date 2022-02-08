import { useState } from "react";

const Footer = () => 
{
    const [Message , setMessage]= useState("")
    const changeMessage = () =>{
        setMessage("Edited also by Luc")
    }
    const message1 =() => {
        setMessage(false)
    }
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="footer__top">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="footer__top__info">
                                    <a title="Logo" href="01_index_1.html" className="footer__top__info__logo"><img src="Asset/images/assets/logo.png" alt="Golo" /></a>
                                    <p className="footer__top__info__desc">Discover amazing things to do everywhere you go.</p>
                                    <div className="footer__top__info__app">
                                        <a title="App Store" href="#" className="banner-apps__download__iphone"><img src="Asset/images/assets/app-store.png" alt="App Store" /></a>
                                        <a title="Google Play" href="#" className="banner-apps__download__android"><img src="Asset/images/assets/google-play.png" alt="Google Play" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <aside className="footer__top__nav">
                                    <h3>Company</h3>
                                    <ul>
                                        <li><a title="About Us" href="06_about-us.html">About Us</a></li>
                                        <li><a title="Blog" href="07_blog-right-sidebar.html">Blog</a></li>
                                        <li><a title="Faqs" href="15_faqs.html">Faqs</a></li>
                                        <li><a title="Contact" href="09_contact-us.html">Contact</a></li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-lg-2">
                                <aside className="footer__top__nav">
                                    <h3>Support</h3>
                                    <ul>
                                        <li><a title="Get in Touch" href="#">Get in Touch</a></li>
                                        <li><a title="Help Center" href="#">Help Center</a></li>
                                        <li><a title="Live chat" href="#">Live chat</a></li>
                                        <li><a title="How it works" href="#">How it works</a></li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-lg-3">
                                <aside className="footer__top__nav footer__top__nav--contact">
                                    <h3>Contact Us</h3>
                                    <p>Email: <a href="https://golohtml.uxper.co/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="81f2f4f1f1eef3f5c1e5eeece0e8efafe2eeec">[email&#160;protected]</a></p>
                                    <p>Phone: 1 (00) 832 2342</p>
                                    <ul>
                                        <li className="facebook">
                                            <a title="Facebook" href="#">
                                                <i className="la la-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            <a title="Twitter" href="#">
                                                <i className="la la-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="youtube">
                                            <a title="Youtube" href="#">
                                                <i className="la la-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                            <a title="Instagram" href="#">
                                                <i className="la la-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                    {/* <!-- .top-footer --> */}
                    <div className="footer__bottom">
                        <p className="footer__bottom__copyright">2020 &copy; <a title="Uxper Team" href="#">uxper.co</a>. All rights reserved.</p>
                        <p className="footer__bottom__copyright">On 2022 Edited by Pandax /{Message && (<div>
                            <p className="footer__bottom__copyright">{Message}<br /><button className="a:hover" onClick={message1}> <h5>Hide Editer</h5> </button> </p>
                        </div>)}<br /><button className="a:hover" onClick={changeMessage}> <h5>And</h5> </button> </p>


                    </div>
                    {/* <!-- .top-footer --> */}
                </div>
                {/* <!-- .container --> */}
            </footer>
                {/* <!-- site-footer --> */}
        </div>
    );
}

export default Footer;