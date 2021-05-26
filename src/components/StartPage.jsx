import { useEffect } from "react";
import Modal from "./Modal";
import "./StartPage.scss";

export default function StartPage({
  setCityName,
  latlon,
  setLatLon,
  md,
  showModal,
  hideModal,
}) {
  // const [md, setMd] = useState(false);
  // const [latlon, setLatLon] = useState(null);
  // const [cityName, setCityName] = useState("");

  const owmApiKey = process.env.REACT_APP_OWM_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      if (latlon !== null && latlon !== undefined) {
        const owmAPIURL = `https://api.openweathermap.org/data/2.5/weather?appid=${owmApiKey}&lat=${latlon.latitude}&lon=${latlon.longitude}&units=metric&lang=fr`;
        const response = await fetch(owmAPIURL);
        const { weather, main, name } = await response.json();
        console.log(weather, main, name);
      }
    };
    fetchWeather();
  }, [latlon, owmApiKey]);

  return (
    <>
      <header className="Start-header">
        <h1>travy</h1>
      </header>
      <main className="Start-main">
        <Modal
          close={hideModal}
          shown={md}
          setLatLon={setLatLon}
          setCityName={setCityName}
        />
        <section>
          <h2>A minimalist weather app.</h2>
          <p>
            Real-time weather from{" "}
            <a href="https://openweathermap.org"> OpenWeatherMap</a>.
            <br />
            High quality pictures from{" "}
            <a href="https://www.pexels.com">Pexels</a>.
            <br />
            Cities from <a href="https://www.mapbox.com">Mapbox</a>.
          </p>

          <div className="Start-cta" onClick={showModal}>
            Get started
          </div>
        </section>
      </main>
    </>
  );
}
