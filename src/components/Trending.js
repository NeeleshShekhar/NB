import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { excerpt } from "../utility";
const Trending = ({ blogs }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div>
      <br/>
        <div className="blog-heading text-start py-2 mb-4"><strong><h1 style={{fontFamily:"sans-serif",alignContent:"center"}}>Trending ✈️</h1></strong></div>
     <br/>
      </div>
      <OwlCarousel className="owl-theme" {...options}>
        {blogs?.map((item) => (
          <div className="item px-2" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <div className="trending-img-position">
                <div className="trending-img-size">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="trending-img-relative"
                  />
                </div>
                <div className="trending-img-absolute"></div>
                <div className="trending-img-absolute-1">
                  <span className="text-white"><strong style={{color:"white"}}>{item.title}</strong></span>
                  <div className="trending-meta-info">
                    {item.author} - {item.timestamp.toDate().toDateString()}
                  </div>
                  <div className="trending-meta-info" dangerouslySetInnerHTML={{__html : excerpt(item.blogcontent, 120)}}>
                    
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default Trending;
