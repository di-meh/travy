import { useState, useEffect } from "react";
import "../styles/Modal.scss";
import fetchCities from "../api/cities";
import Link from "./Link";

export default function Modal({ shown, close, setLatLon, setCityName }) {
  // local
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMapBoxData = async () => {
      if (query && query.length > 0) {
        setLoading(true);
        const queryResults = await fetchCities(query);
        setResults(queryResults);
        setLoading(false);
      } else {
        setResults([]);
      }
    };
    fetchMapBoxData();
  }, [query]);

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
                  <Link href="/weather" className="modalLink" key={res.id}>
                    <div
                      className="result"
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
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  ) : null;
}
