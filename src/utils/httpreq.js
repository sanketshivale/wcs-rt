import axios from "axios";

const httpreq = axios.create({
    baseURL: "https://central.wordcamp.org/wp-json/wp/v2/wordcamps",
});

export default httpreq;