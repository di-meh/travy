import "./Weather.scss";
import Modal from "./Modal";

export default function Weather({
  setCityName,
  setLatLon,
  md,
  showModal,
  hideModal,
  cityName,
  photos,
  setPhotos,
}) {
  function displayOrLoad(parameter) {
    return parameter !== null && parameter !== "" ? parameter : "Loading";
  }
  return (
    <>
      <Modal
        close={hideModal}
        shown={md}
        setLatLon={setLatLon}
        setCityName={setCityName}
      />
      <div className="weather">
        <div className="top-bar">
          <h2>{displayOrLoad(cityName)}</h2>
          <i className="las la-sync"></i>
        </div>
        <div className="weather-info">
          <h1>21°C</h1>
          <div className="weather-description">
            <i className="las la-cloud"></i>
            <h3>Couvert</h3>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="credits">
            <p>Photo par John Doe</p>
          </div>
          <div className="show-picture">
            <i className="las la-eye"></i>
          </div>
        </div>
      </div>
    </>
  );
}
