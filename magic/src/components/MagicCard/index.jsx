import { Link } from "react-router-dom";

function MagicCard({ card, showLink = true }) {
  return (
    <div>
      <div >
        <h5>{card.name}</h5>

        {showLink && (
          <Link to={`/cards/${card.id}`} className="btn btn-primary">
            Detalhes
          </Link>
        )}
      </div>
    </div>
  );
}

export default MagicCard;