import { useState, useEffect } from "react";
import MagicCard from "../../components/MagicCard";
import scryfail from "../../services/scryfail";
import "./cardscss.css"
const baseURL = import.meta.env.VITE_URL;

const Cards = () => {
  const [cards, setCards] = useState([]);

  const getAllCards = async (url) => {
    const cards = await scryfail.get(url).then((res) => res);

    setCards(cards.data.data);
  };

  useEffect(() => {
    const cardsURL = `${baseURL}/cards/search?as=grid&order=name&q=color<%3DWUBRG+%28game%3Apaper%29`;
    getAllCards(cardsURL);
  }, []);

  return (
    <div className="container">
       <div className="container-card">
            <h3> Cards Magic</h3>
            <div className="cards-container">
                {cards && cards.map((card) => <MagicCard card={card} />)}
            </div>
        </div>
    </div>
  );
};

export default Cards;
