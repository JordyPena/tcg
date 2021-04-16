import { useState, useEffect } from "react";
import "../styling/sets.css";
export default function Sets() {
  const [ setsData, setSetsData ] = useState([])

  let url = `https://api.pokemontcg.io/v2/sets`

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 400) 
        throw new Error("Error getting data")
        return response.json()
      })
      .then((data) => {
        setSetsData(data.data)
        console.log("sets data", data.data)
      })
      .catch((error) => {
        console.error({error})
      })
  }, [url])

  return (
    <div className="sets-container">
      {setsData.map((set, index) => {
        return (
          <div key={index} className="set-container">
            <div className="set-content">
              <figure>
                <img src={set.images.logo} alt="pokemon-logo" className="set-img"/>
              </figure>
              <div className="set-middle">
                <figure className="figure-logo">
                  <img src={set.images.symbol} alt="pokemon-symbol" className="set-logo"/>
                </figure>
                  <div className="set-middle-column">
                    <p>{set.name}</p>
                    <p>Released {set.releaseDate}</p>
                </div>
              </div>
              <div className="set-legal">
                <ul>
                  <li>Standard {set.legalities.standard}</li>
                  <li>Expanded {set.legalities.expanded}</li>
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}