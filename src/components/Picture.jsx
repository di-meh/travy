import "../styles/Picture.scss";
import Link from "./Link";
import { useState } from "react";
export default function Picture({ photo, weatherPictureStyle }) {
  const [details, setDisplay] = useState(false);

  const rotate = {
    transform: details ? "rotate(180deg)" : "rotate(0deg)",
  };
  function toggleDisplay() {
    setDisplay(!details);
  }

  if (!photo) window.location.replace("/");
  return (
    <>
      <div className="picture" style={weatherPictureStyle}>
        <div className="top-bar">
          {details && (
            <div className="details">
              <p>
                Photo par <b>{photo.photographer}</b>
              </p>
              <p>
                Taille{" "}
                <b>
                  {photo.width} x {photo.height}
                </b>
              </p>
              <small>© Pexels</small>
            </div>
          )}
          <i
            className="las la-angle-down"
            onClick={toggleDisplay}
            style={rotate}
          ></i>
        </div>
        <div className="bottom-bar">
          <Link href="/weather" className="return">
            <i className="las la-angle-left"></i>
            <p>Retour</p>
          </Link>

          <a href={photo.src.original} download>
            <div className="show-picture">
              <i className="las la-arrow-down"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
