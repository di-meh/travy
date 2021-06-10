import Modal from "./Modal";
import "../styles/StartPage.scss";

export default function StartPage({
  setCityName,
  setLatLon,
  md,
  showModal,
  hideModal,
}) {
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
