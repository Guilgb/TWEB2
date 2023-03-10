import { Link } from "react-router-dom";

const baseCardURL = import.meta.env.VITE_SEARCH_CARD;
import './magicCardStyle.css'

function MagicCard({card, img}) {
  return (
    <div className="alinhar">
        <div class="card-group">
            <div class="card">
                <img class="card-img-top" src="" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{card.name}</h5>
                    <p class="card-text">{card.oracle_text}</p>
                    <p class="card-text">{card.flavor_text}</p>
                </div>
                <div class="card-footer">
                    <bigger class="text-muted">{card.name}</bigger>
                </div>
            </div>

        </div>

    </div>
  );
}

export default MagicCard;