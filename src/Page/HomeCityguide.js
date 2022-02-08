import { useState } from "react";

const HomeCityguide = () => {
    const [Message , setMessage]= useState("")
    const changeMessage = () =>{
        setMessage("Edited also by Luc")
    }
    const message1 =() => {
        setMessage(false)
    }
    return (
        <div>
            <div id="wrapper">
                <header id="header" className="site-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-5">
                                <div className="site">
                                    <div className="site__menu">
                                        <a title="Menu Icon" href="#" className="site__menu__icon">
                                            <i className="las la-bars la-24-black"></i>
                                        </a>
                                        <div className="popup-background"></div>
                                        <div className="popup popup--left">
                                            <a title="Close" href="#" className="popup__close">
                                                <i className="las la-times la-24-black"></i>
                                            </a>
                                            {/* <!-- .popup__close --> */}
                                            <div className="popup__content">
                                                <div className="popup__user popup__box open-form">
                                                    <a title="Login" href="#" className="open-login">Login</a>
                                                    <a title="Sign Up" href="#" className="open-signup">Sign Up</a>
                                                </div>
                                                {/* <!-- .popup__user --> */}
                                                <div className="popup__destinations popup__box">
                                                    <ul className="menu-arrow">
                                                        <li>
                                                            <a title="Destinations" href="#">Destinations </a>
                                                            <ul className="sub-menu">
                                                                <li><a href="city-details-1.html" title="Tokyo">Tokyo</a></li>
                                                                <li><a href="city-details-1.html" title="New York">New York</a></li>
                                                                <li><a href="city-details-1.html" title="Barcelona">Barcelona</a></li>
                                                                <li><a href="city-details-1.html" title="Amsterdam">Amsterdam</a></li>
                                                                <li><a href="city-details-1.html" title="Los Angeles">Los Angeles</a></li>
                                                                <li><a href="city-details-1.html" title="London">London</a></li>
                                                                <li><a href="city-details-1.html" title="Bangkok">Bangkok</a></li>
                                                                <li><a href="city-details-1.html" title="Paris">Paris</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="popup__menu popup__box">
                                                    <ul className="menu-arrow">
                                                        <li>
                                                            <a href="#" title="Demos">Demos</a>
                                                            <ul className="sub-menu">
                                                                <li><a href="/HomeRestaurant" title="Restaurant Listing">Restaurant Listing</a></li>
                                                                <li><a href="home-business.html" title="Business Listing">Business Listing</a></li>
                                                                <li><a href="home-countryguide.html" title="Country Travel Guide">Country Travel Guide</a></li>
                                                                <li><a href="home-cityguide.html" title="City Travel Guide">City Travel Guide</a></li>
                                                                <li><a href="home-workspaces.html" title="Workspace Listing">Workspace Listing</a></li>
                                                                <li><a href="home-healthmedical.html" title="Health Medical">Health Medical</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Listings">Listings</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#" title="Search Layout">Search Layout</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="ex-half-map-1.html" title="Half Map – Left Filter">Half Map – Left Filter</a></li>
                                                                        <li><a href="ex-half-map-2.html" title="Half Map – Top Filter">Half Map – Top Filter</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="City Layout">City Layout</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="city-details-1.html" title="Half Map – Left Filter">Half Map – Left Filter</a></li>
                                                                        <li><a href="city-details-2.html" title="Half Map – Top Filter">Half Map – Top Filter</a></li>
                                                                        <li><a href="city-details-3.html" title="Without Map">Without Map</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="Listing Detail">Single Layout</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="single-1.html" title="Carousel">Default - Carousel</a></li>
                                                                        <li><a href="single-2.html" title="Image">Default - Image</a></li>
                                                                        <li><a href="single-3.html" title="Restaurant">Restaurant Type</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="Booking Type">Booking Type</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="bk-booking-form.html" title="Appointment Booking">Appointment Booking</a></li>
                                                                        <li><a href="bk-enquiry-form.html" title="Enquiry Form">Enquiry Form</a></li>
                                                                        <li><a href="bk-affiliate-link.html" title="Affiliate Link">Affiliate Link</a></li>
                                                                        <li><a href="bk-banner-ads.html" title="Affiliate Banner">Affiliate Banner</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a title="Page" href="#">Page</a>
                                                            <ul className="sub-menu">
                                                                <li><a title="About" href="about-us.html">About Us</a></li>
                                                                <li><a title="FAQ's" href="faqs.html">FAQ's</a></li>
                                                                <li><a title="App Landing" href="app-landing.html">App Landing</a></li>
                                                                <li><a title="Contacts" href="contact-us.html">Contacts</a></li>
                                                                <li><a title="Add Listing" href="add-place.html">Add Listing</a></li>
                                                                <li><a title="Pricing" href="#">Pricing</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a title="Pricing Plan" href="pricing-plan.html">Pricing Plan</a></li>
                                                                        <li><a title="Pricing Plan Checkout" href="pricing-checkout.html">Pricing Checkout</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a title="Page" href="#">Shop</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a title="Products" href="shop.html">Products</a></li>
                                                                        <li><a title="Product Detail" href="shop-detail.html">Product Detail</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a title="Page" href="#">Blog</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a title="Fullwidth" href="blog-fullwidth.html">Fullwidth</a></li>
                                                                        <li><a title="Right Sidebar" href="blog-right-sidebar.html">Right Sidebar</a></li>
                                                                        <li><a title="Blog Detail" href="blog-detail.html">Blog Detail</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a title="Owner Dashboard" href="owner-dashboard.html">Owner Dashboard</a></li>
                                                                <li><a title="Owner Single" href="owner-page.html">Owner Single</a></li>
                                                                <li><a title="Construction" href="construction.html">Construction</a></li>
                                                                <li><a title="Coming Soon" href="coming-soon.html">Coming Soon </a></li>
                                                                <li><a title="404" href="404.html">404 Page</a></li>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </div>
                                                {/* <!-- .popup__menu --> */}
                                            </div>
                                            {/* <!-- .popup__content --> */}
                                            <div className="popup__button popup__box">
                                                <a title="Add place" href="add-place.html" className="btn">
                                                    <i className="la la-plus"></i>
                                                    <span>Add place</span>
                                                </a>
                                            </div>
                                            {/* <!-- .popup__button --> */}
                                        </div>
                                        {/* <!-- .popup --> */}
                                    </div>
                                    {/* <!-- .site__menu --> */}
                                    <div className="site__brand">
                                        <a title="Logo" href="/" className="site__brand__logo"><img src="Asset/images/assets/logo.png" alt="Golo"/></a>
                                    </div>
                                    {/* <!-- .site__brand --> */}

                                </div>
                                {/* <!-- .site --> */}
                            </div>
                            {/* <!-- .col-md-6 --> */}
                            <div className="col-xl-6 col-7">
                                <div className="right-header align-right">
                                    <nav className="main-menu">
                                        <ul>
                                            <li>
                                                <a href="#" title="Demos">Demos</a>
                                                <ul className="sub-menu">
                                                    <li><a href="/HomeRestaurant" title="Restaurant Listing">Restaurant Listing</a></li>
                                                    <li><a href="home-business.html" title="Business Listing">Business Listing</a></li>
                                                    <li><a href="home-countryguide.html" title="Country Travel Guide">Country Travel Guide</a></li>
                                                    <li><a href="home-cityguide.html" title="City Travel Guide">City Travel Guide</a></li>
                                                    <li><a href="home-workspaces.html" title="Workspace Listing">Workspace Listing</a></li>
                                                    <li><a href="home-healthmedical.html" title="Health Medical">Health Medical</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" title="Listings">Listings</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#" title="Search Layout">Search Layout</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="ex-half-map-1.html" title="Half Map – Left Filter">Half Map – Left Filter</a></li>
                                                            <li><a href="ex-half-map-2.html" title="Half Map – Top Filter">Half Map – Top Filter</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="City Layout">City Layout</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="city-details-1.html" title="Half Map – Left Filter">Half Map – Left Filter</a></li>
                                                            <li><a href="city-details-2.html" title="Half Map – Top Filter">Half Map – Top Filter</a></li>
                                                            <li><a href="city-details-3.html" title="Without Map">Without Map</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Listing Detail">Single Layout</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="single-1.html" title="Carousel">Default - Carousel</a></li>
                                                            <li><a href="single-2.html" title="Image">Default - Image</a></li>
                                                            <li><a href="single-3.html" title="Restaurant">Restaurant Type</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Booking Type">Booking Type</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="bk-booking-form.html" title="Appointment Booking">Appointment Booking</a></li>
                                                            <li><a href="bk-enquiry-form.html" title="Enquiry Form">Enquiry Form</a></li>
                                                            <li><a href="bk-affiliate-link.html" title="Affiliate Link">Affiliate Link</a></li>
                                                            <li><a href="bk-banner-ads.html" title="Affiliate Banner">Affiliate Banner</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a title="Page" href="#">Page</a>
                                                <ul className="sub-menu">
                                                    <li><a title="About" href="about-us.html">About Us</a></li>
                                                    <li><a title="FAQ's" href="faqs.html">FAQ's</a></li>
                                                    <li><a title="App Landing" href="app-landing.html">App Landing</a></li>
                                                    <li><a title="Contacts" href="contact-us.html">Contacts</a></li>
                                                    <li><a title="Add Listing" href="add-place.html">Add Listing</a></li>
                                                    <li><a title="Pricing" href="#">Pricing</a>
                                                        <ul className="sub-menu">
                                                            <li><a title="Pricing Plan" href="pricing-plan.html">Pricing Plan</a></li>
                                                            <li><a title="Pricing Plan Checkout" href="pricing-checkout.html">Pricing Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a title="Page" href="#">Shop</a>
                                                        <ul className="sub-menu">
                                                            <li><a title="Products" href="shop.html">Products</a></li>
                                                            <li><a title="Product Detail" href="shop-detail.html">Product Detail</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a title="Page" href="#">Blog</a>
                                                        <ul className="sub-menu">
                                                            <li><a title="Fullwidth" href="blog-fullwidth.html">Fullwidth</a></li>
                                                            <li><a title="Right Sidebar" href="blog-right-sidebar.html">Right Sidebar</a></li>
                                                            <li><a title="Blog Detail" href="blog-detail.html">Blog Detail</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a title="Owner Dashboard" href="owner-dashboard.html">Owner Dashboard</a></li>
                                                    <li><a title="Owner Single" href="owner-page.html">Owner Single</a></li>
                                                    <li><a title="Construction" href="construction.html">Construction</a></li>
                                                    <li><a title="Coming Soon" href="coming-soon.html">Coming Soon </a></li>
                                                    <li><a title="404" href="404.html">404 Page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="right-header__login">
                                        <a title="Login" className="open-login" href="#">Login</a>
                                    </div>
                                    {/* <!-- .right-header__login --> */}
                                    <div className="popup popup-form">
                                        <a title="Close" href="#" className="popup__close">
                                            <i className="las la-times la-24-black"></i>
                                        </a>
                                        {/* <!-- .popup__close --> */}
                                        <ul className="choose-form">
                                            <li className="nav-signup"><a title="Sign Up" href="#signup">Sign Up</a></li>
                                            <li className="nav-login"><a title="Log In" href="#login">Log In</a></li>
                                        </ul>
                                        <p className="choose-more">Continue with <a title="Facebook" className="fb" href="#">Facebook</a> or <a title="Google" className="gg" href="#">Google</a></p>
                                        <p className="choose-or"><span>Or</span></p>
                                        <div className="popup-content">
                                            <form action="#" className="form-sign form-content" id="signup">
                                                <div className="field-inline">
                                                    <div className="field-input">
                                                        <input type="text" placeholder="First Name" defaultValue="" name="first_name"/>
                                                    </div>
                                                    <div className="field-input">
                                                        <input type="text" placeholder="Last Name" defaultValue="" name="last_name"/>
                                                    </div>
                                                </div>
                                                <div className="field-input">
                                                    <input type="email" placeholder="Email" defaultValue="" name="email"/>
                                                </div>
                                                <div className="field-input">
                                                    <input type="password" placeholder="Password" defaultValue="" name="password"/>
                                                </div>
                                                <div className="field-check">
                                                    <label htmlFor="accept">
                                                        <input type="checkbox" id="accept" defaultValue=""/>
                                                            Accept the <a title="Terms" href="#">Terms</a> and <a title="Privacy Policy" href="#">Privacy Policy</a>
                                                            <span className="checkmark">
                                                                <i className="la la-check"></i>
                                                            </span>
                                                    </label>
                                                </div>
                                                <input type="submit" name="submit" defaultValue="Sign Up"/>
                                            </form>
                                            <form action="#" className="form-log form-content" id="login">
                                                <div className="field-input">
                                                    <input type="text" placeholder="Username or Email" defaultValue="" name="user"/>
                                                </div>
                                                <div className="field-input">
                                                    <input type="password" placeholder="Password" defaultValue="" name="password"/>
                                                </div>
                                                <a title="Forgot password" className="forgot_pass" href="#">Forgot password</a>
                                                <input type="submit" name="submit" defaultValue="Login"/>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- .popup-form --> */}
                                    <div className="right-header__search">
                                        <a title="Search" href="#" className="search-open">
                                            <i className="las la-search la-24-black"></i>
                                        </a>
                                        <div className="site__search">
                                            <a title="Close" href="#" className="search__close">
                                                <i className="la la-times"></i>
                                            </a>
                                            {/* <!-- .search__close --> */}
                                            <form action="#" className="site__search__form" method="GET">
                                                <div className="site__search__field">
                                                    <span className="site__search__icon">
                                                        <i className="las la-search la-24-black"></i>
                                                    </span>
                                                    {/* <!-- .site__search__icon --> */}
                                                    <input className="site__search__input" type="text" name="s" placeholder="Search places, cities"/>
                                                </div>
                                                {/* <!-- .search__input --> */}
                                            </form>
                                            {/* <!-- .search__form --> */}
                                        </div>
                                        {/* <!-- .site__search --> */}
                                    </div>
                                    <div className="right-header__button btn">
                                        <a title="Add place" href="add-place.html">
                                            <i className="las la-plus la-24-white"></i>
                                            <span>Add Listing</span>
                                        </a>
                                    </div>
                                    {/* <!-- .right-header__button --> */}
                                </div>
                                {/* <!-- .right-header --> */}
                            </div>
                            {/* 
                            <!-- .col-md-6 --> */}
                        </div>
                        {/* <!-- .row --> */}
                    </div>
                    {/* <!-- .container-fluid --> */}
                </header>
                {/* <!-- .site-header --> */}

                <main id="main" className="site-main overflow">
                    <div className="site-banner" style={{backgroundImage: "url(Asset/images/bg/top-banner.png)"}}>
                        <div className="container">
                            <div className="site-banner__content">
                                <h1 className="site-banner__title">Explore the world</h1>
                                <form action="#" className="site-banner__search layout-02">
                                    <div className="field-input">
                                        <label htmlFor="s">Find</label>
                                        <input className="site-banner__search__input open-suggestion" id="s" type="text" name="s" placeholder="Ex: fastfood, beer" autoComplete="off"/>
                                            <div className="search-suggestions name-suggestions">
                                                <ul>
                                                    <li><a href="#"><i className="las la-utensils"></i><span>Restaurant</span></a></li>
                                                    <li><a href="#"><i className="las la-spa"></i><span>Beauty</span></a></li>
                                                    <li><a href="#"><i className="las la-dumbbell"></i><span>Fitness</span></a></li>
                                                    <li><a href="#"><i className="las la-cocktail"></i><span>Nightlight</span></a></li>
                                                    <li><a href="#"><i className="las la-shopping-bag"></i><span>Shopping</span></a></li>
                                                    <li><a href="#"><i className="las la-film"></i><span>Cinema</span></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    {/* <!-- .site-banner__search__input --> */}
                                    <div className="field-input">
                                        <label htmlFor="loca">Where</label>
                                        <input className="site-banner__search__input open-suggestion" id="loca" type="text" name="where" placeholder="Your city" autoComplete="off"/>
                                            <div className="search-suggestions location-suggestions">
                                                <ul>
                                                    <li><a href="#"><i className="las la-location-arrow"></i><span>Current location</span></a></li>
                                                    <li><a href="#"><span>San Francisco, CA</span></a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    {/* <!-- .site-banner__search__input --> */}
                                    <div className="field-submit">
                                        <button><i className="las la-search la-24-black"></i></button>
                                    </div>
                                </form>
                                {/* <!-- .site-banner__search --> */}
                                <p className="site-banner__meta">
                                    <span>Popular:</span>
                                    <a title="London" href="city-details-1.html">London</a>
                                    <a title="Paris" href="city-details-1.html">Paris</a>
                                    <a title="Chicago" href="city-details-1.html">Chicago</a>
                                </p>
                                {/* <!-- .site-banner__meta --> */}
                            </div>
                            {/* <!-- .site-banner__content --> */}
                        </div>
                    </div>
                    {/* <!-- .site-banner --> */}
                    <div className="cities">
                        <div className="container">
                            <h2 className="cities__title title offset-item">Popular cities</h2>
                            <div className="cities__content offset-item">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="London" href="city-details-3.html">
                                                    <img src="Asset/images/city/tokyo.jpg" alt="Tokyo"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Japan</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Tokyo</h3>
                                                <p className="cities__number">80 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Barca" href="city-details-3.html">
                                                    <img src="Asset/images/city/barca.jpg" alt="Barca"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Spain</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Barca</h3>
                                                <p className="cities__number">92 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="New York" href="city-details-3.html">
                                                    <img src="Asset/images/city/newyork.jpg" alt="New York"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">United States</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">New York</h3>
                                                <p className="cities__number">64 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Paris" href="city-details-3.html">
                                                    <img src="Asset/images/city/paris.jpg" alt="Paris"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">France</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Paris</h3>
                                                <p className="cities__number">23 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Amsterdam" href="city-details-3.html">
                                                    <img src="Asset/images/city/amsterdam.jpg" alt="Amsterdam"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Netherlands</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Amsterdam</h3>
                                                <p className="cities__number">44 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Singapo" href="city-details-3.html">
                                                    <img src="Asset/images/city/singapo.jpg" alt="Singapo"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Singapo</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Singapo</h3>
                                                <p className="cities__number">60 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Sydney" href="city-details-3.html">
                                                    <img src="Asset/images/city/sydney.jpg" alt="Sydney"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Australia</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Sydney</h3>
                                                <p className="cities__number">36 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="angeles" href="city-details-3.html">
                                                    <img src="Asset/images/city/angeles.jpg" alt="angeles"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">United States</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Angeles</h3>
                                                <p className="cities__number">44 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>

                                </div>
                            </div>
                            {/* <!-- .cities__content --> */}
                        </div>
                    </div>
                    {/* <!-- .cities --> */}
                    <div className="banner-apps" style={{backgroundImage: "url(Asset/images/bg/bg-app-1.jpg)"}}>
                        <div className="container">
                            <div className="banner-apps__content">
                                <h2 className="banner-apps__title offset-item">Get the App</h2>
                                <p className="banner-apps__desc offset-item">Download the app and go to travel the world.</p>
                                <div className="banner-apps__download offset-item">
                                    <a title="App Store" href="#" className="banner-apps__download__iphone"><img src="Asset/images/assets/app-store.png" alt="App Store"/></a>
                                    <a title="Google Play" href="#" className="banner-apps__download__android"><img src="Asset/images/assets/google-play.png" alt="Google Play"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- .banner-apps --> */}
                    <div className="news">
                        <div className="container">
                            <h2 className="news__title title title--more offset-item">
                                Related stories
                                <a title="View more" href="#">
                                    View more
                                    <i className="la la-angle-right"></i>
                                </a>
                            </h2>
                            <div className="news__content offset-item">
                                <div className="row">
                                    <div className="col-md-4">
                                        <article className="post hover__box">
                                            <div className="post__thumb hover__box__thumb">
                                                <a title="The 8 Most Affordable Michelin Restaurants in Paris" href="blog-detail.html"><img src="Asset/images/blog/thumb-01.jpg" alt="The 8 Most Affordable Michelin Restaurants in Paris"/></a>
                                            </div>
                                            <div className="post__info">
                                                <ul className="post__category">
                                                    <li><a title="Paris" href="02_city-details_1.html">Paris</a></li>
                                                    <li><a title="Food" href="02_city-details_1.html">Food</a></li>
                                                </ul>
                                                <h3 className="post__title"><a title="The 8 Most Affordable Michelin Restaurants in Paris" href="blog-detail.html">The 8 Most Affordable Michelin Restaurants in Paris</a></h3>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-4">
                                        <article className="post hover__box">
                                            <div className="post__thumb hover__box__thumb">
                                                <a title="The 7 Best Restaurants to Try Kobe Beef in London" href="blog-detail.html"><img src="Asset/images/blog/thumb-05.jpg" alt="The 7 Best Restaurants to Try Kobe Beef in London"/></a>
                                            </div>
                                            <div className="post__info">
                                                <ul className="post__category">
                                                    <li><a title="London" href="02_city-details_1.html">London</a></li>
                                                    <li><a title="Art / Decor" href="02_city-details_1.html">Art / Decor</a></li>
                                                </ul>
                                                <h3 className="post__title"><a title="The 7 Best Restaurants to Try Kobe Beef in London" href="blog-detail.html">The 7 Best Restaurants to Try Kobe Beef in London</a></h3>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-md-4">
                                        <article className="post hover__box">
                                            <div className="post__thumb hover__box__thumb">
                                                <a title="The 8 Most Affordable Michelin Restaurants in Paris" href="blog-detail.html"><img src="Asset/images/blog/thumb-08.jpg" alt="The 8 Most Affordable Michelin Restaurants in Paris"/></a>
                                            </div>
                                            <div className="post__info">
                                                <ul className="post__category">
                                                    <li><a title="Paris" href="02_city-details_1.html">Paris</a></li>
                                                    <li><a title="Stay" href="02_city-details_1.html">Stay</a></li>
                                                </ul>
                                                <h3 className="post__title"><a title="The 8 Most Affordable Michelin Restaurants in Paris" href="blog-detail.html">The 9 Best Cheap Hotels in New York City</a></h3>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- .news --> */}
                </main>
                {/* <!-- .site-main --> */}

                <footer id="footer" className="footer">
                    <div className="container">
                        <div className="footer__top">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="footer__top__info">
                                        <a title="Logo" href="01_index_1.html" className="footer__top__info__logo"><img src="Asset/images/assets/logo.png" alt="Golo"/></a>
                                        <p className="footer__top__info__desc">Discover amazing things to do everywhere you go.</p>
                                        <div className="footer__top__info__app">
                                            <a title="App Store" href="#" className="banner-apps__download__iphone"><img src="Asset/images/assets/app-store.png" alt="App Store"/></a>
                                            <a title="Google Play" href="#" className="banner-apps__download__android"><img src="Asset/images/assets/google-play.png" alt="Google Play"/></a>
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
                                <p className="footer__bottom__copyright">{Message}<br/><button className="a:hover"  onClick={message1}> <h5>Hide Editer</h5> </button> </p>
                            </div>)}<br/><button className="a:hover"  onClick={changeMessage}> <h5>And</h5> </button> </p>
                            
                            
                        </div>
                        {/* <!-- .top-footer --> */}
                    </div>
                    {/* <!-- .container --> */}
                </footer>
                {/* <!-- site-footer --> */}
            </div>
            {/* <!-- #wrapper --> */}
        </div>
    );
}

export default HomeCityguide;