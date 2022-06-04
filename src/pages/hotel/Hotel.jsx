import React, { useState } from 'react'
import './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { FaMapPin, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimesCircle } from 'react-icons/fa'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/21/09/53/villa-cortine-palace-949547__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/07/05/08/21/pool-384573__340.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FaTimesCircle className='close' onClick={() => setOpen(false)} />
          <FaArrowAltCircleLeft className='arrow' onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FaArrowAltCircleRight className='arrow' onClick={() => handleMove("r")} />
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FaMapPin />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow,
                TowerStreet Apartments has accommodations with air conditiioning
                and free Wifi. The units come with hardwood floors and feature a
                fully equiped kitchennete with a microwave, a flat-screen TV and
                a private bathroom with shower and hairdryer. A fridge is also
                offered, as well as an electric tea pot and coffee machine.
                Popular points of interests neat the apartment include Cloth
                Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paull II International Krakow-Balice, 16.1 km
                from Tower Street Apartments, and the propert offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location scor of 9.8!
              </span>
              <h2>
                <b>$95</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel