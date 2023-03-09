import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MagicCard from "../../components/MagicCard";

import scryfail from "../../services/scryfail";

const searchURL = import.meta.env.VITE_SEARCH;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [cards, setCards] = useState([]);
  const query = searchParams.get("q");

  const getSearchCard = async (url) => {
    const cards = await scryfail.get(url).then((res) => res);
    setCards(cards.data);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?order=cmc&q=${query}`;
    getSearchCard(searchWithQueryURL);
  }, [query]);

  return (
    <div>
      <h4>
        Resultados para: <span>{query}</span>
      </h4>
      <div>
        {cards &&
          cards.map((card) => <MagicCard key={card.id} card={card} />)}
      </div>
    </div>
  );
};

export default Search;
