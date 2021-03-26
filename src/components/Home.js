import React from 'react'
import Product from './Product'
import "../css/home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            </div>

            <div className="home__row">
                <Product
                    id="45687"
                    title="The lean startup: How Constant Innovation Creates Raducallly Successful Businesses Paperback"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />
                <Product
                    id="676"
                    title="kenwood kMix stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.00}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="8655"
                    title="Samsung LC3565GHFJKV 49' Curved LED Gaming Monitor"
                    price={199.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={3}
                />
                <Product
                    id="67843"
                    title="Amazon Echo (3rd generation) | Smart speacker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={5}
                />
                <Product
                    id="1234567890"
                    title="New Apple iPad Pro (12?9-inch, Wi-Fi, 128GB) - Silver (4th Generation))"
                    price={598.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
            <Product
                    id="45687"
                    title="Samsung LC49HCFGHIKK 49' Curver LED Gamind Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating={4}
                />
            </div>

        </div>
    )
}

export default Home
