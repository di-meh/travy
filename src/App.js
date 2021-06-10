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
  // From StartPage to Weather:
  // Name of city + coordinates
  const [cityName, setCityName] = useState("");
  const [latlon, setLatLon] = useState(null);
  // In Weather:
  // Pexels from City Name (take 20 random images)
  const [weatherObj, setWeather] = useState({ desc: null, temp: null, w_obj: null, m_obj: null });
  const [photo, setPhoto] = useState(null);
  const [background, setBackground] = useState("none");
  // const [photos, setPhotos] = useState([]);

  // Weather to Picture:
  // All informations about picture

  function showModal() {
    setMd(true);
  }
  function hideModal() {
    setMd(false);
    // setLatLon(null);
  }
  const weatherPictureStyle = {
    backgroundImage: background,
  };

  useEffect(() => {
    setBackground(photo !== null ? "url(" + photo.src.landscape + ")" : "none");
  }, [background, photo]);

  useEffect(() => {
    const fetchW = async () => {
      if (latlon !== null && latlon !== undefined) {
        const { weather, main } = await fetchWeather(
          latlon.latitude,
          latlon.longitude
        );
        setWeather({ desc: weather[0].description, temp: main.temp, w_obj: weather, m_obj: main });
      }
    };
    const fetchP = async () => {
      if (latlon !== null && latlon !== undefined) {
        const photos = await fetchPictures(cityName);
        // setPhotos(photos);
        setPhoto(photos[random(photos.length)]);
      }
    };
    fetchW();
    fetchP();
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
