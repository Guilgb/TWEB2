// import React, { useState } from "react";

import "./magicCardStyle.css";

function MagicCard({ card }) {
  // const [imagemErro, setImagemErro] = useState(false);

  // function handleErroNaImagem() {
  //   setImagemErro(true);
  // }

  const imgURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPopr4Hyh1Z1q2QHAws627IB7mtQuz1_qmeea5OZsRksongO0Mowi3x0uYUIOQNTpKdis&usqp=CAU";

  return (
    <div className="card text-bg-dark" style={{ marginBottom: "10px" }}>
      <div className="card-body">
        <img src={imgURL} alt={"img card"} />
        <h4 className="card-title">{card.name}</h4>
        <p className="card-text">{card.type_line}</p>

        {imagemErro ? (
          <img
            src={
              "https://cards.scryfall.io/small/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1663738897"
            }
          />
        ) : (
          <img src={card["image_uris"]["small"]} onError={handleErroNaImagem} />
        )}
        {console.log(card.image_uris["small"])}
      </div>
    </div>
  );
}

export default MagicCard;
