import react from "react";
const homeRestaurant = () => {
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
                                                        <li><a title="Contacts" href="contact-us.html">Contacts</a></li>
                                                        <li><a title="Add Listing" href="add-place.html">Add Listing</a></li>                                                                                                              
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
								    <li><a href="/HomeRestaurant" title="Restaurant">Restaurant</a></li>
									<li><a href="/" title="Coffee Shops">Coffee Shops</a></li>
									<li><a href="/" title="Business">Business</a></li>
									<li><a href="/" title=" Travel Guides"> Travel Guides</a></li>
									<li><a href="/" title=" Coworking Spaces"> Coworking Spaces </a></li>
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
                                            <li><a title="Owner Dashboard" href="owner-dashboard.html">Owner Dashboard</a></li>
                                            <li><a title="Owner Single" href="owner-page.html">Owner Single</a></li>                                            
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
                    {/* <!-- .col-md-6 --> */}
                </div>
                {/* <!-- .row --> */}
            </div>
            {/* <!-- .container-fluid --> */}
        </header>
        {/* <!-- .site-header --> */}

		<main id="main" className="site-main overflow">
			<section className="banner-wrap">
				<div className="flex">
					<div className="banner-left"></div>
					<div className="banner slick-sliders">
						<div className="banner-sliders slick-slider" data-item="1" data-arrows="false" data-dots="true">
							<div className="item"><img src="Asset/images/bg/bg-hero-1.jpg" alt="Banner"/></div>
							<div className="item"><img src="Asset/images/bg/bg-hero-2.jpg" alt="Banner"/></div>
							<div className="item"><img src="Asset/images/bg/bg-hero-3.jpg" alt="Banner"/></div>
						</div>
					</div>
                    {/* <!-- .banner --> */}
				</div>
				<div className="container">
					<div className="banner-content">
						<span className="offset-item">Drink, Food and Enjoy</span>
						<h1 className="offset-item">Discover the best restaurant.</h1>
						<form action="#" className="site-banner__search layout-02 offset-item">
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
					</div>
				</div>
			</section>
            {/* <!-- .banner-wrap --> */}
			<section className="restaurant-wrap">
				<div className="container">
					<div className="title_home offset-item">
						<h2>Popular Restaurants in Town</h2>
					</div>
					<div className="restaurant-sliders slick-sliders offset-item">
						<div className="restaurant-slider slick-slider" data-item="4" data-smallpcscroll="4" data-arrows="true" data-dots="true" data-tabletitem="2" data-tabletscroll="2" data-mobileitem="1" data-mobilescroll="1">
							<div className="place-item layout-02 place-hover" data-maps_name="mattone_restaurant">
							    <div className="place-inner">
					                <div className="place-thumb hover-img">
					            		<a className="entry-thumb" href="single-3.html"><img src="Asset/images/listing/01.jpg" alt=""/></a>
										<a href="#" className="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
											<span className="icon-heart">
												<i className="la la-bookmark large"></i>
											</span>                                    
										</a>       
						                <a className="entry-category rosy-pink" href="#">
						                    <i className="las la-utensils"></i><span>Restaurant</span>
						                </a>
						                <a href="#" className="author" title="Author"><img src="Asset/images/avatars/male-3.jpg" alt="Author"/></a>
									</div>       
							        <div className="entry-detail">
							            <div className="entry-head">
							                <div className="place-type list-item">
							                    <span>Restaurant</span>
							               	</div>
							                <div className="place-city">
							                    <a href="#">Paris</a>
							                </div>
							            </div>
							            <h3 className="place-title"><a href="single-3.html">Mattone Restaurant</a></h3>
							            <div className="open-now"><i className="las la-door-open"></i>Open now</div>
							            <div className="entry-bottom">
							                <div className="place-preview">
							                    <div className="place-rating">
							                        <span>5.0</span>
							                        <i className="la la-star"></i>
							                    </div>
							                    <span className="count-reviews">(2 Reviews)</span>
							                </div>
											<div className="place-price">
							                    <span>$$</span>
							                </div>
							            </div>
							        </div>
							    </div>
							</div>
							<div className="place-item layout-02 place-hover" data-maps_name="retro_fitness">
							    <div className="place-inner">
					                <div className="place-thumb hover-img">
					            		<a className="entry-thumb" href="single-3.html"><img src="Asset/images/listing/09.jpg" alt=""/></a>
										<a href="#" className="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
											<span className="icon-heart">
												<i className="la la-bookmark large"></i>
											</span>                                    
										</a>       
						                <a className="entry-category rosy-pink" href="#">
                                            <i className="las la-utensils"></i><span>Restaurant</span>
                                        </a>
						                <a href="#" className="author" title="Author"><img src="Asset/images/avatars/male-2.jpg" alt="Author"/></a>
									</div>       
							        <div className="entry-detail">
							            <div className="entry-head">
							                <div className="place-type list-item">
							                    <span>Pizza</span>
							               	</div>
							                <div className="place-city">
							                    <a href="#">Bordeaux</a>
							                </div>
							            </div>
							            <h3 className="place-title"><a href="single-3.html">Retro Pizz</a></h3>
							            <div className="open-now"><i className="las la-door-open"></i>Open now</div>
							            <div className="entry-bottom">
							                <div className="place-preview">
							                    <div className="place-rating">
							                        <span>5.0</span>
							                        <i className="la la-star"></i>
							                    </div>
							                    <span className="count-reviews">(2 Reviews)</span>
							                </div>
											<div className="place-price">
							                    <span>$$</span>
							                </div>
							            </div>
							        </div>
							    </div>
							</div>
							<div className="place-item layout-02 place-hover" data-maps_name="body_spa">
							    <div className="place-inner">
					                <div className="place-thumb hover-img">
					            		<a className="entry-thumb" href="single-3.html"><img src="Asset/images/listing/gallery-06.jpg" alt=""/></a>
										<a href="#" className="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
											<span className="icon-heart">
												<i className="la la-bookmark large"></i>
											</span>                                    
										</a>       
						                <a className="entry-category rosy-pink" href="#">
                                            <i className="las la-utensils"></i><span>Restaurant</span>
                                        </a>
						                <a href="#" className="author" title="Author"><img src="Asset/images/avatars/female-3.jpg" alt="Author"/></a>
									</div>       
							        <div className="entry-detail">
							            <div className="entry-head">
							                <div className="place-type list-item">
							                    <span>Fastfood</span>
							               	</div>
							                <div className="place-city">
							                    <a href="#">Lyon</a>
							                </div>
							            </div>
							            <h3 className="place-title"><a href="single-1.html">Antino Bin</a></h3>
							            <div className="close-now"><i className="las la-door-closed"></i>Close now</div>
							            <div className="entry-bottom">
							                <div className="place-preview">
							                    <div className="place-rating">
							                        <span>5.0</span>
							                        <i className="la la-star"></i>
							                    </div>
							                    <span className="count-reviews">(2 Reviews)</span>
							                </div>
											<div className="place-price">
							                    <span>$$</span>
							                </div>
							            </div>
							        </div>
							    </div>
							</div>
							<div className="place-item layout-02 place-hover" data-maps_name="antoinette">
							    <div className="place-inner">
					                <div className="place-thumb hover-img">
					            		<a className="entry-thumb" href="single-1.html"><img src="Asset/images/listing/05.jpg" alt=""/></a>
										<a href="#" className="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
											<span className="icon-heart">
												<i className="la la-bookmark large"></i>
											</span>                                    
										</a>       
						                <a className="entry-category rosy-pink" href="#">
                                            <i className="las la-utensils"></i><span>Restaurant</span>
                                        </a>
						                <a href="#" className="author" title="Author"><img src="Asset/images/avatars/male-4.jpg" alt="Author"/></a>
									</div>       
							        <div className="entry-detail">
							            <div className="entry-head">
							                <div className="place-type list-item">
							                    <span>Coffee</span>
							               	</div>
							                <div className="place-city">
							                    <a href="#">Nantes</a>
							                </div>
							            </div>
							            <h3 className="place-title"><a href="single-1.html">Unisho Ramen</a></h3>
							            <div className="close-now"><i className="las la-door-closed"></i>Close now</div>
							            <div className="entry-bottom">
							                <div className="place-preview">
							                    <span className="no-reviews">(no reviews)</span>
							                </div>
											<div className="place-price">
							                    <span>$$$</span>
							                </div>
							            </div>
							        </div>
							    </div>
							</div>
							<div className="place-item layout-02 place-hover" data-maps_name="kathay_cinema">
							    <div className="place-inner">
					                <div className="place-thumb hover-img">
					            		<a className="entry-thumb" href="single-1.html"><img src="Asset/images/listing/gallery-03.jpg" alt=""/></a>
										<a href="#" className="golo-add-to-wishlist btn-add-to-wishlist " data-place-id="185">
											<span className="icon-heart">
												<i className="la la-bookmark large"></i>
											</span>                                    
										</a>       
						                 <a className="entry-category rosy-pink" href="#">
                                            <i className="las la-utensils"></i><span>Restaurant</span>
                                        </a>
						                <a href="#" className="author" title="Author"><img src="Asset/images/avatars/female-3.jpg" alt="Author"/></a>
									</div>       
							        <div className="entry-detail">
							            <div className="entry-head">
							                <div className="place-type list-item">
							                    <span>Restaurant</span>
							               	</div>
							                <div className="place-city">
							                    <a href="#">Paris</a>
							                </div>
							            </div>
							            <h3 className="place-title"><a href="single-1.html">Kathay Restaurant</a></h3>
							            <div className="close-now"><i className="las la-door-closed"></i>Close now</div>
							            <div className="entry-bottom">
							                <div className="place-preview">
							                    <span className="no-reviews">(no reviews)</span>
							                </div>
											<div className="place-price">
							                    <span>$$</span>
							                </div>
							            </div>
							        </div>
							    </div>
							</div>
						</div>
                        {/* <!-- .restaurant-slider --> */}
						<div className="place-slider__nav slick-nav">
							<div className="place-slider__prev slick-nav__prev">
								<i className="las la-angle-left"></i>
							</div>
                            {/* <!-- .place-slider__prev --> */}
							<div className="place-slider__next slick-nav__next">		
								<i className="las la-angle-right"></i>
							</div>
                            {/* <!-- .place-slider__next --> */}
						</div>
                        {/* <!-- .place-slider__nav --> */}
					</div>
                    {/* <!-- .restaurant-sliders --> */}
				</div>
			</section>
            {/* <!-- .restaurant-wrap --> */}
			<section className="cuisine-wrap section-bg">
				<div className="container">
					<div className="title_home offset-item">
						<h2>Search By Cuisine</h2>
						<p>Explore restaurants and cafes by your favorite cuisine</p>
					</div>
					<div className="cuisine-sliders slick-sliders offset-item">
						<div className="cuisine-slider slick-slider" data-item="6" data-smallpcscroll="6" data-arrows="true" data-dots="true" data-smallpcitem="4" data-smallpcscroll="4" data-tabletitem="3" data-tabletscroll="3" data-mobileitem="2" data-mobilescroll="2">
							<div className="item">
								<a href="ex-half-map-1.html" title="Pizza">
									<span className="hover-img"><img src="Asset/images/menu/pizza.jpg" alt="Pizza"/></span>
									<span className="title">Pizza<span className="number">(34)</span></span>
								</a>
							</div>
							<div className="item">
								<a href="ex-half-map-1.html" title="Fastfood">
									<span className="hover-img"><img src="Asset/images/menu/fastfood.png" alt="Fastfood"/></span>
									<span className="title">Fastfood<span className="number">(57)</span></span>
								</a>
							</div>
							<div className="item">
								<a href="ex-half-map-1.html" title="Vegatarian">
									<span className="hover-img"><img src="Asset/images/menu/vegetables.jpg" alt="Vegatarian"/></span>
									<span className="title">Vegatarian<span className="number">(85)</span></span>
								</a>
							</div>
							<div className="item">
								<a href="ex-half-map-1.html" title="Mexican">
									<span className="hover-img"><img src="Asset/images/menu/mexican.jpg" alt="Mexican"/></span>
									<span className="title">Mexican<span className="number">(22)</span></span>
								</a>
							</div>
							<div className="item">
								<a href="ex-half-map-1.html" title="Italian">
									<span className="hover-img"><img src="Asset/images/menu/italian.jpg" alt="Italian"/></span>
									<span className="title">Italian<span className="number">(48)</span></span>
								</a>
							</div>
							<div className="item">
								<a href="ex-half-map-1.html" title="Japan">
									<span className="hover-img"><img src="Asset/images/menu/japan.jpg" alt="Japan"/></span>
									<span className="title">Japan<span className="number">(12)</span></span>
								</a>
							</div>
							<div className="item">
								<a href="ex-half-map-1.html" title="Vietnamese">
									<span className="hover-img"><img src="Asset/images/menu/vietnamese.jpg" alt="Pizza"/></span>
									<span className="title">Vietnamese<span className="number">(34)</span></span>
								</a>
							</div>
						</div>
                        {/* <!-- .cuisine-slider --> */}
						<div className="place-slider__nav slick-nav">
							<div className="place-slider__prev slick-nav__prev">
								<i className="las la-angle-left"></i>
							</div>
                            {/* <!-- .place-slider__prev --> */}
							<div className="place-slider__next slick-nav__next">		
								<i className="las la-angle-right"></i>
							</div>
                            {/* <!-- .place-slider__next --> */}
						</div>
                        {/* <!-- .place-slider__nav --> */}
					</div>
                    {/* <!-- .cuisine-sliders --> */}
				</div>
                {/* <!-- .container --> */}
			</section>
            {/* <!-- .cuisine-wrap --> */}
			<section className="featured-home featured-wrap">
				<div className="container">
					<div className="title_home offset-item">
						<h2>Featured Cities</h2>
						<p>Explore restaurants and cafes by locality</p>
					</div>
					<div className="featured-inner offset-item">
						<div className="item">
							<div className="flex">
								<div className="flex-col">
									<div className="cities">
										<div className="cities-inner">
											<a href="city-details-1.html" className="hover-img">
												<span className="entry-thumb"><img src="Asset/images/city/chicago-small.jpg" alt="Chicago"/></span>
												<span className="entry-details">
													<h3>Chicago</h3>
												    <span>80 places</span>
												</span>
											</a>
										</div>
									</div>
								</div>
								<div className="flex-col">
									<div className="cities">
										<div className="cities-inner">
											<a href="city-details-1.html" className="hover-img">
												<span className="entry-thumb"><img src="Asset/images/city/losangeles-small.jpg" alt="Los Angeles"/></span>
												<span className="entry-details">
													<h3>Los Angeles</h3>
												    <span>70 places</span>
												</span>
											</a>
										</div>
									</div>
                                    <div className="cities">
                                        <div className="cities-inner">
                                            <a href="city-details-1.html" className="hover-img">
                                                <span className="entry-thumb"><img src="Asset/images/city/newyork-small.jpg" alt="New York"/></span>
                                                <span className="entry-details">
                                                    <h3>New York</h3>
                                                    <span>85 places</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
								</div>
								<div className="flex-col">
									<div className="cities">
                                        <div className="cities-inner">
                                            <a href="city-details-1.html" className="hover-img">
                                                <span className="entry-thumb"><img src="Asset/images/city/sandiego-small.jpg" alt="San Diego"/></span>
                                                <span className="entry-details">
                                                    <h3>San Diego</h3>
                                                    <span>60 places</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
									<div className="cities">
										<div className="cities-inner">
											<a href="city-details-1.html" className="hover-img">
												<span className="entry-thumb"><img src="Asset/images/city/san-fransico-small.jpg" alt="San Fransico"/></span>
												<span className="entry-details">
													<h3>San Fransico</h3>
												    <span>65 places</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    {/* <!-- .featured-inner --> */}
				</div>
                {/* <!-- .container --> */}
			</section>
            {/* <!-- .featured-wrap --> */}
			<section className="join-wrap" style={{backgroundImage: 'url(images/bg/bg-join-us.jpg)'}}>
				<div className="container">
					<div className="join-inner">
						<h2 className="offset-item">Restaurateurs Join Us</h2>
						<p className="offset-item">Join the more than 10,000 restaurants which fill seats and manage reservations with Golo.</p>
						<a href="#" className="btn offset-item" title="Learn More">Learn More</a>
					</div>
				</div>
			</section>
            {/* <!-- .join-wrap --> */}
			<section className="home-testimonials testimonials">
				<div className="container">
					<div className="title_home offset-item">
						<h2>People Talking About Us</h2>
					</div>
					<div className="testimonial-sliders slick-sliders offset-item">
						<div className="testimonial-slider slick-slider" data-item="2" data-smallpcscroll="2" data-arrows="true" data-dots="true" data-tabletitem="1" data-tabletscroll="1" data-mobileitem="1" data-mobilescroll="1">
							<div className="item">
								<div className="testimonial-item flex">
									<div className="testimonial-thumb">
										<img src="Asset/images/avatars/female-1.jpg" alt="Kari Granleese" className="avatar"/>
										<img src="Asset/images/assets/quote-active.png" alt="quote" className="quote"/>
									</div>
									<div className="testimonial-info">
										<p>Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months.</p>
										<div className="cite">
											<h4>Kari Granleese</h4>
											<span>CEO Alididi</span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="testimonial-item flex">
									<div className="testimonial-thumb">
										<img src="Asset/images/avatars/female-2.jpg" alt="Kari Granleese" className="avatar"/>
										<img src="Asset/images/assets/quote-active.png" alt="quote" className="quote"/>
									</div>
									<div className="testimonial-info">
										<p> Amazing work. I wonder how to change the main menu to the Home 2 which I found much more interesting!</p>
										<div className="cite">
											<h4>Cristina</h4>
											<span>Foot Blogger</span>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="testimonial-item flex">
									<div className="testimonial-thumb">
										<img src="Asset/images/avatars/female-3.jpg" alt="Kari Granleese" className="avatar"/>
										<img src="Asset/images/assets/quote-active.png" alt="quote" className="quote"/>
									</div>
									<div className="testimonial-info">
										<p> There are very few themes in Themeforest that work 99% smoothly, and one of them is "Golo" Simply The Best !!!</p>
										<div className="cite">
											<h4>John Doe</h4>
											<span>Traverler</span>
										</div>
									</div>
								</div>
							</div>
						</div>
                        {/* <!-- .testimonial-slider --> */}
						<div className="place-slider__nav slick-nav">
							<div className="place-slider__prev slick-nav__prev">
								<i className="las la-angle-left"></i>
							</div>
                            {/* <!-- .place-slider__prev --> */}
							<div className="place-slider__next slick-nav__next">		
								<i className="las la-angle-right"></i>
							</div>
                            {/* <!-- .place-slider__next --> */}
						</div>
                        {/* <!-- .place-slider__nav --> */}
					</div>
                    {/* <!-- .testimonial-sliders --> */}
				</div>
			</section>
            {/* <!-- .testimonials --> */}
			<section className="blogs-wrap section-bg">
				<div className="container">
					<div className="title_home offset-item">
						<h2>From Our Blog</h2>
					</div>
					<div className="blog-wrap offset-item">
						<div className="row">
							<div className="col-md-4">
								<article className="post hover__box">
									<div className="post__thumb hover-img">
										<a title="The 8 Most Affordable Michelin Restaurants in Paris" href="blog-detail.html"><img src="Asset/images/blog/blog-01.jpg" alt="The 8 Most Affordable Michelin Restaurants in Paris"/></a>
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
									<div className="post__thumb hover-img">
										<a title="The 7 Best Restaurants to Try Kobe Beef in London" href="blog-detail.html"><img src="Asset/images/blog/blog-02.jpg" alt="The 7 Best Restaurants to Try Kobe Beef in London"/></a>
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
									<div className="post__thumb hover-img">
										<a title="The 8 Most Affordable Michelin Restaurants in Paris" href="blog-detail.html"><img src="Asset/images/blog/blog-03.jpg" alt="The 8 Most Affordable Michelin Restaurants in Paris"/></a>
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
						<div className="button-wrap">
							<a href="#" className="btn" title="View more">View more</a>
						</div>
					</div>
				</div>
			</section>
            {/* <!-- .blogs-wrap --> */}
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
								<p>Email: <a href="https://golohtml.uxper.co/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8cfff9fcfce3fef8cce8e3e1ede5e2a2efe3e1">[email&#160;protected]</a></p>
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
				</div>
                {/* <!-- .top-footer --> */}
			</div>
            {/* <!-- .container --> */}
		</footer>
        {/* <!-- site-footer --> */}
	</div>
</div>
     );
}
 
export default homeRestaurant;