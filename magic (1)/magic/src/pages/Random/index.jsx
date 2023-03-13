import { useState, useEffect } from "react";
import scryfail from "../../services/scryfail";
const baseURL = import.meta.env.VITE_URL;
import "./randomcss.css"

const Random = () => {
  const [cards, setCards] = useState([]);

  const getAllCards = async (url) => {
    const cards = await scryfail.get(url).then((res) => res);
    setCards(cards.data);
    console.log(cards.data);
  };

  useEffect(() => {
    const cardsURL = `${baseURL}/cards/random`;
    getAllCards(cardsURL);
  }, []);

  return (
    <div className="container">
      <h3 className="cards-magic-text"> Cards Magic </h3>
      <div className="card mb-3 text-bg-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={cards?.image_uris?.normal} className='card-tam'/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Name: {cards.name}</h4>
              <p className="card-text">Artist: {cards.artist}</p>
              <p className="card-text">Frame: {cards.frame}</p>
              <p className="card-text">Number collector: {cards.frame}</p>
              <p className="card-text">Oracle text: {cards.oracle_text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
