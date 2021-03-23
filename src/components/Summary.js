export default function Summary({ card }) {
  console.log(card);
  return (
    <>
      <div className="card">
        <img src={card.images.small} alt="pokemon" />
      </div>
      <div className="summary">
        <div className="title-left">
          <h1>{card.name}</h1>
          <h3>{card.subtypes}</h3>
        </div>

        <div className="title-right">
          <h3>HP {card.hp}</h3>
          <span>type logo goes here</span>
        </div>
        <hr />

        <div>
          <h3>Prices</h3>
          <a href={card.tcgplayer.url} target="_blank">
            Buy Now From TCGplayer
          </a>
          <h6>Last updated {card.tcgplayer.updatedAt}</h6>
        </div>

        <div>
          {card.tcgplayer.prices.holofoil && (
            <h5>HOLOFOIL MARKET {card.tcgplayer.prices.holofoil.market}</h5>
          )}

          {card.tcgplayer.prices.holofoil && (
            <h5>HOLOFOIL LOW {card.tcgplayer.prices.holofoil.low}</h5>
          )}

          {card.tcgplayer.prices.holofoil && (
            <h5>HOLOFOIL MID {card.tcgplayer.prices.holofoil.mid}</h5>
          )}

          {card.tcgplayer.prices.holofoil && (
            <h5>HOLOFOIL HIGH {card.tcgplayer.prices.holofoil.high}</h5>
          )}
        </div>

        <div>
          {card.tcgplayer.prices.reverseHolofoil && (
            <h5>
              REVERSE HOLOFOIL MARKET{" "}
              {card.tcgplayer.prices.reverseHolofoil.market}
            </h5>
          )}

          {card.tcgplayer.prices.reverseHolofoil && (
            <h5>
              REVERSE HOLOFOIL LOW {card.tcgplayer.prices.reverseHolofoil.low}
            </h5>
          )}

          {card.tcgplayer.prices.reverseHolofoil && (
            <h5>
              REVERSE HOLOFOIL MID {card.tcgplayer.prices.reverseHolofoil.mid}
            </h5>
          )}

          {card.tcgplayer.prices.reverseHolofoil && (
            <h5>
              REVERSE HOLOFOIL HIGH {card.tcgplayer.prices.reverseHolofoil.high}
            </h5>
          )}
        </div>
        <hr />

        <div>
          <h4>Abilities</h4>
          {card.abilities && (
            <div>
              <h5>{card.abilities[0].name}</h5>
              <h5>{card.abilities[0].text}</h5>
            </div>
          )}

          {card.attacks && (
            <div>
              <h5>{card.attacks[0].name + " " + card.attacks[0].damage}</h5>
              <h5>{card.attacks[0].text}</h5>
            </div>
          )}

          {card.attacks[1] && (
            <div>
              <h5>{card.attacks[1].name + " " + card.attacks[1].damage}</h5>
              <h5>{card.attacks[1].text}</h5>
            </div>
          )}

          <h4>Weakness {card.weaknesses[0].type + card.weaknesses[0].value}</h4>

          {card.resistances && (
            <h4>
              Resistance {card.resistances[0].type + card.resistances[0].value}
            </h4>
          )}

          <h4>Retreat Cost {card.retreatCost}</h4>

          <h4>{card.artist}</h4>

          <h4>{card.rarity}</h4>

          <h4>Set</h4>
          {<img src={card.set.images.logo} alt="logo" />}

          <h5>{card.flavorText}</h5>
        </div>
      </div>
    </>
  );
}
