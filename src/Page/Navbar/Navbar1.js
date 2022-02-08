const Navbar1 = () => {
    return ( 
        <div>
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
        </div>
     );
}
 
export default Navbar1;