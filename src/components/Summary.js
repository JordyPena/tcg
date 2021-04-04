import "../styling/summary.css";
export default function Summary({ card }) {
  console.log(card);
  return (
    <>
      {card && (
        <div className="summary-container">
          <div className="row">
            <img
              src={card.images.small}
              alt="pokemon"
              className="summary-card"
            />
            <div className="column">
              <div className="title">
                <div className="title-left">
                  <h1 className="cardName">{card.name}</h1>
                  <h3 className="stage">Pokemon - {card.subtypes}</h3>
                </div>

                <div className="title-right">
                  <h3 className="hp">HP {card.hp}</h3>
                </div>
              </div>

              <div className="line">
                <hr />
              </div>

              <div className="price-column">
                <div className="price-top">
                  <h3>Prices</h3>
                  <a href={card.tcgplayer.url} target="_blank" className="buy">
                    Buy Now From TCGplayer
                  </a>
                  <h6>Last updated {card.tcgplayer.updatedAt}</h6>
                </div>

                <div className="price-row">
                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL MARKET</h5>
                      <h5 className="purple">${card.tcgplayer.prices.holofoil.market}</h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL LOW </h5>
                      <h5 className="green">${card.tcgplayer.prices.holofoil.low}</h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL MID </h5>
                      <h5 className="blue">${card.tcgplayer.prices.holofoil.mid}</h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL HIGH</h5>
                      <h5 className="red">${card.tcgplayer.prices.holofoil.high}</h5>
                    </div>
                  )}
                </div>

                <div className="price-row">
                  {card.tcgplayer.prices.reverseHolofoil && (
                     <div className="price-column">
                     <h5>REVERSE HOLOFOIL MARKET</h5>
                     <h5 className="purple">${card.tcgplayer.prices.reverseHolofoil.market}</h5>
                   </div>
                  )}

                  {card.tcgplayer.prices.reverseHolofoil && (
                      <div className="price-column">
                      <h5>REVERSE HOLOFOIL LOW</h5>
                      <h5 className="green">${card.tcgplayer.prices.reverseHolofoil.low}</h5>
                    </div>
                   
                  )}

                  {card.tcgplayer.prices.reverseHolofoil && (
                     <div className="price-column">
                     <h5>REVERSE HOLOFOIL MID</h5>
                     <h5 className="blue">${card.tcgplayer.prices.reverseHolofoil.mid}</h5>
                   </div>
                   
                  )}

                  {card.tcgplayer.prices.reverseHolofoil && (
                     <div className="price-column">
                     <h5>REVERSE HOLOFOIL HIGH</h5>
                     <h5 className="red">${card.tcgplayer.prices.reverseHolofoil.high}</h5>
                   </div>
                   
                  )}
                </div>
              </div>

              <div className="line">
                <hr />
              </div>

            

              <div className="ability">
                {card.abilities && (
                  <div>
                      <h4>Abilities</h4>
                    <h3>{card.abilities[0].name}</h3>
                    <h4>{card.abilities[0].text}</h4>
                  </div>
                )}
              </div>

           

              {card.attacks && (
                <div>
                     <h4>Attacks</h4>
                  <h3>{card.attacks[0].name + " " + card.attacks[0].damage}</h3>
                  <h4>{card.attacks[0].text}</h4>
                </div>
              )}

              {card.attacks[1] && (
                <div>
                  <h5>{card.attacks[1].name + " " + card.attacks[1].damage}</h5>
                  <h5>{card.attacks[1].text}</h5>
                </div>
              )}

              <div className="weakness">
                <div className="weakness-column">
                  <h4>Weakness</h4>
                  <h4>{card.weaknesses[0].type + card.weaknesses[0].value}</h4>
                </div>

                <div className="weakness-column">
                  {card.resistances && (
                    <>
                      <h4>Resistance</h4>
                      <h4>
                        {card.resistances[0].type + card.resistances[0].value}
                      </h4>
                    </>
                  )}
                </div>

                <div className="weakness-column">
                  <h4>Retreat Cost</h4>
                  <h4>{card.retreatCost}</h4>
                </div>
              </div>

              <div className="rarity">
                <div className="rarity-column">
                  <h3>Artist</h3>
                  <h4>{card.artist}</h4>
                </div>

                <div className="rarity-column">
                  <h3>Rarity</h3>
                  <h4>{card.rarity}</h4>
                </div>

                <div className="rarity-column">
                  <h4>Set</h4>
                  {<img src={card.set.images.logo} alt="logo" className="set-img"/>}
                </div>
              </div>

              <h3 className="flavor">{card.flavorText}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
