import { useState, useEffect } from "react";
import "./Modal.scss";

export default function Modal({ shown, close, setLatLon, setCityName }) {
  const apiKey = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

  // local
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMapBoxData = async () => {
      if (query && query.length > 0) {
        setLoading(true);
        const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${apiKey}&types=locality,place&limit=5&autocomplete=true&language=fr`;
        const response = await fetch(mapboxUrl);
        const { features } = await response.json();
        //     if (!features || features.length < 1) {
        //       return { error: 500 };
        //     }
        const queryResults = features.map((p) => ({
          id: p.id,
          name: p.place_name,
          latitude: p.center[1],
          longitude: p.center[0],
        }));
        setResults(queryResults);
        setLoading(false);
      } else {
        setResults([]);
      }
    };
    fetchMapBoxData();
  }, [query, apiKey]);

  function closeModal() {
    close();
    setResults([]);
    setQuery("");
  }

  return shown ? (
    <>
      <div
        className="modal"
        onClick={() => {
          closeModal();
        }}
      >
        <div
          className="modal-body"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="search-box">
            <i className="modal-search-icon las la-search"></i>
            <input
              type="text"
              placeholder="Search for a location..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {loading && <i className="loader las la-spinner"></i>}
          </div>
          {results.length > 0 && (
            <div className="results">
              {results.map((res) => {
                return (
                  <div
                    className="result"
                    key={res.id}
                    onClick={() => {
                      setLatLon({
                        latitude: res.latitude,
                        longitude: res.longitude,
                      });
                      setCityName(res.name);
                      closeModal();
                    }}
                  >
                    <i className="modal-result-icon las la-map-marker"></i>
                    <p>{res.name}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  ) : null;
}
