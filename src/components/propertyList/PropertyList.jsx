import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221__340.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289__340.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437__340.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/21/20/04/real-estate-4955093__340.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620__340.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList