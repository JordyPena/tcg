import { useState, useEffect } from "react";
import "../styling/sets.css";

export default function Sets() {
  const [setsData, setSetsData] = useState([]);
  // const [seriesData, setSeriesData] = useState({});
  let url = `https://api.pokemontcg.io/v2/sets?orderBy=set,-releaseDate`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 400) throw new Error("Error getting data");
        return response.json();
      })
      .then((data) => {
        setSetsData(data.data);
        console.log("sets data", data.data[0].series);
      })
      .catch((error) => {
        console.error({ error });
      });
  }, [url]);

  // empty array of allseries
  //for every set in data do this:
  //if set.series doesn't exist in allseries yet, then:
  //  create array of all sets that share this particular series
  // push a new object to all series with two props:
  //   "series" which is just the value of set.series
  //  "sets" the filtered array you created 3 lines up

  let newSeries = [];

  for (const x of setsData) {
    console.log("this is x", x);
    console.log("this is x.series", x.series);
    // looking for a double negative
    // ! means not
    // find((s) => s.series === x.series) finds the match returning true
    // by me adding ! to the front says if its not true ie don't find a match run the block
    if (!newSeries.find((s) => s.series === x.series)) {
      newSeries.push({
        series: x.series,
        sets: setsData.filter((s) => s.series === x.series),
      });
    }
  }

  console.log("this is newSeries", newSeries);
  return (
    <div className="sets-container">
      {newSeries.map((set, index) => {
        return (
          <div key={index} className="set-container">
             <p className="set-title">{set.series}</p>
             
            {set.sets.map((eachSet) => {
              return (
                <div className="set-content">
                  <figure className="figure-img">
                    <img
                      src={eachSet.images.logo}
                      alt="pokemon-logo"
                      className="sets-img"
                    />
                  </figure>
                  <div className="set-middle">
                    <figure className="figure-logo">
                      <img
                        src={eachSet.images.symbol}
                        alt="pokemon-symbol"
                        className="set-logo"
                      />
                    </figure>
                    <div className="set-middle-column">
                      <p className="battle">{eachSet.name}</p>
                      <p className="released">Released {eachSet.releaseDate}</p>
                    </div>
                  </div>
                  <div className="set-legal">
                    <ul className="legalities-style">
                      <li>Standard {eachSet.legalities.standard}</li>
                      <li>Expanded {eachSet.legalities.expanded}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
