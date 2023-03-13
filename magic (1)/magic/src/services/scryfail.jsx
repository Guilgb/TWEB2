import axios from "axios";

const scryfall = axios.create({
  baseURL: "https://api.scryfall.com",
});

export default scryfall;
