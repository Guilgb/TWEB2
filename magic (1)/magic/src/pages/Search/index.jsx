import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./StyleSearch.css";
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
    const searchWithQueryURL = `${searchURL}=${query}`;
    getSearchCard(searchWithQueryURL);
  }, [query]);

  return (
    <div className="alinhar">
        <div class="card-group">
            <div class="cardSearch">
                <img class="card-img-top" src={cards?.image_uris?.png} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{cards.name}</h5>
                    <p class="card-text">{cards.oracle_text}</p>
                    <p class="card-text">{cards.flavor_text}</p>
                </div>
                <div class="card-footer">
                    <bigger class="text-muted">{cards.name}</bigger>
                </div>
            </div>  
        </div>
    </div>
  );
};

export default Search;
