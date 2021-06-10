import './App.scss';
import Router from './components/Router';
import StartPage from './components/StartPage';
import Weather from './components/Weather';
import Picture from './components/Picture';
import { useState, useEffect } from "react";
import fetchWeather from "./api/weather";
import fetchPictures from './api/pictures';
import random from "lodash.random";

function App() {
  // Modal
  const [md, setMd] = useState(false);
  // Name of city + coordinates
  const [cityName, setCityName] = useState("");
  const [latlon, setLatLon] = useState(null);
  // Weather informations
  const [weatherObj, setWeather] = useState({ desc: null, temp: null, w_obj: null, m_obj: null });
  // Picture
  const [photo, setPhoto] = useState(null);
  // CSS property for background image
  const [background, setBackground] = useState("none");

  function showModal() {
    setMd(true);
  }
  function hideModal() {
    setMd(false);
  }
  const weatherPictureStyle = {
    backgroundImage: background,
  };

  useEffect(() => {
    setBackground(photo !== null ? "url(" + photo.src.landscape + ")" : "none");
  }, [background, photo]);

  useEffect(() => {
    const fetchW = async () => {
      const { weather, main } = await fetchWeather(
        latlon.latitude,
        latlon.longitude
      );
      setWeather({ desc: weather[0].description, temp: main.temp, w_obj: weather, m_obj: main });
    }
    const fetchP = async () => {
      const photos = await fetchPictures(cityName);
      // setPhotos(photos);
      setPhoto(photos[random(photos.length)]);
    }
    if (latlon !== null && latlon !== undefined) {

      fetchW();
      fetchP();
    }

  }, [latlon, cityName]);
  return (
    <div className="App">
      <Router path="/">
        <StartPage setCityName={setCityName} latlon={latlon} setLatLon={setLatLon} md={md} showModal={showModal} hideModal={hideModal} />
      </Router>
      <Router path="/weather">
        <Weather weatherObj={weatherObj} setCityName={setCityName} latlon={latlon} setLatLon={setLatLon} md={md} showModal={showModal} hideModal={hideModal} cityName={cityName} photo={photo} weatherPictureStyle={weatherPictureStyle} />
      </Router>
      <Router path="/picture">
        <Picture photo={photo} weatherPictureStyle={weatherPictureStyle} />
      </Router>

    </div>
  );
}

export default App;
