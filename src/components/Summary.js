import "../styling/summary.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
export default function Summary({ match }) {
  
  const [card, setCard] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(card);

  useEffect(() => {

    const { id } = match.params
    console.log("ID", id)
    fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
      .then((response) => {
        setLoading(true);
        if (response.status === 400) {
          
          throw new Error("Type a valid pokemon name in field");
        }
        return response.json();
      })
      .then((data) => {
        console.log("this is data", data)
        setCard(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error({ error });
      });
  }, [match])

  if (loading) {
    return <h2>Loading....</h2>
  }

  return (
    <>
      {/* checking to see if any values exist in my object */}
      {Object.keys(card).length && (
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
                  <h3 className="prices-header">Prices</h3>
                  <a href={card.tcgplayer.url} target="_blank" className="buy">
                    <p className="buy-color">Buy Now From TCGplayer</p>
                  </a>
                  <h6 className="updated-header">
                    Last updated {card.tcgplayer.updatedAt}
                  </h6>
                </div>

                <div className="price-row">
                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL MARKET</h5>
                      <h5 className="purple">
                        ${card.tcgplayer.prices.holofoil.market}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL LOW </h5>
                      <h5 className="green">
                        ${card.tcgplayer.prices.holofoil.low}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL MID </h5>
                      <h5 className="blue">
                        ${card.tcgplayer.prices.holofoil.mid}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.holofoil && (
                    <div className="price-column">
                      <h5>HOLOFOIL HIGH</h5>
                      <h5 className="red">
                        ${card.tcgplayer.prices.holofoil.high}
                      </h5>
                    </div>
                  )}
                </div>

                <div className="price-row">
                  {card.tcgplayer.prices.reverseHolofoil && (
                    <div className="price-column">
                      <h5>REVERSE HOLOFOIL MARKET</h5>
                      <h5 className="purple">
                        ${card.tcgplayer.prices.reverseHolofoil.market}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.reverseHolofoil && (
                    <div className="price-column">
                      <h5>REVERSE HOLOFOIL LOW</h5>
                      <h5 className="green">
                        ${card.tcgplayer.prices.reverseHolofoil.low}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.reverseHolofoil && (
                    <div className="price-column">
                      <h5>REVERSE HOLOFOIL MID</h5>
                      <h5 className="blue">
                        ${card.tcgplayer.prices.reverseHolofoil.mid}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices.reverseHolofoil && (
                    <div className="price-column">
                      <h5>REVERSE HOLOFOIL HIGH</h5>
                      <h5 className="red">
                        ${card.tcgplayer.prices.reverseHolofoil.high}
                      </h5>
                    </div>
                  )}
                </div>

                <div className="price-row">
                  {card.tcgplayer.prices["1stEditionHolofoil"] && (
                    <div className="price-column">
                      <h5>1ST EDITION HOLOFOIL MARKET</h5>
                      <h5 className="purple">
                        ${card.tcgplayer.prices["1stEditionHolofoil"].market}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices["1stEditionHolofoil"] && (
                    <div className="price-column">
                      <h5>1ST EDITION HOLOFOIL LOW</h5>
                      <h5 className="green">
                        ${card.tcgplayer.prices["1stEditionHolofoil"].low}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices["1stEditionHolofoil"] && (
                    <div className="price-column">
                      <h5>1ST EDITION HOLOFOIL MID</h5>
                      <h5 className="blue">
                        ${card.tcgplayer.prices["1stEditionHolofoil"].mid}
                      </h5>
                    </div>
                  )}

                  {card.tcgplayer.prices["1stEditionHolofoil"] && (
                    <div className="price-column">
                      <h5>1ST EDITION HOLOFOIL HIGH</h5>
                      <h5 className="red">
                        ${card.tcgplayer.prices["1stEditionHolofoil"].high}
                      </h5>
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
                    <h3 className="ability-name">{card.abilities[0].name}</h3>
                    <h5>{card.abilities[0].text}</h5>
                  </div>
                )}
              </div>

              <div className="attacks">
                {card.attacks && (
                  <div>
                    <h4>Attacks</h4>
                    <h3>
                      {card.attacks[0].name + " " + card.attacks[0].damage}
                    </h3>
                    <h5>{card.attacks[0].text}</h5>

                    {card.attacks[1] && (
                  <div>
                    <h3>
                      {card.attacks[1].name + " " + card.attacks[1].damage}
                    </h3>
                    <h5>{card.attacks[1].text}</h5>
                  </div>
                )}
                  </div>
                )}

               
              </div>

              <div className="weakness">
                <div className="weakness-column">
                  <div>
                    <h4>Weakness</h4>
                    <h4>
                      {card.weaknesses[0].type + card.weaknesses[0].value}
                    </h4>
                  </div>
                  <div>
                    {card.resistances && (
                      <>
                        <h4>Resistance</h4>
                        <h4>
                          {card.resistances[0].type + card.resistances[0].value}
                        </h4>
                      </>
                    )}
                  </div>
                </div>

                <div className="weakness-row">
                  <div>
                    <h4>Retreat Cost</h4>
                    <h4>colorless</h4>
                  </div>

                  <div>
                    <h3>Artist</h3>
                    <h4>{card.artist}</h4>
                  </div>
                </div>
              </div>

              <div className="rarity">
               

                <div className="rarity-column">
                  <h3>Rarity</h3>
                  <h4>{card.rarity}</h4>
                </div>

                <div className="rarity-column">
                  <h4>Set</h4>
                  <h5>{card.set.name}</h5>
                  {
                    <img
                      src={card.set.images.logo}
                      alt="logo"
                      className="set-img"
                    />
                  }
                </div>
              </div>

              <div className="flavor-container">
              <h3 className="flavor">{card.flavorText}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}
