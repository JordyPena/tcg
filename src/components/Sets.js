import { useState, useEffect } from "react";
import "../styling/sets.css";
import Set from "../components/Set";
import Footer from "../components/Footer";
export default function Sets({ match }) {
  const [setsData, setSetsData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [seriesData, setSeriesData] = useState({});
  let url = `https://api.pokemontcg.io/v2/sets?orderBy=set,-releaseDate`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        setLoading(true);
        if (response.status === 400) throw new Error("Error getting data");
        return response.json();
      })
      .then((data) => {
        setSetsData(data.data);
        setLoading(false);
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

  return (
    <div className="sets-container">
      {loading && <h2>Loading....</h2>}
      {newSeries.map((set, index) => {
        return (
          <div key={index}>
            <h1 className="set-title">{set.series}</h1>
            <div className="set-container">
              {set.sets.map((eachSet, index) => {
                return <Set eachSet={eachSet} key={index} match={match} />;
              })}
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
