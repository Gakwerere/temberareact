const HomeBusiness = () => {
    return ( 
        <div id="wrapper">
            <h1>Business List</h1>

            <main id="main" className="site-main home-main business-main overflow">
            <div className="site-banner bg_hero_02">
                <video className="overlay-video" autoPlay="" muted="" playsInline="" loop=""
                    src="https://getgolo.com/images/video3.mp4"></video>
                <div className="container">
                    <div className="site-banner__content">
                        <h1 className="site-banner__title">Business Listing</h1>
                        <p><i>20</i> cities, <i>10</i> categories, <i>5662</i> listings.</p>
                        <form action="#" className="site-banner__search layout-02">
                            <div className="field-input">
                                <label htmlFor="s">Find</label>
                                <input className="site-banner__search__input open-suggestion" id="s" type="text" name="s"
                                    placeholder="Ex: fastfood, beer" autoComplete="off"/>
                                <div className="search-suggestions name-suggestions">
                                    <ul>
                                        <li><a href="#"><i className="las la-utensils"></i><span>Restaurant</span></a></li>
                                        <li><a href="#"><i className="las la-spa"></i><span>Beauty</span></a></li>
                                        <li><a href="#"><i className="las la-dumbbell"></i><span>Fitness</span></a></li>
                                        <li><a href="#"><i className="las la-cocktail"></i><span>Nightlight</span></a></li>
                                        <li><a href="#"><i className="las la-shopping-bag"></i><span>Shopping</span></a>
                                        </li>
                                        <li><a href="#"><i className="las la-film"></i><span>Cinema</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- .site-banner__search__input --> */}
                            <div className="field-input">
                                <label htmlFor="loca">Where</label>
                                <input className="site-banner__search__input open-suggestion" id="loca" type="text"
                                    name="where" placeholder="Your city" autoComplete="off"/>
                                <div className="search-suggestions location-suggestions">
                                    <ul>
                                        <li><a href="#"><i className="las la-location-arrow"></i><span>Current
                                                    location</span></a></li>
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
                    {/* <!-- .site-banner__content --> */}
                </div>
            </div>
            {/* <!-- .site-banner --> */}
            <div className="business-category">
                <div className="container">
                    <h2 className="title title-border-bottom align-center offset-item">Browse Businesses by Category</h2>
                    <div className="slick-sliders offset-item">
                        <div className="slick-slider business-cat-slider slider-pd30" data-item="6" data-arrows="true"
                            data-itemscroll="6" data-dots="true" data-centerpadding="50" data-tabletitem="3"
                            data-tabletscroll="3" data-smallpcitem="4" data-smallpcscroll="4" data-mobileitem="2"
                            data-mobilescroll="2" data-mobilearrows="false">
                            <div className="bsn-cat-item rosy-pink">
                                <a href="ex-half-map-1.html">
                                    <i className="las la-utensils"></i>
                                    <span className="title">Restaurant</span>
                                    <span className="place">12 Places</span>
                                </a>
                            </div>
                            <div className="bsn-cat-item purple">
                                <a href="ex-half-map-1.html">
                                    <i className="las la-spa"></i>
                                    <span className="title">Beauty</span>
                                    <span className="place">8 Places</span>
                                </a>
                            </div>
                            <div className="bsn-cat-item blue">
                                <a href="ex-half-map-1.html">
                                    <i className="las la-dumbbell"></i>
                                    <span className="title">Fitness</span>
                                    <span className="place">6 Places</span>
                                </a>
                            </div>
                            <div className="bsn-cat-item orange">
                                <a href="ex-half-map-1.html">
                                    <i className="las la-cocktail"></i>
                                    <span className="title">Nightlife</span>
                                    <span className="place">10 Places</span>
                                </a>
                            </div>
                            <div className="bsn-cat-item charcoal-purple">
                                <a href="ex-half-map-1.html">
                                    <i className="las la-shopping-bag"></i>
                                    <span className="title">Shopping</span>
                                    <span className="place">12 Places</span>
                                </a>
                            </div>
                            <div className="bsn-cat-item green">
                                <a href="ex-half-map-1.html">
                                    <i className="las la-film"></i>
                                    <span className="title">Cinema</span>
                                    <span className="place">15 Places</span>
                                </a>
                            </div>
                            <div className="bsn-cat-item rosy-pink">
                                <a href="ex-half-map-1.html">
                                    <i className="las la-utensils"></i>
                                    <span className="title">Restaurant</span>
                                    <span className="place">12 Places</span>
                                </a>
                            </div>
                        </div>
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
                </div>
            </div>
            {/* <!-- .business-category --> */}
            <div className="trending trending-business">
                <div className="container">
                    <h2 className="title title-border-bottom align-center offset-item">Trending Business Places</h2>
                    <div className="slick-sliders offset-item">
                        <div className="slick-slider trending-slider slider-pd30" data-item="4" data-arrows="true"
                            data-itemscroll="4" data-dots="true" data-centerpadding="30" data-tabletitem="2"
                            data-tabletscroll="2" data-smallpcscroll="3" data-smallpcitem="3" data-mobileitem="1"
                            data-mobilescroll="1" data-mobilearrows="false">
                            <div className="place-item layout-02 place-hover">
                                <div className="place-inner">
                                    <div className="place-thumb hover-img">
                                        <a className="entry-thumb" href="single-1.html"><img src="Asset/images/listing/01.jpg"
                                                alt=""/></a>
                                        <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist "
                                            data-place-id="185">
                                            <span className="icon-heart">
                                                <i className="la la-bookmark large"></i>
                                            </span>
                                        </a>
                                        <a className="entry-category rosy-pink" href="#">
                                            <i className="las la-utensils"></i><span>Restaurant</span>
                                        </a>
                                        <a href="#" className="author" title="Author"><img src="Asset/images/avatars/male-3.jpg"
                                                alt="Author"/></a>
                                        <div className="feature">Featured</div>
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
                                        <h3 className="place-title"><a href="single-1.html">Mattone Restaurant</a></h3>
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
                            <div className="place-item layout-02 place-hover">
                                <div className="place-inner">
                                    <div className="place-thumb hover-img">
                                        <a className="entry-thumb" href="single-1.html"><img src="images/listing/02.jpg"
                                                alt=""/></a>
                                        <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist "
                                            data-place-id="185">
                                            <span className="icon-heart">
                                                <i className="la la-bookmark large"></i>
                                            </span>
                                        </a>
                                        <a className="entry-category blue" href="#">
                                            <i className="las la-dumbbell"></i><span>Gym</span>
                                        </a>
                                        <a href="#" className="author" title="Author"><img src="Asset/images/avatars/male-2.jpg"
                                                alt="Author"/></a>
                                    </div>
                                    <div className="entry-detail">
                                        <div className="entry-head">
                                            <div className="place-type list-item">
                                                <span>Gym</span>
                                            </div>
                                            <div className="place-city">
                                                <a href="#">Bordeaux</a>
                                            </div>
                                        </div>
                                        <h3 className="place-title"><a href="single-1.html">Retro Fitness</a></h3>
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
                            <div className="place-item layout-02 place-hover">
                                <div className="place-inner">
                                    <div className="place-thumb hover-img">
                                        <a className="entry-thumb" href="single-1.html"><img src="Asset/images/listing/03.jpg"
                                                alt=""/></a>
                                        <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist "
                                            data-place-id="185">
                                            <span className="icon-heart">
                                                <i className="la la-bookmark large"></i>
                                            </span>
                                        </a>
                                        <a className="entry-category purple" href="#">
                                            <i className="las la-spa"></i><span>Massage</span>
                                        </a>
                                        <a href="#" className="author" title="Author"><img src="Asset/images/avatars/female-3.jpg"
                                                alt="Author"/></a>
                                    </div>
                                    <div className="entry-detail">
                                        <div className="entry-head">
                                            <div className="place-type list-item">
                                                <span>Massage</span>
                                            </div>
                                            <div className="place-city">
                                                <a href="#">Lyon</a>
                                            </div>
                                        </div>
                                        <h3 className="place-title"><a href="single-1.html">Renew Body Spa</a></h3>
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
                            <div className="place-item layout-02 place-hover">
                                <div className="place-inner">
                                    <div className="place-thumb hover-img">
                                        <a className="entry-thumb" href="single-1.html"><img src="Asset/images/listing/04.jpg"
                                                alt=""/></a>
                                        <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist "
                                            data-place-id="185">
                                            <span className="icon-heart">
                                                <i className="la la-bookmark large"></i>
                                            </span>
                                        </a>
                                        <a className="entry-category charcoal-purple" href="#">
                                            <i className="las la-shopping-bag"></i><span>Clothing Shop</span>
                                        </a>
                                        <a href="#" className="author" title="Author"><img src="Asset/images/avatars/male-4.jpg"
                                                alt="Author"/></a>
                                    </div>
                                    <div className="entry-detail">
                                        <div className="entry-head">
                                            <div className="place-type list-item">
                                                <span>Clothing Shop</span>
                                            </div>
                                            <div className="place-city">
                                                <a href="#">Nantes</a>
                                            </div>
                                        </div>
                                        <h3 className="place-title"><a href="single-1.html">Antoinette</a></h3>
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
                            <div className="place-item layout-02 place-hover">
                                <div className="place-inner">
                                    <div className="place-thumb hover-img">
                                        <a className="entry-thumb" href="single-1.html"><img src="Asset/images/listing/06.jpg"
                                                alt=""/></a>
                                        <a href="#" className="golo-add-to-wishlist btn-add-to-wishlist "
                                            data-place-id="185">
                                            <span className="icon-heart">
                                                <i className="la la-bookmark large"></i>
                                            </span>
                                        </a>
                                        <a className="entry-category green" href="#">
                                            <i className="las la-film"></i><span>Cinema</span>
                                        </a>
                                        <a href="#" className="author" title="Author"><img src="Asset/images/avatars/female-3.jpg"
                                                alt="Author"/></a>
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
                                        <h3 className="place-title"><a href="single-1.html">Kathay Cinema</a></h3>
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
                </div>
            </div>
            {/* <!-- .trending --> */}
            <div className="featured-cities">
                <div className="container">
                    <h2 className="title title-border-bottom align-center offset-item">Featured Cities<span>Choose the city
                            you’ll be living in next</span></h2>
                    <div className="slick-sliders offset-item">
                        <div className="slick-slider featured-slider slider-pd30" data-item="4" data-arrows="true"
                            data-itemscroll="4" data-dots="true" data-centerpadding="30" data-tabletitem="2"
                            data-tabletscroll="2" data-mobileitem="1" data-mobilescroll="1" data-mobilearrows="false">
                            <div className="slick-item">
                                <div className="cities__item hover__box">
                                    <div className="cities__thumb hover__box__thumb">
                                        <a title="London" href="city-details-1.html">
                                            <img src="Asset/images/city/newyork.jpg" alt="London"/>
                                        </a>
                                    </div>
                                    <h4 className="cities__name">United States</h4>
                                    <div className="cities__info">
                                        <h3 className="cities__capital">New York</h3>
                                        <p className="cities__number">80 places</p>
                                    </div>
                                </div>
                                {/* <!-- .cities__item --> */}
                            </div>
                            <div className="slick-item">
                                <div className="cities__item hover__box">
                                    <div className="cities__thumb hover__box__thumb">
                                        <a title="Rome" href="city-details-1.html">
                                            <img src="Asset/images/city/barca.jpg" alt="Rome"/>
                                        </a>
                                    </div>
                                    <h4 className="cities__name">Spain</h4>
                                    <div className="cities__info">
                                        <h3 className="cities__capital">Barcelona</h3>
                                        <p className="cities__number">92 places</p>
                                    </div>
                                </div>
                                {/* <!-- .cities__item --> */}
                            </div>
                            <div className="slick-item">
                                <div className="cities__item hover__box">
                                    <div className="cities__thumb hover__box__thumb">
                                        <a title="San Fancisco" href="city-details-1.html">
                                            <img src="Asset/images/city/angeles.jpg" alt="San Francisco"/>
                                        </a>
                                    </div>
                                    <h4 className="cities__name">United States</h4>
                                    <div className="cities__info">
                                        <h3 className="cities__capital">Los Angeles</h3>
                                        <p className="cities__number">64 places</p>
                                    </div>
                                </div>
                                {/* <!-- .cities__item --> */}
                            </div>
                            <div className="slick-item">
                                <div className="cities__item hover__box">
                                    <div className="cities__thumb hover__box__thumb">
                                        <a title="Amsterdam" href="city-details-1.html">
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
                            <div className="slick-item">
                                <div className="cities__item hover__box">
                                    <div className="cities__thumb hover__box__thumb">
                                        <a title="Tokyo" href="city-details-1.html">
                                            <img src="Asset/images/city/tokyo.jpg" alt="Tokyo"/>
                                        </a>
                                    </div>
                                    <h4 className="cities__name">Japan</h4>
                                    <div className="cities__info">
                                        <h3 className="cities__capital">Tokyo</h3>
                                        <p className="cities__number">44 places</p>
                                    </div>
                                </div>
                                {/* <!-- .cities__item --> */}
                            </div>
                        </div>
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
                </div>
            </div>
            {/* <!-- .featured-cities --> */}
            <div className="business-about" style={{backgroundImage: "url(Asset/images/img_about_1.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="business-about-info">
                                <h2 className="offset-item">Who we are</h2>
                                <p className="offset-item">Many desktop publishing packages and web page editors now use
                                    Lorem Ipsum as their default model text, and a search htmlFor 'lorem ipsum' will uncover
                                    many web sites still in their infancy. Various versions have evolved over the years,
                                    sometimes by accident.</p>
                                <a href="#" className="btn offset-item">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- .business-about --> */}
            <div className="testimonial">
                <div className="container">
                    <h2 className="title title-border-bottom align-center offset-item">People Talking About Us</h2>
                    <div className="slick-sliders offset-item">
                        <div className="slick-slider testimonial-slider layout-02 slider-pd30" data-item="2"
                            data-arrows="true" data-itemscroll="2" data-dots="true" data-centerpadding="30"
                            data-tabletitem="1" data-tabletscroll="1" data-mobileitem="1" data-mobilescroll="1"
                            data-mobilearrows="false">
                            <div className="testimonial-item">
                                <div className="avatar">
                                    <img src="Asset/images/avatars/male-1.jpg" alt="Avatar"/>
                                    <img src="Asset/images/assets/quote-active.png" alt="Quote" className="quote"/>
                                </div>
                                <div className="testimonial-info">
                                    <p>Really useful app to find interesting things to see do, drink and eat in new
                                        places. I’ve been using it regularly in my travels over the past few months.</p>
                                    <div className="testimonial-meta">
                                        <b>Kari Granleese</b>
                                        <span>CEO Alididi</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="avatar">
                                    <img src="Asset/images/avatars/female-1.jpg" alt="Avatar"/>
                                    <img src="Asset/images/assets/quote-active.png" alt="Quote" className="quote"/>
                                </div>
                                <div className="testimonial-info">
                                    <p>Really useful app to find interesting things to see do, drink and eat in new
                                        places. I’ve been using it regularly in my travels over the past few months.</p>
                                    <div className="testimonial-meta">
                                        <b>Kari Granleese</b>
                                        <span>CEO Alididi</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="avatar">
                                    <img src="Asset/images/avatars/female-3.jpg" alt="Avatar"/>
                                    <img src="Asset/images/assets/quote-active.png" alt="Quote" className="quote"/>
                                </div>
                                <div className="testimonial-info">
                                    <p>Really useful app to find interesting things to see do, drink and eat in new
                                        places. I’ve been using it regularly in my travels over the past few months.</p>
                                    <div className="testimonial-meta">
                                        <b>Kari Granleese</b>
                                        <span>CEO Alididi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="place-slider__nav slick-nav">
                            <div className="place-slider__prev slick-nav__prev">
                                <i className="las la-angle-left"></i>
                            </div>
                            {/* <!-- .place-slider__prev --> */}
                            <div className="place-slider__next slick-nav__next">
                                <i className="las la-angle-right"></i>
                            </div>
                            {/* !-- .place-slider__next --> */}
                        </div>
                        {/* <!-- .place-slider__nav --> */}
                    </div>
                </div>
            </div>
            {/* <!-- .testimonial --> */}
            <div className="blogs">
                <div className="container">
                    <h2 className="title title-border-bottom align-center offset-item">From Our Blog</h2>
                    <div className="news__content offset-item">
                        <div className="row">
                            <div className="col-md-4">
                                <article className="post hover__box">
                                    <div className="post__thumb hover__box__thumb">
                                        <a title="The 8 Most Affordable Michelin Restaurants in Paris"
                                            href="blog-detail.html"><img src="Asset/images/blog/thumb-05.jpg"
                                                alt="The 8 Most Affordable Michelin Restaurants in Paris"/></a>
                                    </div>
                                    <div className="post__info">
                                        <ul className="post__category">
                                            <li><a title="Food" href="#">Food / Drink</a></li>
                                        </ul>
                                        <h3 className="post__title"><a
                                                title="The 8 Most Affordable Michelin Restaurants in Paris"
                                                href="blog-detail.html">10 Best Classic Diners in Manhattan</a></h3>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article className="post hover__box">
                                    <div className="post__thumb hover__box__thumb">
                                        <a title="The 7 Best Restaurants to Try Kobe Beef in London"
                                            href="blog-detail.html"><img src="Asset/images/blog/thumb-01.jpg"
                                                alt="The 7 Best Restaurants to Try Kobe Beef in London"/></a>
                                    </div>
                                    <div className="post__info">
                                        <ul className="post__category">
                                            <li><a title="Art / Decor" href="#">Lifestyle</a></li>
                                        </ul>
                                        <h3 className="post__title"><a
                                                title="The 7 Best Restaurants to Try Kobe Beef in London"
                                                href="blog-detail.html">The Stepping Razor Barbershop</a></h3>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article className="post hover__box">
                                    <div className="post__thumb hover__box__thumb">
                                        <a title="The 8 Most Affordable Michelin Restaurants in Paris"
                                            href="blog-detail.html"><img src="Asset/images/blog/thumb-10.jpg"
                                                alt="The 8 Most Affordable Michelin Restaurants in Paris"/></a>
                                    </div>
                                    <div className="post__info">
                                        <ul className="post__category">
                                            <li><a title="Stay" href="#">Place to Stay</a></li>
                                        </ul>
                                        <h3 className="post__title"><a
                                                title="The 8 Most Affordable Michelin Restaurants in Paris"
                                                href="blog-detail.html">The 9 Best Cheap Hotels in New York City</a>
                                        </h3>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="align-center button-wrap"><a href="blog-fullwidth.html" className="btn btn-border">View
                                more</a></div>
                    </div>
                </div>
            </div>
            {/* <!-- .blogs --> */}
        </main>
        {/* <!-- .site-main --> */}
    </div>
        
     );
}
 
export default HomeBusiness;