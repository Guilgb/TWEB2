import { useState, useEffect } from "react";

import scryfail from "../../services/scryfail";

const baseURL = import.meta.env.VITE_URL;

const Home = () => {
  const [card, setCard] = useState([]);

  const getAllCards = async (url) => {
    const cards = await scryfail.get(url).then((res) => res);
    setCard(cards.data);
    console.log(cards.data);
  };

  useEffect(() => {
    const cardsURL = `${baseURL}/cards/random`;
    getAllCards(cardsURL);
  }, []);

  return (
    <div>
      <p>Nome: {card.name}</p>
    </div>
  );
};

export default Home;
