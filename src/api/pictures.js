const apiKey = process.env.REACT_APP_PEXELS_API_KEY;

export default async function fetchPictures(query) {
    const pexelsURL = `https://api.pexels.com/v1/search?query=${query}&locale=fr-FR&page=1&per_page=20`;
    const headers = new Headers({ "Authorization": apiKey });
    const { photos } = await fetch(pexelsURL, { headers: headers }).then((res) => res.json());
    return photos;

}