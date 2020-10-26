import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import HomeCarousel from "../home-carousel";

function Item(props) {
  return (
    <Paper>
      <img className="home__image" src={`${props.item.image}`} alt="" />
    </Paper>
  );
}

function Home() {
  const [{ products }] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <div className="home_carousel">
          <Carousel
            indicators={false}
            animation={"slide"}
            navButtonsAlwaysVisible
          >
            {HomeCarousel.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <div>
          <div className="home__row">
            {products?.map((item) => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                  image={item.image}
                  category={item.category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
