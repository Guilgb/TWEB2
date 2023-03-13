// import React, { useState } from "react";

import "./MagicCard.css";

function MagicCard({ card }) {
  // const [imagemErro, setImagemErro] = useState(false);

  // function handleErroNaImagem() {
  //   setImagemErro(true);
  // }

  return (
        <div className="card-list">
            <div className="card-body">
                <img src={card?.image_uris?.normal} alt='' className="img-list" />
                <h4 className="card-title">{card.name}</h4>
                <p className="card-text">{card.type_line}</p>
            </div>
        </div>
  );
}

export default MagicCard;
