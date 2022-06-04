import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/06/10/11/city-2720913__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2021/02/02/18/46/city-5974876__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2018/04/07/03/06/real-estate-3297625__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured