import { useState, useEffect } from "react";

import scryfail from "../../services/scryfail";
import MagicCard from "../../components/MagicCard";



const baseURL = import.meta.env.VITE_URL;

const Home = () => {
  const [cards, setCard] = useState([]);
  const getAllCards = async (url) => {
    const cards = await scryfail.get(url).then((res) => res);
    setCard(cards.data.data);
    // console.log(cards.data);
  };

  useEffect(() => {
    const cardsURL = `${baseURL}/cards/search?as=grid&order=name&q=color<%3DWUBRG+%28game%3Apaper%29`;
    // const cardsURL = `${baseURL}/cards/search?order=cmc&q=dispel`
    getAllCards(cardsURL);
  }, []);

  return (
    <div className="container">
        {cards.map((card) => <MagicCard card={card} img={card.image_uris} />)}
    </div>

  );
};

export default Home;
