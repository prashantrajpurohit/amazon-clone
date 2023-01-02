import React from "react";
import Product from "../Products/Product";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home_row">
          <Product
            id="1234567"
            title=" The lean  startup "
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="12333367"
            title="echo"
            price={123.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="1564567"
            title="SMART WATCH MI"
            price={199.9}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="127767"
            title="IPAD PRO"
            price={499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
          <Product
            id="1233567"
            title="PHILIPS MIXI"
            price={150.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51B0MPbLbXL._AC._SR360,460.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="1235567"
            title="SAMSUNG OLED "
            price={1000.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
