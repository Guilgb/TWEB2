import { useState, useEffect } from "react";
import MagicCard from "../../components/MagicCard";
import scryfail from "../../services/scryfail";
import "./cardscss.css"
const baseURL = import.meta.env.VITE_URL;

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [pageController, setPageController] = useState(1);

  const renderPage = (type) => {
      if (pageController === 0 ) return
      if (type === 'next'){
          setPageController(pageController + 1)
        }else{
            setPageController(pageController - 1)
        }
        
    console.log('pageController:', Number(pageController))

  }  
  const getAllCards = async (url) => {
    const cards = await scryfail.get(url).then((res) => res);

    setCards(cards.data.data);
  };



    useEffect(() => {
        const cardsURL = `${baseURL}/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=name&limit=20&page=${pageController}&q=color<%3Dwubrg+%28game%3Apaper%29&unique=cards`;
        getAllCards(cardsURL);
        console.log(pageController)
      }, [pageController]);

  useEffect(() => {
    const cardsURL = `${baseURL}/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=name&page=2&q=color<%3Dwubrg+%28game%3Apaper%29&unique=cards`;
    getAllCards(cardsURL);
  }, []);

  return (
    <div className="container">
       <div className="container-card">
            <h3> Cards Magic</h3>
            <div className="cards-container">
                {cards && cards.map((card) => <MagicCard card={card} />)}
            </div>
        <button className="butao_next" disabled={ pageController === 1 ? true : false} onClick={() => {renderPage('back' )}}>Prev</button>
        <button className="butao_prev" onClick={() => {renderPage('next')}}>Next</button>
        </div>
    </div>
  );
};

export default Cards;
