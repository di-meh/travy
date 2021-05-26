import './App.scss';
import Router from './components/Router';
import StartPage from './components/StartPage';
import Weather from './components/Weather';
import Picture from './components/Picture';
import { useState } from "react";

function App() {
  // Modal
  const [md, setMd] = useState(false);
  // From StartPage to Weather:
  // Name of city + coordinates
  const [cityName, setCityName] = useState("");
  const [latlon, setLatLon] = useState(null);
  // In Weather:
  // Pexels from City Name (take 20 random images)
  const [photos, setPhotos] = useState([]);
  // Weather to Picture:
  // All informations about picture

  function showModal() {
    setMd(true);
  }
  function hideModal() {
    setMd(false);
    // setLatLon(null);
  }

  return (
    <div className="App">
      <Router path="/">
        <StartPage setCityName={setCityName} latlon={latlon} setLatLon={setLatLon} md={md} showModal={showModal} hideModal={hideModal} />
      </Router>
      <Router path="/weather">
        <Weather setCityName={setCityName} setLatLon={setLatLon} md={md} showModal={showModal} hideModal={hideModal} cityName={cityName} photos={photos} setPhotos={setPhotos} />
      </Router>
      <Router path="/picture">
        <Picture />
      </Router>

    </div>
  );
}

export default App;
