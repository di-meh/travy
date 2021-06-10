const apiKey = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

export default async function fetchCities(query) {
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
    return queryResults;
}