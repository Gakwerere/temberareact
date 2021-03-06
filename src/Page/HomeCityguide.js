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
                <main id="main" className="site-main overflow">
                    <div className="site-banner" style={{backgroundImage: "url(Asset/images/bg/top-banner.png)"}}>
                        <div className="container">
                            <div className="site-banner__content">
                                <h1 className="site-banner__title">Explore Cities of  Rwanda</h1>
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
                                                    <img src="Asset/images/city/Kigali.jpg" alt="Tokyo"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Kigali</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">kimihurura</h3>
                                                <p className="cities__number">80 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Barca" href="city-details-3.html">
                                                    <img src="Asset/images/city/serena-kigali.jpg" alt="Barca"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">kigali</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Nyarugenge</h3>
                                                <p className="cities__number">92 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="New York" href="city-details-3.html">
                                                    <img src="Asset/images/city/karogi.jpg" alt="New York"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Western Province</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Karogi</h3>
                                                <p className="cities__number">64 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Paris" href="city-details-3.html">
                                                    <img src="Asset/images/city/Gisenyi.jpg" alt="Paris"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Western Province</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Gisenyi</h3>
                                                <p className="cities__number">23 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Amsterdam" href="city-details-3.html">
                                                    <img src="Asset/images/city/North.webp" alt="Amsterdam"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">North - Province</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Musanze</h3>
                                                <p className="cities__number">44 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Singapo" href="city-details-3.html">
                                                    <img src="Asset/images/city/kagera.jpg" alt="Singapo"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Eastern - Province</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Akagera</h3>
                                                <p className="cities__number">60 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="Sydney" href="city-details-3.html">
                                                    <img src="Asset/images/city/sabyinyo.jpg" alt="Sydney"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Norther </h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Volcano</h3>
                                                <p className="cities__number">36 places</p>
                                            </div>
                                        </div>
                                        {/* <!-- .cities__item --> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="cities__item hover__box">
                                            <div className="cities__thumb hover__box__thumb">
                                                <a title="angeles" href="city-details-3.html">
                                                    <img src="Asset/images/city/volcano-park.jpg " alt="angeles"/>
                                                </a>
                                            </div>
                                            <h4 className="cities__name">Southern - province</h4>
                                            <div className="cities__info">
                                                <h3 className="cities__capital">Nyungwe</h3>
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
            </div>
            {/* <!-- #wrapper --> */}
        </div>
    );
}

export default HomeCityguide;