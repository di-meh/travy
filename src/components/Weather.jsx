import "../styles/Weather.scss";
import Modal from "./Modal";
import "lodash.capitalize";
import capitalize from "lodash.capitalize";
import Link from "./Link";

export default function Weather({
  weatherObj,
  setCityName,
  latlon,
  setLatLon,
  md,
  showModal,
  hideModal,
  cityName,
  photo,
  weatherPictureStyle,
}) {
  function displayOrLoad(parameter) {
    return parameter !== null && parameter !== "" ? parameter : "Loading";
  }
  function refresh() {
    setLatLon({
      latitude: latlon.latitude,
      longitude: latlon.longitude,
    });
  }

  if (!latlon || !cityName) window.location.replace("/");

  return (
    <>
      <Modal
        close={hideModal}
        shown={md}
        setLatLon={setLatLon}
        setCityName={setCityName}
      />
      <div className="weather" style={weatherPictureStyle}>
        <div className="top-bar">
          <h2 onClick={showModal}>{displayOrLoad(cityName)}</h2>
          {latlon !== null && <i className="las la-sync" onClick={refresh}></i>}
        </div>
        <div className="weather-info">
          <h1>{displayOrLoad(weatherObj.temp)}°C</h1>
          <div className="weather-description">
            <h3>{displayOrLoad(capitalize(weatherObj.desc))}</h3>
          </div>
        </div>
        <div className="bottom-bar">
          {photo !== null && (
            <>
              <div className="credits">
                <Link href={photo.photographer_url}>
                  <p>Photo par {displayOrLoad(photo.photographer)}</p>
                </Link>
              </div>
              <Link href="/picture">
                <div className="show-picture">
                  <i className="las la-eye"></i>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
